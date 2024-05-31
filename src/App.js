import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutil - Dark Mode";
      // setInterval(()=>{
      //   document.title = 'Textutil is Amazing Mode'
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install Textutil Now'
      // },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutil - Light Mode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Textutil"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* users --> components 1 (use exact to access perfect match)
            users/home --> components 2 */}
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm
                heading="Enter the text to analyze below"
                showAlert={showAlert}
                mode={mode}
              />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
