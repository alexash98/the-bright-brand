'use client';

import React from "react";
import { TrendingUp, Award, Landmark, Clock } from "lucide-react";

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "£32M+",
      label: "Managed Ad Spend",
      subText: "Across global markets",
      icon: <Landmark className="h-5 w-5 text-brand-accent" />
    },
    {
      value: "80+",
      label: "Ambitious Brands Served",
      subText: "E-Commerce & SaaS specialists",
      icon: <TrendingUp className="h-5 w-5 text-brand-accent" />
    },
    {
      value: "4.9★",
      label: "Average Google Rating",
      subText: "From verified client partners",
      icon: <Award className="h-5 w-5 text-brand-accent" />
    },
    {
      value: "10 yrs",
      label: "In Active Business",
      subText: "Founded in Brighton, UK",
      icon: <Clock className="h-5 w-5 text-brand-accent" />
    }
  ];

  return (
    <section className="py-20 bg-brand-bg border-t border-brand-teal-light/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-brand-bg-card border border-brand-teal-light/10 rounded-xl p-8 hover:bg-brand-bg-darker/80 hover:border-brand-accent/30 transition-all duration-300 relative flex flex-col justify-between shadow-lg"
            >
              {/* Subtle top border line decoration */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

              <div>
                <div className="h-10 w-10 rounded-lg bg-brand-bg-darker border border-brand-teal-light/15 flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                  {stat.value}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-sm md:text-base">
                  {stat.label}
                </h3>
                <p className="text-brand-text-pale/50 text-xs mt-1">
                  {stat.subText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
