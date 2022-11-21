/* eslint-disable no-unused-vars */
// Write your code here

import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {limitInminutes: 25, timeElaspedInSecs: 0, isStarted: false}

  //   componentWillUnmount() {
  //     this.clearTimerInterval()
  //   }

  clearTimerInterval = () => clearInterval(this.timerId)

  onIncrease = () => {
    this.setState(prev => ({limitInminutes: prev.limitInminutes + 1}))
  }

  onDecrease = () => {
    const {limitInminutes} = this.state

    if (limitInminutes > 1) {
      this.setState(prev => ({limitInminutes: prev.limitInminutes - 1}))
    }
  }

  incrementTimeElaspedInSeconds = () => {
    const {limitInminutes, timeElaspedInSecs} = this.state
    const isTimerCompleted = timeElaspedInSecs === limitInminutes * 60

    if (isTimerCompleted) {
      this.clearTimerInterval()
      this.setState({isStarted: false})
    } else {
      this.setState(prevState => ({
        timeElaspedInSecs: prevState.timeElaspedInSecs + 1,
      }))
    }
  }

  onStart = () => {
    const {limitInminutes, timeElaspedInSecs} = this.state
    const timerCompleted = limitInminutes * 60 === timeElaspedInSecs
    if (timerCompleted) {
      this.setState({timeElaspedInSecs: 0})
    }
    this.timerId = setInterval(this.incrementTimeElaspedInSeconds, 1000)

    this.setState(prevState => ({isStarted: !prevState.isStarted}))
  }

  onPause = () => {
    const {isStarted} = this.state
    this.clearTimerInterval()

    this.setState(prev => ({isStarted: !prev.isStarted}))
  }

  //   onStartOrPauseTimer = () => {
  //     const {isStarted, timeElaspedInSecs, limitInminutes} = this.state
  //     const isTimerCompleted = timeElaspedInSecs === limitInminutes * 60

  //     if (isTimerCompleted) {
  //       this.setState({timeElaspedInSecs: 0})
  //     }
  //     if (isStarted) {
  //       this.clearTimerInterval()
  //     } else {
  //       this.timerId = setInterval(this.incrementTimeElaspedInSeconds, 1000)
  //     }
  //     this.setState(prevState => ({isStarted: !prevState.isStarted}))
  //   }

  onReset = () => {
    this.clearTimerInterval()
    this.setState({limitInminutes: 25, timeElaspedInSecs: 0, isStarted: false})
  }

  startedFunction = () => (
    <>
      <button type="button" onClick={this.onStart} className="icon-btn">
        <img
          className="icon"
          alt="play icon"
          src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
        />
        <p>Start</p>
      </button>
    </>
  )

  pausedFunction = () => (
    <>
      <button type="button" onClick={this.onPause} className="icon-btn">
        <img
          className="icon"
          alt="pause icon"
          src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
        />
        <p>Pause</p>
      </button>
    </>
  )

  convertToMin = () => {
    const {limitInminutes, timeElaspedInSecs, isStarted} = this.state
    const timeAvailInSecs = limitInminutes * 60 - timeElaspedInSecs
    const min = Math.floor(timeAvailInSecs / 60)
    const sec = Math.floor(timeAvailInSecs % 60)
    const minString = min < 10 ? `0${min}` : min
    const secString = sec < 10 ? `0${sec}` : sec

    return `${minString}:${secString}`
  }

  render() {
    const {limitInminutes, timeElaspedInSecs, isStarted} = this.state
    const fill = isStarted ? this.pausedFunction() : this.startedFunction()
    const status = isStarted ? 'running' : 'paused'
    const isButtonsDisabled = timeElaspedInSecs > 0
    return (
      <div className="outside">
        <h1 className="head">Digital Timer</h1>
        <div className="inside">
          <div className="timer">
            <div className="timer-inside">
              <div className="timer-core">
                <h1 className="time-para">{this.convertToMin()}</h1>
                <p className="time-pause">{status}</p>
              </div>
            </div>
          </div>
          <div className="timer-box">
            <div className="top">
              <div className="block">{fill}</div>
              <div className="block">
                <button
                  type="button"
                  onClick={this.onReset}
                  className="icon-btn"
                >
                  <img
                    className="icon"
                    alt="reset icon"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                  />
                  <p>Reset</p>
                </button>
              </div>
            </div>
            <div className="bottom">
              <p>Set Timer limit</p>
              <div className="timer-count">
                <button
                  onClick={this.onDecrease}
                  type="button"
                  disabled={isButtonsDisabled}
                  className="regulate"
                >
                  -
                </button>

                <p className="count">{limitInminutes}</p>
                <button
                  onClick={this.onIncrease}
                  type="button"
                  disabled={isButtonsDisabled}
                  className="regulate"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
