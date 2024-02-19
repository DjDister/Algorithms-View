"use client";
import Magnifier from "../../../public/svg/Magnifier";
import styles from "./SideSearch.module.css";

function SideSearch({
  inputData,
}: {
  inputData: (inputData: string) => string;
}) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#393939",
        borderBottom: "0.5px solid white",
        display: "flex",
      }}
    >
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
