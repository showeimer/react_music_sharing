import React, { Component } from 'react';
import '../styles/App.css';

// COMPONENTS
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="form_list_wrapper">
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
