import React, { useState } from 'react';
import s from './Input.module.scss';
import { ReactComponent as ShowPassword } from '../../assets/Shape.svg';
import { ReactComponent as HidePassword } from '../../assets/Hide.svg';

function PasswordInput({ name, onChange, ...props }) {
    const [isHidden, setHidden] = useState(true);
    const toggleShowHide = () => setHidden(!isHidden);

    return <div className={s.inputRectangle}>
        <input {...props}
            onChange={(e) => onChange(name, e.target.value)}
            name={name}
            type={isHidden ? 'password' : 'text'}
            className={s['password-input']} />
        {isHidden
            ? <ShowPassword
                onClick={toggleShowHide}
                className={s.show} />
            : <HidePassword
                onClick={toggleShowHide}
                className={s.hide} />
        }
    </div>
}

export default PasswordInput;
