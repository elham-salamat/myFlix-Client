// creation of a small, working React app

import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import movieApp from './reducers/reducers';

import MainView from './components/main-view/main-view';


//import statement to indicate that the './index.scss' needs to be bundled
import './index.scss';

const store = createStore(movieApp, devToolsEnhancer());

// Main component 
class MyFlixApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <MainView />
                </Container>
            </Provider>
        );
    }
}

//find the root of the app
const container = document.getElementsByClassName('app-container')[0];

//tell React to render the app in the DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);