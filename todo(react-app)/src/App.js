import './App.css';
import React, {useState, useRef, useEffect} from 'react'

function App() {

  const [todo, setTodo] = useState([])
  const [Task, setTask] = useState("")

  const [color, setColor] = useState(false)

  useEffect(()=> {

  }, [])

  const inputTask = useRef(null)

  const deleteTask = (tasktodel) => {
    setTodo(todo.filter((task)=>{
      return task !== tasktodel
    }))
  }

  function EnterKeyCheck(e){
    if(e.keyCode=== 13){
      createtodo()
    }
  }
  const createtodo = ()=>{
    setTodo([...todo, Task])
    inputTask.current.value =""
    setTask("")
  }


  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div id="header">
          <input ref={inputTask} onKeyDown={EnterKeyCheck} type="text" placeholder="Task..." onChange={(e)=> {setTask(e.target.value)}}/>
          <button id="addtask" onClick={createtodo}>Add Task</button>
      </div>
      <hr />
      <ul>
        {todo.map((value, key)=> {
          return (
            <div className='task'>
                <li 
                id="litask"
                onClick={(color)=> setColor(!color) }  
                style={{background: color ? 'red' : 'green'}}
                key={key}>
                {value}</li>
                <button id="delete" onClick={()=>
                  deleteTask(value)}> X </button>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
