import DashboardShowcase from "../../components/dashboardshowcase/DashboardShowCase";
import Features from "../../components/features/Features";
import Hero from "../../components/hero/Hero";
import HowItWorks from "../../components/howitworks/HowItWorks";
import Navber from "../../components/navber/Navber";
import Trusted from "../../components/trusted/Trusted";
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
    </>
  );
};

export default Home;
