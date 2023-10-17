import React, {useState} from "react";
import axios from "axios";

export const SearchFood = ({setNutrition}) => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const SearchFood = async() => {
        const response = await axios.get("https://api.nal.usda.gov/fdc/v1/foods/search?api_key=7O7Ef2vJD1yhj8wpufeQd1uJaSQHcXUolOeUVfrP&query=${}");
        setResults(response.data.foods);
    };

    const selectFood = (food) => {
        setNutrition({
            Calories: food.nutrients[208].amount,
            Protein: food.nutrients[203].amount,
            Carbs: food.nutrients[205].amount,
            Fat: food.nutrients[204].amount,
        });
        setSearch("");
        setResults([]);
    };

    return(
        <div className="search-container">
            <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)}
            />
            <button onClick={SearchFood}>Search</button>
            {results.map((food) => (
                <div key = {food.fdcId} onClick = {() => selectFood(food)}>
                    {food.description}
                </div>
            ))}
        </div>
    );
};