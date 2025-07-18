import { fetchSheetData } from "@/lib/sheets";
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

export default function Home({ services, testimonials }: LandingPageProps) {
  return (
    <div>
      <Header />
      <div className="relative overflow-hidden">
        <div
          className="absolute top-40 -right-20 w-[480px] h-[600px] blur-3xl rounded-xl rotate-45 z-0  opacity-30"
          style={{
            background:
              "radial-gradient(circle, #bd7aff 10%, #0561ff 100%, #bd7aff 10%, #0561ff 40%)",
          }}
        ></div>

        <Hero />
        <WorkflowInAction />
      </div>
      <Partners />
      <AccelerateTeam />
      <AgentForBusiness />
      <Services services={services} />
      <Integrations />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const servicesData = await fetchSheetData("0");
  const testimonialsData = await fetchSheetData("865690004");

  return {
    props: {
      testimonials: testimonialsData,
      services: servicesData,
    },
  };
}
