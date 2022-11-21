import {Component} from 'react'
import './index.css'
import {v4 as uniqid} from 'uuid'
import CommentItem from '../CommentItem'

// eslint-disable-next-line
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameInput: '',
    // eslint-disable-next-line react/no-unused-state
    like: false,
    commentInput: '',
    count: 0,
    commentDetailsList: [],
  }

  onNameChange = event => {
    this.setState({nameInput: event.target.value})
  }

  onCommentChange = event => {
    this.setState({commentInput: event.target.value})
  }

  onLike = id => {
    this.setState(prevState => ({
      commentDetailsList: prevState.commentDetailsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, like: !eachContact.like}
        }
        return eachContact
      }),
    }))
  }

  onDelete = id => {
    const {commentDetailsList} = this.state
    const afterDeletedList = commentDetailsList.filter(each => each.id !== id)
    this.setState(prev => ({
      count: prev.count - 1,
      commentDetailsList: afterDeletedList,
    }))
  }

  onSubmit = () => {
    const {nameInput, count, commentInput, commentDetailsList} = this.state
    const newItem = {
      count,
      id: uniqid(),
      nameInput,
      commentInput,
      like: false,
    }

    this.setState(prev => ({
      commentDetailsList: [...prev.commentDetailsList, newItem],
      count: commentDetailsList.length + 1,
      nameInput: '',
      commentInput: '',
    }))
  }

  render() {
    const {nameInput, count, commentInput, commentDetailsList} = this.state
    return (
      <div className="outer">
        <div className="inner">
          <h1 className="app-heading">Comments</h1>
          <div className="top">
            <form className="comment-section">
              <p>Say something about 4.0 Technologies</p>
              <input
                onChange={this.onNameChange}
                value={nameInput}
                type="search"
                placeholder="Your Name"
              />
              <textarea
                onChange={this.onCommentChange}
                value={commentInput}
                cols="8"
                rows="8"
                placeholder="Your Comment"
              >
                hi
              </textarea>
              <button onClick={this.onSubmit} className="but" type="button">
                Add Comment
              </button>
            </form>
            <img
              className="comment-img"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
          <div className="bottom">
            <div className="bottom-head-block">
              <button type="button" className="count-btn">
                {count}
              </button>
              <h1 className="bottom-head">Comments</h1>
            </div>
            <div className="addComment">
              <ul className="unordered">
                {commentDetailsList.map(each => (
                  <CommentItem
                    key={each.id}
                    onLike={this.onLike}
                    onDelete={this.onDelete}
                    commentDetails={each}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
// Write your code here
