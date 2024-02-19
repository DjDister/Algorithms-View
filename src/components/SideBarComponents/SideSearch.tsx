"use client";
import Magnifier from "../../../public/svg/Magnifier";
import styles from "./SideSearch.module.css";

function SideSearch({
  inputData,
}: {
  inputData: (inputData: string) => string;
}) {
  return (
    <div className={styles.wholeSearchBar}>
      <Magnifier width={20} />
      <input
        className={styles.sideSearch}
        placeholder="Search..."
        onChange={(e) => inputData(e.target.value)}
      />
    </div>
  );
}
export default SideSearch;
