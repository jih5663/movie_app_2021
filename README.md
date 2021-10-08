<h3># 장인혁 201840131<h3>
<br>

## [ 10월 06일 ]
<br>
##영화 앱 만들기

-  axios설치하기<br>
```
> npm install axios
```
-  노머드 코더 영화 API사용<br>
- YTS의 endpoint /list_movies.json을 사용하려면 yts-proxy.now.sh에 /list_movies.json을 붙이
면 된다<br>

- **주소창에 yts-proxy.now.sh/movie_details.json라고 접속하면 아무 것도 출력되지 않는다. • API가 movie_id라는 조건을 요구하기 때문이다.** 
<br>

> importPropTypes from'prop-types';를 app.js파일 맨위 추가
------
##axios의 동작 확인

-  getMovies()함수를 만들고, 이 함수 안에서 axios.get()이 실행하도록 한다.
-  axios.get()의 return값은 movies에 저장한다.
-  componentDidMount()함수가 실행되면 this.getMovie()가 실행된다
-  이때 자바스크립트에게 getMovies()함수는 시간이 필요하다는 것을 알려야 하는데 이때 사용되는
것이 async, await 이다.

- ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약할 수 있다. 
- this.setState({ movies: movies })를 this.setState({ movies })로 수정한다
```javascript
this.seTState({movies:movies})
this.setState({movies})
```

-----


<br>
<br>
<br>
<br>




## [ 09월 29일 ]
<br>
##컴포넌트 만들기

-  prop-type설치하기<br>
```
> npm install prop-types
```
-  정상설치여부확인<br>
**> packe.json파일을 열어depencies키에 있는 값보고**<br>
**> prop-types가 등록되어 있으면 설치가정상적으로 된 것**<br>
**> importPropTypes from'prop-types';를 app.js파일 맨위 추가**
------
##state와 클래스형 컴포넌트

-  props는 정적인 데이터만 다룰 수 있다.
-  정상설치여부확인
-  state는 동적인 데이터를 다루기 위해 사용된다.
-  기존의 App.js는 04-App.js로 이름을 바꾸고 새로운 App.js 파일을 생성한다.

- 클래스형 컴포넌트는 render()함수가 JSX를 반환한다.
```javascript
import React, {component}from 'react'
class App extends Conponent {

}
export dafault App
```

-----


<br>
<br>
<br>
<br>



[ 09월 15일 ]

<br>

>수업 정리
 
 <h2>##JSX<h2>

 
 <br>(1) 컴포넌트는 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용해서 만든다.
 <br>(2) JSX의 문법은 JS와 HTML 문법의 조합한 것으로 사용하다 보면 자연스럽게 익힐 수 있다.
 <br>#크롬개발자 도구의 elemant탭-> 컴포넌트 JSX가 리액트에서 동작하는 방식임을 이해하기
<br> -Potato.js 파일 삭제하고 App.js파일에서 Potato의 Import구문 삭제하기(실습진행)
<br> App.js파일에 Potatot라는 것이 정의되지 않으면 컴파일 실패 
<br> 해결방법은 외부에 컴포넌트를 만들 떄 동일한 내용으로 내부에 작성하면 됨.

<br>
<h3>##비슷한 컴포넌트 여러개 만들기<h3>
<br>- 효율적으로 컴포넌트를 출력하는 방법에 대하여 알아보기
<br>작성했던 App.js파일을 다시 열어 코드가 효율적인이 확인
<br>

<br>#Food 컴포넌트에 음식 이미지 출력하기
<br>- 만들어두었던 name 대신 Food에 <img> tag 추가
<br>- index.js파일 살펴보기
<br>- renderFood()함수를 화살표 함수로 정의하기
<br> ->const  renderFood = dish => <Food name={dish.name} picture={dish.image} />;
<br>

[ 09월 08일 ]

<br>

>오늘배운내용 요약
 <br><h2>리액트를 활용하여 클론 코딩하기<h2>

 
 <br>※보일러 플레이트는 오래전 신문사에서 계속 반복적으로 사용되는 
 <br> 문구나 광고등을 부드러운 납 대신 강철로 찍기시작한데서 유래되었고 
 <br> 최소한의 변경으로 여러 곳에서 재사용이 가능한 코드를 '보일러 플레이트 코드'라고 부른다.
<br> 한마디로 별다른 개발환경 구축없이 편하게 개발을 할 수 있게 도와주는 구조작업,설정작업
<br> 을 진행해주는 도구!

<br>
<h3>리액트 앱 만들기<h3>
<br>- movie_app_2021 폴더생성 후 보기
<br>
-package.json파일 수정(test,ehect삭제)_<br>
-npm start<br>
<br>- 깃허브에 저장소만들고 리액트 앱 업로드
<br>- app.js 파일수정 하고 리액트 앱 살펴보기
<br>- index.js파일 살펴보기
<br>
Potato함수 작성하고 JSX반환! -> index.js 파일 원래대로 돌려놓고 Potato삭제
<br>app.js 파일 수정하기
<br>
# <h1>>>커밋을 좀 더 습관적으로 주기적으로 하는 버릇들이기<h1>
