import React, {useEffect} from 'react'
import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import {auth} from './firebase';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login'
import {useStateValue} from './StateProvider';


function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER >>>>>", authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }else{
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [])
  
  return (
    <div className="app">
        <Router>
          {!user ? (
            <Login />
          ):(
            <>
            <Switch>
            <Route path="/">
            <Sidebar />
            <Feed />
            <Widgets />
            </Route>
          </Switch>
            </>
          )}
          </Router>
        </div>
  );
}

export default App;
