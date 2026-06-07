import Skill from "../Database/Data.js";
import SkillCards from "../Pages/SkillCards.jsx";

export const Skills = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-2 px-6" >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(Skill).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="text-blue-400">
                      <skill.icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SkillCards />
      </div>
    </section>
  );
};
