/* eslint-disable react/no-unused-state */
// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsedInSecs: 0}

  clearTimer = () => {
    clearInterval(this.timerId)
  }

  convertToPattern = () => {
    const {timeElapsedInSecs} = this.state
    const hoursCalculated = Math.floor(timeElapsedInSecs / 60)
    const secondsCalculated = Math.floor(timeElapsedInSecs % 60)
    const hoursFinal =
      hoursCalculated < 10 ? `0${hoursCalculated}` : hoursCalculated
    const secsFinal =
      secondsCalculated < 10 ? `0${secondsCalculated}` : secondsCalculated

    return `${hoursFinal}:${secsFinal}`
  }

  startSeconds = () => {
    this.setState(prev => ({timeElapsedInSecs: prev.timeElapsedInSecs + 1}))
  }

  onStart = () => {
    // const {timeElapsedInSecs, isStarted} = this.state
    this.timerId = setInterval(this.startSeconds, 1000)
  }

  onStop = () => {
    this.clearTimer()
  }

  onReset = () => {
    this.setState({timeElapsedInSecs: 0})
    this.clearTimer()
  }

  render() {
    return (
      <div className="outer">
        <div className="inner">
          <h1>Stopwatch</h1>
          <div className="box">
            <div className="timer-head">
              <img
                alt="timer-head"
                alt="stopwatch"
                className="timer-head-img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p>Timer</p>
            </div>
            <h1>{this.convertToPattern()}</h1>
            <div className="but-box">
              <button
                onClick={this.onStart}
                className="but green"
                type="button"
                alt="start"
              >
                Start
              </button>
              <button onClick={this.onStop} className="but red" type="button">
                Stop
              </button>
              <button
                onClick={this.onReset}
                className="but orange"
                type="button"
                alt="reset"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
