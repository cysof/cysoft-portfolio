import React from "react";
import { Monitor, Server, Cpu, Megaphone } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      icon: <Monitor className="w-8 h-8 text-orange-500" />,
      title: "Full-Stack Web Development",
      description: "Responsive, scalable web apps combining modern frontend interfaces with robust backend systems (FarmRide, eCommerce, Real Estate).",
      bullets: ["Responsive UI / UX Design", "Frontend & Backend Integration", "Database Management", "Deployment & Maintenance"]
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: "Custom API Design",
      description: "Secure, reliable, and scalable RESTful APIs built using Python and Django REST Framework for seamless system communication.",
      bullets: ["RESTful API Design", "Django & FastAPI Backends", "Authentication & Security", "Third-Party Integrations"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: "System Analysis & Design",
      description: "Translating operational challenges into efficient technology solutions through structured workflow planning and architecture.",
      bullets: ["Requirements Analysis", "Workflow Optimization", "System Architecture", "Technical Documentation"]
    },
    {
      icon: <Megaphone className="w-8 h-8 text-orange-500" />,
      title: "Digital Marketing",
      description: "Data-driven strategies to boost online presence, build brand awareness, and attract customers across digital channels.",
      bullets: ["Digital Strategy & Planning", "Social Media & Content", "Brand Visibility", "SEO & Optimization"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Services Offered</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            At Cysoft Home Technologies, we turn ideas into practical digital solutions that help businesses grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg hover:border-orange-500 transition-all group">
              <div className="mb-6 p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/30 w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-4">
                {service.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}