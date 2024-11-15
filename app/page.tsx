import { Metadata } from "next/types";
import FAQs from "./components/FAQs";
import MainHeader from "./components/MainHeader";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Values from "./components/Values";

export const metadata: Metadata = {
  title: "Xplorers Gym | Home",
};

export default function Home() {
  return (
    <main>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </main>
  );
}
