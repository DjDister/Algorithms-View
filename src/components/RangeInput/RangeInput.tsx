import { ChangeEvent, useState } from "react";
import styles from "./RangeInput.module.css";

function RangeInput() {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };
  return (
    <div className={styles.inputBox}>
      <div>Adjust Sorting Speed</div>
      <input
        type="range"
        min={0}
        max={100}
        className={styles.rangeInput}
        onChange={handleSliderChange}
      />
      <div>{sliderValue}</div>
    </div>
  );
}
export default RangeInput;
