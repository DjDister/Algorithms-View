"use client";

import ArrayVisualization from "@/components/ArrayVisualization/ArrayVisualization";
import GraphLayout from "@/components/GraphLayout/GraphLayout";
import { useState } from "react";
import styles from "./styles.module.css";
import Input from "@/components/Input/Input";
import {
  BASE_SORTING_SPEED,
  BASE_SORTING_TIMEOUT,
  SORTING_MULTIPLIER,
} from "@/utils/consts/sorting.consts";

const INITIAL_HOW_MANY_TO_GENERATE = 10;

const createFirstFibbonaciArray = (length: number): number[] => {
  return [0, 1, ...Array(length - 2).fill(0)];
};

export default function Page() {
  const [howManyToGenerate, setHowManyToGenerate] = useState(
    INITIAL_HOW_MANY_TO_GENERATE
  );
  const [fibbonaciArray, setFibbonaciArray] = useState(
    createFirstFibbonaciArray(howManyToGenerate)
  );
  const [insertingValueIndex, setInsertingValueIndex] = useState(1);
  const [generatingSpeed, setGeneratingSpeed] = useState(BASE_SORTING_SPEED);

  const generateFibbonaciArray = async (length: number) => {
    const fibbonaciArrayCopy = [...fibbonaciArray];
    for (let i = 2; i < length; i++) {
      const valueToInsert =
        fibbonaciArrayCopy[i - 1] + fibbonaciArrayCopy[i - 2];
      fibbonaciArrayCopy[i] = valueToInsert;
      setInsertingValueIndex(() => i);

      await new Promise((resolve) =>
        setTimeout(resolve, BASE_SORTING_TIMEOUT / generatingSpeed)
      );
      setFibbonaciArray(() => [...fibbonaciArrayCopy]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInsertingValueIndex(1);

    setHowManyToGenerate(e.target.valueAsNumber);
    setFibbonaciArray(createFirstFibbonaciArray(e.target.valueAsNumber));
  };

  const handleSpeedChange = (sortingSpeed: number) => {
    setGeneratingSpeed(sortingSpeed * SORTING_MULTIPLIER);
  };

  return (
    <GraphLayout
      title="Fibbonaci Sequence"
      onRandomize={() => generateFibbonaciArray(howManyToGenerate)}
      onSort={() => generateFibbonaciArray(howManyToGenerate)}
      sorrtingArray={[]}
      sortingSpeedFunction={handleSpeedChange}
      otherUtils={
        <Input
          label="Amount"
          value={howManyToGenerate}
          onChange={handleInputChange}
          type="number"
          min={2}
          max={40}
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
        elemStyle={styles.elementStyle}
      />
    </GraphLayout>
  );
}
