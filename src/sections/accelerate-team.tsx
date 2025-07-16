"use client";

import React, { useState } from "react";

const AccelerateTeam = () => {
  const [switchState, setSwitchState] = useState(false);

  return (
    <div className="min-h-[80dvh] bg-transparent p-8 py-16 flex flex-col items-center relative">
      <div className="text-center space-y-2">
        <p className="text-xs font-light  text-gray-500 mb-2 tracking-[0.4em] uppercase">
          [ Automation ]
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-black leading-tight max-w-xl text-center">
          Accelerate your team with intelligent task automation
        </h1>

        <p className="text-[#64748B] text-[16px] leading-relaxed max-w-xl text-center px-2 font-normal">
          Auxi automates busywork and accelerates real work—right inside your
          everyday tools.
        </p>
      </div>

      <div className="w-full flex items-center justify-center gap-6 mt-12">
        <h4 className="text-xl md:text-3xl font-medium text-gray-500">
          Build yourself
        </h4>

        <div
          className={`w-20 h-12 rounded-full transition-all ease-out  ${
            switchState ? "bg-[#3B0764]" : "bg-[#f5eaff]"
          }  p-1 relative`}
          onClick={() => setSwitchState(!switchState)}
        >
          <div
            className={`w-10 h-10 rounded-full   ${
              switchState ? " bg-[#f5e9ff] float-end" : " bg-[#3B0764]  "
            } `}
          />
        </div>
        <h4 className="text-xl md:text-3xl font-bold text-[#3B0764]">Auxi</h4>
      </div>
    </div>
  );
};

export default AccelerateTeam;
