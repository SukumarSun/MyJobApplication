/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import '../JobItem/index.css'

const SimilarItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {similarDetails} = props
  const {
    company_logo_url,
    employment_type,
    id,
    job_description,
    location,
    rating,
    title,
  } = similarDetails

  return (
    <li className="similar-each-item">
      <div className="tab-outside">
        <div className="tab-top">
          <img
            className="each-tab-logo"
            alt="similar job company logo"
            src={company_logo_url}
          />
          <div className="tab-top-inside">
            <h3>{title}</h3>
            <p className="rating-now">{rating}</p>
          </div>
        </div>
        <div className="tab-bottom bottomnow">
          <h1>Description</h1>
          <p className="tab-description descnow">{job_description}</p>
        </div>
        <div className="tab-mid">
          <div className="tab-mid-inside">
            <p className="tab-mid-para">{location}</p>
            <p>{employment_type}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SimilarItem
