import React from 'react';
import styled from 'styled-components';
import Title from './../Components/js/Title';
import Circle from './../Components/js/Circle';
import './../Components/css/circle.css'
import HoldingsDoughnut from './../Components/js/HoldingsDoughnut';
import { Spinner } from 'react-bootstrap';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 275px;
  margin-right: 6em;
`;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: null,
      holdings: null
    };
  }


  componentDidMount() {
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

    return (
      <GridWrapper>
        <Title pageTitle="About" />
        <h2>About Page</h2>
        <p>State at ceiling lay on arms while you're using the keyboard so this human feeds me.</p>
        <p>I am a kitty cat, sup, feed me, no cares in the world</p>
        <p>Meow meow, I tell my human purr for no reason but to chase after</p>

        { toDisplay }
        


      </GridWrapper>
    )
  }


}

export default About;