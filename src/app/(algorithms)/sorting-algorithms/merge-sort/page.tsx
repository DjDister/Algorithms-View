"use client";

import GraphLayout from "@/components/GraphLayout/GraphLayout";
import { createRandomArray, shuffle } from "@/utils/arrays-utils";
import {
  BASE_SORTING_SPEED,
  BASE_SORTING_TIMEOUT,
  SORTING_MULTIPLIER,
} from "@/utils/consts/sorting.consts";
import { useState } from "react";
const initialArray = createRandomArray(10);

export default function Page() {
  const [chartData, setChartData] = useState(initialArray);
  const [leftCompared, setLeftCompared] = useState<number | null>(null);
  const [rightCompared, setRightCompared] = useState<number | null>(null);
  const [leftComparing, setLeftComparing] = useState<number[]>([]);
  const [rightComparing, setRightComparing] = useState<number[]>([]);
  const [sortingSpeed, setSortingSpeed] = useState<number>(BASE_SORTING_SPEED);

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

    await new Promise((resolve) =>
      setTimeout(resolve, BASE_SORTING_TIMEOUT / sortingSpeed)
    );

    return mergeResult;
  };

  const merge = async (left: number[], right: number[]) => {
    const result = [];
    let i = 0,
      j = 0;
    setLeftComparing(left);
    setRightComparing(right);

    while (i < left.length && j < right.length) {
      setLeftCompared(left[i]);
      setRightCompared(right[j]);

      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }

      await new Promise((resolve) =>
        setTimeout(resolve, BASE_SORTING_TIMEOUT / sortingSpeed)
      );
      removeItemsAndSetThemSorted(
        result.concat(left.slice(i)).concat(right.slice(j))
      );
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  };

  const handleRandomize = async () => {
    setChartData(() => shuffle(chartData));
    setLeftCompared(null);
    setRightCompared(null);
    setLeftComparing([]);
    setRightComparing([]);
  };

  const handleSort = async () => {
    await mergeSort(chartData);
  };

  return (
    <GraphLayout
      sorrtingArray={chartData}
      onRandomize={handleRandomize}
      onSort={handleSort}
      isAbleToSort={true}
      chosenColumn={leftCompared ? chartData.indexOf(leftCompared) : undefined}
      comparingColumn={
        rightCompared ? chartData.indexOf(rightCompared) : undefined
      }
      customTextColor={"#fff"}
      title="Merge Sort"
      indexesToStyle={[
        {
          indexes: leftComparing.map((item) => chartData.indexOf(item)),
          style: { backgroundColor: "red" },
        },
        {
          indexes: rightComparing.map((item) => chartData.indexOf(item)),
          style: { backgroundColor: "blue" },
        },
      ]}
      sortingSpeedFunction={(speed: number) =>
        setSortingSpeed(speed * SORTING_MULTIPLIER)
      }
    />
  );
}
