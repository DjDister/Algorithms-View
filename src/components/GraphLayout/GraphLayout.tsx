"use client";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./GraphLayout.module.css";
import RangeInput from "../RangeInput/RangeInput";
import DiceSvg from "../../../public/svg/DiceSvg";
import SortSvg from "../../../public/svg/SortSvg";
import { StaticImageData } from "next/image";
import ArrowDown from "../../../public/svg/ArrowDown";
function GraphLayout({
  sorrtingArray,
  title,
  onRandomize,
  onSort,
  isAbleToSort,
  chosenColumn,
  comparingColumn,
  sortingSpeedFunction,
  stalinArray,
  backgroundImage,
  customTextColor,
  customColumnColor,
  arrowColor,
}: {
  sorrtingArray: number[];
  title: string;
  onRandomize: () => void;
  onSort: () => void;
  isAbleToSort: boolean;
  chosenColumn?: number | number[];
  comparingColumn?: number;
  sortingSpeedFunction: (sortingSpeed: number) => void;
  stalinArray?: number[];
  backgroundImage?: StaticImageData;
  customTextColor?: string;
  customColumnColor?: string;
  arrowColor?: string;
}) {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [isCustomStyleActivated, setIsCustomStyleActivated] =
    useState<boolean>(false);

  const handleRandomize = async () => {
    isAbleToSort ? onRandomize() : null;
  };

  const handleSort = async () => {
    isAbleToSort ? onSort() : null;
  };

  const pullSliderValueFromChild = (sliderValue: number) => {
    setSliderValue(sliderValue);
  };
  const titleBoxFunction = () => {
    backgroundImage ? setIsCustomStyleActivated((prev) => !prev) : null;
  };
  sortingSpeedFunction(sliderValue);
  return (
    <div className={styles.GraphLayout}>
      <div className={styles.title}>
        <div
          onClick={() => {
            titleBoxFunction();
          }}
          className={styles.titleName}
        >
          {title}
        </div>
      </div>
      <div
        className={styles.graphSection}
        style={{
          backgroundImage:
            backgroundImage && isCustomStyleActivated
              ? `url(${backgroundImage.src})`
              : "",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "top",
          opacity: isCustomStyleActivated ? 0.6 : 1,
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
                backgroundColor: stalinArray
                  ? stalinArray?.includes(number)
                    ? "#685c64"
                    : isCustomStyleActivated
                    ? customColumnColor
                    : "rgb(243, 239, 239)"
                  : index === chosenColumn
                  ? "#baffc9"
                  : index === comparingColumn
                  ? "#ffb3ba"
                  : "rgb(243, 239, 239)",
                color: isCustomStyleActivated ? customTextColor : "#aca9bb",
              }}
            >
              {index === chosenColumn || index === comparingColumn ? (
                <div className={styles.arrowDownColumn}>
                  <ArrowDown color={arrowColor} />
                </div>
              ) : null}

              {number !== 0 ? number : null}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonSection}>
        <Button
          onClick={() => {
            handleRandomize();
          }}
          icon={<DiceSvg />}
        >
          Shuffle
        </Button>
        <Button
          onClick={() => {
            {
              handleSort();
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
