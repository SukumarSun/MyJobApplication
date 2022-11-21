// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    banana: 0,
    mango: 0,
  }

  onBanana = () => {
    // const {banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  onMango = () => {
    // const {mango} = this.state
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {banana, mango} = this.state

    return (
      <div className="container">
        <div className="outer">
          <h1 className="head">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="now">
            <div className="block">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <button className="but" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="block">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <button className="but" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
