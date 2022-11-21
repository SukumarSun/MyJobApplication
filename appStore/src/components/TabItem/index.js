// Write your code here
import './index.css'

const TabItem = props => {
  const {key, TabDetails, onTab} = props
  const {tabId, displayText} = TabDetails

  const onTabSelected = () => {
    onTab(tabId)
  }

  return (
    <li className="list-tab">
      <button onClick={onTabSelected} type="button">
        <p className="displayText">
          <u>{displayText}</u>
        </p>
      </button>
    </li>
  )
}

export default TabItem
