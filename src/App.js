import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "pages/Home";
import AddData from "pages/AddData";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/create">
            <AddData />
          </Route>
          <Route path="/update/:uuid">
            Update Data
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}