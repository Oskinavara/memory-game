import 'bootstrap/dist/css/bootstrap.css';
import 'pretty-checkbox/src/pretty-checkbox.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
