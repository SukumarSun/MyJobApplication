/* eslint-disable react/no-unknown-property */
// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamcardlist()
  }

  getTeamcardlist = async () => {
    const rawTeamcardlist = await fetch('https://apis.ccbp.in/ipl')
    const midTeamcardlist = await rawTeamcardlist.json()
    // console.log(midTeamcardlist.teams)
    const updatedTeamcardlist = midTeamcardlist.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImgUrl: each.team_image_url,
    }))
    this.setState({teamCardList: updatedTeamcardlist, isLoading: false})
    // console.log(updatedTeamcardlist[0])
  }

  render() {
    const {teamCardList, isLoading} = this.state

    return (
      <div className="match-inside">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="red" width={150} height={150} />
          </div>
        ) : (
          <>
            <div className="logo-box">
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <div className="test-bottom">
              <ul className="unordered">
                {teamCardList.map(each => (
                  <TeamCard key={each.id} cardDetails={each} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Home
