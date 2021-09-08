# 장인혁 201840131

[ 09월 08일]

<br>

>오늘배운내용 요약
 <br>

 ※. express 모듈
 <br>-expreess모듈을 사용하는 방법을 이해합니다.
 <br>-요청과 응답
 <br>-express모듈을 사용한 서버생성과 실행
<br>-페이지라우팅
<br>-요청과 응답
<br>-미들웨어

<br>
<h3>＃express모듈 설치<h3>
//$npm install express@4<br>
<br>
요청하는 대상은 클라이언트<br>
응답하는 대상은 서버<br>
<br>
<br>
#response 객체
<br>
send()데이터 본문제공<br>
status()상태 코드를 제공
set()헤더를 설정합니다.
<br>
<br>
<h3>#상태코드<h3><br>
//모듈 추출합니다.
const express = require('express');
<br>
//서버생성<br>
const app = express();<br><br>
//request 이벤트 리스너를 설정<br><br>
//request 이벤트 리스너를 설정<br><br>
app.get('*',(request,response)=> {<br>response.status(404);<br>
response.send('해당경로에는 아무것도 없습니다.');});
<br><br>
//서버실행<br>
app.listen(522273, () => {<br>
    console.log('server running at http://127.0.0.1:52273');});<br><br>
#어려웠던 부분 : 미들웨어의 속성,<br>클라이언트-> 서버데이터 전송법
<br>
<br>