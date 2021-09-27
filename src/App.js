import './App.css';
import Login from './Components/Login';
import Main from './Components/Main';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Redirect to="/login"></Redirect></Route>
        <Route path="/login" component={Login}/>
        <Route path="/main" component={Main}/>
      </Switch>
    </div>
  );
}

export default App;