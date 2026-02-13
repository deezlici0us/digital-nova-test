import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
  className?: string;
  rotate?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false, className = "", rotate = false }) => {
  const animationClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';

  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap bg-nova-red py-4 text-black font-display uppercase tracking-tighter ${className} ${rotate ? '-rotate-2 scale-105 z-10' : ''}`}>
      <div className={`${animationClass} flex shrink-0 items-center`}>
        {Array(10).fill(0).map((_, i) => (
          <span key={i} className="text-xl md:text-3xl flex items-center px-4">
            {text} <span className="w-4 h-4 bg-black rounded-full block ml-4"></span>
          </span>
        ))}
      </div>
      <div className={`${animationClass} flex shrink-0 items-center`}>
        {Array(10).fill(0).map((_, i) => (
          <span key={i} className="text-xl md:text-3xl flex items-center px-4">
            {text} <span className="w-4 h-4 bg-black rounded-full block ml-4"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
