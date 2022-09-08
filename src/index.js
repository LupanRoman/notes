import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Workspace from './components/Workspace';
import { Context } from './lib/StateContext';
import Notes from './components/Notes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/workspace' element={<Workspace />}/>
    <Route path='/notes' element={<Notes />}/>
    </Routes>
    </BrowserRouter>
    </Context>
);

