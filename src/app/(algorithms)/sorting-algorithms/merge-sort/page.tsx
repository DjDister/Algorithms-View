import MergeVisulization from "@/components/MergeVisualization/MergeVisulization";
import styles from "./styles.module.css";
export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Merge Sort</h1>
      <MergeVisulization />
    </div>
  );
}
