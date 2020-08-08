import axios from 'axios';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import './App.css';
import IndexRouter from './components/router/IndexRouter';
import { apiURL } from './config/env';
import authenticationReducer from './store/reducers/auth';
import jesseReducer from './store/reducers/jesse';

export const history = createBrowserHistory({ basename: '/' });


const reducer = (history) => combineReducers({
  authenticationReducer,
  jesseReducer,
  router: connectRouter(history),
});

const store = createStore(reducer(history), applyMiddleware(ReduxThunk, routerMiddleware(history)));

function App() {
  axios.defaults.baseURL = apiURL;

  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <IndexRouter/>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
