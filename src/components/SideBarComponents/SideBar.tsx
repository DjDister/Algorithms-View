"use client";
import { useState } from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";
import SideSearch from "./SideSearch";
import { SIDE_BAR_DATA } from "../../utils/consts/sideBar.consts";

function SideBar() {
  const [inputData, setInputData] = useState<string>("");
  const handleInputChange = (input: string) => {
    setInputData(input);
    return inputData;
  };

  const filteredsideBarData = SIDE_BAR_DATA.filter(
    (algo) =>
      algo.category.includes(inputData) ||
      algo.algorithms.some((algorithm) => algorithm.name.includes(inputData))
  );

  return (
    <div className={styles.sideBar}>
      <SideSearch inputData={handleInputChange} />
      {filteredsideBarData.map((algoType, index) => (
        <SideBarItem
          prefixPath={algoType.prefixPath}
          key={algoType.category}
          itemName={algoType.category}
          elementsArray={algoType.algorithms}
        />
      ))}
    </div>
  );
}
export default SideBar;
