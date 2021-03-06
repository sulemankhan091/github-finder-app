import React,{ useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'; // StyleSheet for Whole Application.
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './components/context/Github/GithubState';  // State of App Level


const App = () => {

  const [alert, setAlert] = useState(null);
  
  // alert for empty search 
 const showAlert = (msg, type) => {
    setAlert({msg,type})
    setTimeout(() =>  setAlert(null), 3000)
  }
  

  return (
    <GithubState>
      <Router>
      <div className="App">
          <Navbar/>
            <div className="container">
                <Alert alert={alert}/>
          <Switch>
            <Route exact path="/" render={(props) => 
              <Fragment>
          <Search 
            setAlert={showAlert}
          />
          <Users/>      
            </Fragment>
            } />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User}  />
            
          </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
  }

export default App;






// alternative of axios
// const fetchData = async () => {
//   await fetch(`http://api.github.com/users`)
//     .then(res => res.json())
//     .then(data => this.setState({users:data,loading:false}))
//   }
//   fetchData();