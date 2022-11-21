// Write your code here

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {actual: 2000}

  onReturn = value => {
    this.setState(prevState => ({
      actual: prevState.actual - value,
    }))
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {denominationsList} = this.props
    const {actual} = this.state
    return (
      <div className="outer">
        <div className="inner">
          <div className="logo">
            <button type="button" className="logo-btn">
              S
            </button>
            <p>Sarah Williams</p>
          </div>
          <div className="balance">
            <p>Your Balance</p>
            <div className="rupees">
              <p>{actual}</p>
              <p>Rupees</p>
            </div>
          </div>
          <div className="bottom">
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="menu">
            {denominationsList.map(each => (
              <DenominationItem
                onReturn={this.onReturn}
                key={each.id}
                denominationDetails={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
