import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import { Routes, Route, Link } from "react-router-dom";


const HatsPage = props => {
  console.log(props);
  return (
  <div>
    <Link to='/'>HomePage</Link>
    <button onclick={() => props.history.push('/HomePage')}>HomePage</button>
    <h1>HATS PAGE</h1>
  </div>)
};

const HatsDetailPage = props => {
  console.log(props);
  return (
  <div>
    <h1>HATS PAGE: {props.match.params.topicId}</h1>
  </div>
  );
};

function App() {
  return (
    <div>
      <h1>EXXXXTRRRAA</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hats' element={<HatsPage />} />
        <Route path='/hats/:hatsId' element={<HatsDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
