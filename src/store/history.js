import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

const history = process.browser ? createHistory() : createMemoryHistory();

export default {
  history: history,
  middleware: routerMiddleware(history)
};
