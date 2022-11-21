import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="head-link">
      <Link to="/">
        <img
          className="header-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
      </Link>
      <ul className="head-mid">
        <li className="mid-link">
          <Link className="each-mid" to="/">
            Home
          </Link>
        </li>

        <li className="mid-link">
          <Link className="each-mid" to="/jobs">
            Jobs
          </Link>
        </li>
      </ul>
      <button onClick={onLogout} className="logout" type="button" alt="logout">
        <li>Logout</li>
      </button>
    </div>
  )
}

export default withRouter(Header)
