import React from 'react';
import { ReactComponent as Logo } from '../../assets/Logofull.svg';
import { ReactComponent as Heart } from '../../assets/Heart.svg';
import { Link } from 'react-router-dom';
import { HOME, LOGIN, ADD_PRODUCTS } from '../../constants/routesConstants';
import s from './Header.module.scss';
import Api from '../../api/index';
import Logout from '../Logout/Logout';

function Header(props) {
  return (<div className={`${s.header} ${s[`${props.theme}`]}`}>
    <header>
      <div className={s.logo}>
        <Logo className={s[`${props.theme}`]} />
      </div>
      <Link to={HOME} className={`${s.link} ${s[`${props.theme}`]} ${s['link-header']}`}>
        <Heart className={s[`${props.theme}`]}/>
      </Link>
      {Api.Auth.isLoggedIn
        ? <Logout />
        : <Link to={LOGIN} className={`${s.link} ${s[`${props.theme}`]}`}>
          Login</Link>
      }
      <div className={s.button}>
        <Link to={ADD_PRODUCTS} className={s['button-label']}> Sell </Link>
      </div>
    </header>
  </div>);
}

export default Header;
