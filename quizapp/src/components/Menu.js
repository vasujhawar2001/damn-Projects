import React from 'react'
import '../App.css';
import {useContext} from 'react'
import {GameStateContext} from '../helpers/Contexts'

function Menu(){
    const {gameSt, setGameSt, user, setUser} = useContext(GameStateContext)
    return (
        <div className='Menu'>
            <input type="text" placeholder="Ex. Elon Musk" onChange={(e)=>setUser(e.target.value)} />
            <button onClick={()=>setGameSt('playing')}>Start Quiz</button>
        </div>
    )
}

export default Menu