import { NutritionBar } from "./NutritionBar";


export const Nutrition = ({nutrition, selectedFoods}) => {
    return (
      <div>
        <NutritionBar type="Calories" value={nutrition.Calories} max={2623} />
        <NutritionBar type="Protein" value={nutrition.Protein} max={163.9} />
        <NutritionBar type="Carbs" value={nutrition.Carbs} max={295.1} />
        <NutritionBar type="Fat" value={nutrition.Fat} max={87.4} /> 
        {selectedFoods.map((food, index) => (
          <div className="selected-food" key={index}>
            {food.name} - {food.brand ? `Brand: ${food.brand}` : 'Generic'}
          </div>
        ))}
      </div>
    );
  }