import React from 'react';
import {ReactComponent as Logo} from '../../assets/Logofull.svg';
import {ReactComponent as Heart} from '../../assets/Heart.svg';
import {Link} from 'react-router-dom';
import {ADD_PRODUCTS, HOME, LOGIN} from '../../constants/routesConstants';
import s from './Header.module.scss';
import Api from '../../api/index';
import Logout from '../Logout/Logout';

function Header(props) {
  return (<div className={`${s.header} ${s[`${props.theme}`]}`}>
    <header>
      <Link to={HOME} className={s.logo}>
        <Logo className={` ${s[`${props.theme}`]} ${s['logo-fon']}`}/>
      </Link>
      <div className={s.wrapper}>
        <div>
        <div className={s.button}>
          <Link to={ADD_PRODUCTS} className={s['button-label']}> Sell </Link>
        </div>
        </div>
      </div>
      <div className={s.profileWrapper}>
        {Api.Auth.isLoggedIn ? <Logout/> : <Link to={LOGIN} className={`${s.link} ${s[`${props.theme}`]}`}>Login</Link>}
        <Link to={HOME} className={`${s[`${props.theme}`]}`}>
          <Heart className={s[`${props.theme}`]}/>
        </Link>
      </div>
    </header>
  </div>);
}

export default Header;
