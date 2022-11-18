import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.scss';

import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route exact path="/other" element={<OtherPage />}></Route>
          </Route>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
