import "./App.css";
import Navbar from "./component/navbar/navbar";
import "bootstrap/scss/bootstrap.scss";
// import Slick from "./component/slick/slick"
import Slickcl from "./component/slick/slickclass";
import UclikSlide from "./component/slick/slickuc";
import Main from "./component/main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./component/signin/signin";
import Signup from "./component/signin/signup";
import Xeberler from "./component/xeberler/xeberler";
import Xeber from "./component/xeberler/xeber";
import Tedbirler from "./component/tedbirler";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Slickcl />
          <UclikSlide />
          <Main />
        </Route>
        <Route exact path="/daxilol">
          <Signin />
        </Route>
        <Route exact path="/qeydiyyat">
          <Signup />
        </Route>

        <Route exact path="/xeberler">
          <Xeberler />
        </Route>

        <Route exact path="/xeber">
          <Xeber />
        </Route>

        <Route exact path="/tedbirler">
          <Tedbirler />
        </Route>
      </Router>
    </>
  );
}

export default App;
