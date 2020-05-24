import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import MedicalRecordpage from './components/MedicalRecord/MedicalRecordpage';
import NavBar from './components/NavBar/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/medicalRecord" component={MedicalRecordpage}/>
          </Switch>        
        </div>
      </Router>
    );
  }
}

export default App;