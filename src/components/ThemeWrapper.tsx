"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <>
      {/* Theme Switch Section */}
      <div className="flex justify-center py-12 bg-background relative z-20">
        <button 
          onClick={() => setIsLightMode(!isLightMode)}
          className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all group shadow-2xl backdrop-blur-md"
          aria-label="Changer le thème"
        >
          <div className={`p-2 rounded-full transition-all duration-300 ${!isLightMode ? 'bg-accent text-white' : 'text-gray-500'}`}>
            <Moon size={18} />
          </div>
          
          <div className="w-10 h-5 bg-white/10 rounded-full relative p-0.5 flex items-center">
            <div className={`w-4 h-4 bg-accent rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] ${isLightMode ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>

          <div className={`p-2 rounded-full transition-all duration-300 ${isLightMode ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'text-gray-500'}`}>
            <Sun size={18} />
          </div>
        </button>
      </div>

      <div className={`${isLightMode ? 'light-mode' : ''} transition-colors duration-500`}>
        {children}
      </div>
    </>
  );
}
