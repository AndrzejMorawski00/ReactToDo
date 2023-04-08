import { useState, useEffect, FC } from "react"
import "./App.css"
import { IToDo } from "./interfaces"

//Components

import Input from "./components/Input"
import ToDoList from "./components/ToDoList"


const App = () => {
    //Use State
    const [todos, setTodos] = useState<IToDo[]>([])
    const [inputText, setInputText] = useState("")
    const [counter, setCounter] = useState(0)

    //Events
    const countTasks = () => {
        setCounter(todos.filter((todo) => todo.is_done !== true).length)
    }

    //Use Effect
    useEffect(() => {
        countTasks()
    }, [todos])

    return (
        <div className="App">
            <Input todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} counter={counter} />
            <ToDoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default App
