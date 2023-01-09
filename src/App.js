import Navbar from "./components/navbar";
import "./App.css";
import Inro from "./components/intro";
import Services from "./components/services";
import Experience from "./components/experience";
import Works from "./components/works";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { ThemeContext } from "./context/theme";
import { useContext } from "react";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Inro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
