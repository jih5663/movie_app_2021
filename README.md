<h3># 장인혁 201840131<h3>
<br>



## [ 11월 03일 ]
<br>
# 영화 제목 출력하기


 ```javascript
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
 ```

- props값으로 받아온 영화데이터를 span태그를 사용해 출력 및 만들어준다.
- location.state가 없으면 render함수가 null을 반환

> App.js에 Route컴포넌트 추가  
```javascript
import Detail from "./routes/Detail";
<Route path="/movie-detail" component={Detail} />;

```
> Movie.js에 Link컴포넌트 추가
```javascript
<Link to={{ pathname: "/movie-detail", state: { year, title, summary, poster, genres } }}>
```
> 리다이렉트 기능 만들어 보기  

• 리다이렉트 기능을 사용하기 위해서는 route props의 history 키를 활용해야 한다.  
• history키에는 push, go, goBack, goForward와 같은 키가 있으며, 그 키에는 URL을 변경해 주는함수들이 있다.   
• 이 함수들을 이용해서 리다이렉트 기능을 구현한다.
> History 키 살펴보기    

• 주소창에 localhost:3000을 입력해서 이동한 다음 아무 영화나 눌러 이동한다.  
• console에서 history에 출력된 값을 확인한다.  
• 액션03에서는 componentDidMount() 생명주기 함수를 사용해 Detail 컴포넌트가 마운트될 때push()함수를 실행하도록 한다.






-----



## [ 10월 27일 ]
<br>
# 영화 앱에 여러가지 기능 추가하기

- About.js의 내용 수정
 ```javascript
import './About.css'

function About(props) {
  console.log(props);
  return (
    <div className="about-container">
    <span>
    Freedom is the freedom to sat that two ake four. If that is granted, all else follws."
    </span>
    <span>- George Orwell,,1984(/span)
  )
}
 ```

- 자바스크립트 slice함수를 사용해 summary의 문자열을
0번째부터 180번째 까지 자른 내용만 보여주게 만들어준다.
```javascript
<p className="movie-summary">{summary.slice(0, 180)}...</p>
```
- About 컴포넌트 내보내기  
```javascript
function About() {
  return <span>About Component.</span>;
}
export default About;
```
> 메뉴를 클릭하면 화면이 이동할 수 있도록 라우터 사용
- react-router-dom 설치하기  
- components 폴더에 Movie 컴포넌트 옮기기
- routes 폴어게 라우터가 보여줄 화면 만들기
- Home.js 수정하기
- Home.css 생성 / App.js 수정
- routes , components 폴더 생성
- Movie.js / Movie.css 파일 components폴더에 넣기
- routes폴더에 About.js, Home.js, Home.css 생성
- App.js 폴더의 모든 내용을 Home.js에 붙여넣기
- App.js 기존 내용 삭제 후 route실습

```javascript
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```
- router사용 후 주소에 hash(#)가 나타나는 현상 없애려면    
HashRouter 대신 BrowserRouter사용하기




-----



## [ 10월 13일 ]
<br>
# 영화 앱 만들기

- css 적용 전 prop 값 html태그로 묶어주기
```javascript
function Movie({ id, year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie-data">
        <h3 class="movie-title">{title}</h3>
        <h5 class="movie-year">{year}</h5>
        <p class="movie-summary">{summary}</p>
      </div>
    </div>
  );
}
```
- Movie영화 데이터 정의,관리를 위해 prop types를 사용  
```javascript
> import PropTypes from'prop-types';  
funtion Movies(){  
    return <h1><h2>;  
}  
Movie.propTypes = {};  
export defalut Movie;
```
##영화장르 출력하기
- Movie컴포넌트에서 장르를 출력하도록 코드를 수정한다.  
- genres props가 배열이므로 map()함수를 사용한다.
- genres props를 ul, li 태그로 감싸서 출력한다.
- console을 확인하면 kye props가 없다는 메시지가 나온다.
```javascript
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie-data">
        <h3 className="movie-title">{title}</h3>
        <h5 className="movie-year">{year}</h5>
        <ul className="movie-genres">
          {genres.map(genre => {
            return <li>{genre}</li>;
          })}
        </ul>
        <p className="movie-summary">{summary}</p>
      </div>
    </div>
  );
}
```



##li tag에 key props 추가하기

-  장르에는 key값으로 사용하기에 적당한 id값 같은 것이 없다. 
-  이럴 경우 새롭게 만들에 내야 하는데, map()함수에는 2번째 매개변수를 지정할 경우 배열의 index
값을 반환해 주는 기능이 있다. 
-  이것을 이용해서 배열의 인덱스를 key props로 활용하는 것이다. 
-  console을 확인해 본다.


```javascript
<ul className="movie__genres">
    {genre.map((genre,index) => {
        return (
            <li key={index}className="movie__genre">
            {genre}
            </li>
        );
    })}
</ul>
```

-----
   
   

   



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
