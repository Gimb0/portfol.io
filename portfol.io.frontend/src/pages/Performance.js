import React from 'react';
import styled from 'styled-components';
import Title from './../Components/js/Title';
import { Line } from 'react-chartjs-2';
import { Card, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { Input } from 'reactstrap';
import './../pages/css/performance.css';
import './../pages/css/dashboard.css';

const GridWrapper = styled.div `
	display: grid;
	grid-gap: 10px;
	margin-top: 1em;
	margin-left: 275px;
	margin-right: 6em;
`;

const intervalOptions = [
	{ value: '0', label: 'Daily' },
	{ value: '1', label: 'Weekly' },
	{ value: '2', label: 'Monthly' }
]

const shareOptions = [
	{ value: 'PORTFOLIO', label: 'Portfolio' },
	{ value: 'TSLA', label: 'Tesla' },
	{ value: 'IBM', label: 'IBM' },
	{ value: 'AAPL', label: 'Apple' },
	{ value: 'GOOGL', label: 'Google' }
]

class Performance extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dateData: null, // Dates
			lineData: null, // Map(Share, Values)
			lineGraph: {labels: null, datasets: []}, // Final line graph options
			
			symbols: 'PORTFOLIO',
			startDate: '1-1-2019',
			endDate: '1-1-2020',
			interval: 2
		};

		this.startDateInputRef = React.createRef();
		this.endDateInputRef = React.createRef();
		this.intervalInputRef = React.createRef();
		this.sharesInputRef = React.createRef();
	}

	getFilterOptions() {		
		if(this.intervalInputRef.current) {
			this.state.interval = this.intervalInputRef.current.state.value.value;
			if(this.state.interval === undefined) {
				this.state.interval = 2; // Default monthly interval
			}
		}

		var sharesString = "";
		if(this.sharesInputRef.current) {
			if(this.sharesInputRef.current.state.value === "PORTFOLIO") {
				sharesString = "PORTFOLIO";
			} else {
				for(var i in this.sharesInputRef.current.state.value) {
					let share = this.sharesInputRef.current.state.value[i].value;
					sharesString += share + ",";
				}
			}
			this.state.symbols = sharesString;
		}
	}

	async loadData(data) {
		this.state.dateData = new Set();
		this.state.lineData = new Map();

		for (var index in data) {
			let shareHistory = data[index];
			let stateShareData = this.state.lineData.get(shareHistory.Share);
			if(stateShareData === undefined) {
				this.state.lineData.set(shareHistory.Share, [shareHistory.Close]);
			} else {
				stateShareData.push(shareHistory.Close);
			}
			try {
				this.state.dateData.add(shareHistory.Date.substring(4,10));
			} catch(error) {
				console.log(error);
			}
		}

		this.state.lineData.forEach((value, key) => {
			let dataset = {
				label: key,
				fill: false,
				lineTension: 0,
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgba(0,255,0,1)',
				borderWidth: 2,
				data: value
			}
			this.state.lineGraph.datasets.push(dataset);
			this.state.lineGraph.labels = Array.from(this.state.dateData);
		})

		this.setState({
			lineData: null,
			dateData: null,
			lineGraph: this.state.lineGraph
		})
	};

	async getData() {
		var resp = await fetch("/performance", {
			method: "POST",
			headers: {
				"Authorization": sessionStorage.getItem("token"),
				"Content-Type": 'application/json'
			},
			body: JSON.stringify({
				symbols: this.state.symbols,
				from: this.state.startDate,
				to: this.state.endDate,
				interval: this.state.interval
			})
		});

		let data = await resp.json();
		return data;
	};

	async reloadChart() {
		this.getFilterOptions();

		this.setState({
			lineData: null,
			dateData: null,
			lineGraph: {labels: null, datasets: []}
		});

		console.log("Reloading chart!");
		try {
			let data = await this.getData();
			this.loadData(data);
		} catch (error) {
			console.log(error);
		}
	};

	async componentDidMount() {
		this.reloadChart();
	};

	render() {
		let performanceFilters;
		let performanceGraph;

		if (this.state.lineGraph.labels == null) {
			performanceGraph = ( 
				<Spinner animation="border" />
			);
		} else {
			performanceFilters = (
					<div className="filter-options">
						<div>
							<label style={{marginBottom: '10px'}}>Filter Options</label>
						</div>
						<span style={{float: 'left', display: 'inline-block', marginLeft: '10px'}}>
							<label>From</label>
							<Input ref={this.startDateInputRef} onChange={ (event) => this.state.startDate = event.target.value.split("-").reverse().join("-") } type="date" defaultValue="1-1-2019"></Input>
						</span>
						<span style={{float: 'left', display: 'inline-block', marginLeft: '10px'}}>
							<label>To</label>
							<Input ref={this.endDateInputRef} onChange={ (event) => this.state.endDate = event.target.value.split("-").reverse().join("-") } type="date" defaultValue="1-1-2020"></Input>
						</span>
						<span style={{float: 'left', display: 'inline-block', width: '160px', marginLeft: '10px'}}>
							<label>Select Data Interval</label>
							<Select ref={this.intervalInputRef} options={ intervalOptions } defaultValue='2' placeholder='Data Interval'/>
						</span>
						<span style={{float: 'left', display: 'inline-block', width: '260px', marginLeft: '10px'}}>
							<label>Select Shares</label>
							<Select ref={this.sharesInputRef} options={ shareOptions } isMulti defaultValue="PORTFOLIO" placeholder='Select Shares to Retrieve'/>
						</span>
						<span style={{float: 'right', display: 'inline-block'}}>
							<Button variant="light" onClick={this.reloadChart.bind(this)}>Apply Filter</Button>
						</span>
					</div>
			);
			performanceGraph = (
				<div className="performance-chart">
					<Line 
						data = { this.state.lineGraph }
						options = {
						{
							responsive: true,
							maintainAspectRatio: false,
							legend: {
								display: true,
								position: 'right'
							},

						}
					}
					/>
				</div>
			);
		}

		return ( 
			<GridWrapper>
				<Title pageTitle = "Performance" />
				<div>
					<div className="main chart-wrapper">
						<Card className="performance card">
							<Card.Header>{ performanceFilters }</Card.Header>
							<Card.Body>
								{ performanceGraph }
							</Card.Body>
						</Card>
					</div>
				</div>
			</GridWrapper>
		)
	}
}

export default Performance;