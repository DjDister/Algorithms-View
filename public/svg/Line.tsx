export default function Line({
  x1,
  y1,
  x2,
  y2,
  strokeColor,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  strokeColor?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        overflowY: "hidden",
      }}
    >
      <svg height="100%" width="100%">
        <line
          x1={`${x1}%`}
          y1={`${y1}%`}
          x2={`${x2}%`}
          y2={`${y2}%`}
          style={{
            stroke: strokeColor ? strokeColor : "#a6a6a6",
            strokeWidth: 2,
          }}
        />
      </svg>
    </div>
  );
}
