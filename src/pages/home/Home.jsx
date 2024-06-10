import React from 'react'
import "./style.scss";
import HerBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
const Home = () => {
  return (
    <div className="homePage">
      <HerBanner/> 
      <Trending/>
      <Popular/>
      <TopRated/>
      </div>
  )
}

export default Home