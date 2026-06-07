import { Mail, Phone, MapPin } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "../Pages/ContactForm";
import SociaMedia from "../Pages/SociaMedia";
import PageTransition from "../Pages/PageTransition";

export const Contact = () => {
  return (
    <PageTransition>
      <section className="min-h-screen bg-slate-950 text-white py-10 px-6" >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold">
              Get In <span className="text-blue-500">Touch</span>
            </h2>
            <p className="text-gray-400 mt-4">
              Have a project in mind or want to collaborate? Feel free to
              contact me.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-500" size={24} />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:aman9354644@gmail.com">
                      aman9354644@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-500" size={24} />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+9354644145">93546441145</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-500" size={24} />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p>Faridabad, Haryana, India - 121003</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <SociaMedia />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
