import React from "react"
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from "./Home"
import HomeNav from "./HomeNav";
import PlanTrip from "./PlanTrip";
import Things from "./Things";
import Event from "./Event";
import Footer from "./Footer"
import Contact from "./Contact"
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Term from "./Term";
import LogoNav from "./mona/LogoNav";
import Forget from "./Forget";
import Crusing from "./Crusing";
import Hike from "./Hike";
import Seaside from "./Seaside";


function App() {
  return (
    <div>
      <Router>
        <HomeNav />
      <Switch>
        {/* <Route exact path = "/">
          <HomeNav />
        </Route> */}

<Route exact path = "/">
          <Home/>
        </Route>

        <Route exact path = "/plantrip">
          <PlanTrip/>
        </Route>

        <Route exact path = "/event">
          <Event />
        </Route>

        <Route exact path = "/things">
          <Things />
        </Route>

        <Route exact path = "/contact">
          <Contact />
          </Route>
          <Route exact path = "/login">
          <Login />
        </Route>
        <Route exact path = "/register">
          <Register />
        </Route>
        <Route exact path = "/about">
          < About/>
        </Route>
        <Route exact path = "/term">
          < Term/>
        </Route>
        <Route exact path = "/logonav">
          < LogoNav/>
        </Route>
        <Route exact path = "/forget">
          <Forget/>
        </Route>
        <Route exact path = "/crusing">
          <Crusing/>
        </Route>
        <Route exact path = "/hike">
          <Hike/>
        </Route>
        <Route exact path = "/seaside">
          <Seaside/>
        </Route>
      </Switch>
      {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
