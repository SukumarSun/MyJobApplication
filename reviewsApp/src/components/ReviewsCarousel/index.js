/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  rightClick = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prev => ({activeIndex: prev.activeIndex + 1}))
    }
  }

  leftClick = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prev => ({activeIndex: prev.activeIndex - 1}))
    }
  }

  renderItem = itemDetails => {
    const {imgUrl, username, companyName, description} = itemDetails
    return (
      <div className="box">
        <img className="image" alt={username} src={imgUrl} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const currentReviewItem = reviewsList[activeIndex]
    return (
      <div className="outer">
        <div className="inner">
          <h1>Reviews</h1>
          <div className="carousal">
            <button
              onClick={this.leftClick}
              className="but"
              testid="leftArrow"
              type="button"
            >
              <img
                className="arrow"
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>

            {this.renderItem(currentReviewItem)}
            <button
              onClick={this.rightClick}
              className="but"
              testid="rightArrow"
              type="button"
            >
              <img
                className="right"
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
