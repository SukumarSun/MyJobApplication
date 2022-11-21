// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {itemDetails, onStar} = props
  const {id, title, date, isStarred} = itemDetails
  const imageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onstarClicked = () => {
    onStar(id)
  }

  return (
    <li className="list">
      <div className="top-list">
        <p>{title}</p>
        <button
          // eslint-disable-next-line react/no-unknown-property
          testid="star"
          onClick={onstarClicked}
          className="star-button"
          type="button"
        >
          <img className="image" alt="star" src={imageUrl} />
        </button>
      </div>
      <p>{date}</p>
    </li>
  )
}

export default AppointmentItem
