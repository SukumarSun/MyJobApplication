import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="each">
      <div className="block">
        <p className="font time">{timeAccessed}</p>
        <div className="block-inside">
          <div className="block-inside-left">
            <div className="logo-img-personal">
              <img className="logo-img" alt="domain logo" src={logoUrl} />
            </div>

            <p className="font">{title}</p>
            <p className="domainUrl font">{domainUrl}</p>
          </div>
          <div className="delete-img-personal">
            <button type="button" onClick={onClickDelete} testid="delete">
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
                className="delete-img"
                // eslint-disable-next-line react/no-unknown-property
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
export default HistoryItem
