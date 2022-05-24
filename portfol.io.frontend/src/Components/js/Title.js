import { Component } from 'react';
import ReactDom from 'react-dom';

class Title extends Component {
    constructor(props) {
        super(props);
        this.titleEl = document.getElementsByTagName("title")[0];
    }
    render() {
        let fullTitle;
        if(this.props.pageTitle) {
            fullTitle = this.props.pageTitle + " | " + this.props.siteTitle;
        } else {
            fullTitle = this.props.siteTitle;
        }

        return ReactDom.createPortal(
            fullTitle || "",
            this.titleEl
        );
    }
}

Title.defaultProps = {
    pageTitle: null,
    siteTitle: "Portfol.io",
};

export default Title;