import React, { Component } from 'react';

class LatestListView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latestProductsList: props.latestProductsList
        }
    }

    render() {
        return <div></div>
        //this.state.latestProductsList.map((item) => <li>item</li>);
    }

}

export default LatestListView;
