/* eslint-disable react/no-unknown-property */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'

const x = [
  {
    title: 'Your Balance',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
  },
  {
    title: 'Your Income',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
  },
  {
    title: 'Your Expenses',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
  },
]

const MoneyDetails = props => {
  const {expenditureAmount, incomeAmount, balanceAmount} = props

  return (
    <ul className="money-unordered-list">
      <li className="list">
        <img className="logo" alt="balance" src={x[0].imgUrl} />
        <div className="title-box">
          <p className="para">{x[0].title}</p>
          <p className="para" testid="balanceAmount">
            {balanceAmount}
          </p>
        </div>
      </li>
      <li className="list">
        <img className="logo" alt="income" src={x[1].imgUrl} />
        <div className="title-box">
          <p className="para">{x[1].title}</p>
          <p className="para" testid="incomeAmount">
            {incomeAmount}
          </p>
        </div>
      </li>
      <li className="list">
        <img className="logo" alt="expenses" src={x[2].imgUrl} />
        <div className="title-box">
          <p className="para">Your Expenses</p>
          <p className="para" testid="expensesAmount">
            {expenditureAmount}
          </p>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
