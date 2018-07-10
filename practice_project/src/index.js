import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


/**
 * 
 * props
 * - page_title
 *   the string displays at the center of the header section
 */
function Header(props){
    return(
        <div className="Header">
            <div className="Title">
                {props.page_title}
            </div>
        </div>
    )
}

const header = {
    page_title: 'Signup'
};
var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');


ReactDOM.render(
    <Header 
        page_title = {header.page_title}
    />, 
    document.getElementById('root')
);


registerServiceWorker();