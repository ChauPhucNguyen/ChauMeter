import './App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {DateComponent} from "./Date";
import {Nutrition} from "./Nutrition"
import {SearchFood} from "./SearchFood";


function App() {

  const [nutrition, setNutrition] = useState({
    Calories: 0, // in kcal
    Protein: 0, // in grams
    Carbs: 0, // in grams
    Fat: 0, // in grams
  });

  return (
    <Router>
      <div>
        <h1>ChauMeter</h1>
        <div className="link-container">
          <Link to="/">Home</Link>
          <Link to="/search">Search Food</Link>
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <DateComponent/>
              <Nutrition nutrition={nutrition}/>
            </>
          } />
          <Route path="/search" element={<SearchFood setNutrition={setNutrition}/>} />
        </Routes>
      </div>
    </Router>
  );
  
}
export default App;
