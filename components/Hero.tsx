"use client";

import React, { useState, useEffect } from "react";
import { Download, ArrowRight, MessageSquare, Phone } from "lucide-react";

export default function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  const toRotate = [
    "Software Engineer",
    "Full-Stack Developer",
    "Founder @ Cysoft Home",
    "Computer & System Analyst",
    "Digital Marketer",
    "Educationist"
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-orange-50/50 dark:from-slate-950 to-white dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-900/50 text-orange-700 dark:text-orange-400 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              CAC Registered: BN 8744378
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Hi, I&apos;m <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">Ogbu Cyprian Omoha</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300">
              I am a <span className="text-orange-600 dark:text-orange-400 border-b-2 border-orange-500">{text}</span>
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Founder of <strong className="text-slate-900 dark:text-white">Cysoft Home Technologies</strong>. Building scalable web architectures, AgroTech solutions, and impactful digital systems across Nigeria.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold shadow-lg shadow-orange-500/25 hover:scale-105 transition-all"
              >
                Explore Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 font-semibold transition-all"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-6 text-slate-600 dark:text-slate-400 flex-wrap">
              <a href="https://github.com/cysof" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-orange-500 transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="https://linkedin.com/cysofthome" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.35a1.59 1.59 0 0 0-1.59 1.59c0 .88.71 1.59 1.59 1.59s1.59-.71 1.59-1.59c0-.88-.71-1.59-1.59-1.59Z"/></svg>
              </a>
              <a href="https://x.com/otechz" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-orange-500 transition-colors" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://facebook.com/cysofthome" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-orange-500 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-orange-500 transition-colors" aria-label="WhatsApp">
                <MessageSquare size={20} />
              </a>
              <a href="tel:08163110123" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-orange-500 transition-colors" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Hero Logo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              style={{ width: "320px", height: "320px", maxWidth: "100%" }}
              className="rounded-3xl shadow-2xl border-4 border-orange-500 bg-white dark:bg-slate-900 p-4 flex items-center justify-center"
            >
              <img
                src="/avater.png"
                alt="Ogbu Cyprian Omoha profile avatar"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}