import { useState } from "react";

function CraftRecipePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([""]);

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const recipe = {
      id: Date.now(),
      title,
      description,
      steps: steps.filter(step => step.trim() !== "")
    };

    onCreate(recipe); // callback to save recipe
    setTitle("");
    setDescription("");
    setSteps([""]);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Create a New Recipe</h2>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: "100%" }}
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", minHeight: "80px" }}
      />

      <label>Steps</label>
      {steps.map((step, index) => (
        <div key={index} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
          <textarea
            value={step}
            onChange={(e) => handleStepChange(index, e.target.value)}
            placeholder={`Step ${index + 1}`}
            style={{ flexGrow: 1 }}
          />
          <button type="button" onClick={() => removeStep(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addStep}>+ Add Step</button>

      <br /><br />
      <button type="submit">Create Recipe</button>
    </form>
  );
};

export default CraftRecipePage;