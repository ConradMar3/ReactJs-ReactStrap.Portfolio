import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import Header from 'Header.js'

class App extends Component {
  constructor(props) {
    super(props);

  }
    render() {
      return(
        <div>
        <Header />
        </div>
    );
  }
}

export default App;
