/* eslint-disable camelcase */
import {Link} from 'react-router-dom'
import './index.css'

const JobItem = props => {
  const {jobDetails} = props
  const {
    company_logo_url,
    employment_type,
    job_description,
    location,
    package_per_annum,
    rating,
    id,
    title,
  } = jobDetails
  return (
    <div className="each-tab-list">
      <Link className="each-tab-link" to={`/jobs/${id}`}>
        <div className="tab-outside">
          <div className="tab-top">
            <img
              className="each-tab-logo"
              alt="company logo"
              src={company_logo_url}
            />
            <div className="tab-top-inside">
              <h3>{title}</h3>
              <h3 className="tab-rating">{rating}</h3>
            </div>
          </div>
          <div className="tab-mid">
            <div className="tab-mid-inside">
              <p className="tab-mid-para">{location}</p>
              <p>{employment_type}</p>
            </div>
            <p>{package_per_annum}</p>
          </div>
          <hr className="hor-line" />
          <div className="tab-bottom">
            <h1>Description</h1>
            <p className="tab-description">{job_description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default JobItem
