// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, onDelete, onLike} = props
  const {like, id, nameInput, commentInput} = commentDetails

  const onclickLike = () => {
    onLike(id)
  }

  const onclickDelete = () => {
    onDelete(id)
  }
  const likeUrl = like
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list">
      <div className="top-outer">
        <div className="top-inner">
          <div className="top-input">
            <p className="font">{nameInput}</p>
            <p className="font">{commentInput}</p>
          </div>
          <p>{formatDistanceToNow(new Date())}</p>
        </div>
      </div>

      <div className="likeDelete">
        <button onClick={onclickLike} type="button">
          <img alt="like" src={likeUrl} />
        </button>
        <button testid="delete" type="button" onClick={onclickDelete}>
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
