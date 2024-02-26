import React, { useState, useEffect, useRef } from "react";
import styles from "./ArrayVisualization.module.css";
import Image from "next/image";
function ArrayVisualization({
  data,
  indexesToHighlite,
  indexesToStyle,
  elemStyle,
}: {
  data: number[];
  indexesToHighlite?: number[];
  indexesToStyle?: { indexes: number[]; style: React.CSSProperties };
  elemStyle?: string;
}) {
  return (
    <div className={styles.arrayContainer}>
      {data.map((value, index) => (
        <div
          key={index}
          className={`${styles.elemContainer} ${elemStyle}`}
          style={{
            ...(indexesToStyle?.indexes.includes(index)
              ? indexesToStyle.style
              : {}),
          }}
        >
          {indexesToHighlite?.includes(index) && (
            <Image
              src="/svg/ArrowDown.svg"
              alt="arrow-down"
              width={20}
              height={20}
            />
          )}
          <div id={`bar-${index}`} className={`${styles.arrayElement}`}>
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArrayVisualization;
