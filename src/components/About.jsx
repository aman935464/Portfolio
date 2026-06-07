import { Code2, Laptop, Rocket, Database } from "lucide-react";
import Cards from "../Pages/Cards";
import Education from "../Pages/Education";
import { TechStack } from "../Pages/Teackbadge";
import PageTransition from "../Pages/PageTransition";

export const About = () => {
  return (
    <PageTransition>
      <section className="min-h-screen bg-slate-950 text-white py-2 px-6" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold">
              About <span className="text-blue-500">Me</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for web
              development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">MERN Stack Developer</h3>

              <p className="text-gray-300 leading-relaxed mb-5">
                I'm Aman Maurya, a passionate Frontend and MERN Stack Developer
                who enjoys building responsive, scalable, and user-friendly web
                applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                I have experience working with React.js, JavaScript, Tailwind
                CSS, Node.js, Express.js, MongoDB, Zustand, and React Query. I
                enjoy turning complex problems into simple and intuitive user
                experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently, I am focused on building full-stack applications,
                improving system design knowledge, and exploring modern web
                technologies.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-10">
                <Cards />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
                <Code2 className="text-blue-500 mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2">
                  Frontend Development
                </h4>
                <p className="text-gray-400">
                  Building modern and responsive user interfaces with React.js,
                  JavaScript, and Tailwind CSS.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
                <Database className="text-blue-500 mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2">
                  Backend Development
                </h4>
                <p className="text-gray-400">
                  Creating secure APIs and scalable backend systems using
                  Node.js, Express.js, and MongoDB.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
                <Laptop className="text-blue-500 mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
                <p className="text-gray-400">
                  Writing clean, maintainable code and solving real-world
                  development challenges.
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
                <Rocket className="text-blue-500 mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2">
                  Continuous Learning
                </h4>
                <p className="text-gray-400">
                  Always exploring new technologies, frameworks, and best
                  practices in web development.
                </p>
              </div>
            </div>
            <Education />
            <TechStack />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
