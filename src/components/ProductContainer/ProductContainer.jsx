import React from 'react';
import s from './ProductContainer.module.scss';

function ProductContainer({ product }) {
  return <div className={s.container}>
    <div className={s['image-container']}>
      <img src={product.photos[0]} className={s.image} />
    </div>
    <div className={s.title}>
      {product.title}
    </div>
    <div>
      <span className={s.price}>${product.price}</span>
    </div>
  </div>
}

export default ProductContainer;
