"use client";
import Button from "../Button/Button";
import styles from "./GraphLayout.module.css";
import RangeInput from "../RangeInput/RangeInput";
import DiceSvg from "../../../public/svg/DiceSvg";
import SortSvg from "../../../public/svg/SortSvg";
import Image, { StaticImageData } from "next/image";
import ArrowDown from "../../../public/svg/ArrowDown";
function GraphLayout({
  sorrtingArray,
  title,
  onRandomize,
  onSort,
  isAbleToSort = true,
  chosenColumn,
  comparingColumn,
  sortingSpeedFunction,
  backgroundImage,
  customTextColor,
  arrowColor,
  indexesToStyle,
  isCustomStyleActivated,
  onTitleClick,
  otherUtils,
  shuffleLabel = "Shuffle",
  sortLabel = "Sort",
  inputLabel = "Adjust Sorting Speed",
  children,
}: {
  sorrtingArray: number[];
  title: string;
  onRandomize: () => void;
  onSort: () => void;
  isAbleToSort?: boolean;
  chosenColumn?: number | number[];
  comparingColumn?: number;
  sortingSpeedFunction: (sortingSpeed: number) => void;
  backgroundImage?: StaticImageData;
  customTextColor?: string;
  arrowColor?: string;
  indexesToStyle?: { indexes: number[]; style: React.CSSProperties }[];
  isCustomStyleActivated?: boolean;
  onTitleClick?: () => void;
  otherUtils?: React.ReactNode;
  children?: React.ReactNode;
  shuffleLabel?: string;
  sortLabel?: string;
  inputLabel?: string;
}) {
  return (
    <div className={styles.GraphLayout}>
      <div className={styles.title}>
        <div
          onClick={onTitleClick}
          style={{ cursor: backgroundImage ? "pointer" : "auto" }}
        >
          {title}
        </div>
      </div>
      <div
        className={styles.graphSection}
        style={{ opacity: isCustomStyleActivated ? 0.6 : 1 }}
      >
        {isCustomStyleActivated && backgroundImage && (
          <Image
            src={backgroundImage}
            alt="background-image"
            fill
            className={styles.backgroundImage}
          />
        )}
        {children ?? (
          <div className={styles.graph}>
            {sorrtingArray.map((number, index) => (
              <div
                key={number}
                className={styles.column}
                style={{
                  height: `${number * 4}px`,

                  color: isCustomStyleActivated ? customTextColor : "#aca9bb",
                  ...(indexesToStyle?.find((item) =>
                    item.indexes.includes(index)
                  )?.style || {}),
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
        )}
      </div>
      <div className={styles.buttonSection}>
        <Button
          disabled={!isAbleToSort}
          onClick={onRandomize}
          icon={<DiceSvg />}
        >
          {shuffleLabel}
        </Button>
        <Button disabled={!isAbleToSort} onClick={onSort} icon={<SortSvg />}>
          {sortLabel}
        </Button>
        <RangeInput
          sliderValueFunction={sortingSpeedFunction}
          inputLabel={inputLabel}
        />
        {otherUtils}
      </div>
    </div>
  );
}
export default GraphLayout;
