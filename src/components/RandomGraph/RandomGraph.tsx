"use client";
import { useState } from "react";
import EdgeWithVertexes from "../EdgeWithVertexes/EdgeWithVertexes";
import styles from "./RandomGraph.module.css";
import { homedir } from "os";

export default function RandomGraph() {
  const [highlitedEdge, setHighlitedEdge] = useState(1);

  const edgeHighlightTimeout = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setHighlitedEdge(highlitedEdge + 1);
  };

  edgeHighlightTimeout();
  return (
    <div className={styles.absoluteGraphBox}>
      <div className={styles.randomGraphBox}>
        {/* Krawędzie i wierzchołki dla poziomu 1 */}
        <EdgeWithVertexes
          topX={50}
          topY={5}
          bottomX={25}
          bottomY={30}
          topVertexValue={1}
          edgeColor={highlitedEdge % 4 === 1 ? "blue" : ""}
        />
        <EdgeWithVertexes
          topX={50}
          topY={5}
          bottomX={75}
          bottomY={30}
          hasTopVertex={false}
          edgeColor={highlitedEdge % 4 === 1 ? "blue" : ""}
        />

        {/* Krawędzie i wierzchołki dla poziomu 2 */}
        <EdgeWithVertexes
          topX={25}
          topY={30}
          bottomX={15}
          bottomY={55}
          topVertexValue={2}
          edgeColor={highlitedEdge % 4 === 2 ? "blue" : ""}
        />
        <EdgeWithVertexes
          topX={25}
          topY={30}
          bottomX={35}
          bottomY={55}
          hasTopVertex={false}
          edgeColor={highlitedEdge % 4 === 2 ? "blue" : ""}
        />

        <EdgeWithVertexes
          topX={75}
          topY={30}
          bottomX={65}
          bottomY={55}
          topVertexValue={3}
          edgeColor={highlitedEdge % 4 === 2 ? "blue" : ""}
        />
        <EdgeWithVertexes
          topX={75}
          topY={30}
          bottomX={85}
          bottomY={55}
          hasTopVertex={false}
          edgeColor={highlitedEdge % 4 === 2 ? "blue" : ""}
        />

        {/* Krawędzie i wierzchołki dla poziomu 3 */}
        <EdgeWithVertexes
          topX={15}
          topY={55}
          bottomX={10}
          bottomY={80}
          topVertexValue={4}
          hasBottomVertex={true}
          bottomVertexValue={8}
          edgeColor={highlitedEdge % 4 === 3 ? "blue" : ""}
        />
        <EdgeWithVertexes
          topX={15}
          topY={55}
          bottomX={20}
          bottomY={80}
          hasTopVertex={false}
          hasBottomVertex={true}
          bottomVertexValue={9}
          edgeColor={highlitedEdge % 4 === 3 ? "blue" : ""}
        />

        <EdgeWithVertexes
          topX={35}
          topY={55}
          bottomX={30}
          bottomY={80}
          topVertexValue={5}
          hasBottomVertex={true}
          bottomVertexValue={10}
          edgeColor={highlitedEdge % 4 === 3 ? "blue" : ""}
        />
        <EdgeWithVertexes
          topX={35}
          topY={55}
          bottomX={40}
          bottomY={80}
          hasTopVertex={false}
          hasBottomVertex={true}
          bottomVertexValue={11}
          edgeColor={highlitedEdge % 4 === 3 ? "blue" : ""}
        />

        <EdgeWithVertexes
          topX={65}
          topY={55}
          bottomX={60}
          bottomY={80}
          topVertexValue={6}
          hasBottomVertex={true}
          bottomVertexValue={12}
          edgeColor={highlitedEdge % 4 === 3 ? "blue" : ""}
        />
        <EdgeWithVertexes
          topX={65}
          topY={55}
          bottomX={70}
          bottomY={80}
          hasTopVertex={false}
          hasBottomVertex={true}
          bottomVertexValue={13}
          edgeColor={highlitedEdge % 4 === 3 ? "blue" : ""}
        />

        <EdgeWithVertexes
          topX={85}
          topY={55}
          bottomX={80}
          bottomY={80}
          topVertexValue={7}
          hasBottomVertex={true}
          bottomVertexValue={14}
          edgeColor={highlitedEdge % 4 === 3 ? "blue" : ""}
        />
        <EdgeWithVertexes
          topX={85}
          topY={55}
          bottomX={90}
          bottomY={80}
          hasTopVertex={false}
          hasBottomVertex={true}
          bottomVertexValue={15}
          edgeColor={highlitedEdge % 4 === 3 ? "blue" : ""}
        />
      </div>
    </div>
  );
}
