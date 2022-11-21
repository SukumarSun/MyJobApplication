/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unused-state */
/* eslint-disable camelcase */
// home
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// eslint-disable-next-line no-unused-vars
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {latestMatch: [], bannerUrl: '', recentMatchInfo: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatch()
  }

  getTeamMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const rawTeamMatch = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const midTeamMatch = await rawTeamMatch.json()
    console.log(midTeamMatch)
    this.setState({
      latestMatch: midTeamMatch.latest_match_details,
      bannerUrl: midTeamMatch.team_banner_url,
      recentMatchInfo: midTeamMatch.recent_matches,
      isLoading: false,
    })
  }

  render() {
    const {latestMatch, bannerUrl, isLoading, recentMatchInfo} = this.state

    return (
      <div className="team-match-outside">
        {isLoading ? (
          <div testid="loader">
            <Loader type="oval" color="#00BFBFBF" width={80} height={80} />
          </div>
        ) : (
          <div className="team-match-inside">
            <img className="banner" src={bannerUrl} alt="team banner" />
            <LatestMatch eachDetails={latestMatch} />
            <div className="unorder-personal">
              <ul className="match-unorder">
                {recentMatchInfo.map(each => (
                  <MatchCard key={each.id} eachRecentDetails={each} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
