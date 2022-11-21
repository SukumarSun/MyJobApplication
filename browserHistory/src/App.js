/* eslint-disable react/no-unescaped-entities */
import {Component} from 'react'
import HistoryItem from './components/HistoryItem'
import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  state = {searchInput: '', HistoryList: initialHistoryList}

  onFilter = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {HistoryList} = this.state
    const DeletedList = HistoryList.filter(each => each.id !== id)
    this.setState({HistoryList: DeletedList})
  }

  renderAvailable = () => {
    const {searchInput, HistoryList} = this.state
    const filteredList = HistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        <ul className="unordered">
          {filteredList.map(each => (
            <HistoryItem
              onDelete={this.onDelete}
              historyDetails={each}
              key={each.id}
            />
          ))}
        </ul>
      </>
    )
  }

  renderUnAvailable = () => (
    <div className="unavailable">
      <p>There is no history to show</p>
    </div>
  )

  render() {
    const {searchInput, HistoryList} = this.state
    const filteredList = HistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const container =
      filteredList.length === 0
        ? this.renderUnAvailable()
        : this.renderAvailable()
    console.log(filteredList)
    return (
      <div className="inner">
        <div className="menu">
          <div className="logo-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logo"
            />
          </div>
          <div className="search-grow">
            <div className="search-box">
              <div className="search-img-personal">
                <img
                  alt="search"
                  className="search-img"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                />
              </div>
              <input
                className="search-input search-box"
                type="search"
                alt="search"
                placeholder="search history"
                value={searchInput}
                onChange={this.onFilter}
              />
            </div>
          </div>
        </div>
        <div className="bottom">{container}</div>
      </div>
    )
  }
}
export default App
