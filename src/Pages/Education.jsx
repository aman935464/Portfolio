import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <>
      <div className="mt-24">
        <h3 className="text-4xl font-bold text-center mb-12">Education</h3>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h4 className="text-2xl font-semibold text-blue-400">
                  Bachelor of Computer Application (B.C.A.)
                </h4>
                <p className="text-gray-300 mt-2">
                  Computer Science & Engineering
                </p>
                <p className="text-gray-400 mt-1">Maharishi Dayananad University (M.D.U.)</p>
              </div>
              <span className="mt-3 md:mt-0 text-gray-400">2023 - 2026</span>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h4 className="text-2xl font-semibold text-blue-400">
                  Higher Secondary (12th)
                </h4>
                <p className="text-gray-300 mt-2">Science Stream</p>

                <p className="text-gray-400 mt-1">U.P. Board</p>
              </div>

              <span className="mt-3 md:mt-0 text-gray-400">2022 - 2023</span>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h4 className="text-2xl font-semibold text-blue-400">
                  Secondary School (10th)
                </h4>
                <p className="text-gray-400 mt-1">U.P. Board</p>
              </div>
              <span className="mt-3 md:mt-0 text-gray-400">2020 - 2021</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
