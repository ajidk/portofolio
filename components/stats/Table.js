import React from "react";

export default function Table({ color, value, label }) {
  return (
    <div>
      <div
        className={
          color % 2 == 0
            ? "bg-white p-4 border-b border-b-gray-400 grid grid-cols-2 gap-20 items-center"
            : "bg-gray-100 p-4 border-b border-b-gray-400 grid grid-cols-2 gap-20 items-center"
        }
      >
        <div className="capitalize">{label}</div>
        <div className="capitalize">{value}</div>
      </div>
    </div>
  );
}
