import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory } from 'react-router'
//FIXME when working again import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import Root from './containers/Root';

const store = configureStore();

//FIXME when router 4.0 is working again
// const history = syncHistoryWithStore(browserHistory, store);


ReactDom.render(
    // FIXME when working again
    // <Root store={store} history={history} />, document.getElementById('app')
    <Root store={store} />, document.getElementById('app')
);
