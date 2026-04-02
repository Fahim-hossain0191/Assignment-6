import { Suspense } from 'react'
import './App.css'

import Container from './Components/Card/Container/Container'
import Main from './Components/Home/Main/Main'
import Navbar from './Components/Home/Navbar/Navbar'
import CardContainer from './Components/Card/Cards/CardContainer/CardContainer'
import GetStarted from './Components/GetStarted/GetStarted'
import Pricing from './Components/Pricing/Pricing'


const fetchPlayer=async()=>{
  const res=await fetch("/data.json");
  return res.json();
}

function App() {
 
const promise=fetchPlayer();
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Container></Container>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <CardContainer promise={promise}></CardContainer>
      </Suspense> 
      <GetStarted></GetStarted>
    
     <Pricing></Pricing>
    </>
  )
}

export default App
