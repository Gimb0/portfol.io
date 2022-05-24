import React from 'react';
import { Chart } from 'react-chartjs-2';

class DashboardPerformance extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {
            dates: props.dates,
            values: props.values,
        }
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            data: {
                labels: this.state.dates,
                datasets: [{
                    label: "Net Worth",
                    backgroundColor: "#21cc7a",
                    lineTension: 0,
                    data: this.state.values
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: false,
                    text: "Performance",
                    fontSize: 20

                },
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItems, data) {
                            return "$" + tooltipItems.yLabel.toString();
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            callback: function(value, index, values) {
                                return "$" + value;
                            }
                        }
                    }]
                }
            }
        })
    }

    render() {
        return(
            <canvas ref={this.canvasRef} />
        )
    }

};

export default DashboardPerformance;
