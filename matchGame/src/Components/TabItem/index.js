import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onTab} = props
  const {tabId, displayText} = tabDetails

  const onclickTab = () => {
    onTab(tabId)
  }

  const font = isActive ? 'red actualfont' : 'actualfont'

  return (
    <li onClick={onclickTab} className="tabList">
      <button type="button" className={font}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
