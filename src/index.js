import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import About from './About'
import Skills from './Skills'
import Portafolios from './Portafolios'


class Container extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/portafolio" component={Portafolios} />
      </Router>
    )
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
