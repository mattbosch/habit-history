import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'
import SummaryTable from './components/SummaryTable'
import Habits from './components/Habits'
import './App.css'

const habitData = {
  '2024-04-15': 3,
  '2024-06-04': 5,
  '2024-06-05': 5,
  '2024-02-20': 1,
  '2023-08-21': 2,
  '2023-08-22': 6,
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <SummaryTable data={habitData} />
      <button onClick={() => navigate('/habits')}>View My Habits</button>
    </div>
  );
}

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Habit Tracker</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habits" element={<Habits />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
