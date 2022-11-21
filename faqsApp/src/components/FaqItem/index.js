// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {details} = this.props
    const {answerText} = details
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  isClicked = () => {
    this.setState(prev => ({isActive: !prev.isActive}))
  }

  render() {
    const {details} = this.props
    const {questionText, answerText} = details
    const {isActive} = this.state
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
    const altText = isActive ? 'minus' : 'plus'
    const ans = isActive ? {answerText} : null

    return (
      <li className="list-item">
        <div className="box">
          <h1>{questionText}</h1>
          <button type="button" onClick={this.isClicked} className="but">
            <img alt={altText} className="but-img" src={imgUrl} />
          </button>
        </div>
        <p>{ans}</p>
      </li>
    )
  }
}

export default FaqItem
