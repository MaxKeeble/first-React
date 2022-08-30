import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import state, { addPost } from './State/state';

export default function render() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App data={state} addPost={addPost} />
    </React.StrictMode>
  );
}