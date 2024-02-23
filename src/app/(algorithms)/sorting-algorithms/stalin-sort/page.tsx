"use client";
import GraphLayout from "@/components/GraphLayout/GraphLayout";
import { createRandomArray, shuffle } from "@/utils/arrays-utils";
import { useState } from "react";

const initialArray = createRandomArray(15, 10, 100);
const stalinKills: number[] = [];

export default function Page() {
  const [isAbleToSort, setIsAbleToSort] = useState(true);
  const [array, setArray] = useState<number[]>(initialArray);
  const [chosenColumn, setChosenColumn] = useState(-10);

  const stalinSort = async (array: number[]) => {
    let comradsArray = [array[0]];
    setIsAbleToSort(false);
    for (let i = 1; i < array.length; i++) {
      if (array[i] >= comradsArray[comradsArray.length - 1]) {
        comradsArray.push(array[i]);
      } else {
        stalinKills.push(array[i]);
      }
      setChosenColumn(i);
      await new Promise((resolve) => setTimeout(resolve, 30000 / sortingSpeed));
    }

    setIsAbleToSort(true);
    setArray(comradsArray);
    stalinKills.length = 0;

    return comradsArray;
  };

  const [sortingSpeed, setSortingSpeed] = useState<number>(50);

  const pullSortingSpeed = (sortingSpeed: number) => {
    setSortingSpeed(sortingSpeed * 5);
  };

  return (
    <GraphLayout
      sortingSpeedFunction={pullSortingSpeed}
      sorrtingArray={array}
      onRandomize={() => setArray(shuffle(initialArray))}
      onSort={() => stalinSort(array)}
      title="Stalin Sort"
      isAbleToSort={isAbleToSort}
      stalinKills={stalinKills}
      chosenColumn={chosenColumn}
    />
  );
}
