import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function render() {
  console.log('render');
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

render();

store.subscribe(render);