import React from 'react';
import { ProductListItem } from '../../components/index';
import { Link, useLocation } from 'react-router-dom';
import s from './LatestView.module.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    latestProductsList: state.products.latestProducts
  }
};

function LatestListView({ latestProductsList }) {
  const location = useLocation();
  return <div className={s.container}>
    <div className={s.grid}>
      {latestProductsList.map((item) =>
        <Link
          className={s.link}
          key={item.id}
          to={{
            pathname: `/products/${item.id}`,
            state: { background: location }
          }}>
          <ProductListItem product={item} />
        </Link>
      )}
    </div>
  </div>
}

export default connect(mapStateToProps)(LatestListView);
