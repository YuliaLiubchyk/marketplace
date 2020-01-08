import React from 'react';
import s from './Input.module.scss';
import { ReactComponent as ShowPassword } from '../../assets/Shape.svg';
import { ReactComponent as HidePassword } from '../../assets/Hide.svg';

class PasswordInput extends React.Component {

    constructor({ name, onChange, ...props }) {
        super();
        this.state = {
            name: name,
            onChange: onChange,
            hidden: true,
            properties: props
        }
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        const state = this.state;
        this.setState({ ...state, hidden: !this.state.hidden });
    }

    render() {
        const name = this.state.name;
        const isHidden = this.state.hidden;
        return <div className={s.inputRectangle}>
            <input {...this.state.properties}
                onChange={(e) => this.state.onChange(name, e.target.value)}
                name={name}
                type={isHidden ? 'password' : 'text'}
                className={s['password-input']} />
            {isHidden
                ? <ShowPassword
                    onClick={this.toggleShow}
                    className={s.show} />
                : <HidePassword
                    onClick={this.toggleShow}
                    className={s.hide} />}

        </div>
    }

}

export default PasswordInput;
