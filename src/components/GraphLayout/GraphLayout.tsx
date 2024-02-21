"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./GraphLayout.module.css";
import RangeInput from "../RangeInput/RangeInput";
import DiceSvg from "../../../public/svg/DiceSvg";
import SortSvg from "../../../public/svg/SortSvg";
import Stalin from "../../../public/Stalin.jpg";
import { shuffle } from "@/utils/arrays-utils";

function GraphLayout({
  sorrtingArray,
  title,
  onRandomize,
  onSort,
  isAbleToSort,
}: {
  sorrtingArray: number[];
  title: string;
  onRandomize: () => void;
  onSort: () => void;
  isAbleToSort: boolean;
}) {
  const handleRandomize = async () => {
    onRandomize();
  };

  const handleSort = async () => {
    onSort();
  };

  return (
    <div className={styles.GraphLayout}>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.graphSection}
        style={{
          backgroundImage: title === "Stalin Sort" ? `url(${Stalin.src})` : "",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "top",
          opacity: title === "Stalin Sort" ? 0.6 : 1,
        }}
      >
        <div className={styles.graph}>
          {sorrtingArray.map((number) => (
            <div
              key={number}
              className={styles.column}
              style={{
                height: `${number * 4}px`,
                maxHeight: "90%",
                backgroundColor:
                  title === "Stalin Sort" ? "red" : "rgb(243, 239, 239)",
                color: title === "Stalin Sort" ? "yellow" : "#aca9bb",
              }}
            >
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
        <RangeInput />
      </div>
    </div>
  );
}
export default GraphLayout;
