import { useEffect, useState } from "react";

function useNutrients(ingredients) {
  const [nutrients, setNutrients] = useState([]);

  useEffect(() => {
    const handleNutrients = () => {
      let total = {};

      ingredients.forEach((i) => {
        i.nutrients.forEach((n) => {
          if (!total[n.label]) {
            total[n.label] = { ...n };
          } else {
            total[n.label].value += n.value;
          }
        });
      });
      total = Object.values(total);
      setNutrients(total);
    };
    handleNutrients();
  }, [ingredients]);

  return nutrients;
}

export default useNutrients;