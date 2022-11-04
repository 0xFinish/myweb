import { Skill } from "./Skill";
import { DiReact, DiJava } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiVercel,
  SiSemanticuireact,
} from "react-icons/si";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaNodeJs, GiReactor, FaPython } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { BiGitPullRequest } from "react-icons/bi";
export function MySkills() {
  const iconSize = 25;

  return (
    <div className="flex bg-green-900 w-auto p-4 rounded-xl divide-y-2 flex-col text-white mb-60 bg-opacity-60 max-w-2xl">
      <p className="p-2 font-bold text-xl">My skills</p>
      <div className="flex py-2 text-black flex-wrap">
        <Skill>
          JavaScript
          <IoLogoJavascript
            size={iconSize - 5}
            className="text-black"
          ></IoLogoJavascript>
        </Skill>
        <Skill>
          React<DiReact size={iconSize}></DiReact>
        </Skill>
        <Skill>
          Next.js<SiNextdotjs size={iconSize}></SiNextdotjs>
        </Skill>
        <Skill>
          TailwindCSS<SiTailwindcss size={iconSize}></SiTailwindcss>
        </Skill>
        <Skill>
          HTML<AiFillHtml5 size={iconSize}></AiFillHtml5>
        </Skill>
        <Skill>
          Node.js<FaNodeJs size={iconSize}></FaNodeJs>
        </Skill>
        <Skill>
          React-query<SiSemanticuireact size={iconSize}></SiSemanticuireact>
        </Skill>
        <Skill>
          ReactHooks<TbBrandReactNative size={iconSize}></TbBrandReactNative>
        </Skill>
        <Skill>
          MongoDB<SiMongodb size={iconSize}></SiMongodb>
        </Skill>
        <Skill>
          Axios <BiGitPullRequest size={iconSize}></BiGitPullRequest>
        </Skill>
        <Skill>
          Python <FaPython size={iconSize}></FaPython>
        </Skill>
        <Skill>
          Java <DiJava size={iconSize}></DiJava>
        </Skill>
        <Skill>
          GitHub <AiFillGithub size={iconSize}></AiFillGithub>
        </Skill>
      </div>
    </div>
  );
}
