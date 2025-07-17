import Image from "next/image";
import React from "react";

const WorkflowInAction = () => {
  return (
    <div className="min-h-[80dvh] bg-transparent  p-8 flex flex-col items-center relative">
      {/* <div className="absolute top-8 left-8 opacity-30">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="text-purple-400"
        >
          <path
            d="M20 40 L60 20 L100 40 L100 80 L60 100 L20 80 Z M20 40 L60 60 M100 40 L60 60 M60 20 L60 60 M60 60 L60 100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4,4"
          />
          <circle cx="20" cy="40" r="3" fill="currentColor" />
          <circle cx="60" cy="20" r="3" fill="currentColor" />
          <circle cx="100" cy="40" r="3" fill="currentColor" />
          <circle cx="100" cy="80" r="3" fill="currentColor" />
          <circle cx="60" cy="100" r="3" fill="currentColor" />
          <circle cx="20" cy="80" r="3" fill="currentColor" />
          <circle cx="60" cy="60" r="3" fill="currentColor" />
        </svg>
      </div> */}
      <div className="text-center">
        <p className="text-xs font-light  text-gray-500 mb-2 tracking-[0.4em] uppercase">
          [ Prompt to workflow ]
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
          WorkFlow In Action
        </h1>

        <p className="text-[#64748B] text-[16px] leading-relaxed max-w-2xl text-center px-1 font-normal">
          Auxi understands complex requests, applies logic, and integrates with
          your tools to get work done.
        </p>
      </div>

      <div className="max-w-5xl h-full pt-14">
        <Image
          src="/images/in-action-flow.png"
          alt="In action workflow diagram"
          width={5000}
          height={5000}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default WorkflowInAction;
