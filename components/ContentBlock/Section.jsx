import styles from "./ContentBlock.module.css";

export default function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h3 className={styles.heading}>{title}</h3>
      {children}
    </div>
  );
}
