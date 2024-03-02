"use client";
import { createRandomArray } from "@/utils/arrays-utils";
import { useMemo, useState } from "react";
import GraphLayout from "@/components/GraphLayout/GraphLayout";

import {
  BASE_SEARCH_SPEED,
  BASE_SEARCH_TIMEOUT,
  SEARCH_MULTIPLIER,
} from "@/utils/consts/search.consts";

const NUMBER_OF_ELEMENTS = 20;

const initialArray = createRandomArray(NUMBER_OF_ELEMENTS).sort(
  (a, b) => a - b
);
export default function Page() {
  const [array, setArray] = useState<number[]>(initialArray);
  const numberToFind = useMemo(() => {
    return array[Math.floor(Math.random() * array.length)];
  }, [array]);
  const [middleIndex, setMiddleIndex] = useState<number | null>(null);
  const [sortingSpeed, setSortingSpeed] = useState<number>(BASE_SEARCH_SPEED);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [leftIndex, setLeftIndex] = useState<number | null>(null);
  const [rightIndex, setRightIndex] = useState<number | null>(null);

  const binarySearch = async () => {
    setIsSearching(() => true);
    let copyArray = [...array];
    let left = 0;
    let right = copyArray.length - 1;

    while (left <= right) {
      setLeftIndex(() => left);
      setRightIndex(() => right);
      let middle = Math.floor((left + right) / 2);
      setMiddleIndex(() => middle);
      await new Promise((resolve) => {
        setTimeout(resolve, BASE_SEARCH_TIMEOUT / sortingSpeed);
      });

      if (copyArray[middle] === numberToFind) {
        setIsSearching(() => false);
        return middle;
      } else if (copyArray[middle] < numberToFind) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    setIsSearching(() => false);
  };

  const handleSort = async () => {
    await binarySearch();
  };

  const handleSortingSpeed = (sortingSpeed: number) => {
    setSortingSpeed(() => sortingSpeed * SEARCH_MULTIPLIER);
  };

  const handleRandomize = () => {
    setArray(createRandomArray(NUMBER_OF_ELEMENTS).sort((a, b) => a - b));
    setMiddleIndex(null);
    setLeftIndex(null);
    setRightIndex(null);
  };

  const outOfRangeIndexes =
    leftIndex !== null && rightIndex !== null
      ? array.reduce((indexes, _, i) => {
          if (i < leftIndex || i > rightIndex) {
            indexes.push(i);
          }
          return indexes;
        }, [] as number[])
      : [];

  return (
    <GraphLayout
      sorrtingArray={array}
      title={`Binary Search for ${numberToFind}`}
      onRandomize={handleRandomize}
      onSort={handleSort}
      isAbleToSort={!isSearching}
      chosenColumn={middleIndex ?? -1}
      indexesToStyle={[
        {
          indexes:
            middleIndex !== null && array[middleIndex] === numberToFind
              ? [middleIndex]
              : [],
          style: {
            backgroundColor: "#BCED09",
          },
        },
        {
          indexes: outOfRangeIndexes,
          style: {
            backgroundColor: "grey",
          },
        },
      ]}
      sortingSpeedFunction={handleSortingSpeed}
      sortLabel="Search"
      shuffleLabel="Randomize"
    />
  );
}
