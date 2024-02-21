"use client";
import GraphLayout from "@/components/GraphLayout/GraphLayout";
import { shuffle } from "@/utils/arrays-utils";
import { useState } from "react";

export default function Page() {
  const [isAbleToSort, setIsAbleToSort] = useState(false);

  return (
    <GraphLayout
      sorrtingArray={[
        10, 20, 30, 40, 50, 60, 7, 80, 90, 29, 75, 12, 13, 14, 93,
      ]}
      onRandomize={() =>
        shuffle([10, 20, 30, 40, 50, 60, 7, 80, 90, 29, 75, 12, 13, 14, 93])
      }
      onSort={() => {}}
      title="Stalin Sort"
      isAbleToSort={isAbleToSort}
    />
  );
}
