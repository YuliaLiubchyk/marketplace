import React from 'react';
import s from './Button.module.scss';

const Button = ({ labelValue, ...rest }) => {
    return <div className={s['button-container']} {...rest}>
        <div className={s.button}>
            <span>
                {labelValue}
            </span>
        </div>
    </div>
};

export default Button;