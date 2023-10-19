import React, { useState } from "react";
import axios from "axios";

export const SearchFood = ({ setNutrition, setTotalNutrition }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const SearchFood = async () => {
    const response = await axios.get(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=7O7Ef2vJD1yhj8wpufeQd1uJaSQHcXUolOeUVfrP&query=${search}`
    );
    setResults(response.data.foods);
  };

  const selectFood = (food) => {
    const getNutrientAmount = (id) => {
      const nutrient = food.foodNutrients.find(n => n.nutrient && n.nutrient.id === id);
      return nutrient ? nutrient.amount : 0;
    };
  
    const newFood = {
      name: food.description,
      brand: food.brandOwner,
      Calories: getNutrientAmount(208),
      Protein: getNutrientAmount(203),
      Carbs: getNutrientAmount(205),
      Fat: getNutrientAmount(204),
    };
      
    setNutrition(prevState => [...prevState, newFood]);
      
    setTotalNutrition(prevTotal => ({
      Calories: prevTotal.Calories + newFood.Calories,
      Protein: prevTotal.Protein + newFood.Protein,
      Carbs: prevTotal.Carbs + newFood.Carbs,
      Fat: prevTotal.Fat + newFood.Fat,
    }));
      
    setSearch("");
    setResults([]);
  };
  

  return (
    <div className="search-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "3.5%", paddingTop: "20px" }}>
      <div className="search-bar" style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={SearchFood}>Search</button>
      </div>
      {results.map((food) => (
        <div key={food.fdcId} onClick={() => selectFood(food)}>
          {food.description} - {food.brandOwner ? `Brand: ${food.brandOwner}` : 'No brand'}
        </div>
      ))}
    </div>
  );
};
