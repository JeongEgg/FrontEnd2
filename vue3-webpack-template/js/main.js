/** build를 고려할 때에는 plugin 설정에서 copy 설정이 적용되도록 하기 위해,
 *  css 폴더를 static의 경로에 넣어주어야 한다. 그러나 그렇게 하지 않고, 현재와 같이
 *  css를 루트 경로에 생성하고 css파일을 main.js 파일에 연결시켜줄 수 있다.
 *  entry를 통해 main.js로 진입할 때, 여기서 css를 import하여 결과적으로 build할 때에도
 *  css를 함께 빌드시킬 수 있다.
 * 
 *  한가지 문제는 webpack에서는 기본적으로는 css를 읽을 수 없다. css를 읽어들일 수 있도록
 *  패키지를 추가하여야 한다.
*/
import '../scss/main.scss' //main.js에서 css 폴더를 찾으려면 js 폴더에서 한번 밖으로 나가야 한다.

console.log('Webpack!')