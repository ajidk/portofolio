import Link from "next/link";
import React from "react";
import { Gap } from "../Atoms";

export default function References() {
  return (
    <div className="grid justify-center">
      <Link href="contact" className="text-lg uppercase tracking-widest font-bold">
        REFERENCES ARE AVAILABLE UPON REQUEST      </Link>
    </div>
  );
}
