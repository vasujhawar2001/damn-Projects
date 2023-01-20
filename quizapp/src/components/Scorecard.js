import React from "react";
import '../App.css'
import {useContext} from 'react'
import {GameStateContext} from '../helpers/Contexts'
import { Questions } from "../helpers/Questions";

const Scorecard = () => {
    const {score, setScore, gameSt, setGameSt, user} = useContext(GameStateContext)

    const restartQuix = () => {
        setScore(0);
        setGameSt("menu")
    }
    return (
        <div className="scorecard">
            <h1>Hey, {user}</h1>
            <h1>Happy Quizing - Keep Practising Linux</h1>
            <h1>{score} / {(Questions.length) * 10}</h1>
            <button onClick={()=> restartQuix()}>Restart Quiz</button>
        </div>
    )
}

export default Scorecard