'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";

interface HeroProps {
  rotatingWords: string[];
  description: string;
}

export const Hero: React.FC<HeroProps> = ({ rotatingWords, description }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingWords]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-0 flex-col overflow-hidden bg-brand-bg-darker pt-28 md:pt-32 lg:min-h-dvh"
    >
      {/* Abstract background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-accent),transparent_35%)] opacity-[0.07] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-brand-accent),transparent_40%)] opacity-[0.04] pointer-events-none" />
      
      {/* Subtle background radial blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-accent/5 blur-[130px] pointer-events-none rounded-full" />

      {/* Atmospheric Brand Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-8 md:px-8 md:py-12 lg:grid-cols-12 lg:py-0">
        {/* Main Text Copy Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-bg border border-brand-accent/20 text-brand-accent px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-accent animate-pulse" />
            Performance Marketing Agency
          </motion.div>

          <h1 className="text-[32px] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Your Most <br />
            <span className="relative inline-block h-[1.15em] min-w-[200px] sm:min-w-[320px] md:min-w-[420px] text-brand-accent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[index]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 16 }}
                  className="absolute left-0 top-0 inline-block font-black tracking-tight drop-shadow-[0_2px_10px_rgba(91,159,255,0.2)] whitespace-nowrap"
                >
                  {rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            Growth Partner.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-text-pale/85 text-lg md:text-xl max-w-xl leading-relaxed mb-8"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("enquire")}
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-bg-darker font-bold rounded-full h-12 px-8 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-brand-accent/15 group"
            >
              Arrange a 15-minute intro
              <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleScrollTo("services")}
              className="inline-flex items-center justify-center gap-2 bg-brand-bg hover:bg-brand-bg-card text-white font-bold border border-brand-accent/20 hover:border-brand-accent/40 rounded-full h-12 px-8 transition-all"
            >
              See what we do
            </button>
          </motion.div>

          {/* Partner Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex w-full flex-wrap gap-3"
          >
            {[
              {
                name: "Google",
                icon: (
                  <svg
                    className="h-6 w-6 shrink-0 text-brand-text-pale/75"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                ),
              },
              {
                name: "Microsoft",
                icon: (
                  <div
                    className="grid h-6 w-6 shrink-0 grid-cols-2 gap-0.5"
                    aria-hidden="true"
                  >
                    <div className="rounded-sm bg-brand-text-pale/75" />
                    <div className="rounded-sm bg-brand-text-pale/75" />
                    <div className="rounded-sm bg-brand-text-pale/75" />
                    <div className="rounded-sm bg-brand-text-pale/75" />
                  </div>
                ),
              },
              {
                name: "Meta",
                icon: (
                  <svg
                    className="h-6 w-6 shrink-0 text-brand-text-pale/75"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M16.51 6c-1.58 0-3.1.84-4.51 2.52C10.59 6.84 9.07 6 7.49 6 3.91 6 1 8.91 1 12.5S3.91 19 7.49 19c1.58 0 3.1-.84 4.51-2.52 1.41 1.68 2.93 2.52 4.51 2.52 3.58 0 6.49-2.91 6.49-6.5S20.09 6 16.51 6zm-9.02 10.8c-2.37 0-4.29-1.92-4.29-4.3s1.92-4.3 4.29-4.3c1.17 0 2.27.61 3.12 1.71-1.39 1.83-2.33 3.32-3.12 6.89zm9.02 0c-.79 0-1.73-1.49-3.12-6.89.85-1.1 1.95-1.71 3.12-1.71 2.37 0 4.29 1.92 4.29 4.3s-1.92 4.3-4.29 4.3z"
                    />
                  </svg>
                ),
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex h-14 w-40 items-center gap-2.5 rounded-xl border border-white/10 bg-brand-bg-dark/45 px-4 shadow-lg backdrop-blur-sm transition-colors hover:bg-brand-bg-dark/65"
              >
                {partner.icon}
                <div className="flex min-w-0 flex-col justify-center">
                  <span className="truncate text-xs font-semibold leading-tight text-brand-text-pale/85">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-medium uppercase leading-tight tracking-wide text-brand-text-pale/50">
                    Partner
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quick Credibility Bullet Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-3 mt-10 text-brand-text-pale/80 text-sm border-t border-brand-teal-light/10 pt-6 w-full"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-accent" />
              <span>Certified B Corp™</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-accent" />
              <span>Outcome-focused pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-accent" />
              <span>No lock-in, flexible contracts</span>
            </div>
          </motion.div>
        </div>

        {/* Visual Sidebar Graphic - Live Dashboard Design */}
        <div className="lg:col-span-5 hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-brand-bg border border-brand-accent/15 rounded-2xl p-6 backdrop-blur-md shadow-2xl overflow-hidden"
          >
            {/* Glossy shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-teal-light/10">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-brand-accent/80" />
                <div className="h-3 w-3 rounded-full bg-brand-teal-light/80" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-brand-text-pale/50 uppercase tracking-widest">
                <TrendingUp className="h-3 w-3 text-brand-accent animate-pulse" />
                Engine Live Status
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-brand-bg-darker/60 p-4 border border-brand-teal-light/15 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-brand-text-pale/60 font-semibold uppercase tracking-wide">Overall ROAS Increase</p>
                  <p className="text-2xl font-black text-white mt-1">+62%</p>
                </div>
                <div className="h-10 px-3 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center font-extrabold text-brand-accent text-xs">
                  Gusbourne DTC
                </div>
              </div>

              <div className="bg-brand-bg-darker/60 p-4 border border-brand-teal-light/15 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-brand-text-pale/60 font-semibold uppercase tracking-wide">Monthly App Installs</p>
                  <p className="text-2xl font-black text-white mt-1">+490%</p>
                </div>
                <div className="h-10 px-3 bg-brand-teal-light/10 border border-brand-teal-light/20 rounded-lg flex items-center justify-center font-extrabold text-brand-teal-light text-xs">
                  World of Books
                </div>
              </div>

              <div className="bg-brand-bg-darker/60 p-4 border border-brand-teal-light/15 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-brand-text-pale/60 font-semibold uppercase tracking-wide">Organic Revenue Growth</p>
                  <p className="text-2xl font-black text-white mt-1">+87%</p>
                </div>
                <div className="h-10 px-3 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center font-extrabold text-brand-accent text-xs">
                  Ski Beat SEO
                </div>
              </div>
            </div>

            {/* Glowing active state circle */}
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-brand-accent/10 blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
      </div>

      {/* Full-width bottom logo bar ticker from image */}
      <div className="relative z-20 mt-8 w-full shrink-0 overflow-hidden border-t border-brand-teal-light/20 bg-black/95 py-6 select-none lg:mt-0">
        {/* Left and Right Fade overlays for elegant mask styling */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear"
            }
          }}
          className="flex whitespace-nowrap"
        >
          {/* Logo Set A */}
          <div className="flex gap-16 items-center shrink-0 min-w-full justify-around pr-16">
            {/* 1. Zinc */}
            <div className="flex items-center hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-white font-black text-lg tracking-tight uppercase">Zinc</span>
            </div>

            {/* 2. Young's Pubs */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <svg className="h-4 w-5 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 10c0-2.21-1.79-4-4-4h-.5c-.32-1.39-1.57-2.5-3.1-2.5s-2.78 1.11-3.1 2.5H7.8c-2.21 0-4 1.79-4 4s1.79 4 4 4h11.2c2.21 0 4-1.79 4-4zm-11 7h1v3H8v-3zm7 0h1v3h-1v-3z" />
              </svg>
              <span className="text-[8px] font-black tracking-widest text-white/80 uppercase -mt-0.5">Young's</span>
            </div>

            {/* 3. World of Books */}
            <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              <span className="text-[10px] font-extrabold text-white/80 tracking-tight whitespace-nowrap">World of Books</span>
            </div>

            {/* 4. Sovereign */}
            <div className="flex flex-col items-center leading-none hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/90 uppercase font-serif">Sovereign</span>
              <span className="text-[5px] font-semibold tracking-[0.15em] text-white/50 uppercase">Luxury Travel</span>
            </div>

            {/* 5. Smartest Energy */}
            <div className="flex items-center hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-xs font-semibold tracking-tight text-white/80">smartest<span className="font-light">energy</span></span>
            </div>

            {/* 6. School of Wok */}
            <div className="border border-white/30 px-2 py-0.5 rounded-sm flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-[8px] font-extrabold tracking-[0.1em] text-white/85 uppercase">School of Wok</span>
            </div>

            {/* 7. University of Oxford */}
            <div className="flex flex-col items-center leading-none hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-[5px] tracking-widest text-white/50 uppercase font-serif">University of</span>
              <span className="text-[11px] font-black tracking-widest text-white/85 uppercase font-serif mt-0.5">Oxford</span>
            </div>

            {/* 8. Protyre */}
            <div className="flex flex-col items-start leading-none hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <div className="flex items-center gap-0.5">
                <span className="text-xs font-black tracking-tighter text-white/85">pro</span>
                <span className="text-xs font-light tracking-tighter text-white/70">tyre</span>
              </div>
              <span className="text-[5px] font-bold tracking-[0.1em] text-white/40 uppercase">autocare</span>
            </div>

            {/* 9. OTTO */}
            <div className="flex items-center hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-sm font-black tracking-[0.15em] text-white/85">OTTO</span>
            </div>

            {/* 10. Newspaper Club */}
            <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <svg className="h-3.5 w-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 22h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v16H4c-1.1 0-2-.9-2-2V6" />
                <path d="M10 6h8" />
                <path d="M10 10h8" />
                <path d="M10 14h8" />
              </svg>
              <span className="text-[10px] font-semibold text-white/80 whitespace-nowrap">Newspaper Club</span>
            </div>

            {/* 11. Liforme */}
            <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <svg className="h-3.5 w-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
              <span className="text-[10px] font-black tracking-widest text-white/80 uppercase">Liforme</span>
            </div>

            {/* 12. Let's Do This */}
            <div className="flex items-center gap-0.5 text-white/80 font-black text-[10px] tracking-tight hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span>LET'S</span>
              <span className="bg-white/10 px-0.5 py-0.2 rounded text-[8px] border border-white/20">DO</span>
              <span>THIS</span>
            </div>
          </div>

          {/* Logo Set B */}
          <div className="flex gap-16 items-center shrink-0 min-w-full justify-around pr-16">
            {/* 1. Zinc */}
            <div className="flex items-center hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-white font-black text-lg tracking-tight uppercase">Zinc</span>
            </div>

            {/* 2. Young's Pubs */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <svg className="h-4 w-5 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 10c0-2.21-1.79-4-4-4h-.5c-.32-1.39-1.57-2.5-3.1-2.5s-2.78 1.11-3.1 2.5H7.8c-2.21 0-4 1.79-4 4s1.79 4 4 4h11.2c2.21 0 4-1.79 4-4zm-11 7h1v3H8v-3zm7 0h1v3h-1v-3z" />
              </svg>
              <span className="text-[8px] font-black tracking-widest text-white/80 uppercase -mt-0.5">Young's</span>
            </div>

            {/* 3. World of Books */}
            <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              <span className="text-[10px] font-extrabold text-white/80 tracking-tight whitespace-nowrap">World of Books</span>
            </div>

            {/* 4. Sovereign */}
            <div className="flex flex-col items-center leading-none hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/90 uppercase font-serif">Sovereign</span>
              <span className="text-[5px] font-semibold tracking-[0.15em] text-white/50 uppercase">Luxury Travel</span>
            </div>

            {/* 5. Smartest Energy */}
            <div className="flex items-center hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-xs font-semibold tracking-tight text-white/80">smartest<span className="font-light">energy</span></span>
            </div>

            {/* 6. School of Wok */}
            <div className="border border-white/30 px-2 py-0.5 rounded-sm flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-[8px] font-extrabold tracking-[0.1em] text-white/85 uppercase">School of Wok</span>
            </div>

            {/* 7. University of Oxford */}
            <div className="flex flex-col items-center leading-none hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-[5px] tracking-widest text-white/50 uppercase font-serif">University of</span>
              <span className="text-[11px] font-black tracking-widest text-white/85 uppercase font-serif mt-0.5">Oxford</span>
            </div>

            {/* 8. Protyre */}
            <div className="flex flex-col items-start leading-none hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <div className="flex items-center gap-0.5">
                <span className="text-xs font-black tracking-tighter text-white/85">pro</span>
                <span className="text-xs font-light tracking-tighter text-white/70">tyre</span>
              </div>
              <span className="text-[5px] font-bold tracking-[0.1em] text-white/40 uppercase">autocare</span>
            </div>

            {/* 9. OTTO */}
            <div className="flex items-center hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span className="text-sm font-black tracking-[0.15em] text-white/85">OTTO</span>
            </div>

            {/* 10. Newspaper Club */}
            <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <svg className="h-3.5 w-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 22h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v16H4c-1.1 0-2-.9-2-2V6" />
                <path d="M10 6h8" />
                <path d="M10 10h8" />
                <path d="M10 14h8" />
              </svg>
              <span className="text-[10px] font-semibold text-white/80 whitespace-nowrap">Newspaper Club</span>
            </div>

            {/* 11. Liforme */}
            <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <svg className="h-3.5 w-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
              <span className="text-[10px] font-black tracking-widest text-white/80 uppercase">Liforme</span>
            </div>

            {/* 12. Let's Do This */}
            <div className="flex items-center gap-0.5 text-white/80 font-black text-[10px] tracking-tight hover:scale-105 transition-transform duration-200 cursor-default shrink-0">
              <span>LET'S</span>
              <span className="bg-white/10 px-0.5 py-0.2 rounded text-[8px] border border-white/20">DO</span>
              <span>THIS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
