"use client";

import ArrayVisualization from "@/components/ArrayVisualization/ArrayVisualization";
import GraphLayout from "@/components/GraphLayout/GraphLayout";
import { useState } from "react";

const INITIAL_HOW_MANY_TO_GENERATE = 10;

const createFirstFibbonaciArray = (length: number) => {
  return [0, 1, ...Array(length - 2).fill(0)];
};

export default function Page() {
  const [howManyToGenerate, setHowManyToGenerate] = useState<number>(
    INITIAL_HOW_MANY_TO_GENERATE
  );
  const [fibbonaciArray, setFibbonaciArray] = useState<number[]>(
    createFirstFibbonaciArray(howManyToGenerate)
  );
  const [insertingValueIndex, setInsertingValueIndex] = useState<number>(1);

  const generateFibbonaciArray = async (length: number) => {
    const fibbonaciArrayCopy = [...fibbonaciArray];
    for (let i = 2; i < length; i++) {
      const valueToInsert =
        fibbonaciArrayCopy[i - 1] + fibbonaciArrayCopy[i - 2];
      fibbonaciArrayCopy[i] = valueToInsert;
      setInsertingValueIndex(() => i);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFibbonaciArray(() => [...fibbonaciArrayCopy]);
      console.log("fibbonaciArrayCopy", fibbonaciArrayCopy);
    }
  };
  console.log(fibbonaciArray);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInsertingValueIndex(1);

    setHowManyToGenerate(Number(e.target.value));
    setFibbonaciArray([0, 1, ...Array(Number(e.target.value) - 2).fill(0)]);
  };
  return (
    <GraphLayout
      title="Fibbonaci Sequence"
      onRandomize={() => generateFibbonaciArray(howManyToGenerate)}
      onSort={() => {}}
      sorrtingArray={[]}
      sortingSpeedFunction={() => {}}
      otherUtils={
        <input
          type="number"
          value={howManyToGenerate}
          onChange={handleInputChange}
        />
      }
    >
      <ArrayVisualization
        data={fibbonaciArray}
        indexesToHighlite={[insertingValueIndex]}
        indexesToStyle={{
          indexes: [insertingValueIndex - 1, insertingValueIndex - 2],
          style: { marginBottom: 24 },
        }}
      />
    </GraphLayout>
  );
}
