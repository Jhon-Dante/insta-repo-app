import React from 'react';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import NoMatch from './screens/404Page/404Page';
import Explore from './screens/Explore/Explore';

class App extends React.Component {
  state={
    isLog:false
  }

  handleLogin = (isLog) => this.setState({isLog})

  render(){
    const {isLog} = this.state;
    let route = <Route path='/*' element={<Home handleLogged={this.handleLogin}/>} />
    if(!isLog){
      route = <Route exact path='/' element={<Login isLogin={this.handleLogin}/>} />
    }
    return (
      <div>
          <Routes>
            {route}
            {/* <Route exact path='/' element={<Home/>} /> */}
            {/* <Route exact path='/explore' element={<Explore/>} />  */}
            <Route path='*' element={<NoMatch />} />
          </Routes>
      </div>
    );
  }
}

export default App;
