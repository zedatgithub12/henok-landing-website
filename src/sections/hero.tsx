import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[60dvh] bg-[#ffffff66] p-8 border-t border-t-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="relative">
            <div className=" rounded-lg p-8 lg:p-12">
              <div className="space-y-5">
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-b from-[#2E1065] to-[#9747FF] bg-clip-text text-transparent leading-tight">
                  AI Assistants that Work Like Teammates
                </h1>
                <p className="text-[#64748B] text-[16px] leading-relaxed max-w-xl">
                  Free your team from repetitive tasks with automation
                  that&apos;s fast to deploy, easy to customize, and built for
                  scale.
                </p>
                <button className="bg-[#3B0764] hover:bg-[#3c0764e4] text-sm text-white px-4 py-3 rounded-lg font-normal flex items-center gap-2">
                  Join Waitlist
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Workflow Diagram */}
          <div className="relative ">
            <div className=" rounded-lg ">
              <div className="relative h-96 flex items-center justify-center">
                <Image
                  src="/images/flow diagram.png"
                  alt="workflow diagram"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
