import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

export default function TodoForm(props) {
    const { addTodo } = props

    const [text, setText] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (text !== '') {
            addTodo(text)
            setText('')
        } else {
            alert('Enter todo name')
        }
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    placeholder="Enter a new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button title="Create new todo">Create</Button>
            </form>
        </div>
    )
}
