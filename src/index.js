import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import Root from './pages/Root';
import styles from './index.scss';
const store = configureStore();

ReactDom.render(<Root store={store} />, document.getElementById('app'));
