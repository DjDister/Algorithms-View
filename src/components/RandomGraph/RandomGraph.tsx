"use client";
import { createRandomArray } from "@/utils/arrays-utils";
import Line from "../../../public/svg/Line";
import styles from "./RandomGraph.module.css";

const vertexesX = createRandomArray(5, 10, 100);
const vertexesy = createRandomArray(5, 10, 100);
const vertexesX2 = createRandomArray(5, 10, 100);
const vertexesy2 = createRandomArray(5, 10, 100);

export default function RandomGraph() {
  return (
    <div className={styles.randomGraphBox}>
      {/* <Line x1={50} y1={50} x2={80} y2={80} /> */}
      {vertexesX.map((x1, index) => (
        // <Line
        //   key={index}
        //   x1={x1}
        //   y1={vertexesy[index]}
        //   x2={vertexesy[index]}
        //   y2={x1}
        // />
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${vertexesy[index]}%`,
            left: `${vertexesX[index]}%`,
            backgroundColor: "red",
          }}
        >
          {x1}
        </div>
      ))}
    </div>
  );
}
