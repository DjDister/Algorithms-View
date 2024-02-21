"use client";

import React, { useState } from "react";
import ChartVisualization from "../ChartVisualization/ChartVisualization";
import { createRandomArray, shuffle } from "../../utils/arrays-utils";
import Button from "../Button/Button";
import styles from "./MergeVisualization.module.css";
import DiceSvg from "../../../public/svg/DiceSvg";
import SortSvg from "../../../public/svg/SortSvg";

const initialArray = createRandomArray(20);

export default function MergeVisualization() {
  const [chartData, setChartData] = useState(initialArray);

  function* mergeSortGenerator(
    array: number[],
    tempArray: number[],
    leftStart: number,
    rightLimit: number
  ): Generator<number[], void, void> {
    if (rightLimit - leftStart <= 1) return;
    let mid = Math.floor((leftStart + rightLimit) / 2);
    yield* mergeSortGenerator(array, tempArray, leftStart, mid);
    yield* mergeSortGenerator(array, tempArray, mid, rightLimit);
    let i = leftStart,
      left = leftStart,
      right = mid;
    while (left < mid && right < rightLimit) {
      if (array[left] <= array[right]) {
        tempArray[i++] = array[left++];
      } else {
        tempArray[i++] = array[right++];
      }
      yield array;
    }
    while (left < mid) {
      tempArray[i++] = array[left++];
      yield array;
    }
    while (right < rightLimit) {
      tempArray[i++] = array[right++];
      yield array;
    }
    for (i = leftStart; i < rightLimit; i++) {
      array[i] = tempArray[i];
      yield array;
    }
  }

  const handleSort = async () => {
    let array = [...chartData];
    let tempArray = new Array(array.length).fill(0);
    let generator = mergeSortGenerator(array, tempArray, 0, array.length);
    for (let sortedArray of generator) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setChartData(() => [...sortedArray]);
    }
  };

  const handleRandomize = async () => {
    setChartData(() => shuffle(chartData));
  };

  return (
    <div>
      <ChartVisualization array={chartData} />
      <div className={styles.btnsContainer}>
        <Button onClick={handleRandomize} icon={<DiceSvg />}>
          Shuffle
        </Button>
        <Button onClick={handleSort} icon={<SortSvg />}>
          Sort
        </Button>
      </div>
    </div>
  );
}
