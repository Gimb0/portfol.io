import React from 'react'
import { Chart } from 'react-chartjs-2';

class HoldingsDoughnut extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {
            headers: props.headers,
            data: props.data,
            symbol: [],
            currentValue: [],
            currentPercent: [],
            totalValue: 0.0,
            doughnutData: null,
            colorArray: ["#21cc7a", '#1bbb6e', '#1aa260'],
            doughnutColors: [],
        }
    }

    componentDidMount() {
        this.state.data.map((holding, index) => {
            this.state.symbol.push(holding['symbol']);
            this.state.currentValue.push(holding['currentValue']);
            this.state.totalValue = this.state.totalValue + parseFloat(holding['currentValue']);
        });

        for( var index in this.state.currentValue) {
            this.state.currentPercent.push(((this.state.currentValue[index]/this.state.totalValue)*100.0).toFixed(2));
        }

        var colourIndex = 0;

        for (var k = 0; k < this.state.symbol.length; k++) {
            if (colourIndex === 0 && k === this.state.symbol.length - 1) {
                colourIndex = 1;
            }
            this.state.doughnutColors.push(this.state.colorArray[colourIndex]);
            colourIndex = colourIndex + 1;
            if (colourIndex === this.state.colorArray.length) {
                colourIndex = 0;
            }
        }

        this.myChart = new Chart(this.canvasRef.current, {
            type: 'doughnut',
            data: {
                labels: this.state.symbol,
                datasets: [{
                    data: this.state.currentPercent,
                    backgroundColor: this.state.doughnutColors,
                }]
            },
            options: {
                responsive:true,
                maintainAspectRatio: false,
                title: {
                    display: false,
                    text: 'Holdings',
                    fontSize: 20
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return data['labels'][tooltipItem[0]['index']];
                        },
                        label: function (tooltipItems, data) {
                            var dataset = data.datasets[tooltipItems.datasetIndex];
                            var currentVal = dataset.data[tooltipItems.index];
                            return currentVal + "%";
                        }
                    }
                },
                
            }
        })

    }

    render() {
        return (
            <canvas ref={this.canvasRef} />
        )
    };

}

export default HoldingsDoughnut;