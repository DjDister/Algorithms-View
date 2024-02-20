"use client";
import { useEffect, useState } from "react";
import styles from "./bubble.module.css";

const generateUniqueNumbers = (n: number): number[] => {
  const uniqueNumbers = new Set<number>();
  while (uniqueNumbers.size < n) {
    const randomNumber = Math.floor(Math.random() * 91) + 10;
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
};

export default function Page() {
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    setNumbers(generateUniqueNumbers(10));
  }, []);

  return (
    <div className={styles.bubblePage}>
      <div className={styles.title}>Bubble Sort</div>
      <div className={styles.graphContainer}>
        <div className={styles.graph}>
          {numbers.map((number) => (
            <div
              key={number}
              className={styles.column}
              style={{ height: `${number * 4}px`, maxHeight: "90%" }}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
