// Write your JS code here
// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {inputList: [], isLoading: true}

  componentDidMount() {
    this.getCryptolist()
  }

  getCryptolist = async () => {
    const raw = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const mid = await raw.json()
    console.log(mid)
    this.setState({inputList: mid, isLoading: false})
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {inputList, isLoading} = this.state
    return (
      <div className="outer-box">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Plane" color="red" width={80} height={80} />
          </div>
        ) : (
          <div className="inner-box">
            <h1>Cryptocurrency Tracker</h1>
            <img
              alt="cryptocurrency"
              className="top-img"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <ul className="unorder">
              <div className="b">
                <div className="menu">
                  <div className="left-heading">
                    <h3 className="a">Coin</h3>
                    <h3 className="a">Type</h3>
                  </div>
                  <div className="right-heading">
                    <h3 className="a">USD</h3>
                    <h3 className="a">EURO</h3>
                  </div>
                </div>
                {inputList.map(each => (
                  <CryptocurrencyItem key={each.id} details={each} />
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
