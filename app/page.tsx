import Image from "next/image";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import CtaBanner from "./components/CtaBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <CtaBanner />
      <WhyChooseUs />
      <Faq />
    </div>
  );
}
