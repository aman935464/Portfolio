import React from "react";

export default function SkillCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      <div className="bg-slate-900 p-6 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-blue-500">10+</h3>
        <p className="text-gray-400">Projects</p>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-blue-500">2+</h3>
        <p className="text-gray-400">Years Learning</p>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-blue-500">15+</h3>
        <p className="text-gray-400">Technologies</p>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-blue-500">100%</h3>
        <p className="text-gray-400">Responsive</p>
      </div>
    </div>
  );
}
