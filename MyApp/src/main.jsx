import "./index.css";
import react from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navBar.jsx";
import MainHeading from "./components/heroSection.jsx";
import "./style.css";
import SparkleField from "./components/dots.jsx";
import HowItWorks from "./components/Working.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <NavBar />
    <SparkleField />
    <MainHeading />
    <HowItWorks />
  </div>,
);
