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
    width: 60,
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

  // Update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

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
    <header className="fixed top-5 left-0 right-0 z-50 flex items-center justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2.5 max-md:gap-2">
        
        {/* Brand Initial Floating Pill */}
        <a
          href="#hero"
          className="w-11 h-11 max-md:w-10 max-md:h-10 rounded-full bg-white text-black border border-black/10 flex items-center justify-center font-bold text-xs tracking-wider shadow-[0_4px_25px_rgba(0,0,0,0.18)] hover:scale-105 transition-all"
          title={`Trung Kiên (@${username})`}
        >
          TK
        </a>

        {/* Floating Segmented Pill Nav with Sliding Indicator */}
        <nav
          ref={navContainerRef}
          className="relative h-11 max-md:h-10 bg-white/95 backdrop-blur-md rounded-full inline-flex items-center p-1 shadow-[0_6px_30px_rgba(0,0,0,0.22)] border border-black/10"
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
            className="absolute top-1 left-0 h-9 max-md:h-8 bg-black rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
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
                className={`nav-link-item relative z-10 px-3.5 max-md:px-2.5 text-xs font-semibold h-full flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer ${
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

        {/* Quick Contact CTA Floating Pill */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 h-11 px-4 rounded-full bg-black text-white text-xs font-semibold border border-white/15 shadow-[0_4px_25px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:bg-zinc-900 transition-all"
        >
          <span>Contact</span>
          <ArrowUpRight size={13} />
        </a>

      </div>
    </header>
  );
};
