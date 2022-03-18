//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './components/pokemons.jsx'

//import { useState } from "react"

const init_state = [
  {
      "abilities":[
          {
              "name":"limber"
          },
          {
              "name":"imposter"
          }
      ],
      "base_experience":101,
      "height":3,
      "id":132,
      "name":"ditto",
      "weight": 40,
      "types":[
          {
              "name":"normal"
          }
      ]
  },
  {
      "abilities":[
          {
              "name":"overgrow"
          },
          {
              "name":"chlorophyll"
          }
      ],
      "base_experience":64,
      "height":7,
      "id":132,
      "name":"bulbasaur",
      "weight": 69,
      "types":[
          {
              "name":"grass"
          },
          {
              "name":"poison"
          }
      ]
  },
  {
      "abilities":[
          {
              "name":"blaze"
          },
          {
              "name":"solar-power"
          }
      ],
      "base_experience":62,
      "height":6,
      "id":4,
      "name":"charmander",
      "weight": 85,
      "types":[
          {
              "name":"fire"
          }
      ]
  },
  {
      "abilities":[
          {
              "name":"run-away"
          },
          {
              "name":"guts"
          },
    {
              "name":"hustle"
          }
      ],
      "base_experience":62,
      "height":7,
      "id":20,
      "name":"raticate",
      "weight": 185,
      "types":[
          {
              "name":"normal"
          }
      ]
  },
{
      "abilities":[
          {
              "name":"shield-dust"
          },
          {
              "name":"run-away"
          }
      ],
      "base_experience":39,
      "height":3,
      "id":10,
      "name":"caterpie",
      "weight": 29,
      "types":[
          {
              "name":"bug"
          }
      ]
  },
{
      "abilities":[
          {
              "name":"swarm"
          },
          {
              "name":"sniper"
          }
      ],
      "base_experience":178,
      "height":10,
      "id":15,
      "name":"beedrill",
      "weight": 295,
      "types":[
          {
              "name":"bug"
          },
    {
              "name":"poison"
          }
      ]
  }

]

function App() {
  // const [fruitList, setFruitList] = useState(['apple', 'watermelon', 'banana'])
  const [pokemonList, setPokemonList] = useState(init_state);
  const [name, setName] = useState('');
  useEffect(() => {}, [pokemonList])

  const handlePokemon = () => {
    // debugger;
    let temp = [...pokemonList];

    if(name.length){
      temp.push({name});
      setPokemonList(temp);
      // setPokemonList([]);

      alert(`Número de pokemons: ${temp.length}`);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form>
          <label>Nombre del pokemon:</label>
          <input type= 'text' value={name} onChange={({target}) => setName(target.value)}/>
          <button onClick={handlePokemon}>
            Agregar pokemon
          </button>
        </form>
        
      {
        pokemonList.map(pokemon => (
          <Pokemon {...pokemon} />
        ))
      }
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
