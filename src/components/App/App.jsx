import AppBar from '../AppBar/AppBar'
import Features from '../Features/Features'
import Hero from '../Hero/Hero'
import StayProductive from "../StayProductive/StayProductive"
import Main from '../Main/Main'
import './App.css'


function App() {
  return (
    <>
      <AppBar />
      <Main>
        <Hero />
        <Features />
        <StayProductive />
      </Main>
    </>
  )
}

export default App
