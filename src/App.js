import React from 'react';
import './App.css';
import Menux from './component/Menu.js';
import { TodoApp } from './component/TodoApp';
import { Login } from './component/Login'
import {Signup} from './component/Signup.js'
import moment from "moment";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/home" component={HomeView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/signup" component={SignupView} />
          </Switch>
        </Router>

      </div>
    );
  }
}

const items = [{
  description: "some description text ",
  responsible: {
    name: "Santiago Carrillo",
    email: "sancarbar@gmail"
  },
  status: "ready",
  dueDate: moment(new Date(156464645646))
}]


const LoginView = () => (
  <div>
    {localStorage.getItem('isLoggedIn') ? <div><Menux /><TodoApp todoList={items} /> </div> : <Login />}
  </div>
);

const HomeView = () => (
  <div>
    {localStorage.getItem('isLoggedIn') ? <div><Menux /><TodoApp todoList={items} /> </div> : <Login />}
  </div>
);

const SignupView = () =>(
  <div>
    {localStorage.getItem('isLoggedIn') ? <div><Menux /><TodoApp todoList={items} /> </div> : <Signup />}
  </div>
);

