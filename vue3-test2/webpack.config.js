// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')

// export
module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    /** import를 할 때, .js, .vue 확장자가 없어도 문제없이 빌드할 수 있도록
        돕는 설정. */
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
    /** 경로 별칭(alias) 
     *  ./ ../ 와 같은 상대경로를 입력하지 않고 ~(경로명)과 같이 입력하여
     * 해당의 경로로 바로 점프하여 import하기 위한 설정.
    */
  },

  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './src/main.js', /** vue프로젝트에서는 경로가 변경됨. */

  // 결과물(번들)을 반환하는 설정
  output: {
    // path, filename은 dist, main.js로 디폴트 설정이 되어있다.

    // path: path.resolve(__dirname, 'dist'), 
    // webpack을 동작시켰을 때의 결과물을 내어주기 위한 경로의 설정
    // 여기서 경로는 node.js에서의 절대경로를 필요로 함.
    /* __dirname은 현재의 파일이 있는 경로를 지칭함.
       resolve함수를 이용하여 2개의 경로 __dirname과 dist 경로를 합쳐준다. */
    // filename: 'main.js', // 위에서 내어주는 결과물을 entry에서 읽어들이는 main.js로 설정
    clean: true
    /** path, filename을 변경하고 빌드를 할 때마다, 
     * 빌드된 폴더, 파일이 생성되고 그대로 남아있게 되는데, 
     * clean 설정을 이용하여 이전에 빌드된 파일,폴더들을 제거해준다. */
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },/** vue 확장자를 가진 파일을 해석하기 위한 설정 */
      
      {
        test: /\.s?css$/, // .css 확장자로 끝나는 파일을 찾는 정규식
        // ? 정규식 : 앞의 s가 있을수도 있고 없을수도 있는 경우
        use: [
          // 선언 순서가 중요!!
          
          // 'vue-style-loader',
          /** App.vue와 같은 파일에서 style이라는 태그로 css를 작성한 코드를
           * 해석하기 위한 설정
          */
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
        /** 위의 use에서 먼저 해석되는 로더는 css-loader이다. 
         *  js에서 css파일을 읽어올 때, js에서는 css 파일을 해석할 수 없기 때문에
         *  css 파일을 해석하기 위해 css-loader를 사용한다.
         *  해석된 css 파일을 index.html에 삽입해주는 역할을 하는 로더가
         *  style-loader이다.
         *  위에서 선언하는 순서는 style-loader를 먼저 선언한 이후에,
         *  css-loader를 선언해주어야 한다.
         * 
         * 
         * main.scss의 코드 내용을 sass-loader를 이용하여 해석한다.
         * 해석한 내용을 postcss-loader를 이용하여 공급 업체 접두사를 적용한다.
         * postcss-loader를 이용하여 postcss에 대한 플러그인을 사용한다.
         * 그 다음으로 css-loader를 이용하여 css로 읽어들인다. 
        */
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
        /** webpack에서 babel에 대한 내용을 해석할 수 있도록 하기 위한 설정.
         *  .js로 끝나는 파일들을 webpack에서 babel-loader로 읽어들이서 babel이 
         *  적용될 수 있도록 한다.
         */
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
      /** 이미지 파일을 vue 파일에서 읽기 위한 설정. */
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    /** entry에서 main.js 파일을 읽어들이고 이에 대한 결과를 output에 반환한다.
        이 과정에서 plugins에 명시되어져 있는 플러그인을 활용한다.
        여기서는 HtmlPlugin으로 템플릿을 위의 경로에 있는 index.html 파일로 지정한 것이다.
        결과적으로 entry에서의 main.js와 plugins에서의 index.html을 병합하여
        output인 dist 경로에 만들어준다. 
    */
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    /** static 폴더 안에 들어있는 파일들이 복사가 되어 dist 폴더로 들어갈 수 있도록
     *  하는 플러그인 설정.
     *  'from'을 이용하여 static 폴더뿐만 아니라, 여러개의 경로를 명시할 수 있다.
     */
    new VueLoaderPlugin()
    /** vue-loader에 대한 플러그인 설정 */
  ], 

  // devServer: {
  //   host: 'localhost'
  // } // 기본적인 웹주소가 터미널에서 정상적으로 나타나지 않는 경우에 사용.
}