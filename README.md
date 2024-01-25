# Keeper App

## Description

The Keeper App is a simple, yet effective note-taking application built using React. It allows users to create, view, and delete notes, mimicking the basic functionalities of popular note-keeping services like Google Keep.

## Key Learnings

- **React Basics**: Explored fundamental concepts of React including JSX, components, and props.
- **State Management**: Learned managing and lifting state in React, which is essential for dynamic applications.
- **Event Handling**: Gained experience in handling user interactions such as form submissions and button clicks.
- **Component Lifecycle**: Understood the lifecycle of React components, especially the use of `useState` and `useEffect` hooks.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lappemic/udemy-react-keeper-app.git
   cd udemy-react-keeper-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

## Running the Application

After starting the application with `npm start`, it should be available at [http://localhost:3000](http://localhost:3000). Navigate to this URL in your web browser to interact with the app.

## Project Structure

- **src/index.js**: Entry point of the React application.
- **src/components/**: Folder containing all React components used in the application.
  - **App.jsx**: Main application component.
  - **Note.jsx**: Component for individual notes.
  - **CreateArea.jsx**: Component for creating new notes.
- **public/**: Folder for static files like images and the index.html file.

## Features

- **Create Notes**: Users can add new notes using a simple form.
- **View Notes**: Displays all added notes in a grid format.
- **Delete Notes**: Option to delete notes that are no longer needed.

## Future Enhancements

- Implementing the update functionality for notes.
- Adding user authentication to keep notes private.
- Enabling synchronization of notes across devices.

## Dependencies

- **React**: For building the user interface.
- **npm**: For managing JavaScript dependencies.
