"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, Zap, Settings, LucideProps } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type IconComponent = React.ElementType<LucideProps>;

interface Integration {
  name: string;
  icon?: string;
}

interface AgentContent {
  title: string;
  description: string;
  integrations: Integration[];
}

interface AgentType {
  title: string;
  subtitle: string;
  icon: IconComponent;
  content: AgentContent;
}

interface AgentTypes {
  knowledge: AgentType;
  saas: AgentType;
  productivity: AgentType;
  custom: AgentType;
}

type AgentKey = "knowledge" | "saas" | "productivity" | "custom";

const AgentForBusiness = () => {
  const [activeTab, setActiveTab] = useState<AgentKey>("knowledge");

  const agentTypes: AgentTypes = {
    knowledge: {
      title: "Knowledge Base Agents",
      subtitle: "Automate lead capture",
      icon: Brain,
      content: {
        title: "Automate Lead Capture & Qualification",
        description:
          "Knowledge Base Agents leverage your existing documentation and FAQs to automatically capture and qualify leads. They provide instant responses to common questions and seamlessly hand off qualified prospects to your sales team.",
        integrations: [
          {
            name: "Salesforce",
          },
          {
            name: "HubSpot",
          },
          { name: "Intercom" },
        ],
      },
    },
    saas: {
      title: "SaaS Agents",
      subtitle: "Deliver Instant Customer Support",
      icon: MessageSquare,
      content: {
        title: "Deliver Instant Customer Support",
        description:
          "The Sales Agent connects to your CRM and communication tools to automate lead qualification, schedule meetings, and provide reps with the information they need to close deals faster.",
        integrations: [
          {
            name: "Workday",

            icon: "/images/integrations/workday.svg",
          },
          {
            name: "Dovetail",

            icon: "/images/integrations/dovetail.svg",
          },
          {
            name: "Zendesk",

            icon: "/images/integrations/zendesk.svg",
          },
        ],
      },
    },
    productivity: {
      title: "Productivity Agents",
      subtitle: "Streamline Workflow Automation",
      icon: Zap,
      content: {
        title: "Streamline Workflow Automation",
        description:
          "Productivity Agents integrate with your existing tools to automate repetitive tasks, manage schedules, and optimize team workflows. They help reduce manual work and increase overall team efficiency.",
        integrations: [
          { name: "Slack" },
          { name: "Asana" },
          { name: "Notion" },
        ],
      },
    },
    custom: {
      title: "Custom Agents",
      subtitle: "Streamline Human Resources",
      icon: Settings,
      content: {
        title: "Streamline Human Resources",
        description:
          "Custom Agents are tailored to your specific business needs and can be configured to handle unique workflows, integrate with proprietary systems, and provide specialized functionality for your organization.",
        integrations: [
          { name: "BambooHR" },
          { name: "Workday" },
          { name: "ADP" },
        ],
      },
    },
  };

  return (
    <section className="pt-20 pb-8 -mt-44 z-100 bg-white ">
      <div className="max-w-6xl mx-auto  ">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-light  text-gray-500 mb-2 tracking-[0.4em] uppercase">
              [AGENTS]
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#3B0764] leading-tight">
              AI Agents for Every <br /> Business Need
            </h1>

            <p className="text-[#64748B] text-[16px] leading-relaxed max-w-xl text-left mt-2 font-light">
              From knowledge management to SaaS integrations, discover how
              different types of AI agents can transform your business
              operations.
            </p>
          </div>
          <div className="flex gap-2"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {Object.entries(agentTypes).map(([key, agent]) => {
                const IconComponent = agent.icon;
                const isActive = activeTab === key;

                return (
                  <Card
                    key={key}
                    className={` border-l-4  transition-all cursor-pointer shadow-none p-1 ${
                      isActive
                        ? "border-l-[#3B0764] bg-purple-50 shadow-lg shadow-gray-100"
                        : "border-l-gray-200 hover:shadow-lg hover:shadow-gray-100 hover:border-l-[#3B0764]"
                    }`}
                    onClick={() => setActiveTab(key as AgentKey)}
                  >
                    <CardContent className="p-2">
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            isActive ? "bg-purple-200" : "bg-gray-100"
                          }`}
                        >
                          <IconComponent
                            className={`w-5 h-5 ${
                              isActive ? "text-[#3B0764]" : "text-gray-600"
                            }`}
                          />
                        </div>
                        <div>
                          <h3
                            className={`font-semibold mb-1 ${
                              isActive ? "text-[#3B0764]" : "text-gray-900"
                            }`}
                          >
                            {agent?.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              isActive ? "text-[#3B0764]" : "text-gray-600"
                            }`}
                          >
                            {agent?.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full border-0 shadow-none bg-[#FAF5FF]">
              <CardContent className="p-6 py-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {agentTypes[activeTab].content.title}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {agentTypes[activeTab].content.description}
                </p>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Key Integrations:
                  </h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    {agentTypes[activeTab].content.integrations.map(
                      (integration, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {integration.icon ? (
                            <Image
                              src={integration.icon}
                              alt="logo"
                              width={18}
                              height={18}
                              className="grayscale"
                            />
                          ) : null}
                          <span className="font-medium text-md text-[#64748B]">
                            {integration.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentForBusiness;
