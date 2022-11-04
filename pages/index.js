import { BgImage } from "../components/BgImage";
import { Bio } from "../components/Bio";
import { Footer } from "../components/Footer";
import { MySkills } from "../components/MySkills";
import { PassionedAbout } from "../components/PassionedAbout";
import { Projects } from "../components/Projects";
import { WelcomeText } from "../components/WelcomeText";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <BgImage></BgImage>
        <div className="relative flex flex-col mx-auto gap-6 pr-16 z-10 w-9/12 pt-20">
          <WelcomeText></WelcomeText>
          <PassionedAbout></PassionedAbout>
          <MySkills></MySkills>
        </div>
      </div>
      <div className="w-full z-10 mt-8">
        <Projects></Projects>
      </div>
      <Bio></Bio>
      <Footer></Footer>
    </div>
  );
}
