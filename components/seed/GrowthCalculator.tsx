'use client';

import React, { useState, useMemo } from "react";
import { Sliders, Zap, Percent, BarChart3 } from "lucide-react";

export const GrowthCalculator: React.FC = () => {
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
    <section id="calculator" className="py-24 bg-brand-bg relative border-t border-brand-teal-light/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-brand-accent),transparent_60%)] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-3">
            Interactive Tool
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Estimate your growth potential.
          </h2>
          <p className="text-brand-text-pale/80 text-lg font-medium">
            Drag the sliders below to estimate the incremental revenue we can unlock by consolidating your campaigns into focused performance pods.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Controls Card */}
          <div className="lg:col-span-7 bg-brand-bg-card border border-brand-teal-light/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg">
            <div className="space-y-8 text-left">
              <div className="flex items-center gap-3 pb-4 border-b border-brand-teal-light/10">
                <Sliders className="h-5 w-5 text-brand-accent" />
                <h3 className="text-lg font-bold text-white">Campaign Metrics</h3>
              </div>

              {/* Monthly Budget Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="budget-slider" className="text-sm font-bold text-brand-text-pale/80">
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
                  className="w-full h-2 bg-brand-bg-darker rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
                <div className="flex justify-between text-[10px] text-brand-text-pale/40 font-bold">
                  <span>£2,000</span>
                  <span>£50,000</span>
                  <span>£100,000</span>
                </div>
              </div>

              {/* Current ROAS Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="roas-slider" className="text-sm font-bold text-brand-text-pale/80">
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
                  className="w-full h-2 bg-brand-bg-darker rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
                <div className="flex justify-between text-[10px] text-brand-text-pale/40 font-bold">
                  <span>0.5x</span>
                  <span>4.0x</span>
                  <span>8.0x</span>
                </div>
              </div>

              {/* Strategy Focus Selector */}
              <div className="space-y-4">
                <span className="text-sm font-bold text-brand-text-pale/80 block">
                  Target Optimization Objective
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setChannelWeight("revenue")}
                    className={`py-3 px-2 rounded-xl border text-xs font-bold transition-all text-center flex flex-col items-center gap-1.5 ${
                      channelWeight === "revenue"
                        ? "bg-brand-accent/10 border-brand-accent text-brand-accent font-black"
                        : "bg-brand-bg-darker border-brand-teal-light/10 text-brand-text-pale/60 hover:text-white"
                    }`}
                  >
                    <Zap className="h-4 w-4 shrink-0" />
                    Max Revenue
                  </button>
                  <button
                    onClick={() => setChannelWeight("efficiency")}
                    className={`py-3 px-2 rounded-xl border text-xs font-bold transition-all text-center flex flex-col items-center gap-1.5 ${
                      channelWeight === "efficiency"
                        ? "bg-brand-accent/10 border-brand-accent text-brand-accent font-black"
                        : "bg-brand-bg-darker border-brand-teal-light/10 text-brand-text-pale/60 hover:text-white"
                    }`}
                  >
                    <Percent className="h-4 w-4 shrink-0" />
                    Trim Waste Cost
                  </button>
                  <button
                    onClick={() => setChannelWeight("omnichannel")}
                    className={`py-3 px-2 rounded-xl border text-xs font-bold transition-all text-center flex flex-col items-center gap-1.5 ${
                      channelWeight === "omnichannel"
                        ? "bg-brand-accent/10 border-brand-accent text-brand-accent font-black"
                        : "bg-brand-bg-darker border-brand-teal-light/10 text-brand-text-pale/60 hover:text-white"
                    }`}
                  >
                    <BarChart3 className="h-4 w-4 shrink-0" />
                    Omnichannel Reach
                  </button>
                </div>
              </div>
            </div>

            {/* Quick explanatory footer */}
            <p className="text-brand-text-pale/40 text-[11px] mt-8 italic text-left font-semibold">
              *Calculations are based on Seed's average client outcomes from our 2025/2026 audits. Exact metrics depend on account maturity and seasonality.
            </p>
          </div>

          {/* Results Display Panel */}
          <div className="lg:col-span-5 bg-brand-bg border border-brand-teal-light/15 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            {/* Ambient background light */}
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-brand-accent/10 blur-2xl pointer-events-none" />

            <div className="space-y-6 text-left relative z-10">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-text-pale/50 block">
                Projected Growth Outlook
              </span>

              <div>
                <p className="text-brand-text-pale/60 text-xs font-bold uppercase tracking-wide">Estimated Extra Monthly Revenue</p>
                <div className="text-4xl md:text-5xl font-black text-brand-accent tracking-tight mt-2 drop-shadow-[0_2px_8px_rgba(91,159,255,0.2)]">
                  +£{estimates.extraRevenue.toLocaleString()}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-brand-teal-light/10 font-medium">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-brand-text-pale/70">Target ROAS Improvement</span>
                  <span className="font-extrabold text-white">
                    {currentRoas.toFixed(1)}x → {estimates.newRoas.toFixed(1)}x
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-brand-text-pale/70">Waste Spend Trimming</span>
                  <span className="font-extrabold text-white">
                    +£{estimates.savings.toLocaleString()} / mo
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-brand-text-pale/70">Pod Squadding Impact</span>
                  <span className="text-brand-accent font-bold uppercase text-xs">
                    Outcome-Guaranteed
                  </span>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 pt-6 border-t border-brand-teal-light/10 relative z-10">
              <p className="text-xs text-brand-text-pale/70 leading-relaxed mb-4 text-left font-medium">
                Ready to review our proposed strategy for your <span className="text-white font-extrabold">£{budget.toLocaleString()}</span> budget? We provide a bespoke custom audit completely on us.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("enquire");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-bg-darker font-bold py-3.5 rounded-full text-sm transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-brand-accent/10"
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
