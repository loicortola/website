import React from 'react';
import configureStore from '../src/store/configureStore';
import Root from '../src/pages/Root';
import './index.scss';

const store = configureStore();

export default function render() { 
  return <Root store={store} />;
};
