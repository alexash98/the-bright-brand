'use client';

import React, { useState, useMemo } from "react";
import { Sliders, Zap, Percent, BarChart3 } from "lucide-react";
import { useScrollToSection } from "@/components/seed/SmoothScrollProvider";

export const GrowthCalculator: React.FC = () => {
  const scrollToSection = useScrollToSection();
  const [budget, setBudget] = useState<number>(15000); // Monthly spend slider
  const [currentRoas, setCurrentRoas] = useState<number>(2.5); // Current ROAS slider
  const [channelWeight, setChannelWeight] = useState<"revenue" | "efficiency" | "omnichannel">("revenue");

  // Live ROI Estimates memoization
  const estimates = useMemo(() => {
    // Seed optimization benchmarks:
    // revenue focus: +46% average ROAS improvement
    // efficiency focus: -28% spend waste reduction
    // omnichannel focus: +51% impressions YoY
    const rateOfImprovement = channelWeight === "revenue" ? 0.46 : channelWeight === "efficiency" ? 0.28 : 0.35;

    const currentRevenue = budget * currentRoas;
    const projectedRevenue = currentRevenue * (1 + rateOfImprovement);
    const estimatedExtraRevenue = projectedRevenue - currentRevenue;
    const adSpendEfficiencySavings = budget * 0.22; // average 22% waste trimming via pod consolidation

    return {
      projectedRevenue: Math.round(projectedRevenue),
      extraRevenue: Math.round(estimatedExtraRevenue),
      savings: Math.round(adSpendEfficiencySavings),
      newRoas: Number((currentRoas * (1 + (rateOfImprovement / 2))).toFixed(1))
    };
  }, [budget, currentRoas, channelWeight]);

  return (
    <section id="calculator" className="relative border-t border-neutral-200 bg-white py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
            Interactive Tool
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Estimate your growth potential.
          </h2>
          <p className="text-lg font-normal text-neutral-600">
            Drag the sliders below to estimate the incremental revenue we can unlock by consolidating your campaigns into focused performance pods.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 lg:grid-cols-12">
          {/* Controls Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-lg md:p-8 lg:col-span-7">
            <div className="space-y-8 text-left">
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
                <Sliders className="h-5 w-5 text-brand-accent" />
                <h3 className="text-lg font-semibold text-neutral-900">Campaign Metrics</h3>
              </div>

              {/* Monthly Budget Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="budget-slider" className="text-sm font-bold text-neutral-600">
                    Monthly Ad Spend Budget
                  </label>
                  <span className="text-xl font-black text-brand-accent">
                    £{budget.toLocaleString()}
                  </span>
                </div>
                <input
                  id="budget-slider"
                  type="range"
                  min="2000"
                  max="100000"
                  step="2000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-200 accent-brand-accent"
                />
                <div className="flex justify-between text-[10px] font-bold text-neutral-400">
                  <span>£2,000</span>
                  <span>£50,000</span>
                  <span>£100,000</span>
                </div>
              </div>

              {/* Current ROAS Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="roas-slider" className="text-sm font-bold text-neutral-600">
                    Current Return on Ad Spend (ROAS)
                  </label>
                  <span className="text-xl font-black text-brand-accent">
                    {currentRoas.toFixed(1)}x
                  </span>
                </div>
                <input
                  id="roas-slider"
                  type="range"
                  min="0.5"
                  max="8.0"
                  step="0.1"
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-200 accent-brand-accent"
                />
                <div className="flex justify-between text-[10px] font-bold text-neutral-400">
                  <span>0.5x</span>
                  <span>4.0x</span>
                  <span>8.0x</span>
                </div>
              </div>

              {/* Strategy Focus Selector */}
              <div className="space-y-4">
                <span className="block text-sm font-bold text-neutral-600">
                  Target Optimization Objective
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setChannelWeight("revenue")}
                    className={`flex flex-col items-center gap-1.5 rounded-xl border py-3 px-2 text-center text-xs font-bold transition-all ${
                      channelWeight === "revenue"
                        ? "border-brand-accent bg-brand-accent/10 font-black text-brand-accent"
                        : "border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    <Zap className="h-4 w-4 shrink-0" />
                    Max Revenue
                  </button>
                  <button
                    onClick={() => setChannelWeight("efficiency")}
                    className={`flex flex-col items-center gap-1.5 rounded-xl border py-3 px-2 text-center text-xs font-bold transition-all ${
                      channelWeight === "efficiency"
                        ? "border-brand-accent bg-brand-accent/10 font-black text-brand-accent"
                        : "border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    <Percent className="h-4 w-4 shrink-0" />
                    Trim Waste Cost
                  </button>
                  <button
                    onClick={() => setChannelWeight("omnichannel")}
                    className={`flex flex-col items-center gap-1.5 rounded-xl border py-3 px-2 text-center text-xs font-bold transition-all ${
                      channelWeight === "omnichannel"
                        ? "border-brand-accent bg-brand-accent/10 font-black text-brand-accent"
                        : "border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    <BarChart3 className="h-4 w-4 shrink-0" />
                    Omnichannel Reach
                  </button>
                </div>
              </div>
            </div>

            {/* Quick explanatory footer */}
            <p className="mt-8 text-left text-[11px] font-semibold italic text-neutral-400">
              *Calculations are based on Seed's average client outcomes from our 2025/2026 audits. Exact metrics depend on account maturity and seasonality.
            </p>
          </div>

          {/* Results Display Panel */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-xl lg:col-span-5">
            <div className="relative z-10 space-y-6 text-left">
              <span className="block text-xs font-bold uppercase tracking-widest text-neutral-500">
                Projected Growth Outlook
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-neutral-600">Estimated Extra Monthly Revenue</p>
                <div className="mt-2 text-4xl font-black tracking-tight text-brand-accent drop-shadow-[0_2px_8px_rgba(232,184,75,0.2)] md:text-5xl">
                  +£{estimates.extraRevenue.toLocaleString()}
                </div>
              </div>

              <div className="space-y-4 border-t border-neutral-200 pt-4 font-medium">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">Target ROAS Improvement</span>
                  <span className="font-extrabold text-neutral-900">
                    {currentRoas.toFixed(1)}x → {estimates.newRoas.toFixed(1)}x
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">Waste Spend Trimming</span>
                  <span className="font-extrabold text-neutral-900">
                    +£{estimates.savings.toLocaleString()} / mo
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">Pod Squadding Impact</span>
                  <span className="text-xs font-bold uppercase text-brand-accent">
                    Outcome-Guaranteed
                  </span>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="relative z-10 mt-8 border-t border-neutral-200 pt-6">
              <p className="mb-4 text-left text-xs font-normal leading-relaxed text-neutral-600">
                Ready to review our proposed strategy for your <span className="font-extrabold text-neutral-900">£{budget.toLocaleString()}</span> budget? We provide a bespoke custom audit completely on us.
              </p>
              <button
                onClick={() => scrollToSection("enquire")}
                className="w-full rounded-full bg-brand-accent py-3.5 text-sm font-bold text-brand-bg-darker shadow-lg shadow-brand-accent/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover"
              >
                Claim your custom audit →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
