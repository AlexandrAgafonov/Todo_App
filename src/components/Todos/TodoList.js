import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length>0? (todos.map((todo, index) => <Todo key={index} todo={todo} />)):(<h2>Todo list is empty</h2>)}
    </div>
  )
}

export default TodoList
