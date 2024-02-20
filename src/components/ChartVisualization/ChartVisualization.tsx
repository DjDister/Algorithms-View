"use client";

import React, { useEffect } from "react";
import styles from "./ChartVisualization.module.css";
import Image from "next/image";
export default function ChartVisualization({
  array,
  highliteItems,
  highliteOne,
  highliteTwo,
}: {
  array: number[];
  highliteItems: number[][];
  highliteOne: number | null;
  highliteTwo: number | null;
}) {
  const firstHighlite = highliteItems[0];
  const secondHighlite = highliteItems[1];
  const leftColor = "red";
  const rightColor = "blue";

  console.log(`highliting: `, highliteOne, highliteTwo);
  return (
    <div className={styles.chartContainer}>
      {array.map((value, index) => (
        <div key={index}>
          {(highliteOne === value || highliteTwo === value) && (
            <Image
              src="/svgs/ArrowDown.svg"
              alt="arrow-down"
              width={20}
              height={20}
            />
          )}
          <div
            className={styles.chartBar}
            style={{
              height: `${value * 10}px`,
              backgroundColor: firstHighlite.includes(value)
                ? leftColor
                : secondHighlite.includes(value)
                ? rightColor
                : "grey",
            }}
          />
        </div>
      ))}
    </div>
  );
}
