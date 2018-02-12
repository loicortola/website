import React from 'react';
import {IndexRoute, Route} from 'react-router';
// Page Components
import Index from './containers/Index';
import introduction from './pages/introduction';
import NotFound from './components/NotFound';

export default
<Route path='/' component={Index}>
  <IndexRoute protected='true' component={introduction.components.IntroductionPage}/>
  <Route path='introduction' component={introduction.components.IntroductionPage}/>
  <Route path='*' component={NotFound}/>
</Route>
