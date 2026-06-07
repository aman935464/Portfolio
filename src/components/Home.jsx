import { FaDownload } from "react-icons/fa";
import TextAnimation from "../Pages/TextAnimation.jsx";
import SocialMedia from "../Pages/SociaMedia.jsx";
import Cards from "../Pages/Cards.jsx";
import PageTransition from "../Pages/PageTransition.jsx";
import DeveloperCard from "../Pages/DeveloperCard.jsx";

export const Home = () => {
  return (
    <PageTransition>
      <section className="min-h-screen bg-slate-950 text-white flex items-center px-6 py-10" >
        <div className="max-w-7xl mx-auto px-7 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-400 font-medium mb-3 mt-3">👋 Hello, I'm</p>
            <h1 className="font-bold leading-tight text-[clamp(2rem,7vw,5rem)]">
              Aman{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Maurya
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
              <TextAnimation />
            </h2>
            <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
              I build responsive, scalable and high-performance web applications
              using React.js, JavaScript, Tailwind CSS, Node.js, Express.js and
              MongoDB.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#project"
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                View Projects
              </a>
              <a
                href="/Aman_Resume.docx"
                className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition flex items-center gap-2"
              >
                <FaDownload />
                Resume
              </a>
            </div>
            <div className="flex gap-6 mt-8 text-2xl">
              <SocialMedia />
            </div>

            <div className="flex gap-10 mt-12">
              <Cards />
            </div>
          </div>
          <div className="flex justify-center">
            <DeveloperCard/>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
