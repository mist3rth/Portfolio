"use client";

import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 40 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Reset initial

    const typeChar = () => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
        // Ajout d'un petit côté aléatoire (0-30ms) pour faire plus humain
        setTimeout(typeChar, speed + Math.random() * 30);
      }
    };

    // Petit délai avant de commencer à taper
    const startTimeout = setTimeout(typeChar, 200);

    return () => clearTimeout(startTimeout);
  }, [text, speed]);

  return (
    <span className="inline-flex items-center">
      {displayedText}
      {/* Curseur rectangulaire typique des terminaux, qui clignote */}
      <span className="inline-block w-1.5 h-[1.1em] bg-accent ml-1 opacity-80 animate-pulse"></span>
    </span>
  );
}
