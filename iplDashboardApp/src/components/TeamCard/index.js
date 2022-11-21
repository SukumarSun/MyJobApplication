// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {name, id, teamImgUrl} = cardDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamcard-list">
        <img src={teamImgUrl} alt={name} className="teamImg" />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
