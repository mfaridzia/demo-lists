import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/create">
            Add
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