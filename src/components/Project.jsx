import React from 'react'
import PageTransition from '../Pages/PageTransition';
import { Check } from 'lucide-react';
export const Project = () => {
  const Teck = ["React.js", "JavaScript", "CSS", "Zustand", "Tanstack Query", "Node.js", "Express.js", "MongoDB", "JWT"]
  return (
    <PageTransition>
    <section className="min-h-screen bg-slate-950 text-white px-6 py-2" >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Project
        </h2>

        <p className="text-center text-gray-400 mb-16">
          A full-stack e-commerce platform built with the MERN stack.
        </p>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-lg">
          <h3 className="text-3xl font-bold mb-4">
            E-Commerce Web Application
          </h3>

          <div className="flex flex-wrap gap-3 mb-6">
            {Teck.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://meri-shop-eight.vercel.app"
              className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/aman935464/meri-shop"
              className="px-5 py-2 border border-gray-600 rounded-lg hover:bg-gray-800"
            >
              Frontend Repo
            </a>
            <a
              href="https://github.com/aman935464/meri-shop-server"
              className="px-5 py-2 border border-gray-600 rounded-lg hover:bg-gray-800"
            >
              Backend Repo
            </a>
          </div>
          <p className="text-gray-300 leading-relaxed mb-8">
            Developed a full-stack e-commerce platform featuring product
            browsing, advanced filtering, shopping cart functionality,
            authentication, authorization, and order management. The
            application follows scalable architecture principles by
            separating server state and client state while ensuring high
            performance and maintainability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-5 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">
                State Management
              </h4>
              <p className="text-gray-400">
                Managed server state using React Query and client state
                using Zustand for improved scalability and performance.
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">
                Authentication
              </h4>
              <p className="text-gray-400">
                Implemented JWT authentication, protected routes, and
                role-based access control.
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">
                Performance
              </h4>
              <p className="text-gray-400">
                Optimized rendering with useMemo, lazy loading, caching,
                and reusable components.
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">
                Backend APIs
              </h4>
              <p className="text-gray-400">
                Built scalable REST APIs with Express.js and MongoDB,
                including validation and secure endpoints.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-2xl font-semibold mb-4">
              Key Features
            </h4>

            <ul className="space-y-3 text-gray-300 ">
              <li className='flex items-center gap-2'><Check size={18} className="text-green-500" />Product listing and dynamic product detail pages</li>
              <li className='flex items-center gap-2'><Check size={18} className="text-green-500" />Category-based filtering and sorting</li>
              <li className='flex items-center gap-2'><Check size={18} className="text-green-500" />Shopping cart and order management</li>
              <li className='flex items-center gap-2'><Check size={18} className="text-green-500" />JWT authentication and authorization</li>
              <li className='flex items-center gap-2'><Check size={18} className="text-green-500" />Dark / Light theme support</li>
              <li className='flex items-center gap-2'><Check size={18} className="text-green-500" />Responsive UI across devices</li>
              <li className='flex items-center gap-2'><Check size={18} className="text-green-500" />React Query caching and background refetching</li>
              <li className='flex items-center gap-2'><Check size={18} className="text-green-500" />Secure backend with password hashing and validation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </PageTransition>
  );
};