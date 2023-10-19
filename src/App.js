import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DateComponent } from "./Date";
import { Nutrition } from "./Nutrition";
import { SearchFood } from "./SearchFood";

function App() {
  const [nutrition, setNutrition] = useState([]);
  const [totalNutrition, setTotalNutrition] = useState({
    Calories: 0,
    Protein: 0,
    Carbs: 0,
    Fat: 0,
  });

  const removeFood = (index) => {
    setNutrition((prevState) => prevState.filter((_, i) => i !== index));

    setTotalNutrition((prevTotal) => ({
      Calories: prevTotal.Calories - nutrition[index].Calories,
      Protein: prevTotal.Protein - nutrition[index].Protein,
      Carbs: prevTotal.Carbs - nutrition[index].Carbs,
      Fat: prevTotal.Fat - nutrition[index].Fat,
    }));
  };

  return (
    <Router>
      <div>
        <h1>ChauMeter</h1>
        <div className="link-container">
          <Link to="/">Home</Link>
          <Link to="/search">Search Food</Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DateComponent />
                <Nutrition
                  nutrition={totalNutrition}
                  selectedFoods={nutrition}
                  removeFood={removeFood}
                />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <SearchFood
                setNutrition={setNutrition}
                setTotalNutrition={setTotalNutrition}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
