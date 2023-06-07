import Todo from './Todo'

export default function TodoList(props) {
    const { todos, deleteTodo, toggleTodo } = props

    return (
        <div>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                ))
            ) : (
                <h2>Todo list is empty</h2>
            )}
        </div>
    )
}
