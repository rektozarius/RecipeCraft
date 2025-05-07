import nutrientFacts from "../common/nutrientFacts";

// Transforms and returns data in a convenient format
function transformData(response) {
  let data = response.foods[0];

  // Grabs nutrientFacts schema and populates it with values from fetched data
  nutrientFacts.map((nutrient) => {
    const match = Object.entries(data).find(
      ([key, value]) => (key.startsWith("nf_") && 
        key.slice(3) === nutrient.label.toLowerCase().replace(" ", "_"))
    );
    nutrient["value"] = match[1];
    return nutrient;
  });

  // Default measure for use in measure selection
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

export default transformData;