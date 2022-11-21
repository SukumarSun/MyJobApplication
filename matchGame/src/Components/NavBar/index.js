import './index.css'

const NavBar = props => {
  const {score, secRem} = props

  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="rightbox">
        <li className="each">
          <p>Score:{score}</p>
        </li>
        <li className="timerbox each">
          <img
            alt="timer"
            className="timerimg"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p>{secRem} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
