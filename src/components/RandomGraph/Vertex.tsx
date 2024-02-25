import styles from "./Vertex.module.css";
export default function Vertex({
  vertexNumber,
  positionX,
  positionY,
}: {
  vertexNumber?: number;
  positionX: number;
  positionY: number;
}) {
  return (
    <div
      className={styles.vertex}
      style={{
        position: "absolute",
        top: `${positionY}%`,
        left: `${positionX}%`,
      }}
    >
      {vertexNumber}
    </div>
  );
}
