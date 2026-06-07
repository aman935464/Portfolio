import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiPostman,
  SiMysql,
  SiVite,
  SiStreamlit,
  SiJsonwebtokens
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { Brain, } from "lucide-react"

const Skill = {
  Frontend: [
    { name: "React.js", icon: FaReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux", icon: SiRedux },
    { name: "zustand", icon: Brain }
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "REST APIs", icon: SiStreamlit },
    { name: "JWT Authentication", icon: SiJsonwebtokens },
  ],
  Database: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Vite", icon: SiVite },
    { name: "VS Code", icon: VscVscode}
  ],
};

export default Skill