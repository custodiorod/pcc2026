'use client';

import React from 'react';

interface SignatureWatermarkProps {
  opacity?: string;
  spacing?: string;
  className?: string;
}

export const SignatureWatermark = ({
  opacity = '0.03',
  spacing = '400px',
  className = ''
}: SignatureWatermarkProps) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: 'url("/assinatura-simbolo.png")',
        backgroundSize: spacing,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        opacity: opacity,
      }}
    />
  );
};
