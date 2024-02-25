import Line from "../../../public/svg/Line";
import Vertex from "../RandomGraph/Vertex";

export default function EdgeWithVertexes({
  hasTopVertex = false,
  topVertexValue,
  hasBottomVertex = true,
  bottomVertexValue,
  edgeColor,
  topX,
  topY,
  bottomX,
  bottomY,
}: {
  hasTopVertex?: boolean;
  topVertexValue?: number;
  hasBottomVertex?: boolean;
  bottomVertexValue?: number;
  edgeColor?: string;
  topX: number;
  topY: number;
  bottomX: number;
  bottomY: number;
}) {
  return (
    <>
      {hasTopVertex ? (
        <div style={{ zIndex: "20" }}>
          <Vertex
            positionX={topX}
            positionY={topY}
            vertexNumber={topVertexValue}
          />
        </div>
      ) : null}
      <Line
        x1={topX}
        y1={topY}
        x2={bottomX}
        y2={bottomY}
        strokeColor={edgeColor}
      />
      {hasBottomVertex ? (
        <div style={{ zIndex: "19" }}>
          <Vertex
            positionX={bottomX}
            positionY={bottomY}
            vertexNumber={bottomVertexValue}
          />
        </div>
      ) : null}
    </>
  );
}
