import { useState } from "react";

function CraftRecipe({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
    <form>
      <h2>Craft a New Recipe</h2>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Create Recipe</button>
    </form>      
    </>
  );
};

export default CraftRecipe;