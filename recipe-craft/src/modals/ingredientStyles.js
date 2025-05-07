const modalStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    overflowY: "auto",
  },
  content: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: "2rem",
    borderRadius: "12px",
    width: "100%",
    minWidth: "500px",
    maxWidth: "600px",
    display: "grid",
    gridTemplateAreas: `
      ". ."
      ". ."
      "title title"
      "image form"
      "nutrients nutrients"
    `,
    gridTemplateColumns: "1fr 1fr",
    gap: "0.5rem",
    position: "relative",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "rgba(168, 53, 53, 0.95)",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "white",
    borderRadius: "4px",
    padding: "0.25rem 0.5rem",
  },
  addButton: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "rgba(50, 113, 52, 0.95)",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "white",
    borderRadius: "4px",
    padding: "0.25rem 0.5rem",
  }
};

export default modalStyles;