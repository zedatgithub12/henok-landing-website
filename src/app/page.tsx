import AccelerateTeam from "@/sections/accelerate-team";
import AgentForBusiness from "@/sections/agent-for-business";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import Integrations from "@/sections/integrations";
import Partners from "@/sections/partners";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import WorkflowInAction from "@/sections/workflow-in-action";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative overflow-hidden">
        <div
          className="absolute top-50 -right-20 w-[500px] h-[500px] rounded-full z-0 blur-3xl opacity-36"
          style={{
            background:
              "radial-gradient(circle,  #d37aff 0%, #bd7aff 40%, #0561ff 80%, #6ba2ff 100%)",
          }}
        ></div>

        <Hero />
        <WorkflowInAction />
      </div>
      <Partners />
      <AccelerateTeam />
      <AgentForBusiness />
      <Services />
      <Integrations />
      <Testimonials />
      <Footer />
    </div>
  );
}
