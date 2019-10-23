import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

//import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render (
    <Provider store={ store }>
        <BrowserRouter> 
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);