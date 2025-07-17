"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    title: "Autonomous Onboarding & Employee Support",
    description:
      "Our agents streamline the entire onboarding process, providing new hires with instant access to company information and resources. They handle common HR queries and guide employees through essential tasks with intelligent automation.",
    bgClass: "bg-gradient-to-br from-[#45D0BD] to-[#44B6E9]",
    pattern: "dots",
  },
  {
    title: "Automated IT Support & System Orchestration",
    description:
      "Intelligent agents that can seamlessly integrate with your existing IT infrastructure, providing instant support and automated system management. They boost employee productivity and reduce operational overhead through smart automation.",
    bgClass: "bg-gradient-to-br from-purple-400 to-purple-600",
    pattern: "dots",
  },
  {
    title: "Lead Capture & CRM Automation",
    description:
      "Engage website visitors in real-time, converting prospects into qualified leads through intelligent conversations. Our agents seamlessly integrate with your CRM, ensuring no opportunity is missed.",
    bgClass: "bg-gradient-to-br from-[#DD648D] to-[#DEA750]",
    pattern: "lines",
  },
  {
    title: "Lead Capture & CRM Automation",
    description:
      "Engage website visitors in real-time, converting prospects into qualified leads through intelligent conversations. Our agents seamlessly integrate with your CRM, ensuring no opportunity is missed.",
    bgClass: "bg-gradient-to-br from-[#DD648D] to-[#DEA750]",
    pattern: "lines",
  },
  {
    title: "Lead Capture & CRM Automation",
    description:
      "Engage website visitors in real-time, converting prospects into qualified leads through intelligent conversations. Our agents seamlessly integrate with your CRM, ensuring no opportunity is missed.",
    bgClass: "bg-gradient-to-br from-[#DD648D] to-[#DEA750]",
    pattern: "lines",
  },
];

const patternImages = [
  "/images/patterns/autonomus-onboarding.png",
  "/images/patterns/automated-it.png",
  "/images/build-yourself.png",
];

const Services = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.children[0] as HTMLElement;

      if (firstCard) {
        const scrollAmount = firstCard.offsetWidth + 24;

        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <section className="bg-white py-8 px-6">
      <div className="bg-white pt-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-light  text-gray-400 mb-2 tracking-widest">
                [SERVICES]
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-[#3B0764] leading-tight">
                Purpose-built agents
                <br />
                for every team
              </h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleScroll("left")}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 shadow-lg shadow-gray-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 shadow-lg shadow-gray-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap overflow-x-auto scrollbar-hidden px-6 scrollbar-hide  gap-6"
        >
          {features.map((feature, index) => {
            const randomNum = Math.floor(Math.random() * 3);

            return (
              <div
                key={index}
                className={`${feature.bgClass} rounded-2xl p-6 pb-20 text-white relative overflow-hidden min-w-[380px] h-[72dvh] flex flex-col justify-end`}
              >
                <Image
                  src={patternImages[randomNum]}
                  alt={feature.title}
                  width={400}
                  height={400}
                  className="w-64 h-64 object-cover absolute -right-2 -top-2"
                />

                <div className="relative z-10 h-1/2">
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
