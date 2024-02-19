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
  const [itemOpened, setItemOpened] = useState<boolean>(false);
  return (
    <>
      <div
        className={styles.item}
        onClick={() => {
          setItemOpened(!itemOpened);
        }}
        style={{
          borderBottom: itemOpened ? "none" : "0.5px solid white",
          backgroundColor: itemOpened ? "#2e2e2e" : "#393939",
        }}
      >
        <div
          style={{
            width: "95%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: itemOpened ? "#2e2e2e" : "#393939",
          }}
        >
          <div>{itemName}</div>
          <div
            style={{
              transform: itemOpened ? "rotate(180deg)" : "rotate(90deg)",
            }}
            className={styles.arrowBox}
          >
            <Arrow width={10} />
          </div>
        </div>
      </div>
      {itemOpened ? (
        <div
          style={{ borderBottom: "0.5px solid white" }}
          className={styles.listOfElements}
        >
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
