// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onReturn} = props
  const {value} = denominationDetails

  const nowonReturn = () => {
    onReturn(value)
  }
  return (
    <li className="list">
      <button className="but" type="button" onClick={nowonReturn}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
