import { ChangeEvent, useState } from "react";
import styles from "./RangeInput.module.css";

function RangeInput({
  sliderValueFunction,
  inputLabel,
}: {
  sliderValueFunction: (sliderValue: number) => void;
  inputLabel: string;
}) {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(event.target.valueAsNumber);
    sliderValueFunction(event.target.valueAsNumber);
  };

  return (
    <div className={styles.inputBox}>
      <div>{inputLabel}</div>
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
