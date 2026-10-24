import React from "react";
import { UserCheck, BookOpen, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            My professional journey bridging education, system analysis, and full-stack engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              My journey into technology is rooted in education, continuous learning, and a passion for solving real-world problems through software engineering. I began my academic journey at the <strong className="text-orange-600 dark:text-orange-400">Federal College of Education (FCE), Pankshin</strong>, where I earned my NCE in Mathematics and Computer Science. This foundation strengthened my analytical thinking and shaped my understanding of how technology and education can work together.
            </p>
            <p>
              Driven by a desire to deepen my technical expertise, I pursued a B.Tech in Computer Science at <strong className="text-orange-600 dark:text-orange-400">Abubakar Tafawa Balewa University (ATBU)</strong>, Bauchi, while advancing my practical skills through the <strong className="text-orange-600 dark:text-orange-400">ALX Africa Software Engineering</strong> programme, embracing the philosophy of Do Hard Things.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Globe className="text-orange-500" /> Vision & Impact
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Today, I lead <strong className="text-slate-900 dark:text-white">Cysoft Home Technologies (CAC: BN 8744378)</strong> as a Full-Stack Software Engineer. My work spans AgroTech initiatives such as <strong className="text-orange-500">FarmRide</strong>, eCommerce platforms like All Star Fashion Global, and real estate solutions through Zertek Realty Home.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div>
                <span className="block text-2xl font-bold text-orange-600 dark:text-orange-400">50+</span>
                <span className="text-sm text-slate-500">GitHub Repositories</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-orange-600 dark:text-orange-400">100%</span>
                <span className="text-sm text-slate-500">Client Commitment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}