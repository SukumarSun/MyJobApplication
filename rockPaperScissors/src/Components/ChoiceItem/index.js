import './index.css'

const ChoiceItem = props => {
  const {details, onSelect} = props
  const {imageUrl, test, id} = details

  const nowSelected = () => {
    onSelect(id)
  }

  return (
    <li className="eachlist">
      <button
        className="eachBut"
        data-testid={test}
        type="button"
        onClick={nowSelected}
      >
        <img className="eachimg" src={imageUrl} alt={id} />
      </button>
    </li>
  )
}

export default ChoiceItem
