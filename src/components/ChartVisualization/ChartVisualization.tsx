"use client";

import React, { useEffect, useState } from "react";
import styles from "./ChartVisualization.module.css";
import Image from "next/image";
export default function ChartVisualization({
  array,
  highliteItems,
  highliteOne,
  highliteTwo,
}: {
  array: number[];
  highliteItems?: number[][];
  highliteOne?: number | null;
  highliteTwo?: number | null;
}) {
  const firstHighlite = highliteItems?.at(0);
  const secondHighlite = highliteItems?.at(1);
  const leftColor = "red";
  const rightColor = "blue";
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    setBars(array);
  }, [array]);

  useEffect(() => {
    if (highliteOne && highliteTwo) {
      const updatedBars = [...bars];
      const temp = updatedBars[highliteOne];
      updatedBars[highliteOne] = updatedBars[highliteTwo];
      updatedBars[highliteTwo] = temp;
      setBars(updatedBars);
    }
  }, [highliteOne, highliteTwo]);

  return (
    <div
      className={styles.chartContainer}
      style={{ minHeight: `${Math.max(...array) * 10 + 20}px` }}
    >
      {array.map((value, index) => (
        <div key={index}>
          {(highliteOne === value || highliteTwo === value) && (
            <Image
              src="/svg/ArrowDown.svg"
              alt="arrow-down"
              width={20}
              height={20}
            />
          )}
          <div
            className={styles.chartBar}
            style={{
              height: `${value * 10}px`,
              backgroundColor: firstHighlite?.includes(value)
                ? leftColor
                : secondHighlite?.includes(value)
                ? rightColor
                : "grey",
            }}
          />
        </div>
      ))}
    </div>
  );
}
