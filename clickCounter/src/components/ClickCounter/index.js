// Write your code here
import {Component} from 'react'

class ClickCounter extends Component {
  state = {times: 0}

  clickMe = () => {
    this.setState(prevState => ({times: prevState.times + 1}))
  }

  render() {
    const {times} = this.state
    return (
      <div className="container">
        <h1>The Button has been clicked {times} times</h1>
        <p>Click the button to increase the count!</p>
        <button onClick={this.clickMe}>Click Me</button>
      </div>
    )
  }
}
export default ClickCounter
