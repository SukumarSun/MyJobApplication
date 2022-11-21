/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import {Component} from 'react'
import {v4 as uniqId} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    inputList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onType = event => {
    this.setState({optionId: event.target.value})
  }

  onDoFunction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeInput = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )

    const {displayText} = typeInput
    const newItem = {
      id: uniqId(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prev => ({
      inputList: [...prev.inputList, newItem],
      amountInput: '',
      titleInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getBalance = () => {
    const {inputList} = this.state
    let expenditureAmount = 0
    let incomeAmount = 0
    let balanceAmount = 0

    inputList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      } else {
        expenditureAmount += each.amount
      }
    })
    balanceAmount = incomeAmount - expenditureAmount

    return balanceAmount
  }

  getExpenditure = () => {
    const {inputList} = this.state
    let expenditureAmount = 0
    inputList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenditureAmount += each.amount
      }
    })
    return expenditureAmount
  }

  getIncome = () => {
    const {inputList} = this.state
    let incomeAmount = 0
    inputList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      }
    })
    return incomeAmount
  }

  onDelete = id => {
    const {inputList} = this.state
    const finalList = inputList.filter(each => each.id !== id)
    this.setState({inputList: finalList})
  }

  render() {
    const {titleInput, amountInput, optionId, inputList} = this.state
    const balance = this.getBalance()
    const expenditure = this.getExpenditure()
    const income = this.getIncome()

    return (
      <div className="outside">
        <div className="inside">
          <div className="welcome">
            <h1 className="head">Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
            <div className="money-details">
              <MoneyDetails
                key="abc"
                balanceAmount={balance}
                expenditureAmount={expenditure}
                incomeAmount={income}
              />
            </div>
          </div>
          <div className="bottom">
            <form onSubmit={this.onDoFunction} className="transaction-box">
              <h1>Add transaction</h1>
              <label className="label-font" htmlFor="title">
                TITLE
              </label>
              <input
                value={titleInput}
                onChange={this.onTitle}
                id="title"
                type="text"
              />
              <label className="label-font" htmlFor="amount">
                AMOUNT
              </label>
              <input
                value={amountInput}
                onChange={this.onAmount}
                id="amount"
                type="text"
              />
              <label className="label-font" htmlFor="select">
                TYPE
              </label>
              <select
                id="select"
                onChange={this.onType}
                value={optionId}
                className="drop-down"
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button className="click-button" type="submit">
                Add
              </button>
            </form>
            <div className="history">
              <h1 className="history-block-head">History</h1>
              <ul className="unordered">
                <li className="table-header">
                  <p className="history-title">Title</p>
                  <p className="history-title">Amount</p>
                  <p className="history-title">Type</p>
                </li>
                {inputList.map(eachItem => (
                  <TransactionItem
                    onDelete={this.onDelete}
                    key={eachItem.id}
                    transactionDetails={eachItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

// Write your code here
