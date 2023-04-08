import { FC, ChangeEvent, MouseEvent } from "react"

import { IToDo } from "../interfaces"

interface Props {
    todos: IToDo[]
    setTodos: React.Dispatch<React.SetStateAction<IToDo[]>>
    inputText: string
    setInputText: React.Dispatch<React.SetStateAction<string>>
    counter: number
}

const Input = ({ todos, setTodos, inputText, setInputText, counter }: Props) => {
    const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    const submitToDoHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (inputText !== "") {
            setTodos(todos => [...todos, { id: Math.round(Math.random() * 100_000_000), name: inputText, is_done: false }])
            setInputText("")
        }
    }

    const deleteTasksHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setTodos([])
    }

    return (
        <div className="header">
            <h1 className="header__h1">ToDo List</h1>

            <div className="input">
                <input value={inputText} onChange={inputTextHandler} type="text" className="input__input" maxLength={35} />
                <button onClick={submitToDoHandler} className="header__button input__button">
                    Add
                </button>
            </div>
            <div className="remove">
                <button onClick={deleteTasksHandler} className="header__button remove__remove">
                    Remove all
                </button>
            </div>

            <p className="header__paragraph">Tasks Left: {counter}</p>
        </div>
    )
}

export default Input
