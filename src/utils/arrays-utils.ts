export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export const createRandomArray = (
  length: number,
  minValue = 5,
  maxValue = 50
): number[] => {
  const uniqueNumbers = new Set<number>();
  while (uniqueNumbers.size < length) {
    const randomNumber = Math.floor(
      Math.random() * (maxValue - minValue + 1) + minValue
    );
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
};
