import React from "react";

export default function Header({ title, desc, bold }) {
  return (
    <>
      <div className="px-20 bg-white pt-16 pb-12">
        <div className="font-bold tracking-widest text-2xl text-black uppercase">
          {title}
        </div>
        {desc && (
          <p
            className={
              bold
                ? "mt-5 font-bold text-black uppercase tracking-widest"
                : "mt-5 text-gray-700 uppercase tracking-widest"
            }
          >
            {desc}
          </p>
        )}
      </div>
      <hr />
    </>
  );
}
