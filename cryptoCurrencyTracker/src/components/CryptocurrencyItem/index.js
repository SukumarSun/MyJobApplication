/* eslint-disable camelcase */
// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currency_name, usd_value, euro_value, currency_logo} = details
  return (
    <li className="list-outer">
      <div className="currency-logo-box">
        <img className="logo" src={currency_logo} alt={currency_name} />
        <p>{currency_name}</p>
      </div>
      <div className="euro">
        <p className="para">{usd_value}</p>
        <p className="para">{euro_value}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
