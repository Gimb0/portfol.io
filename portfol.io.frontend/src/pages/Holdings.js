import React from 'react';
import styled from 'styled-components';
import Title from './../Components/js/Title';
import DataTable from './../Components/js/DataTable';
import { Spinner, Card } from 'react-bootstrap';
import "./css/holdings.css";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 275px;
  margin-right: 6em;
`;

class Holdings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: null,
            headers1: null,
            holdings: null,
            transactions: null
        };
    }

    componentDidMount() {
        fetch("/sharedata?sharesymbol=AMZN", {
            method: "GET",
            headers: {
                "Authorization": sessionStorage.getItem("token"),
            }
        })
            .then(resp => {
                if (resp.status == 200) {
                    return resp.json()
                } else {
                    return "Share not found!";
                }
            })
            .then(shares => {
                console.log(shares);
            });

        fetch("/transactions", {
            method: "GET",
            headers: {
                "Authorization": sessionStorage.getItem("token"),
            }
        })
            .then(resp => {
                if (resp.status == 200) {
                    return resp.json()
                } else {
                    return "Share not found!";
                }
            })
            .then(shares => {
                console.log(shares);
            });

        /*
        fetch("/transaction", {
            method: "POST",
            headers: {
                "Authorization": sessionStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                totalPrice: 3600.00,
                date: "06/29/2020",
                share: "AAPL",
                units: 10,
                buying: true
            })
        });

        fetch("/edittransaction?id=11", {
            method: "POST",
            headers: {
                "Authorization": sessionStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                totalPrice: 3600.00,
                date: "06/29/2020",
                share: "GOOGL",
                units: 10,
                buying: true
            })
        });

        
        */

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
                        ["Total Cost ($)", "buyPrice"],
                        ["Quantity", "quantity"],
                        ["Current Price ($)", "currentPrice"],
                        ["Total Value ($)", "currentValue"],
                        ["Profit ($)", "profit"]
                    ],
                    holdings: holdings,
                })
            });

        fetch("/transactions", {
            method: "POST",
            headers: {
                "Authorization": sessionStorage.getItem("token")
            }
        })
            .then(resp => resp.json())
            .then(transactions => {
                this.setState({
                    headers1: [
                        ["ID", "id"],
                        ["Share", "share"],
                        ["Type", "buying"],
                        ["Total Price ($)", "totalPrice"],
                        ["Units", "units"],
                        ["Average Price ($)", "avgPrice"],
                        ["Date", "date"]
                    ],
                    transactions: transactions,

                })
            });
    };

    filterTransactions(e) {
        let dropdown = e.target;
        let option = dropdown.value;

        let table = document.getElementById("transactionsTable");
        let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            rows[i].classList.remove("hidden");

            if (option === "All") {
                continue;
            }

            let td = rows[i].getElementsByTagName('td');
            let transactionType = td[1].textContent || td[1].innerText;


            if (!(transactionType === option)) {
                rows[i].classList.add("hidden");
            }
        }
    }

    render() {
        let toDisplay;

        if (this.state.holdings == null || this.state.transactions == null) {
            toDisplay = (
                <Spinner animation="border" />
            );
        } else if (this.state.holdings.length == 0) {
            toDisplay = (
                <h3>No holdings!</h3>
            );
        } else {
            toDisplay = (
                <div>
                    <div className="main chart-wrapper">
                        <Card className="main card">
                            <Card.Header className="headerText">Share Holdings</Card.Header>
                            <Card.Body>
                                <DataTable id="holdingsTable" data={this.state.holdings} headers={this.state.headers} searchbarPlaceholder="Search for stocks..." />
                            </Card.Body>
                        </Card >
                    </div >
                    <br />
                    <div className="main chart-wrapper">
                        <Card className="main card">
                            <Card.Header className="headerText">Transactions</Card.Header>
                            <Card.Body>
                                <div className="transactiontable">
                                <select id="transactionTypeSelect" onChange={(e) => this.filterTransactions(e)}>
                                    <option value="All">All</option>
                                    <option value="Buy">Buy</option>
                                    <option value="Sell">Sell</option>
                                </select>
                                <DataTable id="transactionsTable" deleteButtons="true" data={this.state.transactions} headers={this.state.headers1} searchbarPlaceholder="Search for transaction..." />
                                </div>
                            </Card.Body>
                        </Card >
                    </div >
                </div >
            );
        }

        return (
            <GridWrapper>
                <Title pageTitle="Holdings" />
                {toDisplay}
            </GridWrapper>
        )
    }

}
export default Holdings;