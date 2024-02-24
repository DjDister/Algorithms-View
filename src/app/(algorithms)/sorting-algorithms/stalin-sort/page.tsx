"use client";
import GraphLayout from "@/components/GraphLayout/GraphLayout";
import { createRandomArray, shuffle } from "@/utils/arrays-utils";
import {
  BASE_SORTING_SPEED,
  BASE_SORTING_TIMEOUT,
  SORTING_MULTIPLIER,
} from "@/utils/consts/sorting.consts";
import { useState } from "react";
import Stalin from "../../../../../public/Stalin.jpg";

const initialArray = createRandomArray(15, 10, 100);
const stalinKills: number[] = [];

export default function Page() {
  const [isAbleToSort, setIsAbleToSort] = useState(true);
  const [array, setArray] = useState<number[]>(initialArray);
  const [chosenColumn, setChosenColumn] = useState(-10);
  const [sortingSpeed, setSortingSpeed] = useState<number>(BASE_SORTING_SPEED);

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
      await new Promise((resolve) =>
        setTimeout(resolve, BASE_SORTING_TIMEOUT / sortingSpeed)
      );
    }

    setIsAbleToSort(true);
    setArray(comradsArray);
    stalinKills.length = 0;

    return comradsArray;
  };

  const pullSortingSpeed = (sortingSpeed: number) => {
    setSortingSpeed(sortingSpeed * SORTING_MULTIPLIER);
  };

  return (
    <GraphLayout
      sortingSpeedFunction={pullSortingSpeed}
      sorrtingArray={array}
      onRandomize={() => setArray(shuffle(initialArray))}
      onSort={() => stalinSort(array)}
      title="Stalin Sort"
      isAbleToSort={isAbleToSort}
      stalinArray={stalinKills}
      chosenColumn={chosenColumn}
      backgroundImage={Stalin}
      customTextColor="yellow"
      customColumnColor="red"
    />
  );
}
