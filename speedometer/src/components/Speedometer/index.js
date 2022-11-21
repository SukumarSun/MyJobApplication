import {Component} from 'react'

import './index.css'
// import {className} from 'postcss-selector-parser'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h1 className="head">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="but-box">
          <button className="but" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="but" type="button" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
