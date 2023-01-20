import './App.css';
import Menu from './components/Menu.js'
import Quiz from './components/Quiz.js'
import {useState} from 'react'
import {GameStateContext} from './helpers/Contexts'
import Scorecard from "./components/Scorecard"

// gameSt ---> [menu, playing, finished]

function App() {
  const [gameSt, setGameSt] = useState('menu')
  const [user, setUser] = useState('')
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      <GameStateContext.Provider value={{gameSt, setGameSt, user, setUser, score, setScore}}>
      {gameSt==='menu' && <Menu />}
      {gameSt==='playing' && <Quiz />}
      {gameSt==='finished' && <Scorecard />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
