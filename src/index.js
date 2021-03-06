import React from 'react';
import './index.css';
import store from './redux/state.js';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree (store.getState());

store.subscribe(rerenderEntireTree);

