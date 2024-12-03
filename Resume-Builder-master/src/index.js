import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/dist/modal";
import {BrowserRouter  as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ReduxManager/Store.jsx'
import App2 from './App2.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
        <Provider store={store}>
            {/* <App2 /> */}
            <App2/>
        </Provider>
      
    </Router>
 
);
