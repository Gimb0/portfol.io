import React from 'react';
import Select, { components, createFilter } from 'react-select';
import { FixedSizeList as List } from "react-window";

const Placeholder = props => {
    return <components.Placeholder {...props} />;
};

class OwnedShareSelect extends React.Component {

    state = {
            selectedOption: null,
            ownedShares: [],
            shares: [],
    }

    componentDidMount() {
        fetch("/ownedshares", {
            method: "GET",
            headers: {
                "Authorization": sessionStorage.getItem("token"),
            }
        })
        .then(resp => resp.json())
        .then(data => {
            for (var k in data) {
                if (data.hasOwnProperty(k)) {
                    this.state.shares.push({ value: data[k].symbol, label: data[k].symbol });
                }
            }
        });
    }

    

    handleChange = selectedOption => {
        this.setState({selectedOption});
    };

    render() {
        return (
            <div className="wrap-input100">
                <Select
                    value={this.state.selectedOption}
                    name="shareTicker"
                    onChange={this.handleChange}
                    filterOption={createFilter({ ignoreAccents: false })}
                    components={{ MenuList }}
                    placeholder={'Select Share...'}
                    styles={{
                        placeholder: base => ({
                            ...base,
                            fontSize: '16px',
                            fontWeight: 400,

                        }),
                    }}
                    options={this.state.shares} />
            </div>
        );
    }
}

export default OwnedShareSelect;

const height = 35;
const options = []

class MenuList extends React.Component {
    render() {
        const { options, children, maxHeight, getValue } = this.props;
        const [value] = getValue();

        return (
            <List
              height={maxHeight}
              itemCount={children.length}
              itemSize={height}
            >
              {({ index, style }) => <div style={style}>{children[index]}</div>}
            </List>
          );
    }
}