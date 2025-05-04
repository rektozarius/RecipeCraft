function handleData(response) {
  let data = response.foods[0];
  const cacheKey = data.ndb_no.toString();
  const cacheValue = localStorage.getItem(cacheKey);
  
  if (cacheValue) {
    console.log("cache returned") //////////////////
    const ingredient = JSON.parse(cacheValue);
    return ingredient;
  };

  const ingredient = transformData(data);
  cacheIngredient(ingredient);
  console.log("fetch returned") /////////////////////
  return ingredient;
};

function transformData(data) {
  const nutrientFacts = [
    { label: "Calories", value: data.nf_calories, unit: "kcal" },
    { label: "Total Fat", value: data.nf_total_fat, unit: "g" },
    { label: "Total Carbohydrates", value: data.nf_total_carbohydrate, unit: "g" },
    { label: "Protein", value: data.nf_protein, unit: "g" },
    { label: "Saturated Fat", value: data.nf_saturated_fat, unit: "g" },
    { label: "Cholesterol", value: data.nf_cholesterol, unit: "mg" },
    { label: "Sodium", value: data.nf_sodium, unit: "mg" },
    { label: "Diatery Fiber", value: data.nf_dietary_fiber, unit: "g" },
    { label: "Sugars", value: data.nf_sugars, unit: "g" },
    { label: "Potassium", value: data.nf_potassium, unit: "mg" },
    { label: "Phosphorus", value: data.nf_p, unit: "mg" }
  ];

  data.alt_measures.push({
    serving_weight: 1,
    measure: "g",
    seq: null,
    qty: 1    
  });

  return {
    ndb_no: data.ndb_no,
    food_name: data.food_name,
    photo: data.photo,
    nutrient_facts: nutrientFacts,
    measures: data.alt_measures
  };
};

function cacheIngredient(ingredient) {
  const cacheValue = JSON.stringify(ingredient);
  localStorage.setItem(`${ingredient.ndb_no}`, cacheValue);
};

export default handleData;