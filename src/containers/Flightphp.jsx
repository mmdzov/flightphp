import { Route, Switch } from "react-router";
import About from "../components/About/About";
import Install from "../components/Install/Inatall";
import Learn from "../components/Learn/Learn";
import FlightphpWrapper from "../HOC/FlightphpWrapper";
import MainLayout from "../layouts/MainLayout";
import "./Flightphp.css";

const Flightphp = () => {
  return (
    <Switch>
      <MainLayout>
        <Route path='/' exact component={About} />
        <Route path='/install' exact component={Install} />
        <Route path='/learn' exact component={Learn} />
      </MainLayout>
    </Switch>
  );
};

export default FlightphpWrapper(Flightphp);
