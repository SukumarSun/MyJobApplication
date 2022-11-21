// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    clicked: true,
  }

  onNew = () => {
    this.setState(prevState => ({clicked: !prevState.clicked}))
  }

  renderUnClicked = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul className="main">
          {emojis.map(each => (
            <li key={each.id} className="list-items">
              <button type="button">
                <img alt={each.name} src={each.imageUrl} onClick={this.onNew} />
                <p>{each.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderClicked = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div>
        <img alt="love emoji" src={loveEmojiUrl} />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {clicked} = this.state
    return (
      <div className="outside">
        <div className="inside">
          {clicked ? this.renderUnClicked() : this.renderClicked()}
        </div>
      </div>
    )
  }
}

export default Feedback
