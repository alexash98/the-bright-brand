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
    <section className="relative overflow-hidden border-t border-neutral-200 bg-white py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-8 shadow-lg transition-all duration-300 hover:border-brand-accent/30 hover:bg-white"
            >
              <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white">
                  {stat.icon}
                </div>
                <div className="mb-2 text-4xl font-black tracking-tight text-neutral-900 md:text-5xl">
                  {stat.value}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-neutral-900 md:text-base">
                  {stat.label}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
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
