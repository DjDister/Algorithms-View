"use client";
import GraphLayout from "@/components/GraphLayout/GraphLayout";
import { shuffle } from "@/utils/arrays-utils";
import { useEffect, useState } from "react";

export default function Page() {
  const [isAbleToSort, setIsAbleToSort] = useState(true);

  const [array, setArray] = useState<number[]>([
    10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 75, 12, 13, 14, 100,
  ]);

  // const bubbleSort = async () => {
  //   setIsAbleToSort(false);
  //   const sortedArray = [...array];
  //   const n = sortedArray.length;
  //   let swapped;

  //   do {
  //     swapped = false;
  //     for (let i = 0; i < n - 1; i++) {
  //       await new Promise((resolve) => setTimeout(resolve, 1000));
  //       console.log("TY KURWO");
  //       if (sortedArray[i] > sortedArray[i + 1]) {
  //         const temp = sortedArray[i];
  //         sortedArray[i] = sortedArray[i + 1];
  //         sortedArray[i + 1] = temp;
  //         swapped = true;
  //       }
  //       setArray(sortedArray);
  //     }
  //   } while (swapped);

  //   setIsAbleToSort(true);
  //   return sortedArray;
  // };
  const bubbleSort = async () => {
    setIsAbleToSort(false);
    let sortedArray = [...array];
    const n = sortedArray.length;
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        if (sortedArray[i] > sortedArray[i + 1]) {
          const temp = sortedArray[i];
          sortedArray[i] = sortedArray[i + 1];
          sortedArray[i + 1] = temp;
          swapped = true;
        }
      }
      setArray(sortedArray);
    } while (swapped);

    setIsAbleToSort(true);
    return sortedArray;
  };

  return (
    <GraphLayout
      sorrtingArray={array}
      title="Bubble Sort"
      onRandomize={() => setArray(shuffle(array))}
      onSort={bubbleSort}
      isAbleToSort={isAbleToSort}
    />
  );
}
