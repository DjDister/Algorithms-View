import * as React from "react";
import { SVGProps } from "react";

const SortSvg = (props: SVGProps<SVGSVGElement> & { fill?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={18}
    height={18}
    {...props}
  >
    <path
      fill={props.fill || "currentColor"}
      d="M15.78 5.72a.75.75 0 0 1-1.06 1.06L13 5.06v4.69a.75.75 0 0 1-1.5 0V5.06L9.78 6.78a.75.75 0 0 1-1.06-1.06l3-3a.748.748 0 0 1 .528-.22h.004a.748.748 0 0 1 .528.22l3 3zM3 10.5A.75.75 0 0 1 3 9h6a.75.75 0 0 1 0 1.5H3zm-.75 2.25c0 .414.336.75.75.75h10a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0-.75.75zM3 7.5A.75.75 0 0 1 3 6h3a.75.75 0 0 1 0 1.5H3zm-.75-3.75c0 .414.336.75.75.75h3A.75.75 0 0 0 6 3H3a.75.75 0 0 0-.75.75z"
    />
  </svg>
);
export default SortSvg;
