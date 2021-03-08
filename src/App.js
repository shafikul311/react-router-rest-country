import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Nomatch from './component/CountryDetails/Nomatch/Nomatch';
import CountryDetails from './component/CountryDetails/CountryDetails';


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/country/:alpha3Code">
          <CountryDetails/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <Nomatch/>
        </Route>

       
      </Switch>
    </Router>

  
  );
}

export default App;
