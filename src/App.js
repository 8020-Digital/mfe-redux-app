import React from 'react';

import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';

const route2 = () => {
  return (
    <div>
      <h3>Route 2 do browser</h3>

      <button>
        <Link to="/route3">
          Navigate to router 3 of browser
        </Link>
      </button>
    </div>
  )
}

const route3 = (props) => {
  const { history } = props
  return (
    <div>
      <h3>Route 3 do Browser</h3>
      <button onClick={() => { history.replace("/") }}>Navigate to Home</button>
      <button onClick={() => { history.goBack() }}>Back</button>
      <button onClick={() => { history.push("/route4") }}>Navigate to Route 4</button>

    </div>
  )
}

function App(props) {
  let history = props.history || createBrowserHistory()
  return (
    <Router history={history} >
      <Switch>
        <Route exact path="/" component={() => <div><h3>Index do Browser</h3></div>} />
        <Route exact path="/route1" component={() => <div><h3>Route 1 do Browser</h3></div>} />
        <Route exact path="/route2" component={route2} />
        <Route exact path="/route3" component={route3} />
        <Route exact path="/route4" component={() => <div><h3>Route 4 do Browser </h3></div>} />
      </Switch>
    </Router>
  );
}

export default App;
