import React from 'react';
import {Footer, Header} from '../../components/index.js';
import LatestList from '../LatestList/LatestListContainer';

function Home() {
  return (
    <div>
      <Header theme="dark"/>
      <LatestList/>
      <Footer/>
    </div>
  );
}

export default Home;
