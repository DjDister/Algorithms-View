"use client";
import GraphLayout from "@/components/GraphLayout/GraphLayout";
import { createRandomArray, shuffle } from "@/utils/arrays-utils";
import {
  BASE_SEARCH_SPEED,
  BASE_SEARCH_TIMEOUT,
  SEARCH_MULTIPLIER,
} from "@/utils/consts/search.consts";
import { useMemo, useState } from "react";

const initialArray = createRandomArray(15, 10, 100);
export default function Page() {
  const [array, setArray] = useState<number[]>(initialArray);
  const [sortingSpeed, setSortingSpeed] = useState<number>(BASE_SEARCH_SPEED);
  const [chosenColumn, setChosenColumn] = useState<number>(-10);
  const pullSortingSpeed = (sortingSpeed: number) => {
    setSortingSpeed(sortingSpeed * SEARCH_MULTIPLIER);
  };

  const numberToFind = useMemo(() => {
    return array[Math.floor(Math.random() * array.length)];
  }, [array]);

  const linearSearch = async () => {
    setChosenColumn(-10);
    for (let i = 0; i <= array.length; i++) {
      await new Promise((resolve) =>
        setTimeout(resolve, BASE_SEARCH_TIMEOUT / sortingSpeed)
      );
      setChosenColumn(i);

      if (array[i] == numberToFind) {
        return numberToFind;
      }
    }

    setChosenColumn(-10);
  };

  const onRandomize = () => {
    setChosenColumn(-10);
    setArray(() => shuffle(array));
  };

  return (
    <GraphLayout
      title="Linear Search"
      sorrtingArray={array}
      onSort={() => linearSearch()}
      onRandomize={() => onRandomize()}
      sortingSpeedFunction={() => pullSortingSpeed}
      chosenColumn={chosenColumn}
      sortLabel="Search"
      inputLabel="Adjust Searching Speed"
      indexesToStyle={[
        {
          indexes: array[chosenColumn] === numberToFind ? [chosenColumn] : [],
          style: {
            backgroundColor: "#BCED09",
          },
        },
        {
          indexes: array.map((_, i) => (i < chosenColumn ? i : -10)),
          style: {
            backgroundColor: "grey",
          },
        },
      ]}
    />
  );
}
