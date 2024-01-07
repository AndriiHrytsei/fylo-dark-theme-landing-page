import AppBar from "../AppBar/AppBar";
import Main from "../Main/Main";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import StayProductive from "../StayProductive/StayProductive";
import Feedback from "../Feedback/Feedback";
import GetEarlyAccess from "../GetEarlyAccess/GetEarlyAccess";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <AppBar />
      <Main>
        <Hero />
        <Features />
        <StayProductive />
        <Feedback />
        <GetEarlyAccess />
      </Main>
      <Footer />
    </>
  );
}

export default App;
