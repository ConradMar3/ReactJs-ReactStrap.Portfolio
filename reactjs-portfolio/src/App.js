import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);

  }
    render() {
      return(
        <div>
        <Nav />
        </div>
    );
  }
}

export default App;
