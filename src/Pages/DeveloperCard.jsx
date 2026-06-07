import { Rocket } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

export default function DeveloperCard() {
  return (
    <div className="relative flex items-center justify-center">
      <FaReact size={60}
        className="absolute -top-10 left-10 text-cyan-400 animate-bounce"
      />

      <FaNodeJs size={60}
        className="absolute top-10 -right-8 text-green-500 animate-pulse"
      />

      <SiMongodb size={60}
        className="absolute -bottom-10 left-16 text-green-400 animate-bounce"
      />

      <SiTailwindcss size={60}
        className="absolute bottom-10 -right-10 text-sky-400 animate-pulse"
      />

      <div className="w-[380px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-[0_0_40px_rgba(59,130,246,0.2)]"
      >
        <div className="flex gap-2 p-4 bg-slate-800">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-6 font-mono text-sm md:text-base">
          <p className="text-green-400">$ whoami</p>
          <p className="text-white mt-2">
            Aman Maurya
          </p>
          <p className="text-green-400 mt-5">$ role</p>
          <p className="text-white mt-2">
            MERN Stack Developer
          </p>
          <p className="text-green-400 mt-5">$ skills</p>
          <p className="text-cyan-400 mt-2">
            React.js
          </p>
          <p className="text-green-400">
            Node.js
          </p>
          <p className="text-emerald-400">
            MongoDB
          </p>
          <p className="text-sky-400">
            Tailwind CSS
          </p>
          <p className="text-green-400 mt-5">
            $ status
          </p>
          <p className="text-yellow-400 mt-2 flex items-center gap-2">
            Available for Work <Rocket size={20}/>
          </p>
        </div>
      </div>

      <div className="absolute w-80 h-80 bg-blue-500/20 blur-3xl -z-10 rounded-full"></div>
    </div>
  );
}