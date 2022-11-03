import { Arrow } from "../components/Arrow";
import { BgImage } from "../components/BgImage";
import { Bio } from "../components/Bio";
import { Footer } from "../components/Footer";
import { MySkills } from "../components/MySkills";
import { Navbar } from "../components/Navbar";
import { PassionedAbout } from "../components/PassionedAbout";
import { Projects } from "../components/Projects";
import { WelcomeText } from "../components/WelcomeText";

export default function Home() {
  return (
    <BgImage>
      {/* <Navbar></Navbar> */}
      {/* <Arrow></Arrow> */}
      <div className="flex flex-col w-9/12 mx-auto gap-6 pr-16">
        <WelcomeText></WelcomeText>
        <PassionedAbout></PassionedAbout>
        <MySkills></MySkills>
      </div>
      <div className="w-full z-10 mt-36">
        <Projects></Projects>
      </div>
      <div className="w-9/12 mx-auto bg-lime-800 mt-10">
        <Bio></Bio>
      </div>
      <Footer></Footer>
    </BgImage>
  );
}
