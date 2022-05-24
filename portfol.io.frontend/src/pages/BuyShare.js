import React from 'react';
import styled from 'styled-components';
import Title from './../Components/js/Title';
import './../Components/css/form.css';
import ShareSelect from './../Components/js/ShareSelect';
import DateSelector from '../Components/js/DateSelector';
const GridWrapper = styled.div`
  margin-top: 1em;
  margin-left: 275px;
  margin-right: 6em;
`;

class BuyShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: "",
            hasErrors: false,
            shareChanged: false,
            shareError: null,
            dateError: null,
            priceError: null,
            unitsError: null,

        };

    }




    async buyNewShare(event) {
        event.preventDefault();
        var successfulBuy = false;
        var successfulValidation = true;
        this.setState({ shareError: null, dateError: null, priceError: null, unitsError: null });

        var shareTicker = event.target.shareTicker.value;
        var buyDate = event.target.buyDate.value;
        var totalPrice = event.target.totalPrice.value;
        var units = event.target.units.value;

        if (shareTicker == '') {
            var shareError = "Can't have null share";
            this.setState({ shareError: shareError, hasErrors: true });
            successfulValidation = false;
        }
        if (buyDate == '') {
            var dateError = "Can't have null date";
            this.setState({ dateError: dateError, hasErrors: true });
            successfulValidation = false;
        }
        if (totalPrice == '') {
            var priceError = "Can't have null price";
            this.setState({ priceError: priceError, hasErrors: true });
            successfulValidation = false;
        }
        if (units == '') {
            var unitsError = "Can't have null units";
            this.setState({ unitsError: unitsError, hasErrors: true });
            successfulValidation = false;
        }

        if (successfulValidation) {

            fetch("/transaction", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                },
                body: JSON.stringify({
                    "share": shareTicker,
                    "totalPrice": totalPrice,
                    "date": buyDate,
                    "buying": true,
                    "units": units,
                })
            })
                .then(resp => {
                    if (resp.ok) {
                        successfulBuy = true;
                        window.location.assign('/holdings')
                    } else {
                        return resp.json()
                            .then(body => {
                                if (!successfulBuy) {
                                    var error = body.message;
                                    this.setState({ errors: error, hasErrors: true });
                                }
                            });
                    }
                });

        }

    }

    handleShareChange(e) {
        e.preventDefault();
        this.setState({ shareChanged: true });
        console.log(this.state.shareChanged);
    };

    render() {
        var serverMessage = null;
        var shareMessage = null;
        var dateMessage = null;
        var priceMessage = null;
        var unitsMessage = null;
        if (this.state.hasErrors) {
            if (this.state.errors != "") {
                serverMessage = (
                    <div>
                        <p>{this.state.errors}</p>
                    </div>
                )
            }
            if (this.state.shareError != "") {
                shareMessage = (
                    <div>
                        <p>{this.state.shareError}</p>
                    </div>
                )
            }
            if (this.state.dateError != "") {
                dateMessage = (
                    <div>
                        <p>{this.state.dateError}</p>
                    </div>
                )
            }
            if (this.state.priceError != "") {
                priceMessage = (
                    <div>
                        <p>{this.state.priceError}</p>
                    </div>
                )
            }
            if (this.state.unitsError != "") {
                unitsMessage = (
                    <div>
                        <p>{this.state.unitsError}</p>
                    </div>
                )
            }
        }




        return (
            <GridWrapper>
                <Title pageTitle="Buy Share" />

                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="errorMessage">{serverMessage}</div>
                        <form className="login100-form" onSubmit={(e) => this.buyNewShare(e)}>
                            <div className="errorMessage">{shareMessage}</div>
                            <div className="wrap-input100">
                                <ShareSelect />
                            </div>
                            <div className="errorMessage">{dateMessage}</div>
                            <div className="wrap-input200">
                                <DateSelector />
                            </div>
                            <div className="errorMessage">{priceMessage}</div>
                            <div className="wrap-input100">
                                <input className="input100" name="totalPrice" type="text" placeholder="Enter the total purchase price" />
                            </div>
                            <div className="errorMessage">{unitsMessage}</div>
                            <div className="wrap-input100">
                                <input className="input100" name="units" type="text" placeholder="Enter the total number of units purchased" />
                            </div>
                            <div className="container-login100-form-btn">
                                <input className="login100-form-btn" type="submit" value="Buy Share" />
                            </div>
                        </form>
                    </div>
                </div>

            </GridWrapper>
        )
    }
}

export default BuyShare;