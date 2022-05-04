import React from 'react';
import logo from './logo.svg';
import './App.css';
import SiteHeader from './components/header/SiteHeader';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes/routes';

function App() {
    return (
        <div>
            <SiteHeader/>
            <BrowserRouter>
                <RoutesComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;
