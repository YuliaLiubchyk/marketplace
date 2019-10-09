import React from 'react';
import { ReactComponent as Logo } from '../../assets/Logofull.svg';
import { Link } from 'react-router-dom';
import { routes } from '../../scenes/routes';
import s from './Header.module.scss';
import Api from '../../api/index';
import Logout from '../Logout/Logout';

function Header(props) {
    return (<div className={`${s.header} ${s[`${props.theme}`]}`}>
        <header>
            <div className={s.logo}>
                <Logo className={s[`${props.theme}`]} />
            </div>
            <Link to={routes.home} className={`${s.link} ${s[`${props.theme}`]} ${s['link-header']}`}>
                Header
            </Link>
            {Api.Auth.isLoggedIn
                ? <Logout/>
                : <Link to={routes.login} className={`${s.link} ${s[`${props.theme}`]}`}>
                    Login</Link>
            }
        </header>
    </div>);
}

export default Header;