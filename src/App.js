import './App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {DateComponent} from "./Date";
import {Nutrition} from "./Nutrition"
import {SearchFood} from "./SearchFood";

function App() {

  const [nutrition, setNutrition] = useState([]);
  const [totalNutrition, setTotalNutrition] = useState({
    Calories: 0,
    Protein: 0,
    Carbs: 0,
    Fat: 0,
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
              <Nutrition nutrition={totalNutrition} selectedFoods={nutrition}/>
            </>
          } />
          <Route path="/search" element={<SearchFood setNutrition={setNutrition} setTotalNutrition={setTotalNutrition}/>} />
        </Routes>
      </div>
    </Router>
  );
  
}
export default App;
