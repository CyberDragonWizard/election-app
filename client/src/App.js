import './App.css';
import Home from '../src/screens/home/Home'
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
    </div>
  );
}

export default App;
