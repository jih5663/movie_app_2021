import Potato from "./Potato";

const foodLike = [
  {
    name:'chikin',
    image:'http://jangdokfood.com/wp-content/uploads/2019/05/%EC%96%91%EB%85%90%EC%B9%98%ED%82%A8-768x496.jpg'
  },

  {
    name:'ham',
    image:'https://cdn.eyesmag.com/content/uploads/posts/2020/09/28/fast-food-franchises-serve-hamburger-without-tomatoes-01-52f4f2a6-a73a-4abc-ba3c-419ee2660639.jpg'

  }
 
]

function renderFood(foo) {
  return <Food name={foo.name} picture={foo.image}/>
}


function App() {
  return (
    <div>
      {
        foodLike.map(renderFood)
      }

    </div>
  );
}

function Food({name,picture}) {
  //console.log(props);
  return(
    <div>
    <h3>I love {name}</h3>
    <img src={picture}/>
    </div>
  );
}

export default App;