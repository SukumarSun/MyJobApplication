// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="menu">
    <div className="logo-box">
      <img
        className="logo"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="wave">Wave</h1>
    </div>
    <ul className="unordered">
      <li className="each">
        <Link to="/">Home</Link>
      </li>

      <li className="each">
        <Link to="/about">About</Link>
      </li>
      <li className="each">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)
export default Header
