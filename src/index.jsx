// creation of a small, working React app

import React from 'react';
import ReactDOM from 'react-dom';

//import statement to indicate that the './index.scss' needs to be bundled
import './index.scss';

// Main component 

class MyFlixApplication extends React.Component {
    render() {
        return (
            <div className="my-flix">
                <div>Good morning</div>
            </div>
        );
    }
}

//find the root of the app
const container = document.getElementsByClassName('app-container')[0];

//tell React to render the app in the DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);