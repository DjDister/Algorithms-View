"use client";

import React, { useState } from "react";
import ChartVisualization from "./ChartVisualization/ChartVisualization";
import { createRandomArray, shuffle } from "../utils/arrays-utils";

const initialArray = createRandomArray(20);
export default function MergeVisualization() {
  const [chartData, setChartData] = useState(initialArray);
  const [leftCompared, setLeftCompared] = useState<number | null>(null);
  const [rightCompared, setRightCompared] = useState<number | null>(null);
  const [leftComparing, setLeftComparing] = useState<number[]>([]);
  const [rightComparing, setRightComparing] = useState<number[]>([]);

  const removeItemsAndSetThemSorted = (sorted: number[]) => {
    setChartData((prev) => {
      const newChartData = prev.filter((item) => !sorted.includes(item));
      return [...sorted, ...newChartData];
    });
  };

  const mergeSort = async (array: number[]): Promise<number[]> => {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left: number[] = await mergeSort(array.slice(0, mid));
    const right: number[] = await mergeSort(array.slice(mid));
    const mergeResult = await merge(left, right);
    // removeItemsAndSetThemSorted(mergeResult);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`mergeResult: `, mergeResult);
    return mergeResult;
  };

  const merge = async (left: number[], right: number[]) => {
    const result = [];
    let i = 0,
      j = 0;
    console.log(`left: `, left);
    console.log(`right: `, right);
    setLeftComparing(left);
    setRightComparing(right);

    while (i < left.length && j < right.length) {
      console.log(`comparing left[i]: ${left[i]} and right[j]: ${right[j]}`);
      setLeftCompared(left[i]);
      setRightCompared(right[j]);
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
      console.log(`result with pushed`, result);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // setChartData([...result, ...left.slice(i), ...right.slice(j)]);
      removeItemsAndSetThemSorted(
        result.concat(left.slice(i)).concat(right.slice(j))
      );
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  };

  const handleRandomize = async () => {
    setChartData(() => {
      const shuffled = shuffle(chartData);
      console.log(`chartData: `, shuffled);
      return shuffled;
    });
  };

  const handleSort = async () => {
    console.log(`chartData: `, chartData);

    const sorted = await mergeSort(chartData);
  };

  return (
    <div>
      <button onClick={handleRandomize}>Shuffle</button>
      <button onClick={handleSort}>Sort</button>
      <ChartVisualization
        array={chartData}
        highliteItems={[leftComparing, rightComparing]}
        highliteOne={leftCompared}
        highliteTwo={rightCompared}
      />
    </div>
  );
}
