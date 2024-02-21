"use client";
import GraphLayout from "@/components/GraphLayout/GraphLayout";
import { createRandomArray, shuffle } from "@/utils/arrays-utils";
import { useEffect, useState } from "react";

const initialArray = createRandomArray(15, 10, 100);

export default function Page() {
  const [isAbleToSort, setIsAbleToSort] = useState(true);

  const [array, setArray] = useState<number[]>(initialArray);

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
  const bubbleSort = async (arr: number[]) => {
    const n = arr.length;
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;

          setArray(() => [...arr]);
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }

      if (swapped == false) break;
    }
  };

  return (
    <GraphLayout
      sorrtingArray={array}
      title="Bubble Sort"
      onRandomize={() => setArray(shuffle(array))}
      onSort={() => bubbleSort(array)}
      isAbleToSort={isAbleToSort}
    />
  );
}
