// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {sum: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      sum: prevState.sum + Math.floor(Math.random() * 101),
    }))
  }

  render() {
    const {sum} = this.state
    return (
      <div>
        <h1>{`count ${sum}`}</h1>
        {sum % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
        <button type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
