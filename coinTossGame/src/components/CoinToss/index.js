// Write your code here
import {Component} from 'react'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossImg: headImgUrl, head: 0, tail: 0}

  onTossCoin = () => {
    const {head, tail} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let resultImg = ''
    let headCount = head
    let tailCount = tail
    if (tossResult === 0) {
      headCount += 1
      resultImg = headImgUrl
    } else {
      tailCount += 1
      resultImg = tailImgUrl
    }
    this.setState({
      tossImg: resultImg,
      head: headCount,
      tail: tailCount,
    })
  }

  //   renderHead = () => (
  //     <img
  //       alt="toss result"
  //       src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
  //     />
  //   )

  //   renderTail = () => (
  //     <img
  //       alt="toss result"
  //       src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
  //     />
  //   )

  render() {
    const {tossImg, head, tail} = this.state
    const total = head + tail
    // const image = isheads ? this.renderHead() : this.renderTail()
    return (
      <div className="outer">
        <div className="inner">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img alt="toss result" src={tossImg} />
          <button type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <p>
            Total:{total} ,Heads:{head}.Tails:{tail}
          </p>
        </div>
      </div>
    )
  }
}

export default CoinToss
