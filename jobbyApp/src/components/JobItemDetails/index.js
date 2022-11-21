/* eslint-disable camelcase */
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SimilarItem from '../SimilarItem'
// eslint-disable-next-line no-unused-vars
import './index.css'

const presentState = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobItemDetails extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {
    jobitemData: [],
    similaritems: [],
    companyLife: [],
    skillsList: [],
    title: '',
    status: presentState.initial,
  }

  componentDidMount() {
    this.getjobitemData()
  }

  getjobitemData = async () => {
    this.setState({status: presentState.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    // eslint-disable-next-line no-unused-vars
    const jwtToken = Cookies.get('jwt_token')
    const itemUrl = `https://apis.ccbp.in/jobs/${id}`
    const itemOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const jobDetailsResponse = await fetch(itemUrl, itemOptions)
    const itemData = await jobDetailsResponse.json()
    console.log(itemData)
    if (jobDetailsResponse.ok === true) {
      this.setState({
        jobitemData: itemData.job_details,
        similaritems: itemData.similar_jobs,
        companyLife: itemData.job_details.life_at_company,
        skillsList: itemData.job_details.skills,
        title: itemData.job_details.title,
        status: presentState.success,
      })
    } else {
      this.setState({status: presentState.failure})
    }
  }

  renderSuccess = () => {
    const {
      jobitemData,
      similaritems,
      title,
      companyLife,
      skillsList,
    } = this.state
    // eslint-disable-next-line no-unused-vars
    // const {job_details, similar_jobs} = jobitemData
    const {
      rating,
      package_per_annum,
      job_description,
      employment_type,
      company_logo_url,
      company_website_url,
      location,
    } = jobitemData
    const {description, image_url} = companyLife
    return (
      <>
        <div className="company-inside">
          <div className="company-top-box">
            <img
              className="company-img"
              alt="job details company logo"
              src={company_logo_url}
            />
            <div className="company-top-box-inside">
              <h1>{title}</h1>
              <p className="company-rating">{rating}</p>
            </div>
          </div>
          <div className="company-mid-box">
            <div className="company-mid-box-inside">
              <p className="location">{location}</p>
              <p>{employment_type}</p>
            </div>
            <p>{package_per_annum}</p>
          </div>
          <hr className="horizontal-line" />
          <div className="job-description">
            <div className="to-anchor">
              <h1>Description</h1>
              <a className="visit" href={company_website_url}>
                Visit
              </a>
            </div>

            <p className="job-description-para">{job_description}</p>
          </div>
          <div className="skill-section">
            <h1>Skills</h1>
            <ul className="skill-list">
              {skillsList.map(each => (
                <li key={each.name} className="eachskill">
                  <img
                    className="skill-img"
                    src={each.image_url}
                    alt={each.name}
                  />
                  <p className="skills-name">{each.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="company-worklife">
            <div className="company-worklife-para-box">
              <h1>Life at Company</h1>
              <p className="company-worklife-description">{description}</p>
            </div>
            <img
              className="company-work-img"
              alt="life at company"
              src={image_url}
            />
          </div>
        </div>
        <div>
          <h1 className="similar">Similar Jobs</h1>
        </div>
        <div className="company-inside changesimilar">
          <ul className="similar-list">
            {similaritems.map(each => (
              <SimilarItem key={each.id} similarDetails={each} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderFailure = () => (
    <div className="failed-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-img"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button
        className="logged-out"
        onClick={this.getjobitemData}
        type="button"
      >
        Retry
      </button>
    </div>
  )

  renderLoading = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader" className="failrender">
      <Loader type="ThreeDots" color="orange" width={100} height={100} />
    </div>
  )

  renderResult = () => {
    const {status} = this.state

    switch (status) {
      case presentState.success:
        return this.renderSuccess()
      case presentState.loading:
        return this.renderLoading()
      case presentState.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    // eslint-disable-next-line no-unused-vars

    return (
      <>
        <Header />
        <div className="company-outside">{this.renderResult()}</div>
      </>
    )
  }
}

export default JobItemDetails
