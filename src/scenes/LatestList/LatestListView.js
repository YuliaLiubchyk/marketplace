import React, { Component } from 'react';

class LatestListView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latestProductsList: props.latestProductsList
        }
    }

    render() {
        return this.state.latestProductsList.map((item) => <li key={item.id}>{item.title}</li>);
    }

}

export default LatestListView;
