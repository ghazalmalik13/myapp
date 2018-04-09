import * as React from 'react';
import './App.css';
import MenuBar from './MenuBar.component';

const logo = require('./logo.svg');
const menuItems = [
  {
    icon: 'settings',
    name: 'Settings'
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <MenuBar menuItems={menuItems} />
        </p>
      </div>
    );
  }
}

export default App;
