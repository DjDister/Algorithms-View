"use client";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./GraphLayout.module.css";
import RangeInput from "../RangeInput/RangeInput";
import DiceSvg from "../../../public/svg/DiceSvg";
import SortSvg from "../../../public/svg/SortSvg";
import Image from "next/image";

function GraphLayout({
  sorrtingArray,
  title,
  onRandomize,
  onSort,
  isAbleToSort,
  chosenColumn,
  comparingColumn,
  sortingSpeedFunction,
  stalinKills,
}: {
  sorrtingArray: number[];
  title: string;
  onRandomize: () => void;
  onSort: () => void;
  isAbleToSort: boolean;
  chosenColumn?: number | number[];
  comparingColumn?: number;
  sortingSpeedFunction: (sortingSpeed: number) => void;
  stalinKills?: number[];
}) {
  const handleRandomize = async () => {
    onRandomize();
  };

  const handleSort = async () => {
    onSort();
  };

  const [sliderValue, setSliderValue] = useState<number>(50);

  const pullSliderValueFromChild = (sliderValue: number) => {
    setSliderValue(sliderValue);
  };
  sortingSpeedFunction(sliderValue);
  return (
    <div className={styles.GraphLayout}>
      <div className={styles.title}>
        <div className={styles.titleName}>{title}</div>
      </div>
      <div
        className={styles.graphSection}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "top",
        }}
      >
        <div className={styles.graph}>
          {sorrtingArray.map((number, index) => (
            <div
              key={number}
              className={styles.column}
              style={{
                height: `${number * 4}px`,
                maxHeight: "90%",
                backgroundColor:
                  title === "Stalin Sort"
                    ? stalinKills?.includes(number)
                      ? "black"
                      : "rgb(243, 239, 239)"
                    : index === chosenColumn
                    ? "#baffc9"
                    : index === comparingColumn
                    ? "#ffb3ba"
                    : "rgb(243, 239, 239)",
                color: "#aca9bb",
              }}
            >
              {index === chosenColumn || index === comparingColumn ? (
                <Image
                  src="/svg/ArrowDown.svg"
                  alt="arrow-down"
                  width={20}
                  height={20}
                  className={styles.arrowDownColumn}
                />
              ) : null}

              {number !== 0 ? number : null}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonSection}>
        <Button
          onClick={() => {
            isAbleToSort ? handleRandomize() : () => {};
          }}
          icon={<DiceSvg />}
        >
          Shuffle
        </Button>
        <Button
          onClick={() => {
            {
              isAbleToSort ? handleSort() : () => {};
            }
          }}
          icon={<SortSvg />}
        >
          Sort
        </Button>
        <RangeInput sliderValueFunction={pullSliderValueFromChild} />
      </div>
    </div>
  );
}
export default GraphLayout;
