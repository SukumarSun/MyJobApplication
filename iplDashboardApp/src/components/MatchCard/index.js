/* eslint-disable camelcase */
// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachRecentDetails} = props
  const {
    competing_team,
    competing_team_logo,
    match_status,
    result,
  } = eachRecentDetails

  return (
    <li className="card-outer-ring">
      <img
        className="card-img"
        src={competing_team_logo}
        alt={`competing team ${competing_team}`}
      />
      <p className="card-each">{competing_team}</p>
      <p className="card-each">{match_status}</p>
      <p className="card-each">{result}</p>
    </li>
  )
}
export default MatchCard
