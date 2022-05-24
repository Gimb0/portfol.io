import React from 'react';
import styled from 'styled-components';
import { Table, Form, Button } from 'react-bootstrap';
import './../css/dataTable.css';

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            headers: props.headers,
            data: props.data,
            searchbarPlaceholder: props.searchbarPlaceholder,
            deleteButtons: props.deleteButtons
        };

    }

    deleteTransaction(transactionId) {
        console.log(transactionId);
        fetch("/deletetransaction?id=" + transactionId, {
            method: "POST",
            headers: {
                "Authorization": sessionStorage.getItem("token"),
            }
        })
        .then(
            window.location.assign("/holdings")
        );
        
    }

    renderTableHead() {
        this.state.headers.map((header, index) => {
            if(header[0] === "ID"){
                this.state.headers.shift();
            }
        });
        var containsDelete = false;
        if (this.state.deleteButtons === "true") {
            this.state.headers.map((header, index) => {
                if (header[0] === "Delete") {
                    containsDelete = true;
                }
            });
            if (containsDelete === false) {
                this.state.headers.push(["Delete", "delete"]);
            }
        }
        
        return (
            <tr>
                {this.state.headers.map((header, index) => {
                    return (
                        <th key={index} onClick={(e) => this.sortTable(e, index)}>{header[0]}</th>
                    )
                })}
            </tr>
        );
    }

    renderTableData() {
        

        return this.state.data.map((data, index) => {
            return (
                <tr key={index}>
                    {this.state.headers.map((header, index) => {
                        if (header[1] === "buying") {
                            let transactionType = "Buy";
                            if (data[header[1]] === "false") {
                                transactionType = "Sell";
                            }
                            return (
                                <td key={index}>{transactionType}</td>
                            )
                        } else if (header[0] === "Delete") {
                            return (
                                <td key={index}>
                                    <Button variant='danger' onClick={() => this.deleteTransaction(data["id"])}>
                                        Delete
                                    </Button>
                                </td>
                            )
                        } else if (header[0] != "ID") {
                            return (
                                <td key={index}>{data[header[1]]}</td>
                            )
                        }
                    })}
                </tr>
            )
        })
    }

    searchData(e) {
        var searchBar = e.target;
        var query, rows, a, i, soldierName, table;
        table = searchBar.closest(".form-group").nextSibling;
        query = searchBar.value.toUpperCase();
        rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

        for (i = 0; i < rows.length; i++) {
            rows[i].classList.remove("hidden");
            let td = rows[i].getElementsByTagName('td');
            soldierName = td[0].textContent || td[0].innerText;
            if (soldierName.toUpperCase().indexOf(query) < 0) {
                rows[i].classList.add("hidden");
            }
        }
    }

    sortTable(e, n) {
        var header = e.target;
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = header.closest(".data-table");
        switching = true;
        dir = "asc";

        while (switching) {
            switching = false;
            rows = table.rows;

            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("td")[n];
                y = rows[i + 1].getElementsByTagName("td")[n];

                let tryIntX = parseInt(x.innerHTML);

                if (dir == "asc") {
                    if (Number.isNaN(tryIntX) || x.innerHTML.includes("/")) {
                        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    } else {
                        if (Number(x.innerHTML) > Number(y.innerHTML)) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                } else if (dir == "desc") {
                    if (Number.isNaN(tryIntX) || x.innerHTML.includes("/")) {
                        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    } else {
                        if (Number(x.innerHTML) < Number(y.innerHTML)) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                }
            }

            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }

    render() {
        return (
            <div>
                <Form.Group>
                    <Form.Control className="table-searchbar" type="text" placeholder={this.state.searchbarPlaceholder} onKeyUp={(e) => this.searchData(e)} />
                </Form.Group>
                <Table striped hover id={this.state.id} className="data-table">
                    <thead>
                        {this.renderTableHead()}
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default DataTable;