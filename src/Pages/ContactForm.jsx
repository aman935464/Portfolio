import { Send } from "lucide-react";
import React from "react";


export default function ContactForm() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
      <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
        />
        <textarea
          rows="6"
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition"
        >
          <Send size={18} />
          Send Message
        </button>
      </form>
    </div>
  );
}
