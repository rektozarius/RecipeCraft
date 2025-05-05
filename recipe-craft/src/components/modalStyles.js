const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(127, 127, 127, 0.9)",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "800px",
    width: "90%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "auto auto auto auto",
    gridTemplateAreas: `
      "title title title title title title title title"
      "image image image image . nutrients nutrients nutrients"
      "amount amount amount amount . nutrients nutrients nutrients"
      "measure measure measure measure . nutrients nutrients nutrients"
    `,
    gap: "1rem"
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer"
  }
};

export default modalStyles;