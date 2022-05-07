import React from "react";
import { Gap } from "../Atoms";
import Table from "./Table";

export default function Personal() {
  const datas = [
    {
      id: 1,
      label: "current age",
      value: 23,
    },
    {
      id: 2,
      label: "countries visited",
      value: 1,
    },
    {
      id: 3,
      label: "current city",
      value: "Lampung,  Indonesia",
    },
  ];
  return (
    <div>
      <div className="uppercase tracking-widest text-2xl font-bold">
        some stats about me
      </div>
      <Gap height={24} />
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <Table color={data.id} label={data.label} value={data.value} />
          </div>
        );
      })}
    </div>
  );
}
