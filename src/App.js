import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img className="App-logo" src={logo} alt="" />
            <Link to="/"><h1>A11y PR</h1></Link>
            <nav className="App-nav">
              <ul>
                <li><Link to="/list">List</Link></li>
                <li><Link to="/add">Add</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Route path="/" exact={true} component={() => <p>Let's fix some things!</p>} />
            <Route path="/list" component={List} />
            <Route path="/add" component={Add} />
          </main>
        </div>
      </Router>
    );
  }
}

const List = () => <h2>List</h2>;
const Add = () => <h2>Add</h2>;

export default App;