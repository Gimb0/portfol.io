import React from 'react';
import styled from 'styled-components';
import './../css/circle.css'

class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xpos: props.xpos,
            ypos: props.ypos,
            lastYear: props.lastYear,
            thisYear: props.thisYear,
            circleColor: props.circleColor,
            circleType: props.circleType,
            className: props.className,
        }

    }

    circleText() {
        var circleText1 = '';
        var circleText2 = '';
        if (this.state.circleType == "stateVals") {
            var str1 = this.state.lastYear*1.0;
            var str2 = this.state.thisYear*1.0;
            circleText1 = "Last Year: $" + str1.toFixed(2);
            circleText2 = "This Year: $" + str2.toFixed(2);
            return (
                <div>
                    {circleText1}<br/>
                    {circleText2}
                </div>
            );
        }

        if (this.state.circleType == "statePercent") {
            var difference = this.state.thisYear - this.state.lastYear;
            var circleText1;

            if (difference > 0) {
                var direction = '+';
                var dirIcon = "fas fa-angle-double-up";
                var dirColor = "greenColor";
            } else if (difference < 0) {
                var direction = '';
                var dirIcon = "fas fa-angle-double-down";
                var dirColor = "redColor";
            } else {
                var direction = '';
                var dirIcon = "";
                var dirColor = "blackColor";
            }

            if(this.state.lastYear === 0) {
                if (difference < 0) {
                    direction = '-';
                }
                circleText1 = direction + "$" + Math.abs(difference).toFixed(2);
            } else {
                var percentdiff = (difference / this.state.lastYear) * 100.0;
                // console.log(difference);
                // console.log(percentdiff);
                
                circleText1 = direction + percentdiff.toFixed(2) + "%";
            }
            return (
                <div className={dirColor}>
                    <i className={dirIcon}/> {circleText1}
                </div>
            );

        }
    }

    render() {
        var top_percent = this.state.ypos;
        var right_percent = this.state.xpos;
        var circle_color = this.state.circleColor;
        var class_name = this.state.className;

        return (
            <div className={this.state.className}>
                {this.circleText()} 
            </div>
        );
    }

}

export default Circle;