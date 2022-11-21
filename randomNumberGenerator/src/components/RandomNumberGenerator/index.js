// Write your code here

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  onGenerate = () => {
    const misc = Math.floor(Math.random() * 100)
    this.setState({random: misc})
  }

  render() {
    const {random} = this.state
    return (
      <div>
        <h1>Random Number</h1>
        <p>Generate a Random number in the range of 0 to 100</p>
        <button type="button" onClick={this.onGenerate}>
          Generate
        </button>
        <p>{random}</p>
      </div>
    )
  }
}
export default RandomNumberGenerator
