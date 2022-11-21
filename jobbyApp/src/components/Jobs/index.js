/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unknown-property */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import JobItem from '../JobItem'
import './index.css'
import Header from '../Header'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
    selected: false,
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
    selected: false,
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
    selected: false,
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
    selected: false,
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const profileState = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Jobs extends Component {
  state = {
    jobList: [],
    emplist: employmentTypesList,
    profileStatus: profileState.initial,
    joblistStatus: profileState.initial,
    profileDetails: '',
    searchInput: '',
    empInput: '',
    salaryInput: '',
    filteredList: [],
    final: [],
  }

  componentDidMount() {
    this.pulljobListData()
    this.pullProfileData()
  }

  pullProfileData = async () => {
    this.setState({profileStatus: profileState.loading})
    const profileUrl = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const profileOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const profileResponse = await fetch(profileUrl, profileOptions)
    const profileData = await profileResponse.json()
    // console.log(profileResponse)

    if (profileResponse.ok === true) {
      this.setState({
        profileDetails: profileData.profile_details,
        profileStatus: profileState.success,
      })
    } else {
      this.setState({profileStatus: profileState.failure})
    }
  }

  pulljobListData = async () => {
    const {searchInput, final, empInput, salaryInput} = this.state
    // const finallist = final.join()
    this.setState({joblistStatus: profileState.loading})
    const url = `https://apis.ccbp.in/jobs?employement_type=${final}&search=${searchInput}&minimum_package=${salaryInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.setState({jobList: data.jobs, joblistStatus: profileState.success})
    } else {
      this.setState({joblistStatus: profileState.failure})
    }
  }

  profileSuccessView = () => {
    const {profileDetails} = this.state
    const {profile_image_url, name, short_bio} = profileDetails

    return (
      <div className="person-details">
        <img
          className="profile-img"
          src={profile_image_url}
          alt="profile-img"
        />
        <h3 className="name">Sukumar Sundar</h3>
        <p>{short_bio}</p>
      </div>
    )
  }

  profileLoadingView = () => (
    <div className="loader">
      <Loader type="ThreeDots" color="red" width={50} height={50} />
    </div>
  )

  profileFailureView = () => (
    <div className="loader">
      <button className="logout" type="button" onClick={this.pullProfileData}>
        Retry
      </button>
    </div>
  )

  renderProfile = () => {
    const {profileStatus} = this.state
    // console.log(profileStatus === 'SUCCESS')
    switch (profileStatus) {
      case profileState.success:
        return this.profileSuccessView()
      case profileState.loading:
        return this.profileLoadingView()
      case profileState.failure:
        return this.profileFailureView()
      default:
        return null
    }
  }

  onSearchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchEnter = event => {
    if (event.key === 'Enter') {
      this.pulljobListData()
    }
  }

  joblistSuccessView = () => {
    const {jobList, searchInput} = this.state
    const result = jobList.length > 0
    return result ? (
      <div className="jobs-right">
        <div className="jobs-right-search-box">
          <input
            value={searchInput}
            onChange={this.onSearchChange}
            onKeyDown={this.onSearchEnter}
            className="search"
            type="search"
          />
          <button
            onClick={this.pulljobListData}
            className="logout search-button"
            testid="searchButton"
            type="button"
          >
            Search
          </button>
        </div>
        <ul className="jobs-list">
          {jobList.map(each => (
            <JobItem key={each.id} jobDetails={each} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="failed-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
          className="nojob-img"
        />
        <h1>No Jobs Found</h1>
        <p>We could not find any jobs. Try other filters.</p>
      </div>
    )
  }

  joblistFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button className="logout" onClick={this.pulljobListData} type="button">
        Retry
      </button>
    </div>
  )

  joblistLoadingView = () => (
    <div testid="loader" className="job-right">
      <Loader type="ThreeDots" color="yellow" width={100} height={100} />
    </div>
  )

  renderRight = () => {
    const {joblistStatus} = this.state

    switch (joblistStatus) {
      case profileState.success:
        return this.joblistSuccessView()
      case profileState.loading:
        return this.joblistLoadingView()
      case profileState.failure:
        return this.joblistFailureView()
      default:
        return null
    }
  }

  getlist = () => {
    const {emplist, final, filteredList} = this.state
    emplist.forEach(each => {
      if (each.selected === true) {
        this.setState(prev => ({final: [...prev.final, each.employmentTypeId]}))
      } // final.concat(each.employmentTypeId)
    })
  }

  //   onEmployment = event => {
  //     const id = event.target.value
  //     this.setState(prev => ({
  //       empList: prev.empList.map(each => {
  //         if (id === each.employmentTypeId) {
  //           return {...each, selected: !each.selected}
  //         }
  //         return each
  //       }),
  //     }))
  //   }

  onSalary = event => {
    this.setState({salaryInput: event.target.value}, this.pulljobListData)
  }

  onEmployment = event => {
    const id = event.target.value
    const {emplist} = this.state
    this.setState(cd.
      prev => ({
        emplist: prev.emplist.map(each => {
          if (each.employmentTypeId === id) {
            return {...each, selected: !each.selected}
          }
          return each
        }),
      }),
      this.getlist,
    )

    // this.setState({empInput: event.target.value}, this.pulljobListData)
  }

  render() {
    const {jobList, empList, profileDetails} = this.state
    return (
      <div className="jobs-total">
        <Header />
        <div className="jobs-inside">
          <div className="jobs-left">
            <div className="profile-outside">{this.renderProfile()}</div>

            <hr className="horz-line" />
            <div className="filter-details">
              <ul className="employmentList">
                <h3>Type of Employment</h3>
                {employmentTypesList.map(each => (
                  <li key={each.employmentTypeId}>
                    <input
                      value={each.employmentTypeId}
                      onClick={this.onEmployment}
                      type="checkbox"
                      id={each.employmentTypeId}
                    />
                    <label
                      onClick={this.getlist}
                      className="emp-each"
                      htmlFor={each.employmentTypeId}
                    >
                      {each.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="horz-line" />
            <div className="filter-details">
              <ul className="salaryList">
                <h3>Salary range</h3>
                {salaryRangesList.map(each => (
                  <li key={each.salaryRangeId}>
                    <input
                      value={each.salaryRangeId}
                      onClick={this.onSalary}
                      name="salary"
                      type="radio"
                      id={each.salaryRangeId}
                    />
                    <label htmlFor={each.salaryRangeId}>{each.label}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right-outside">{this.renderRight()}</div>
        </div>
      </div>
    )
  }
}

export default Jobs
