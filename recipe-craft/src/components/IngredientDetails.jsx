import { useState } from "react";
import { createPortal } from "react-dom";
import Title from "./Title";
import modalStyles from "./ModalStyles";

const IngredientDetails = ({ ingredient, onClose, isRecipe}) => {
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
    <>
    {createPortal(
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
        <button style={modalStyles.closeButton} onClick={() => onClose()}>
          Close
        </button>
        {isRecipe && (<button style={modalStyles.addButton} onClick={() => onClose(nutrients, amount, selectedMeasure)}>
          Add
        </button>)}
        <div style={{ gridArea: "title" }}>
          <Title name={ingredient.food_name} />
        </div>

          <div style={{ gridArea: "image" }}>
            <img 
              src={ingredient.photo.highres} 
              alt={ingredient.food_name} 
              style={{ width: "100%", objectFit: "contain", borderRadius: "6px" }}/>
          </div>

          <div style={{ gridArea: "amount" }}>
          <label>Amount</label>
          <input
            type="number"
            style={{ width: "100%" }}
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
              nutrientHandler(undefined, Number(e.target.value));
            }}
          />
          </div>
          <div style={{ gridArea: "measure" }}>
          <label>Measure</label>
          <select
            style={{ width: "100%" }}
            value={JSON.stringify(selectedMeasure)}
            onChange={(e) => {
              const newMeasure = JSON.parse(e.target.value);
              setSelectedMeasure(newMeasure);
              nutrientHandler(newMeasure, undefined);
            }}
          >
            {ingredient.measures.map((m, index) => (
              <option key={index} value={JSON.stringify(m)}>
                {m.qty} {m.measure} ({m.serving_weight}g)
              </option>
            ))}
          </select>
          </div>

        <div style={{ gridArea: "nutrients" }}>
          {nutrients.map((n, index) => (
            <div key={index} style={{ display: "flex"}}>
              <p>{n.label}: {n.value.toFixed(2)} {n.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  )}
  </>
  );
};

export default IngredientDetails;