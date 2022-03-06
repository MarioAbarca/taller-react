//import logo from './logo.svg';
import './App.css';
import Pokemon from './components/pokemons.jsx'
//import { useState } from "react"

function App() {
  // const [fruitList, setFruitList] = useState(['apple', 'watermelon', 'banana'])

  return (
    <div className='App'>
      <header className='App-header'>
        <Pokemon name='Pikachu' />
      </header>
    </div>

    /* //   <body>
    //     {fruitList.map((fruit) => (
    //       <>{fruit}</>
    //     ))}

    //     <button onClick={()=> {
    //       setFruitList([...fruitList, "guaba"]);
    //     }}>Click me!!</button>
    //   </body>
    // </div>     */
  );
}

export default App;
