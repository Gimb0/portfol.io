import React from "react";
import DatePicker from "react-datepicker";
import './../css/form.css';
 
import "react-datepicker/dist/react-datepicker.css";

class DateSelector extends React.Component {
    state = {
        startDate: ''
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <div className="customeDatePickerWidth">
            <DatePicker
                placeholderText="  Click to select a date"
                className="dateInput"
                selected={this.state.startDate}
                onChange={this.handleChange}
                name="buyDate"
            />
            </div>
        );
    }
}

export default DateSelector;