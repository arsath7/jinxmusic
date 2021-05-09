import "./App.css";
import Dashb from './dashb';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react'; 
import Login from './login';

function App() {

  const [token, setToken] = useState();

  //if(!token) {
   // return(<div className='ip'> <Login setToken={setToken} /> </div>);
  //}

  return (

    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Dashb />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}
export default App;