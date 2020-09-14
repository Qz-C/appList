
// is needed to JSX works
import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './App';

//Is used only one time in the whole application
//This is used to import the component APP to to the root div inside the HTML
//App
ReactDOM.render(<App />, document.getElementById('root'));

