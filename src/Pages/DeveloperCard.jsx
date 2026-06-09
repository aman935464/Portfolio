import { Rocket } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export default function DeveloperCard() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-md mx-auto">
      <FaReact
        size={40}
        className="absolute top-0 left-4 sm:-top-8 sm:left-8 text-cyan-400 animate-bounce"
      />
      <FaNodeJs
        size={40}
        className="absolute top-8 right-0 sm:top-10 sm:-right-6 text-green-500 animate-pulse"
      />
      <SiMongodb
        size={40}
        className="absolute bottom-0 left-6 sm:-bottom-8 sm:left-12 text-green-400 animate-bounce"
      />
      <SiTailwindcss
        size={40}
        className="absolute bottom-10 right-2 sm:bottom-10 sm:-right-8 text-sky-400 animate-pulse"
      />
      <div
        className="
          w-full
          max-w-[380px]
          rounded-2xl
          overflow-hidden
          border border-slate-700
          bg-slate-900
          shadow-[0_0_40px_rgba(59,130,246,0.2)]
        "
      >
        <div className="flex gap-2 p-4 bg-slate-800">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-4 sm:p-6 font-mono text-sm sm:text-base">
          <p className="text-green-400">$ whoami</p>
          <p className="text-white mt-2">Aman Maurya</p>
          <p className="text-green-400 mt-5">$ role</p>
          <p className="text-white mt-2">MERN Stack Developer</p>

          <p className="text-green-400 mt-5">$ skills</p>
          <p className="text-cyan-400 mt-2">React.js</p>
          <p className="text-green-400">Node.js</p>
          <p className="text-emerald-400">MongoDB</p>
          <p className="text-sky-400">Tailwind CSS</p>
          <p className="text-green-400 mt-5">$ status</p>
          <p className="text-yellow-400 mt-2 flex items-center gap-2">
            Available for Work
            <Rocket size={18} />
          </p>
        </div>
      </div>

      <div className="absolute w-56 h-56 sm:w-80 sm:h-80 bg-blue-500/20 blur-3xl -z-10 rounded-full"></div>
    </div>
  );
}