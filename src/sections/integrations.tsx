"use client";

import Image from "next/image";
import React, { useState } from "react";
interface IntegratedApps {
  id: string;
  name: string;
  logo: string;
  screenshot: string;
}

const integrations: IntegratedApps[] = [
  {
    id: "teams",
    name: "Teams",
    logo: "/images/teams.png",
    screenshot: "/images/integrations/teams.png",
  },
  {
    id: "slack",
    name: "Slack",
    logo: "/images/Slack.png",
    screenshot: "/images/integrations/slack.png",
  },

  {
    id: "sms",
    name: "SMS",
    logo: "/images/sms.png",
    screenshot: "/images/integrations/sms.png",
  },
];

const Integrations = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen w-full bg-black text-center mt-40  relative">
      <div className=" max-w-lg  sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-full mx-auto bg-black px-12 py-10 flex flex-col md:flex-row gap-4  items-center justify-between absolute -top-20 left-2 md:left-6  lg:left-16 rounded-4xl">
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
            Integrations
          </h1>
          <p className="text-gray-50 text-xs lg:text-[16px] leading-relaxed max-w-xl text-left  mt-2 font-light">
            Connect Auxi to your enterprise stack in minutes, allowing your team
            to instantly experience a 10x productivity improvement without
            compromising on security or ease of use.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {integrations.map((app, index) => (
            <div
              key={app.id}
              className={`flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-opacity
              `}
              onClick={() => setActiveTab(index)}
            >
              <div
                className={`w-16 h-16 rounded-lg flex items-center justify-center shadow-lg  ${
                  activeTab === index ? "bg-[#ffffff2d] backdrop-blur-2xl " : ""
                }`}
              >
                <Image
                  src={app.logo || "/placeholder.svg"}
                  alt={`${app.name} logo`}
                  width={200}
                  height={200}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-white text-sm font-medium">{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full h-full mx-auto  px-10 pb-6">
        <div
          className="py-4"
          style={{
            background:
              "radial-gradient(circle,  #00a7f566 0%, #000 80%, #000 100%)",
          }}
        >
          <Image
            src="/images/integration-pattern.png"
            alt="pattern"
            width={5000}
            height={5000}
            className="max-w-3xl w-full h-96 object-cover object-center mt-16 "
          />
        </div>
        <Image
          src={integrations[activeTab].screenshot}
          alt="Dashboard"
          width={1000}
          height={1000}
          className="w-full h-full object-contain -mt-46 transition-all ease-in duration-500"
        />
      </div>
    </div>
  );
};

export default Integrations;
