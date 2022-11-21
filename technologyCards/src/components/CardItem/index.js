// import {className} from 'postcss-selector-parser'
import './index.css'
// Write your code here.

const CardItem = props => {
  const {user} = props
  const {title, description, imgUrl, className} = user
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}
export default CardItem
