import React from 'react';
import styled from 'styled-components';
import Title from './../Components/js/Title';
import DataTable from './../Components/js/DataTable';
import { Line } from 'react-chartjs-2';
import { Spinner, Table, Card } from 'react-bootstrap';
import './css/history.css';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 275px;
  margin-right: 6em;
`;


class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearlyData: null,
      headers: null
    }

  }

    renderYearlyData() {
        return this.state.yearlyData.map((yearData) => {

            let yearCloseText = "Year Close ($)";
            let headers = this.state.headers;
            let difference = yearData.yearClose - yearData.yearOpen;

            difference = difference.toFixed(2);

            if(difference > 0) {
                difference = '+' + difference;
            }

            if(new Date().getFullYear() === parseInt(yearData.year)) {
                yearCloseText = "Current Value ($)";
                headers = [
                    ["Share", "symbol"],
                    ["Year Open ($)", "yearOpen"],
                    ["Year Open Quantity", "openQuantity"],
                    ["Current Value ($)", "yearClose"],
                    ["Current Quantity", "closeQuantity"],
                ];
            }

            return (
                <div>
                    <Card className="year-card">
                        <Card.Header as="h3" className="center-header">{ yearData.year }</Card.Header>
                        <Card.Body>
                            <Table striped hover className="year-data-table">
                                <thead>
                                    <tr>
                                        <th className="center-header">{ "Year Open ($)" }</th>
                                        <th className="center-header">{ yearCloseText }</th>
                                        <th className="center-header">{ "+/- ($)" }</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="center-header">{ yearData.yearOpen }</td>
                                        <td className="center-header">{ yearData.yearClose }</td>
                                        <td className="center-header">{ difference }</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table striped hover className="year-data-table">
                                <thead>
                                    <tr>
                                        <th className="center-header">{ "Holdings" }</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <DataTable data={ yearData.holdings } headers={ headers } searchbarPlaceholder="Search for stocks..." />
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <br />
                </div>
            )
        });
    }


  async componentDidMount() {
    fetch("/portfoliohistory", {
        method: "GET",
        headers: {
            "Authorization": sessionStorage.getItem("token"),
        }
    })
    .then(resp => resp.json())
    .then(portfoliohistory => {
        this.setState({
            yearlyData: portfoliohistory,
            headers: [
                ["Share", "symbol"],
                ["Year Open ($)", "yearOpen"],
                ["Year Open Quantity", "openQuantity"],
                ["Year Close ($)", "yearClose"],
                ["Year Close Quantity", "closeQuantity"],
            ]
        });
        console.log(portfoliohistory);
    });
  }

  render() {
    let toDisplay;

    if (this.state.yearlyData == null) {
      toDisplay = (
        <Spinner animation="border" />
      );
    } else if(this.state.yearlyData.length === 0) {
        toDisplay = (
            <h3>No history!</h3>
        );
    } else {
      toDisplay = (
        <div>
            { this.renderYearlyData() }
        </div>
      )
    }

    return (
      <GridWrapper>
        <Title pageTitle="History" />
          { toDisplay }
      </GridWrapper>


    );
  }

}

export default History;
