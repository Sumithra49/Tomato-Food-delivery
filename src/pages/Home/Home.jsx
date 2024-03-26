import React, { useState } from 'react';
import AppDownload from '../../components/AppDownload/AppDownload';
import Menu from '../../components/ExploreMenu/Menu';
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import './Home.css';


const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
    <Header/>
    <Menu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category} />
    <AppDownload/>
    </div>
  )
}

export default Home