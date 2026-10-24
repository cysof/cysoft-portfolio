import React from "react";
import { Mail, Phone, MessageSquare, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Have a project in mind, need system analysis, or want to collaborate with Cysoft Home Technologies? Let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info Card */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            
            <div className="space-y-6">
              <a href="tel:08163110123" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-colors">
                <div className="p-3 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Call Direct</span>
                  <span className="font-semibold text-lg">08163110123</span>
                </div>
              </a>

              <a href="https://wa.me/2347013445496" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-colors">
                <div className="p-3 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">WhatsApp Chat</span>
                  <span className="font-semibold text-lg">+234 701 344 5496</span>
                </div>
              </a>

              <a href="mailto:cysofthome@gmail.com" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-colors">
                <div className="p-3 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Email Address</span>
                  <span className="font-semibold text-lg">cysofthome@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Location</span>
                  <span className="font-semibold text-lg">Abuja, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex gap-3 flex-wrap">
              <a href="https://x.com/otechz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-slate-800 hover:text-orange-500 shadow-sm transition-colors" aria-label="X (Twitter)">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com/cysofthome" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-slate-800 hover:text-orange-500 shadow-sm transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.35a1.59 1.59 0 0 0-1.59 1.59c0 .88.71 1.59 1.59 1.59s1.59-.71 1.59-1.59c0-.88-.71-1.59-1.59-1.59Z"/></svg>
              </a>
              <a href="https://facebook.com/cysofthome" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-slate-800 hover:text-orange-500 shadow-sm transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://github.com/cysof" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-slate-800 hover:text-orange-500 shadow-sm transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your message has been received."); }} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Email</label>
                  <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input type="text" required placeholder="Project Collaboration / Web Development" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea rows={5} required placeholder="Tell me about your project or inquiry..." className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500 outline-none transition-all"></textarea>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold shadow-lg shadow-orange-500/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}