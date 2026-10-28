import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface NavigationProps {
  mode: string;
  onModeChange: () => void;
  username: string;
  isLive: boolean;
  onRefresh: () => void;
  loading: boolean;
}

const navItems = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navigation: React.FC<NavigationProps> = ({ username }) => {
  const [sliderStyle, setSliderStyle] = useState<{ width: number; transform: string }>({
    width: 70,
    transform: "translateX(0px)",
  });
  const [activeTab, setActiveTab] = useState<string>("About");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const navContainerRef = useRef<HTMLElement>(null);

  // Position sliding indicator
  const updateSliderPosition = (target: HTMLElement | null) => {
    if (!target || !navContainerRef.current) return;
    const parentRect = navContainerRef.current.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const offset = targetRect.left - parentRect.left;
    setSliderStyle({
      width: targetRect.width,
      transform: `translateX(${offset}px)`,
    });
  };

  useEffect(() => {
    if (navContainerRef.current) {
      const activeEl = navContainerRef.current.querySelector<HTMLElement>(".nav-btn-active");
      if (activeEl) updateSliderPosition(activeEl);
    }
  }, []);

  // Update active tab on scroll (Scrollspy)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          const currentLabel = navItems[i].label;
          setActiveTab(currentLabel);
          if (!hoveredTab && navContainerRef.current) {
            const activeEl = navContainerRef.current.querySelectorAll<HTMLElement>(".nav-link-item")[i];
            if (activeEl) updateSliderPosition(activeEl);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hoveredTab]);

  return (
    <header className="fixed top-6 max-md:top-3 left-0 right-0 z-50 flex items-center justify-center px-4 pointer-events-none transition-all duration-300">
      <div className="pointer-events-auto flex items-center gap-3 max-md:gap-1.5 hover:-translate-y-0.5 transition-transform duration-300">
        
        {/* Brand Initial Floating Circle (Larger, Aero Glass) */}
        <a
          href="#hero"
          className="relative w-[54px] h-[54px] max-md:w-11 max-md:h-11 rounded-full bg-white/95 backdrop-blur-2xl text-black border border-white/60 flex items-center justify-center font-bold text-sm tracking-wider shadow-[0_20px_50px_rgba(0,0,0,0.22),0_4px_12px_rgba(0,0,0,0.06)] hover:scale-105 transition-all group"
          title={`Trung Kiên (@${username})`}
        >
          <span className="font-editorial-display font-black text-sm tracking-widest text-[#111111]">
            TK
          </span>
          {/* Subtle live indicator pulse */}
          <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
        </a>

        {/* Floating Segmented Pill Nav (Larger, Airy, Smooth Shadow) */}
        <nav
          ref={navContainerRef}
          className="relative h-[54px] max-md:h-[42px] bg-white/92 backdrop-blur-2xl rounded-full inline-flex items-center p-1.5 max-md:p-1 shadow-[0_22px_60px_rgba(0,0,0,0.25),0_6px_20px_rgba(0,0,0,0.08)] border border-white/60 ring-1 ring-black/5"
          onMouseLeave={() => {
            setHoveredTab(null);
            if (navContainerRef.current) {
              const activeEl = navContainerRef.current.querySelector<HTMLElement>(".nav-btn-active");
              if (activeEl) updateSliderPosition(activeEl);
            }
          }}
        >
          {/* Sliding black background indicator */}
          <div
            className="absolute top-1.5 max-md:top-1 left-0 h-[42px] max-md:h-[34px] bg-black rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md"
            style={{
              width: `${sliderStyle.width}px`,
              transform: sliderStyle.transform,
            }}
          />

          {navItems.map((item) => {
            const isActive = activeTab === item.label;
            const isHovered = hoveredTab === item.label;
            const isHighlighted = hoveredTab !== null ? isHovered : isActive;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link-item relative z-10 px-5 max-md:px-2.5 text-[13.5px] max-md:text-[11px] font-semibold h-full flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer select-none ${
                  isActive ? "nav-btn-active " : ""
                }${isHighlighted ? "text-white font-bold" : "text-[#111111] hover:text-black"}`}
                onMouseEnter={(e) => {
                  setHoveredTab(item.label);
                  updateSliderPosition(e.currentTarget);
                }}
                onClick={(e) => {
                  setActiveTab(item.label);
                  updateSliderPosition(e.currentTarget);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Quick Contact CTA Floating Pill (Larger & Premium) */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 h-[54px] px-6 rounded-full bg-black text-white text-[13.5px] font-semibold border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:bg-zinc-900 transition-all group"
        >
          <span>Contact</span>
          <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

      </div>
    </header>
  );
};
