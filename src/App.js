import React,{ Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      albums:[]
    }
  }
  componentDidMount(){
    axios.get("http://adonisapi.ddns.net:3374/albums").then(res => this.setState({albums:res.data}));
  }
  render(){
  return (
    <div className="section">
      <div className="App">
        <div className="columns">
          
        </div>
      </div>
    </div>
  )};
}

export default App;
