// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, author, avatarUrl, title, imageUrl, topic} = details

  return (
    <Link className="link" to={`/blogs/${id}`}>
      <li className="list-item">
        <img alt={title} className="left-img" src={imageUrl} />
        <div className="right">
          <p>{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avathar-block">
            <img alt="avathar" src={avatarUrl} className="avathar-img" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
