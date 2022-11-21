/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onSelected = event => {
    this.setState({activeId: event.target.value})
  }

  onCountry = () => {
    const {activeId} = this.state
    const activeItem = countryAndCapitalsList.find(each => each.id === activeId)
    return activeItem.country
  }

  render() {
    const {activeId} = this.state
    const country = this.onCountry()
    return (
      <div className="outer">
        <div className="inner">
          <h1>Countries and Capitals</h1>
          <div className="drop-down">
            <select id="capital" onChange={this.onSelected} value={activeId}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capital"> is capital of which country?</label>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
// Write your code here
