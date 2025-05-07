import { createPortal } from "react-dom";
import styles from "./errorLoadingStyles"

function ErrorLoading({ error, onClose }) {
  return (
    <>
    {createPortal(
      <div style={styles.overlay}>
        <div style={styles.content}>
          {error ? ( 
            <>
            <p>{error.code}</p>
            <p>{error.response.data.message}</p>
            <p>{error.message}</p>
            <button style={{
              color: "#f2f2f2", backgroundColor: "rgba(168, 53, 53, 0.95)", borderRadius: "4px", padding: "0.25rem 0.5rem", cursor: "pointer"
              }} onClick={onClose}>Close</button>
            </>
          ) : (
          <h2>Loading...</h2>
          )}
        </div>
      </div>,
      document.body
    )}
    </>
  );
};

export default ErrorLoading;