"use client";
import { useState } from "react";
import Arrow from "../../../public/svg/Arrow";
import styles from "./SideBarItem.module.css";
import Link from "next/link";

function SideBarItem({
  itemName,
  elementsArray,
  prefixPath,
}: {
  itemName: string;
  elementsArray: { name: string; path: string }[];
  prefixPath: string;
}) {
  const [isItemOpened, setIsItemOpened] = useState<boolean>(false);
  return (
    <>
      <div
        className={styles.item}
        onClick={() => {
          setIsItemOpened((previous) => !previous);
        }}
        style={{
          borderBottom: isItemOpened ? "none" : "0.5px solid white",
          backgroundColor: isItemOpened ? "#2e2e2e" : "#393939",
        }}
      >
        <div
          style={{
            backgroundColor: isItemOpened ? "#2e2e2e" : "#393939",
          }}
          className={styles.itemWithoutPadding}
        >
          <div>{itemName}</div>
          <div
            style={{
              transform: isItemOpened ? "rotate(180deg)" : "rotate(90deg)",
            }}
            className={styles.arrowBox}
          >
            <Arrow width={10} />
          </div>
        </div>
      </div>
      {isItemOpened ? (
        <div className={styles.listOfElements}>
          {elementsArray.map((element) => (
            <Link
              key={element.name}
              href={"/" + prefixPath + "/" + element.path}
              className={styles.singleLink}
            >
              {element.name}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default SideBarItem;
