/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ChoiceItem from './Components/ChoiceItem'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    test: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    test: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    test: 'paperButton',
  },
]

class App extends Component {
  state = {
    you: '',
    rule: false,
    started: false,
    result: '',
    opponent: '',
    score: 0,
  }

  getOpponent = () => {
    const x = Math.floor(Math.random() * choicesList.length)
    const opposite = choicesList[x].id
    this.setState({opponent: opposite}, this.getResult)
  }

  onSelect = id => {
    this.setState({you: id, started: true})
    this.getOpponent()
  }

  onPlayAgain = () => {
    this.setState({started: false})
  }

  renderBottom = () => (
    <div className="bottom">
      <ul className="gameUnorder">
        {/* <ChoiceItem onSelect={this.onSelect} choicesList={choicesList} /> */}
        {choicesList.map(each => (
          <ChoiceItem onSelect={this.onSelect} details={each} key={each.id} />
        ))}
      </ul>
    </div>
  )

  getResult = () => {
    const {you, opponent} = this.state
    console.log({you}, {opponent})
    if (
      (you === 'ROCK' && opponent === 'SCISSORS') ||
      (you === 'SCISSORS' && opponent === 'PAPER') ||
      (you === 'PAPER' && opponent === 'ROCK')
    ) {
      this.setState(prev => ({
        score: prev.score + 1,
        result: 'YOU WON',
      }))
    } else if (you === opponent) {
      this.setState({result: 'IT IS DRAW'})
    } else {
      this.setState(prev => ({
        score: prev.score - 1,
        result: 'YOU LOSE',
      }))
    }
  }

  renderScoreCard = () => {
    const {you, result, opponent} = this.state
    const youItem = choicesList.find(each => each.id === you)
    const oppItem = choicesList.find(each => each.id === opponent)
    const youUrl = youItem.imageUrl
    const oppUrl = oppItem.imageUrl

    return (
      <div className="outerOutput">
        <div className="output">
          <div className="out">
            <h4>YOU</h4>
            <img className="outImg" alt="your choice" src={youUrl} />
          </div>
          <div className="out">
            <h4>OPPONENT</h4>
            <img className="outImg" alt="opponent choice" src={oppUrl} />
          </div>
        </div>
        <p>{result}</p>
        <button className="play" onClick={this.onPlayAgain} type="button">
          Play Again
        </button>
      </div>
    )
  }

  onRules = () => {
    this.setState({rule: true})
  }

  onClose = () => {
    this.setState({rule: false})
  }

  render() {
    const {score, rule, started} = this.state
    const watrender = started ? this.renderScoreCard() : this.renderBottom()
    return (
      <div className="outside">
        {/* {rule && (
          <div>
            <img
              alt="rules"
              className="rule"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            />
            <button type="button" className="close" onClick={this.onClose}>
              X
            </button>
          </div>
        )} */}
        <div className="inside">
          <h1 className="mainhead">Rock Paper Scissors</h1>
          <div className="navbar">
            <div className="rocksection">
              <p>ROCK</p>
              <p>PAPER</p>
              <p>SCISSORS</p>
            </div>
            <div className="scoresection">
              <p>Score</p>
              <p className="famil">{score}</p>
            </div>
          </div>
          {watrender}
          <div className="rules">
            <Popup
              trigger={<button type="button">Rules</button>}
              position="right center"
            >
              <div>
                <img
                  alt="rules"
                  className="rule"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </div>
            </Popup>
            {/* <button onClick={this.onRules} type="button">
              RULES
            </button> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App
