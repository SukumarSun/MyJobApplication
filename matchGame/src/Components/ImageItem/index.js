import './index.css'

const ImageItem = props => {
  const {imageDetails, clickandCheck} = props
  const {thumbnailUrl, id} = imageDetails

  const onCheck = () => {
    clickandCheck(id)
  }

  return (
    <li className="imageList">
      <button className="imagebutton" type="button" onClick={onCheck}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
