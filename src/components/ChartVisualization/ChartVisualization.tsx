"use client";

import React, { useEffect } from "react";
import styles from "./ChartVisualization.module.css";

export default function ChartVisualization({ array }: { array: number[] }) {
  return (
    <div className={styles.chartContainer}>
      {array.map((value, index) => (
        <div
          key={index}
          className={styles.chartBar}
          style={{ height: `${value * 10}px` }}
        />
      ))}
    </div>
  );
}
