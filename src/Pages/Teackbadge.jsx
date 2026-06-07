import Skill from "../Database/Data";

export const TechStack = () => {
  const allSkills = Object.values(Skill).flat();

  return (
    <section className="py-16">
      <h3 className="text-3xl font-bold text-center mb-10">
        Tech Stack
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {allSkills.map((skill) => (
          <div
            key={skill.name}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-full
              bg-slate-900
              border border-slate-700
              hover:border-blue-500
              hover:scale-105
              transition-all duration-300
            "
          >
            <span className="text-blue-400">
              <skill.icon size={26}/>
            </span>

            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};