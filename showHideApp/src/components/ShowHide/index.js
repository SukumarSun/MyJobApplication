// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstNameHidden: true,
    secondNameHidden: true,
  }

  onFirst = () => {
    this.setState(prevState => ({firstNameHidden: !prevState.firstNameHidden}))
  }

  onSecond = () => {
    this.setState(prevState => ({
      secondNameHidden: !prevState.secondNameHidden,
    }))
  }

  render() {
    const {firstNameHidden, secondNameHidden} = this.state
    return (
      <div>
        <h1>ShowHide</h1>
        <div className="inside">
          <div>
            <button type="button" onClick={this.onFirst}>
              Show/Hide FirstName
            </button>
            {firstNameHidden ? null : <p>Joe</p>}
          </div>
          <div>
            <button type="button" onClick={this.onSecond}>
              Show/Hide LastName
            </button>
            {secondNameHidden ? null : <p>Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
