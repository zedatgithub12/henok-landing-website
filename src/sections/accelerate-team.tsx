"use client";

import {
  CalendarArrowUp,
  Clock,
  Thermometer,
  ThermometerSun,
  LucideProps,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type IconComponent = React.ElementType<LucideProps>;

// Defines the structure for a single metric item in a card.
type Metric = {
  label: string;
  value: string;
  Icon: IconComponent;
  iconColor: string;
};

// Defines the structure for a single comparison card's data.
type ComparisonCardProps = {
  title: string;
  offer: boolean;
  description: string;
  metrics: Metric[];
};

const comparisonData: ComparisonCardProps[] = [
  {
    title: "Build it Yourself",
    offer: false,
    description:
      "Long dev cycles, constant maintenance, and a team distracted from core priorities.",
    metrics: [
      {
        label: "Time to launch",
        value: "Months",
        Icon: CalendarArrowUp,
        iconColor: "#FCA5A5",
      },
      {
        label: "Ongoing maintenance",
        value: "High",
        Icon: ThermometerSun,
        iconColor: "#FCA5A5",
      },
    ],
  },
  {
    title: "With Auxi",
    offer: true,
    description:
      "Launch in days, automate instantly, and keep your team focused on what matters.",
    metrics: [
      {
        label: "Time to launch",
        value: "Days",
        Icon: Clock,
        iconColor: "#86EFAC",
      },
      {
        label: "Ongoing maintenance",
        value: "Zero",
        Icon: Thermometer,
        iconColor: "#86EFAC",
      },
    ],
  },
];

const AccelerateTeam = () => {
  const [switchState, setSwitchState] = useState(false);

  return (
    <div className="min-h-[80dvh] bg-transparent p-8 pt-16 pb-0 flex flex-col items-center relative">
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

      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center gap-6 pt-12 px-1 md:px-4  overflow-hidden z-10">
        {comparisonData.map((card, index) => (
          <div
            key={index}
            className={`text-white rounded-lg py-6 px-5 w-full max-w-md shadow-lg mx-auto text-center flex flex-col h-full ${
              card.offer ? "bg-black" : "bg-[#1E293B]"
            } ${switchState && card.offer ? " shadow-xl shadow-[#f1e3ff]" : ""}
            `}
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-gray-400 mb-4 flex-grow px-4">
              {card.description}
            </p>

            {card.offer ? (
              <div className="flex justify-center items-center  relative">
                <Image
                  src="/images/auxi-build.png"
                  alt="auxi build"
                  width={200}
                  height={200}
                  className="w-24 h-24 object-contain "
                />
              </div>
            ) : (
              <div className="flex justify-center items-center  relative">
                <Image
                  src="/images/build-yourself.png"
                  alt="build yourself"
                  width={200}
                  height={200}
                  className="w-24 h-24 object-contain "
                />
              </div>
            )}

            <div className="border-t border-gray-700 -mt-9 mb-10"></div>

            <div className="flex justify-between text-sm text-gray-300 gap-4 w-full">
              {card.metrics.map((metric) => {
                const { Icon } = metric;
                return (
                  <div
                    key={metric.label}
                    className="flex flex-col gap-2 text-left w-1/2"
                  >
                    <span className="text-xs">{metric.label}</span>
                    <div className="flex items-center justify-between pr-6">
                      <span className="font-semibold text-white">
                        {metric.value}
                      </span>
                      <Icon
                        size={22}
                        color={metric.iconColor}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-xs -mt-7 flex items-center justify-end z-0">
        <Image
          src="/images/arrow-to-dashboard.png"
          alt="arrow-to-dashboard"
          width={200}
          height={500}
          className="w-44 h-fit object-contain "
        />
      </div>

      <div className="max-w-5xl -mt-12 -z-10">
        <Image
          src="/images/auxi-board.png"
          alt="dashboard"
          width={800}
          height={800}
          className="w-full h-full object-contain z-0"
          priority
        />
      </div>
    </div>
  );
};

export default AccelerateTeam;
