import RandomGraph from "@/components/RandomGraph/RandomGraph";
import { GRAPH_DATA } from "@/utils/consts/graphData";

export default function Home() {
  return (
    <div>
      <RandomGraph graphData={GRAPH_DATA} />
    </div>
  );
}
