// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: false}

  toggleClick = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const newClassname = isClicked ? 'Dark_Mode' : 'Light_Mode'
    const buttonText = isClicked ? 'Dark Mode' : 'Light Mode'
    return (
      <div className={`container ${newClassname}`}>
        <h1>Click to Change Mode</h1>
        <button type="button" onClick={this.toggleClick}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
