import React from "react";
import { MessageSquare, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Ogbu Cyprian delivered an exceptional web platform for our business with clean code and great attention to detail. Absolute professional!",
      name: "Dr. Ebenezer Uneke",
      role: "CEO Zertek Realty Home"
    },
    {
      quote: "Working with Cyprian during our ALX engineering sprints was inspiring. His backend logic and problem-solving skills are top-notch.",
      name: "Eric Ogbekene",
      role: "Software Engineer"
    },
    {
      quote: "FarmRide has completely simplified how we source farm produce directly. The platform is fast, responsive, and incredibly reliable.",
      name: "Mrs. Chinyere Okafor",
      role: "Agricultural Buyer"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Testimonials & Social Proof</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Feedback from collaborators, clients, and platform users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-between relative">
              <Quote className="absolute top-6 right-6 text-orange-500/20" size={40} />
              <p className="text-slate-600 dark:text-slate-300 italic mb-8 relative z-10 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}