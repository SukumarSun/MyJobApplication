// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, deleteUser} = props
  const {title, id} = details

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li>
      <div className="box">
        <p>{title}</p>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
