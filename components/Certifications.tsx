import React from "react";
import Image from "next/image";
import { Award, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "ALX Software Engineering Graduate",
      issuer: "ALX Africa",
      date: "Verified Credential",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Code Plateau 2.0 Digital Marketing",
      issuer: "Code Plateau",
      date: "Verified Graduate",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Certifications & Badges</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Official credentials validating my technical training and professional qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certs.map((cert, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col">
              <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-800">
                <Image src={cert.image} alt={cert.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-orange-600 text-white p-2 rounded-full shadow-md">
                  <Award size={20} />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">{cert.issuer}</span>
                  <h3 className="text-xl font-bold mt-1 text-slate-900 dark:text-white">{cert.title}</h3>
                  <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
                    <CheckCircle2 size={16} className="text-green-500" /> {cert.date}
                  </p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-md transition-all"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}