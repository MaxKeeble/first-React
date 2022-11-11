import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("index");
export default function render() {
  console.log('render');
  root.render(
      <Provider store={store}>
        <App />
      </Provider>
  );
}

render();

// store.subscribe(render);