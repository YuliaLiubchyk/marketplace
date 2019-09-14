import React from 'react';
import s from './Home.module.scss';
import { Header, Footer } from '../../components/index.js';

function Home() {
    return (
        <div>
            <Header theme="dark" />
            <div className={s.container}>Home</div>
            <Footer />
        </div>
    );
}

export default Home;