/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDelete} = props
  const {id, type, amount, title} = transactionDetails

  const onDeleteNow = () => {
    onDelete(id)
  }

  return (
    <li className="transactionList">
      <p className="each">{title}</p>
      <p className="each">{amount}</p>
      <p className="each">{type}</p>
      <button
        type="button"
        testid="delete"
        onClick={onDeleteNow}
        className="del"
      >
        <img
          alt="delete"
          className="del-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
        />
      </button>
    </li>
  )
}

export default TransactionItem
