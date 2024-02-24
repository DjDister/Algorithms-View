import { ChangeEvent, useState } from "react";
import styles from "./RangeInput.module.css";

function RangeInput({
  sliderValueFunction,
}: {
  sliderValueFunction: (sliderValue: number) => void;
}) {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(event.target.valueAsNumber);
    sliderValueFunction(event.target.valueAsNumber);
  };

  return (
    <div className={styles.inputBox}>
      <div>Adjust Sorting Speed</div>
      <input
        type="range"
        min={1}
        max={100}
        className={styles.rangeInput}
        onChange={handleSliderChange}
      />
      <div>{sliderValue}</div>
    </div>
  );
}
export default RangeInput;
