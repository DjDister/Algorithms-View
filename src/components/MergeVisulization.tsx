"use client";

import React, { useState } from "react";
import ChartVisualization from "./ChartVisualization/ChartVisualization";
import { createRandomArray, shuffle } from "../utils/arrays-utils";

const initialArray = createRandomArray(20);

export default function MergeVisualization() {
  const [chartData, setChartData] = useState(initialArray);

  const mergeSort = async (array: number[]): Promise<number[]> => {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left: number[] = await mergeSort(array.slice(0, mid));
    const right: number[] = await mergeSort(array.slice(mid));

    return merge(left, right);
  };

  const merge = async (left: number[], right: number[]) => {
    const result = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
      setChartData([...result, ...left.slice(i), ...right.slice(j)]);
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  };

  const handleRandomize = async () => {
    setChartData(() => shuffle(chartData));
  };

  const handleSort = async () => {
    const sorted = await mergeSort(chartData);
  };

  return (
    <div>
      <button onClick={handleRandomize}>Shuffle</button>
      <button onClick={handleSort}>Sort</button>
      <ChartVisualization array={chartData} />
    </div>
  );
}
