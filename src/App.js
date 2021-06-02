import "./App.css";
import Home from "./page/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//!https://megaone.acrothemes.com/index-food-delivery.html
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
