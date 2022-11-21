import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-total">
    <Header />
    <div className="home-outside">
      <div className="left">
        <h1 className="home-head">Find The Job That Fits Your Life</h1>
        <p className="info">
          Millions of people are searching for jobs,salaries,information.Find
          the job that best suits you.Millions of people are searching for
          jobs,salaries,information.Find the job that best suits you
        </p>
      </div>
      <Link to="/jobs">
        <button type="button" className="find-jobs">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default Home
