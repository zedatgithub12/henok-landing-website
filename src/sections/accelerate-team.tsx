"use client";

import {
  CalendarArrowUp,
  Clock,
  Thermometer,
  ThermometerSun,
} from "lucide-react";
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

      <div className="max-w-3xl flex items-center gap-6 py-12">
        <div className="bg-[#1E293B] text-white rounded-lg p-6 w-full max-w-sm shadow-md mx-auto text-center py-12">
          <h2 className="text-lg font-semibold mb-2">Build it Yourself</h2>
          <p className="text-sm text-gray-400 mb-4">
            Long dev cycles, constant maintenance, and a team distracted from
            core priorities.
          </p>

          <div className="flex justify-center my-4">
            {/* Decorative SVG */}
            <svg width="60" height="60" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#4FB1FF"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M50 10 A40 40 0 1 1 49.9 10"
                stroke="#4FB1FF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="border-t border-gray-700 my-4"></div>

          <div className="flex justify-between text-sm text-gray-300">
            <div className="flex flex-col gap-2">
              <span>Time to launch</span>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Months</span>
                <CalendarArrowUp size={22} color="#FCA5A5" strokeWidth={1} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span>Ongoing maintenance</span>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">High</span>
                <ThermometerSun size={22} color="#FCA5A5" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white rounded-lg p-6 w-full max-w-sm shadow-md mx-auto text-center py-12">
          <h2 className="text-lg font-semibold mb-2">With Auxi</h2>
          <p className="text-sm text-gray-400 mb-4">
            Launch in days, automate instantly, and keep your team focused on
            what matters.
          </p>

          <div className="flex justify-center my-4">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#4FB1FF"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M50 10 A40 40 0 1 1 49.9 10"
                stroke="#4FB1FF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="border-t border-gray-700 my-4"></div>

          <div className="flex justify-between text-sm text-gray-300">
            <div className="flex flex-col gap-2">
              <span>Time to launch</span>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Days</span>
                <Clock size={22} color="#86EFAC" strokeWidth={1} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span>Ongoing maintenance</span>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Zero</span>
                <Thermometer size={22} color="#86EFAC" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccelerateTeam;
