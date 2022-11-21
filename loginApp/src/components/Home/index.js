// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {click: false}

  nowChange = () => {
    this.setState(prevState => ({click: !prevState.click}))
  }

  render() {
    const {click} = this.state

    const headText = click ? 'Welcome User' : 'Please Login'

    const buttonText = click ? 'logout' : 'login'

    return (
      <div>
        <h1>{headText}</h1>
        <button type="button" onClick={this.nowChange}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Home
