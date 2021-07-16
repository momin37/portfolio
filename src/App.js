import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import FunDemo from './components/FunDemo';


function App() {
  return (
    <div className="App">
    <>
      <Router>
       <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/FunDemo" exact component={FunDemo} />
          </Switch>
      </Router>

      </>
    </div>
  );
}

export default App;
