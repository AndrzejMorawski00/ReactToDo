import { FC } from "react"
//Components
import ToDo from "./ToDo"
import { IToDo } from "../interfaces"

interface Props {
    todos: IToDo[],
    setTodos: React.Dispatch<React.SetStateAction<IToDo[]>>,
}

const ToDoList:FC<Props> = ({ todos, setTodos }:Props) => {
    console.log(todos);
    return (
        <ul className="tasks">
            {todos.map((todo) => (
                <ToDo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            ))}
        </ul>
    )
}

export default ToDoList
