import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import Features from "../../components/Features";
import usePageTitle from "../../hooks/usePageTitle";

function Home() {
  usePageTitle("Home");
  return (
    <div className="">
        <Hero />
        <Features />
        <HowItWorks />

    </div>
  )
}

export default Home
