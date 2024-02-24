"use client";
import Button from "@/components/Button/Button";
import ChartVisualization from "@/components/ChartVisualization/ChartVisualization";
import { createRandomArray } from "@/utils/arrays-utils";
import { useState } from "react";
import DiceSvg from "../../../../../public/svg/DiceSvg";
import SortSvg from "../../../../../public/svg/SortSvg";
import GraphLayout from "@/components/GraphLayout/GraphLayout";

const initialArray = createRandomArray(20).sort((a, b) => a - b);
const numberToFind = initialArray.at(
  Math.floor(Math.random() * initialArray.length)
);

export default function Page() {
  const [array, setArray] = useState<number[]>(initialArray);
  const [leftIndex, setLeftIndex] = useState<number | null>(null);
  const [rightIndex, setRightIndex] = useState<number | null>(null);
  const [sortingSpeed, setSortingSpeed] = useState<number>(50);

  const handleRandomize = () => {
    setArray(createRandomArray(10));
  };

  const binarySearch = async () => {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (left <= right) {
      setLeftIndex(left);
      setRightIndex(right);
      await new Promise((resolve) => setTimeout(resolve, 1000 / sortingSpeed));
      console.log("middle", middle);
      console.log("left", left);
      console.log("right", right);

      const middleItem = array.at(middle);
      console.log("middleItem", middleItem);
      if (array.at(middle) === numberToFind) {
        return middle;
      } else if (numberToFind && middleItem && middleItem < numberToFind) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
      middle = Math.floor((left + right) / 2);
    }

    return -1;
  };

  const handleSort = async () => {
    await binarySearch();
  };

  return (
    <GraphLayout
      sorrtingArray={array}
      title="Binary Search"
      onRandomize={handleRandomize}
      onSort={handleSort}
      isAbleToSort={true}
      chosenColumn={numberToFind ? [numberToFind] : undefined}
      sortingSpeedFunction={(sortingSpeed) => console.log(sortingSpeed)}
    ></GraphLayout>
  );
}
