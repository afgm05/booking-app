import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; //taken from React-Bootstrap website


const name = 'Faye Manalo';
const element = <h1>Hello, {name}</h1>

//React Fragment = <React.Fragment>....</React.Fragment> shorcut <>...</>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);

