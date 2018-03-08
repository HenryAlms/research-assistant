import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let config:Object = {
    apiKey: "AIzaSyDeLU3RM4euNLdTEmJEylZWwpuby8npAac",
    authDomain: "research-assistant-ae878.firebaseapp.com",
    databaseURL: "https://research-assistant-ae878.firebaseio.com",
    projectId: "research-assistant-ae878",
    storageBucket: "research-assistant-ae878.appspot.com",
    messagingSenderId: "367187460852"
  };

  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
