import "./index.css";
import react from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navBar.jsx";
import "./style.css";
import SparkleField from "./components/dots.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <NavBar />
    <SparkleField />
  </>,
);
