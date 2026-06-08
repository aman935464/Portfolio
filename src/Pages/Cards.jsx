import { FolderKanban, Code2, Smartphone } from "lucide-react";

export default function Cards() {
  const stats = [
    {
      value: "10+",
      label: "Projects",
      icon: <FolderKanban size={28} />,
    },
    {
      value: "15+",
      label: "Technologies",
      icon: <Code2 size={28} />,
    },
    {
      value: "100%",
      label: "Responsive",
      icon: <Smartphone size={28} />,
    },
  ];

  return (
    <>
      {stats.map((item, index) => (
        <div
          key={index}
          className="
            group
            relative
            overflow-hidden
            bg-slate-900/80
            backdrop-blur-md
            border border-slate-800
            rounded-2xl
            px-6 py-5
            min-w-[130px]
            text-center
            transition-all duration-300
            hover:-translate-y-2
            hover:border-blue-500
            hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
          "
        >
          {/* Glow */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-blue-500/10
              to-cyan-500/10
              opacity-0
              group-hover:opacity-100
              transition-opacity
            "
          />

          <div className="relative z-10">
            <div className="flex justify-center text-blue-500 mb-3">
              {item.icon}
            </div>

            <h4 className="text-3xl font-bold text-white">
              {item.value}
            </h4>

            <p className="text-gray-400 text-sm mt-1">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}