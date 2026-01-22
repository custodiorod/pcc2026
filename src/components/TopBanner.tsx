import { useEffect, useState } from "react";

const TopBanner = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition((prev) => (prev + 0.15) % 50);
    }, 50);

    return () => clearInterval(animation);
  }, []);

  return (
    <div className="w-full bg-primary text-primary-foreground py-2 overflow-hidden relative border-b border-border/50">
      <div
        className="whitespace-nowrap"
        style={{
          transform: `translateX(-${position}%)`,
        }}
      >
        <span className="text-sm font-medium tracking-widest uppercase mx-12">
          Inscrições Abertas 2026
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12 text-primary-foreground/70">
          •
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12">
          Inscrições Abertas 2026
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12 text-primary-foreground/70">
          •
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12">
          Inscrições Abertas 2026
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12 text-primary-foreground/70">
          •
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12">
          Inscrições Abertas 2026
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12 text-primary-foreground/70">
          •
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12">
          Inscrições Abertas 2026
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12 text-primary-foreground/70">
          •
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12">
          Inscrições Abertas 2026
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12 text-primary-foreground/70">
          •
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12">
          Inscrições Abertas 2026
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12 text-primary-foreground/70">
          •
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12">
          Inscrições Abertas 2026
        </span>
        <span className="text-sm font-medium tracking-widest uppercase mx-12 text-primary-foreground/70">
          •
        </span>
      </div>
    </div>
  );
};

export default TopBanner;
