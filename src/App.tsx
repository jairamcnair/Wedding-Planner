
// source: https://stackoverflow.com/questions/69866581/property-exact-does-not-exist-on-type

import * as React from 'react'
import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
//import { render } from 'react-dom';
import {Home, Foo, Bar} from './components/Components';
import Budget from './components/Budget.tsx'; // line 23
import './components/SideMenu.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
              <div className="side-menu-section">
                <h1> Budget + Guest List</h1>
                <span className="side-menu-span"> <Link to="/budget">Budget</Link></span>
                <span className="side-menu-span"> <Link to="/Chart.tsx"> Guest List </Link></span>
                </div>
            <Link to="/">Home</Link>
            <Link to="/foo">Budget</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/budget" element={<Budget></Budget>}/>
            <Route path="/bar" element={<Bar></Bar>} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;

/* CORRECT
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/foo">Budget</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/foo" element={<Budget></Budget>}/>
            <Route path="/bar" element={<Bar></Bar>} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
//render(<App />, document.getElementById('root'));
*/































