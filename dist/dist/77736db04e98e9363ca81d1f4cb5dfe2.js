import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
require("file?name=index.html!./index.html");


ReactDOM.render(<App /> , document.getElementById('app'));