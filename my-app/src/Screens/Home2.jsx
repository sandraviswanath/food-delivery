import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TabOptions from '../components/TabOptions'

import NightLife from '../components/NightLife'
import Delivery from '../components/search-Bannercards/Delivery'
import DiningOut from '../components/DiningOut'
import Header from '../components/search-Bannercards/Header'
import NavBar2 from '../components/NavBar2'



function Home2() {
    const [activeTab, setactiveTab] = useState('')
  return (
    <div>
      
      <Header/> 
      <TabOptions activeTab ={activeTab} setactiveTab ={setactiveTab}/>
      {getCorrectScreen(activeTab)}
      {/* <Footer/> */}
    </div>
  )
}

const getCorrectScreen =(tab)=>{
switch (tab){
    case "Delivery": return <Delivery/>;
    case "Dining Out": return <DiningOut/>;
    case "Noghtlife": return <NightLife/>;
    default : return <Delivery/>;
}
}

export default Home2
