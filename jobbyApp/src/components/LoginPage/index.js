import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginPage extends Component {
  state = {username: '', password: '', errorStatus: false, errorMsg: ''}

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 60})
    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({errorStatus: true, errorMsg})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userinput = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userinput),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  render() {
    const {username, errorStatus, errorMsg, password} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="outside">
        <div className="inside">
          <form className="login-box" onSubmit={this.onLogin}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="login-logo"
              alt="website logo"
            />
            <div className="each-input">
              <label className="each-label" htmlFor="username">
                USERNAME
              </label>
              <input
                id="username"
                placeholder="Username"
                className="enter"
                onChange={this.onUsername}
                type="text"
                value={username}
              />
            </div>
            <div className="each-input">
              <label className="each-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                id="password"
                className="enter"
                onChange={this.onPassword}
                type="password"
                value={password}
              />
            </div>
            <button className="login" type="submit">
              Login
            </button>
          </form>
          {errorStatus && <p className="error">*{errorMsg}</p>}
        </div>
      </div>
    )
  }
}

export default LoginPage
