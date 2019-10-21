import React from 'react';
import s from './ProductView.module.scss';

function ProductView({ product }) {
    return <div className={s.container}>
        <div className={s['image-container']}>
            <img src={product.photos[0]} className={s.image} alt="" />
        </div>
        <div className={s.title}>
            {product.title}
        </div>
        <hr className={s.line} />
        <div className={s.text}>
            {product.description}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam ac diam nec velit pellentesque aliquam.
            Aliquam et interdum justo, non cursus diam.
            Duis sed est risus. Vestibulum finibus massa et lacinia luctus.
            Maecenas rutrum lobortis iaculis. Nam vel iaculis dui, consectetur
            iaculis lacus.
        </div>
        <div>
            <div className={s['seller-button']}>
                chat with seller
        </div>
            <div className={s['favourite-button']}>
                <span>add to favourite</span>
            </div>
        </div>
    </div>
};

export default ProductView;