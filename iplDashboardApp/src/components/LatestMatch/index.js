/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// Write your code
import './index.css'

const LatestMatch = props => {
  const {eachDetails} = props

  const {
    competing_team,
    competing_team_logo,
    date,
    first_innings,
    id,
    man_of_the_match,
    match_status,
    result,
    second_innings,
    umpires,
    venue,
  } = eachDetails
  return (
    <div className="outside-latest">
      <div className="left-latest">
        <p className="each">{competing_team}</p>
        <p className="each">{date}</p>
        <p className="each">{venue}</p>
        <p className="each">{result}</p>
      </div>
      <img
        alt={`latest match ${competing_team}`}
        className="c-team-logo"
        src={competing_team_logo}
      />
      <div className="right left-latest">
        <h1 className="each">First Innings</h1>
        <p className="each">{first_innings}</p>
        <h1 className="each">Second Innings</h1>
        <p className="each">{second_innings}</p>
        <h1 className="each">Man Of The Match</h1>
        <p className="each">{man_of_the_match}</p>
        <h1 className="each">Umpires</h1>
        <p className="each">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
