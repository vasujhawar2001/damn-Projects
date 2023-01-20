import './App.css';
import React, {useState, useEffect} from 'react';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((response)=>response.json())

function App() {
  
  const [gameTl, setGameTl] = useState("");
  const [searchedGames, setSG] = useState([])
  // const [gamedeals, setgamedeals] = useState([]) // no need if we already extracting datya through SWR
  
  const {data, error} = useSWR("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=5", fetcher );

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTl}&limit=5`)
    .then((response)=>response.json())
    .then((data=>{
      setSG(data)
    }))
  };

  // useEffect(() => {
  //   fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=5`).then((response)=>response.json())
  //   .then((data=>{setgamedeals(data)}))
  // }, []);

  return (
    <div className="App">
      <div className='searchdiv'>
        <h1>Search For A Game !</h1>
        <input type='text' placeholder="Minecraft.." onChange={(e)=>{ setGameTl(e.target.value)}} />
        <button onClick={searchGame}>Search Game Title</button>
        <div className='games'>
          {
            searchedGames.map((game,key) =>{
              return (
                <div className='game' key={key}>
                  {game.external}
                  <img src={game.thumb} />
                  {game.cheapest}
                </div>
              )
            })
          }
        </div>
      </div>
        <div className='dealsdiv'>
          <h1>Latest Deals <span role="img" aria-label="fire emoji"> 🔥 </span></h1>
          <div className='games'>
          {data && data.map((game,key)=> {
            return (
              <div className="game" id="deals" key={key}>
                <h3>{game.title}</h3>
                <p>Normal Price: {game.normalPrice}</p>
                <p>SALE Price: {game.salePrice}</p>
                <h4>YOU SAVE {game.savings.substr(0,2)}%</h4>
              </div>
            )
          })}
          </div>
        </div>
    </div>
  );
}

export default App;
