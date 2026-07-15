import DashboardShowcase from "../../components/dashboardshowcase/DashboardShowCase";
import FAQ from "../../components/faq/FAQ";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import HowItWorks from "../../components/howitworks/HowItWorks";
import Navber from "../../components/navber/Navber";
import Newsletter from "../../components/newsletter/Newsletter";
import Testimonials from "../../components/testimonials/Testimonials";
import Trusted from "../../components/trusted/Trusted";
import Features from "../features/Features";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
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
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
