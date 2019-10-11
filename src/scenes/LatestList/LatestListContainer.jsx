import React from 'react';
import LatestListView from './LatestListView';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    latestProductsList: state.products.latestProducts
  }
};

function LatestList({latestProductsList}) {
  if(!latestProductsList){
    return <div>Loading...</div>
  }
  return <LatestListView
    latestProductsList={latestProductsList}
  />
}

export default connect(mapStateToProps)(LatestList);

