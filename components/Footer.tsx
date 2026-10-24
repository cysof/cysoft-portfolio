import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="font-bold text-lg text-white">
          Cysoft Home Technologies <span className="text-orange-500">(CAC: BN 8744378)</span>
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Ogbu Cyprian Omoha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}