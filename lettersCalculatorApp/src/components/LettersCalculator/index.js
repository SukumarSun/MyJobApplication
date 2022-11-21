// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {number: 0}

  onCountletter = event => {
    const letter = event.target.value
    const len = letter.length
    if (letter !== ' ') {
      this.setState({number: len})
    }
  }

  render() {
    const {number} = this.state
    return (
      <div className="outer">
        <div className="inner">
          <div className="left">
            <h1>Calculate the Letters you enter</h1>
            <div className="text-box">
              <label htmlFor="enter">Enter the phrase</label>
              <input
                className="input"
                type="text"
                id="enter"
                onChange={this.onCountletter}
              />
            </div>
            <button className="but" type="button">
              <p>No.of letters: {number}</p>
            </button>
          </div>
          <img
            className="right"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
