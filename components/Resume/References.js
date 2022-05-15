import Link from "next/link";
import React from "react";
import { Gap } from "../Atoms";

export default function References() {
  return (
    <div className="grid justify-center">
      <span className="text-lg uppercase tracking-widest font-bold">
        <Link href="contact">REFERENCES ARE AVAILABLE UPON REQUEST </Link>
      </span>
    </div>
  );
}
