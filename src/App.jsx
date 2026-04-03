
import './App.css'

import Container from './Components/Card/Container/Container'
import Main from './Components/Home/Main/Main'
import Navbar from './Components/Home/Navbar/Navbar'
import CardContainer from './Components/Card/Cards/CardContainer/CardContainer'
import GetStarted from './Components/GetStarted/GetStarted'
import Pricing from './Components/Pricing/Pricing'
import Bottom from './Components/Bottom/Bottom'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'




function App() {

const [count,setCount]=useState([]);
  return (
    
    <>
      <Navbar count={count} setCount={setCount}></Navbar>
      <Main></Main>
      <Container count={count} setCount={setCount}></Container>
      <GetStarted></GetStarted>
      
     <Pricing></Pricing>
     <Bottom></Bottom>
     <Footer></Footer>
    </>
  )
}

export default App
