import { useState } from "react";
import FavoriteButton from "./FavoriteButton";

const IngredientDetails = ({ ingredient }) => {
  const defaultMeasure = ingredient.measures[ingredient.measures.length -1];

  const [nutrients, setNutrients] = useState(ingredient.nutrient_facts);
  const [selectedMeasure, setSelectedMeasure] = useState(defaultMeasure);
  const [amount, setAmount] = useState(defaultMeasure.qty*100);

  const nutrientHandler = (nextMeasure = selectedMeasure, nextAmount = amount) => {
    const nextNutrients = ingredient.nutrient_facts.map((fact) => ({
      ...fact,
      value: (fact.value / 100) * (nextAmount * nextMeasure.serving_weight),
    }));
    setNutrients(nextNutrients);
  };

  return (
    <div>
      <h1>{ingredient.food_name}</h1>
      <img
        src={ingredient.photo.highres}
        alt={ingredient.food_name}
      />
      <FavoriteButton ingredientId={ingredient.ndb_no}/>

      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
            nutrientHandler(undefined, Number(e.target.value));
          }}
        />

        <label>Measure</label>
        <select
          value={JSON.stringify(selectedMeasure)}
          onChange={(e) => {
            setSelectedMeasure(JSON.parse(e.target.value));
            nutrientHandler(JSON.parse(e.target.value), undefined);
          }}
        >
          {ingredient.measures.map((m, index) => (
            <option key={index} value={JSON.stringify(m)}>
              {m.qty} {m.measure} ({m.serving_weight}g)
            </option>
          ))}
        </select>
      </div>

      <div>
        {nutrients.map((n, index) => (
          <div key={index}>
            <p>{n.label}</p>
            <p>{n.value} {n.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientDetails;