import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import birdApp from './store/birds/birds';

const store = createStore(birdApp) ;
// => {
  // birds: [
  //   {
  //     name: 'robin',
  //     views: 1
  //   }
  // ]
// }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);