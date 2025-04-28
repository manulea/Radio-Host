import React from 'react';
import Header from './components/Header';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <h1>Welcome to the Radio Host Application</h1>
            <p>This is the main application for managing radio hosting functionalities.</p>
        </div>
    );
};

export default App;