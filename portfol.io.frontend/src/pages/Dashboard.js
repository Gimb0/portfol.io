import React from 'react';
import styled from 'styled-components';
import Title from './../Components/js/Title';
import "./css/dashboard.css";
import Circle from './../Components/js/Circle';
import './../Components/css/circle.css'
import HoldingsDoughnut from './../Components/js/HoldingsDoughnut';
import { Spinner, Card } from 'react-bootstrap';
import DashboardPerformance from '../Components/js/DashboardPerformance';

const GridWrapper = styled.div`

  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 275px;
  margin-right: 6em;
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: null,
      holdings: null,
      performDate: [],
      performValue: [],
      performanceLoaded: false,
      portfolioLastYear: null,
      portfolioCurrent: null
    };
  }

  async componentDidMount() {
    var today = new Date();
    var todayDate = today.getDate();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var toDate = todayDate + "-" + todayMonth + "-" + todayYear;
    var fromDate = "01-01-" + todayYear;

    //fetch data for performance
    fetch("/performance", {
      method: "POST",
      headers: {
        "Authorization": sessionStorage.getItem("token"),
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        symbols: "PORTFOLIO",
        from: fromDate,
        to: toDate,
        interval: 0
      })
    })
      .then(res => res.json())
      .then(data => {
        var performanceDate = [];
        var performanceValue = [];
        for (var index in data) {
          performanceDate.push(data[index].Date.substring(4, 10) + data[index].Date.substring(24));
          performanceValue.push(parseFloat(data[index].Close).toFixed(2));
        }
        this.setState({ performDate: performanceDate });
        this.setState({ performValue: performanceValue });
        this.setState({ performanceLoaded: true });

      });

    //fetch data for holdings
    fetch("/holdings", {
      method: "GET",
      headers: {
        "Authorization": sessionStorage.getItem("token"),
      }
    })
      .then(resp => resp.json())
      .then(holdings => {
        this.setState({
          headers: [
            ["Symbol", "symbol"],
            ["Total Cost", "buyPrice"],
            ["Quantity", "quantity"],
            ["Current Price", "currentPrice"],
            ["Total Value", "currentValue"],
            ["Profit", "profit"]
          ],
          holdings: holdings,
        })
      });

    let lastYear = todayYear - 1;
    let lastYearDate = todayDate;

    if (todayDate == 29 && todayMonth == 2) {
      lastYearDate = 28;
    }

    let lastYearToDate = lastYearDate + "-" + todayMonth + "-" + lastYear

    // Get current value of portfolio
    fetch("/portfoliovalue", {
      method: "POST",
      headers: {
        "Authorization": sessionStorage.getItem("token"),
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        "symbols": ["PORTFOLIO"],
        "date": toDate
      })
    })
      .then(resp => resp.json())
      .then(value => {
        this.setState({
          portfolioCurrent: value
        });
      });

    // Get current value of last year's portfolio
    fetch("/portfoliovalue", {
      method: "POST",
      headers: {
        "Authorization": sessionStorage.getItem("token"),
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        "symbols": ["PORTFOLIO"],
        "date": lastYearToDate
      })
    })
      .then(resp => resp.json())
      .then(value => {
        this.setState({
          portfolioLastYear: value
        });
      });
  };

  render() {

    let toDisplay;

    if (this.state.holdings == null) {
      toDisplay = (
        <Spinner animation="border" />
      );
    } else if (this.state.holdings.length == 0) {
      toDisplay = (
        <h3>No holdings!</h3>
      );
    } else {
      toDisplay = (
        <HoldingsDoughnut data={this.state.holdings} headers={this.state.headers} searchbarPlaceholder="Search for stocks..." />
      );
    }

    let performDisplay;
    if (this.state.performValue == null) {
      performDisplay = (
        <Spinner animation="border" />
      );
    } else if (this.state.performValue.length == 0) {
      performDisplay = (
        <h3>No holdings yet!</h3>
      );
    } else {
      performDisplay = (
        <DashboardPerformance dates={this.state.performDate} values={this.state.performValue} />
      );
    }

    let changeDisplay;
    if (this.state.portfolioLastYear == null || this.state.portfolioCurrent == null) {
      changeDisplay = (
        <Spinner animation="border" />
      );
    } else {
      changeDisplay = (
        <div>
          <Circle className="circleStyle1" lastYear={this.state.portfolioLastYear} thisYear={this.state.portfolioCurrent} circleType="stateVals" />
          <Circle className="circleStyle2" lastYear={this.state.portfolioLastYear} thisYear={this.state.portfolioCurrent} circleType="statePercent" />
        </div>
      );
    }

    return (
      <GridWrapper>
        <Title pageTitle="Dashboard" />
        <div>
          <div className="main chart-wrapper">
            <Card className="main card">
              <Card.Header><a href="/Performance">Performance</a></Card.Header>
              <Card.Body>
                {performDisplay}
              </Card.Body>
            </Card>

          </div>
          <div className="sub chart-wrapper holdings">
            <Card className="sub card">
              <Card.Header><a href="/Holdings">Holdings</a></Card.Header>
              <Card.Body>
                {toDisplay}
              </Card.Body>
            </Card>
          </div>
          <div className="sub chart-wrapper circles">
            <Card className="sub card">
              <Card.Header><a href="/Holdings">History</a></Card.Header>
              <Card.Body className="sub cardBody">
                <div class="holdings">
                  {changeDisplay}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>


      </GridWrapper>


    )
  }
}
export default Dashboard;

{/* <div className="candleStick">
<Chart
  options={this.state.options}
  series={this.state.series}
  type="candlestick"
/>

</div> */}

// export const Dashboard = (props) => (
//   <GridWrapper>
//     <Title pageTitle="Dashboard" />
//     <div>
//       <div className="LineDash">
//         <Line
//           data={DashboardLineGraph}
//           options={{
//             title: {
//               display: true,
//               text: 'Portfolio Performance',
//               fontSize: 20
//             },
//             legend: {
//               display: true,
//               position: 'right'
//             }
//           }}
//         />
//       </div>
//       <div className="DashDoughnut">
//         <Doughnut
//           data={DashboardDoughnutGraph}
//           options={{
//             title: {
//               display: true,
//               text: 'Holdings',
//               fontSize: 40
//             },
//             legend: {
//               display: true,
//               position: 'right'
//             }
//           }}
//         />
//       </div>

//       <div>
//         <Chart
//           options={this.candlestickoption.options}
//           series={this.candlestickoption.series}
//           type="candlestick"
//         />

//       </div>
//     </div>




//   </GridWrapper>








// )