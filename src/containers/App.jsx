import { BrowserRouter as Router } from "react-router-dom";
import Flightphp from "./Flightphp";
import "./App.css";
const App = () => {
  return (
    <div className=''>
      <Router>
        <Flightphp />
      </Router>
    </div>
  );
};

export default App;
