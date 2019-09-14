import React from 'react';
import s from './Footer.module.scss';

function Footer(){
    console.log(s);
    return <footer className={s['footer-container']}>Copyright @2019 Privacy Policy</footer>
}

export default Footer;