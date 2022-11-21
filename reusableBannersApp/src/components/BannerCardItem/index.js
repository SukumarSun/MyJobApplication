// Write your code here.o
import './index.css'
// import {className} from 'postcss-selector-parser'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show more</button>
      </div>
    </li>
  )
}
export default BannerCardItem
