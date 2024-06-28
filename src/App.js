import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import Quote from "./sections/Quote";
import { GlobalStyle } from "./styles/GlobalStyle";
import './App.css';
import JoinSection from "./sections/JoinSection";
import ProcessSection from "./sections/ProcessSection";
//import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessSection />
      <JoinSection />
      {/* <FooterSection /> */}

    </>
  );
}

export default App;
