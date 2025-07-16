import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
  const features = [
    {
      title: "Autonomous Onboarding & Employee Support",
      description:
        "Our agents streamline the entire onboarding process, providing new hires with instant access to company information and resources. They handle common HR queries and guide employees through essential tasks with intelligent automation.",
      bgClass: "bg-gradient-to-br from-teal-400 to-teal-600",
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
      bgClass: "bg-gradient-to-br from-pink-400 to-red-400",
      pattern: "lines",
    },
  ];

  return (
    <section className="bg-white py-8 px-6">
      <div className="bg-white pt-16 pb-0 px-6">
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
              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 shadow-lg">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 shadow-lg">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-nowrap overflow-x-auto scrollbar-hidden  gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgClass} rounded-2xl p-6 text-white relative overflow-hidden min-w-[380px] h-[72dvh] flex flex-col justify-end`}
            >
              <div className="absolute -top-2 -right-1 opacity-20 rounded-bl-4xl overflow-hidden">
                <div className="grid grid-cols-8 gap-4 h-full p-4">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white rounded-full" />
                  ))}
                </div>
              </div>

              <div className="relative z-10 h-1/2">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
