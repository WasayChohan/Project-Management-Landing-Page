import DashboardShowcase from "../../components/dashboardshowcase/DashboardShowCase";
import Hero from "../../components/hero/Hero";
import HowItWorks from "../../components/howitworks/HowItWorks";
import Navber from "../../components/navber/Navber";
import Testimonials from "../../components/testimonials/Testimonials";
import Trusted from "../../components/trusted/Trusted";
import Features from "../features/Features";
import Pricing from "../pricing/Pricing";

const Home = () => {
  return (
    <>
      <Navber />
      <Hero />
      <Trusted />
      <Features />
      <HowItWorks />
      <DashboardShowcase />
      <Pricing />
      <Testimonials />
    </>
  );
};

export default Home;
