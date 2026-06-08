import { FaDownload } from "react-icons/fa";
import TextAnimation from "../Pages/TextAnimation.jsx";
import SocialMedia from "../Pages/SociaMedia.jsx";
import Cards from "../Pages/Cards.jsx";
import PageTransition from "../Pages/PageTransition.jsx";
import DeveloperCard from "../Pages/DeveloperCard.jsx";

export const Home = () => {
  return (
    <PageTransition>
      <section className="min-h-screen bg-slate-950 text-white flex items-center px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto w-full py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-blue-400 font-medium mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="font-bold leading-tight text-[clamp(2.5rem,10vw,5rem)]">
              Aman{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Maurya
              </span>
            </h1>

            <div className="mt-4">
              <TextAnimation />
            </div>

            <p className="text-gray-400 mt-6 max-w-xl mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
              I build responsive, scalable and high-performance web
              applications using React.js, JavaScript, Tailwind CSS,
              Node.js, Express.js and MongoDB.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <a
                href="#project"
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-center"
              >
                View Projects
              </a>

              <a
                href="/Aman_Resumelate.pdf"
                className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
              >
                <FaDownload />
                Resume
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6 mt-8 text-2xl">
              <SocialMedia />
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-12">
              <Cards />
            </div>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <div className="scale-90 sm:scale-100">
              <DeveloperCard />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};