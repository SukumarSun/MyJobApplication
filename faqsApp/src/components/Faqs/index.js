// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="outside">
      <div className="inside">
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem key={each.id} details={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
