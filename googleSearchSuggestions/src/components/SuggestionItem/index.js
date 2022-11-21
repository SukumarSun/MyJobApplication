// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {updateSearchInput, itemDetails} = props
  const suggestion = itemDetails
  console.log({itemDetails})

  const onUpdate = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list">
      <p>{suggestion}</p>
      <button className="but" type="button" onClick={onUpdate}>
        <img
          className="arrow"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
