"use client";
import { useState } from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";
import SideSearch from "./SideSearch";

function SideBar() {
  const data = [
    {
      category: "Sorting Algorithms",
      prefixPath: "sorting-algorithms",
      algorithms: [
        {
          name: "Bubble Sort",
          path: "bubble-sort",
        },
        {
          name: "Merge Sort",
          path: "merge-sort",
        },
        {
          name: "Stalin Sort",
          path: "stalin-sort",
        },
      ],
    },

    {
      category: "Searching Algorithms",
      prefixPath: "searching-algorithms",
      algorithms: [
        {
          name: "Linear Search",
          path: "linear-search",
        },
      ],
    },
  ];

  const [searchData, setSearchData] = useState<string>("");
  const pullInputData = (inputData: string) => {
    setSearchData(inputData);
    return inputData;
  };

  const filteredData = data.filter((algo) =>
    algo.category.includes(searchData)
  );

  pullInputData;

  return (
    <div className={styles.sideBar}>
      <SideSearch inputData={pullInputData} />

      {filteredData.map((algoType, index) => (
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
