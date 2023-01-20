import '../App.css'
import React, {useState} from 'react'
import {Questions} from '../helpers/Questions'
import {useContext} from 'react'
import {GameStateContext} from '../helpers/Contexts'



function Quiz(){

    const {score, setScore, gameSt, setGameSt} = useContext(GameStateContext)
    const [ques, setQues] = useState(0)
    const [selected, setSelected] = useState("")

    const chooseOP= (option) => {
        setSelected(option)
    }

    const nextQues = () => {
        if(Questions[ques].correct_answer === selected){
            //console.log('correct answer')
            setScore(score+10)
        }
        // else{
        //     //console.log('wrong answer mehhh')
        // }

        setQues(ques+1);
    }

    const FinishQuiz = () => {
        if(Questions[ques].correct_answer === selected){
            //console.log('correct answer')
            setScore(score+10)
        }

        setGameSt('finished')
    }

    return (
        <div className='Quiz'>
            <h1>{Questions[ques].question}</h1>
            <div className="answers">
                <button onClick={()=>chooseOP('answer_a')}>{Questions[ques].answers.answer_a}</button>
                <button onClick={()=>chooseOP('answer_b')}>{Questions[ques].answers.answer_b}</button>
                <button onClick={()=>chooseOP('answer_c')}>{Questions[ques].answers.answer_c}</button>
                <button onClick={()=>chooseOP('answer_d')}>{Questions[ques].answers.answer_d}</button>
            </div>
            {
                ques===Questions.length-1 ? (
                    <button onClick={()=>FinishQuiz()}>Finish Quiz</button>
                ) :
                (
                    <button onClick={()=>nextQues()}>Next Question</button>
                )
            }
            
        </div>
    )
}

export default Quiz