import React, { Component } from 'react'
import { DateRangePicker } from './../../src'

export default class DateRangePickerExample extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null
    }
  }

  onDatesChange = (dates) => {
    this.setState({ ...dates })
  }

  render () {
    const { startDate, endDate } = this.state

    return (
      <DateRangePicker
        onDatesChange={this.onDatesChange}
        startDate={startDate}
        endDate={endDate}
        style={{}}
        dateInputStyle={{}}
        dateInputTextStyle={{}}
        calendarModalStyle={{}}
        calendarModalFooterStyle={{}}
        calendarModalFooterButtonStyle={{}}
        calendarModalFooterTextStyle={{}}
        calendarMonthListStyle={{}}
        calendarMonthStyle={{}}
        calendarMonthTitleStyle={{}}
        calendarMonthWeekStyle={{}}
        calendarDaySelectedTextStyle={{}}
        calendarDayPastTextStyle={{}}
        calendarDayContainerStyle={{}}
        calendarDaySelectedContainerStyle={{}}
        calendarDaySelectedStartContainerStyle={{}}
        calendarDaySelectedEndContainerStyle={{}}
      />
    )
  }
}