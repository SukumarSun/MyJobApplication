/* eslint-disable react/no-unused-state */
// Write your code here
import {Component} from 'react'
import {v4 as uniqId} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    nameInput: '',
    isFilterActive: false,
    dateInput: '',
    appointmentList: [],
  }

  onStar = id => {
    this.setState(prev => ({
      appointmentList: prev.appointmentList.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.starred}
        }
        return each
      }),
    }))
  }

  onName = event => {
    this.setState({nameInput: event.target.value})
  }

  onDate = event => {
    this.setState({dateInput: event.target.value})
  }

  onFilter = () => {
    // eslint-disable-next-line no-unused-vars
    const {isFilterActive} = this.state
    this.setState({
      isFilterActive: !isFilterActive,
    })
  }

  onclickSubmit = event => {
    event.preventDefault()
    const {nameInput, dateInput} = this.state
    const newItem = {
      id: uniqId(),
      title: nameInput,
      date: dateInput,
      isStarred: false,
    }
    this.setState(prev => ({
      appointmentList: [...prev.appointmentList, newItem],
      nameInput: '',
      dateInput: '',
    }))
  }

  getFilteredAppointmentsList = () => {
    const {isFilterActive, appointmentList} = this.state

    if (isFilterActive) {
      return appointmentList.filter(each => each.isStarred === true)
    }
    return appointmentList
  }

  render() {
    const {nameInput, dateInput, isFilterActive} = this.state
    const filteredList = this.getFilteredAppointmentsList()
    const starredBtnClass = isFilterActive
      ? 'unstarred-btn active-btn'
      : 'unstarred-btn'

    return (
      <div className="outer">
        <div className="inner">
          <div className="appointments-container">
            <>
              <form onSubmit={this.onclickSubmit} className="appointment-form">
                <h1>Add Appointment</h1>
                <div className="input">
                  <label htmlFor="title" className="input-head">
                    TITLE
                  </label>
                  <input
                    id="title"
                    value={nameInput}
                    onChange={this.onName}
                    type="text"
                    placeholder="Title"
                  />
                </div>
                <div className="input">
                  <label htmlFor="date" className="input-head">
                    DATE
                  </label>
                  <input
                    value={dateInput}
                    onChange={this.onDate}
                    type="date"
                    id="date"
                  />
                </div>
                <button type="submit" className="but">
                  Add
                </button>
              </form>
            </>
            <img
              className="appointments-img"
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
            />
          </div>
          <hr className="line" />
          <div className="appointment-tab">
            <h1 className="tab-head">Appointments</h1>
            <button
              onClick={this.onFilter}
              type="button"
              className={starredBtnClass}
            >
              Starred
            </button>
          </div>
          <div>
            <ul className="unorder">
              {filteredList.map(each => (
                <AppointmentItem
                  onStar={this.onStar}
                  key={each.id}
                  itemDetails={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
