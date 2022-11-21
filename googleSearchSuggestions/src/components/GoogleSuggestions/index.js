// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchText: '',
  }

  updateSearchInput = value => {
    this.setState({searchText: value})
  }

  onSearch = event => {
    this.setState({searchText: event.target.value})
  }

  render() {
    const {searchText} = this.state
    const {suggestionsList} = this.props
    const newList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchText.toLowerCase()),
    )

    // console.log(suggestionsList)
    return (
      <div className="outside">
        <div className="inside">
          <img
            className="google"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="bottom">
            <div className="google-search">
              <img
                className="search"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="input"
                onChange={this.onSearch}
                type="search"
                placeholder="Search Google"
                value={searchText}
              />
            </div>
            <div>
              <ul>
                {newList.map(each => (
                  <SuggestionItem
                    updateSearchInput={this.updateSearchInput}
                    itemDetails={each.suggestion}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
