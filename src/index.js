import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function render() {
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  );
}

render();

store.subscribe(render);