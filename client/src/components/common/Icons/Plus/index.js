import React from "react";

export function Plus({ fill = "black" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={fill}
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
        </g>
      </g>
    </svg>
  );
}
