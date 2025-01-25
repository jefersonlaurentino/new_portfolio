import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MySkills from "@/components/MySkills";
import Projects from "@/components/Projects";
import SobreMim from "@/components/SobreMim";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <SobreMim/>
      <Projects/>
      <MySkills/>
      <Contact/>
      <Footer/>
    </>
  );
}
