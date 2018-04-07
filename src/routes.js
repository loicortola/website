import React, {Component} from 'react';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import work from "./pages/work";
import contact from "./pages/contact";
import aboutme from "./pages/aboutme";
import {connect} from 'react-redux';

class Routes extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <Switch>
          <Route path="/aboutme" component={aboutme.components.AboutMePage}/>
          <Route path="/contact" component={contact.components.ContactPage}/>
          <Route path="/work" component={work.components.WorkPage}/>
          <Redirect exact from="/" to="/aboutme" />
        </Switch>
    )
  }
};

const mapStateToProps = state => {
  return {
    location: state.router.location
  }
};

export default connect(mapStateToProps)(Routes);