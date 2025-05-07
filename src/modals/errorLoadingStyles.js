const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    background: "white",
    padding: "2rem",
    borderRadius: "8px",
    maxWidth: "90%",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
};

export default styles;