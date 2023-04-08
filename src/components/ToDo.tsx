import { FC, MouseEvent } from "react"
import { IToDo } from "../interfaces"
interface Props {
    todo: IToDo
    todos: IToDo[]
    setTodos: React.Dispatch<React.SetStateAction<IToDo[]>>
}

const ToDo: FC<Props> = ({ todo, todos, setTodos }: Props) => {
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        is_done: !item.is_done,
                    }
                }
                return item
            })
        )
    }

    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
    }

    return (
        <li className={`task ${todo.is_done ? "task--completed" : ""}`}>
            <p className="task__name">{todo.name}</p>
            <button onClick={completeHandler} className="task__button task__done">
                {todo.is_done ? "Revert" : "Done"}
            </button>
            <button onClick={deleteHandler} className="task__button task__remove">
                Remove
            </button>
        </li>
    )
}

export default ToDo
