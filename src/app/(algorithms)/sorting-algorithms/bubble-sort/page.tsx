"use client";
import GraphLayout from "@/components/GraphLayout/GraphLayout";
import { createRandomArray, shuffle } from "@/utils/arrays-utils";
import {
  BASE_SORTING_SPEED,
  BASE_SORTING_TIMEOUT,
  SORTING_MULTIPLIER,
} from "@/utils/consts/sorting.consts";
import { useState } from "react";

const initialArray = createRandomArray(15, 10, 100);

export default function Page() {
  const [isAbleToSort, setIsAbleToSort] = useState(true);
  const [array, setArray] = useState<number[]>(initialArray);
  const [chosenColumn, setChosenColumn] = useState<number>();
  const [comparingColumn, setComparingColumn] = useState<number>();
  const [sortingSpeed, setSortingSpeed] = useState<number>(BASE_SORTING_SPEED);

  const pullSortingSpeed = (sortingSpeed: number) => {
    setSortingSpeed(sortingSpeed * SORTING_MULTIPLIER);
  };

  const bubbleSort = async (arr: number[]) => {
    const n = arr.length;
    var i, j, temp;
    var swapped;

    setIsAbleToSort(false);
    for (i = 0; i < n - 1; i++) {
      swapped = false;
      setComparingColumn(i);
      for (j = 0; j < n - i - 1; j++) {
        setChosenColumn(j + 1);

        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;

          setArray(() => [...arr]);
          await new Promise((resolve) =>
            setTimeout(resolve, BASE_SORTING_TIMEOUT / sortingSpeed)
          );
        }
      }

      if (swapped == false) break;
    }
    setIsAbleToSort(true);
    setChosenColumn(-10);
    setComparingColumn(-10);
  };

  return (
    <GraphLayout
      sorrtingArray={array}
      title="Bubble Sort"
      onRandomize={() => setArray(shuffle(array))}
      onSort={() => bubbleSort(array)}
      isAbleToSort={isAbleToSort}
      chosenColumn={chosenColumn}
      comparingColumn={comparingColumn}
      sortingSpeedFunction={pullSortingSpeed}
    />
  );
}
