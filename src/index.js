import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, compose, createStore} from 'redux';
import reducers from './reducers/index';
import App from './components/App';

const composeEnhancers = (process.env.NODE_ENV !== 'test' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
    );

    ReactDom.render( 
            <Provider store={store}>
            <App /> 
            </Provider>,
            document.querySelector('#root')
        );