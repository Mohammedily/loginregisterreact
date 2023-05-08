import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './component/Login';
import Register from './component/Register';
import home from './component/home';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/home" component={home} />
        </Switch>
       </Router>
    </div>
  );
}

export default App;
