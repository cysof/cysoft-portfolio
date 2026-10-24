import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Timeline() {
  const education = [
    {
      institution: "Abubakar Tafawa Balewa University (ATBU), Bauchi",
      qualification: "B.Tech in Computer Science",
      period: "Undergraduate / Final Year",
      desc: "Studying advanced computer science, software engineering methodologies, database systems, and AI."
    },
    {
      institution: "ALX Africa",
      qualification: "Software Engineering Programme",
      period: "Honored Graduate",
      desc: "Intensive training in full-stack engineering, algorithms, system architecture, and teamwork under the motto 'Do Hard Things'."
    },
    {
      institution: "Code Plateau 2.0",
      qualification: "Digital Marketing & Tech Skills",
      period: "Graduate",
      desc: "Specialized training in digital marketing strategies, online brand visibility, and campaign execution."
    },
    {
      institution: "Federal College of Education (FCE), Pankshin",
      qualification: "NCE in Mathematics & Computer Science",
      period: "Educationist Foundation",
      desc: "Built a solid academic foundation in educational theory, mathematics, and core computer science concepts."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Education & Background</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            The academic and professional milestones that shaped my expertise as an engineer and educationist.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 shrink-0">
                <GraduationCap size={28} />
              </div>
              <div className="space-y-2 flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">{item.period}</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{item.qualification}</h3>
                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300">{item.institution}</h4>
                <p className="text-slate-600 dark:text-slate-400 pt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}