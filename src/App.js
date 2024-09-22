import logo from './logo.svg';
import './App.css';
//develop a frontend web application using React.js
//The App component is the root component of the application. It is the parent component that contains all the other components.
//The App component renders the logo, a paragraph, and a link to the React.js website.
//The theme for the App component is defined in the App.css file.
//The logo is imported from the logo.svg file.
//The App component is exported as the default component.
//The App component is imported in the index.js file and rendered to the DOM.
//The App component is tested in the App.test.js file.
//The App component is a functional component that returns JSX.
//Build a cricket themed web application using React.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
