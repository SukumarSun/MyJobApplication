// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {itemDetails, onNew, isActive} = props
  const {thumbnailAltText, thumbnailUrl, id} = itemDetails

  const thumbnailClassName = isActive ? 'active_image' : 'image'

  const onButtonClicked = () => {
    onNew(id)
  }
  return (
    <li className="list">
      <button className="button" type="button" onClick={onButtonClicked}>
        <img
          className={thumbnailClassName}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
