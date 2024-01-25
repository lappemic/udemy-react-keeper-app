import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// Steps:
// 1. Implement the add note functionality
// 1.1. Create a constant that keeps track of the title and content
// 1.1.1. Use useState to store the title and content in the state
// 1.2. Pass the new note back to the App.js
// 1.3. Add new note to an array

// 2. Implement the delete note functionality
// 2.1. Add a delete button next to each note
// 2.2. Implement the function to delete a note
// 2.2.1. Pass a id over to the App
// 2.2.2. Add the logic to remove a note from the array
