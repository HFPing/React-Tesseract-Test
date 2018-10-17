import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { image: undefined };
  }

  fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileSelectedHandler}/>
        <img alt={'Alt text'} src={this.state.image}/>
      </div>
    );
  }
}

export default App;
