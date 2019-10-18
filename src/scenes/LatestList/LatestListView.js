import React, {Component} from 'react';
import {ProductContainer} from '../../components/index';
import s from './LatestView.module.scss';

class LatestListView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latestProductsList: props.latestProductsList
    }
  }

  render() {
    const productsList = this.state.latestProductsList;
    return <div className={s.container}>
      <div className={s.grid}>
        {productsList.map((item) => <ProductContainer key={item.id} product={item}/>)}
      </div>
    </div>


  }

}

export default LatestListView;
