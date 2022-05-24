import { Component } from 'react';
import ReactDom from 'react-dom';

class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.headerE1 = document.getElementsByTagName("h1")[0];
    }
    render() {
        let fullTitle;
        fullTitle = this.props.pageTitle;

        return ReactDom.createPortal(
            fullTitle || "",
            this.headerE1
        );
    }
}

PageTitle.defaultProps = {
    pageTitle: null,
};

export default PageTitle;