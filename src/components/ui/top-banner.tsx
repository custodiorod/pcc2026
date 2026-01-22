'use client';

import React from 'react';

export const TopBanner = () => {
  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .banner-scroll {
          animation: scroll-left 60s linear infinite;
        }

        .banner-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-primary text-primary-foreground overflow-hidden py-3 relative">
        <div className="banner-scroll flex whitespace-nowrap">
          {/* Repeat the content multiple times for seamless loop */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-8 px-4"
            >
              <span className="text-sm md:text-base font-medium tracking-widest uppercase">
                Inscrições Abertas 2026
              </span>
              <span className="text-primary-foreground/60">✦</span>
              <span className="text-sm md:text-base font-medium tracking-widest uppercase">
                Plastic Competitive Career
              </span>
              <span className="text-primary-foreground/60">✦</span>
              <span className="text-sm md:text-base font-medium tracking-widest uppercase">
                Inscrições Abertas 2026
              </span>
              <span className="text-primary-foreground/60">✦</span>
              <span className="text-sm md:text-base font-medium tracking-widest uppercase">
                Processo Seletivo
              </span>
              <span className="text-primary-foreground/60">✦</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
