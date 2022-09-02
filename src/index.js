import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import store from './State/state';
// import state, { addPost, updatePostText, assignRender } from './State/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function render() {
  root.render(
    <React.StrictMode>
      <App store={store} />
      {/* <App data={state} addPost={addPost} updatePostText={updatePostText} /> */}
    </React.StrictMode>
  );
}

render();

store.assignRender(render);