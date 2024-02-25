import EdgeWithVertexes from "../EdgeWithVertexes/EdgeWithVertexes";
import styles from "./RandomGraph.module.css";

export default function RandomGraph({
  graphData,
}: {
  graphData: (
    | {
        topX: number;
        topY: number;
        bottomX: number;
        bottomY: number;
        topVertexValue: number;
        hasTopVertex: boolean;
        bottomVertexValue: number;
      }
    | {
        topX: number;
        topY: number;
        bottomX: number;
        bottomY: number;
        bottomVertexValue: number;
        topVertexValue?: undefined;
        hasTopVertex?: undefined;
      }
  )[];
}) {
  return (
    <div className={styles.absoluteGraphBox}>
      <div className={styles.randomGraphBox}>
        {graphData.map((edge, index) => (
          <EdgeWithVertexes key={index} {...edge} />
        ))}
      </div>
    </div>
  );
}
