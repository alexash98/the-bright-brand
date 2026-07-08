'use client';

import React, { useState } from "react";
import { TeamMember } from "@/lib/seed-types";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Calendar, X, Heart } from "lucide-react";

interface TeamSectionProps {
  members: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="about" className="py-24 bg-brand-bg relative border-t border-brand-teal-light/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-brand-accent),transparent_70%)] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-4">
            Our People
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Built by people that <span className="text-brand-accent">care</span>.
          </h2>
          <p className="text-brand-text-pale/80 text-lg leading-relaxed font-medium">
            Seed runs on high-agency, trust, and structural pods. We are fully transitioning to an Employee Ownership Trust (EOT) because we believe the people who build results should co-own the business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <motion.div
              layoutId={`member-card-${member.id}`}
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group bg-brand-bg-card hover:bg-brand-bg-darker/80 border border-brand-teal-light/10 hover:border-brand-accent/25 rounded-xl p-6 transition-all duration-300 cursor-pointer flex gap-5 items-center relative shadow-lg"
            >
              {/* Profile Avatar Initials */}
              <div className="h-16 w-16 shrink-0 rounded-full bg-brand-bg-darker border border-brand-teal-light/20 flex items-center justify-center font-extrabold text-xl text-brand-accent group-hover:bg-brand-accent/15 transition-all duration-300">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>

              {/* Bio Core */}
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-text-pale/50 block mb-0.5">
                  {member.role}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                  {member.name}
                </h3>
                <span className="text-brand-text-pale/40 text-xs flex items-center gap-1 mt-1.5 font-medium">
                  <Calendar className="h-3 w-3 text-brand-accent" />
                  Started {member.startDate.split(" ")[1]}
                </span>
              </div>

              {/* Tiny Expand indicator */}
              <div className="absolute bottom-4 right-4 text-xs font-semibold text-brand-text-pale/45 group-hover:text-brand-accent transition-colors">
                View Bio →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Profile Dialog overlay */}
        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                className="absolute inset-0 bg-brand-bg-darker/80 backdrop-blur-md"
              />

              {/* Box Dialog */}
              <motion.div
                layoutId={`member-card-${selectedMember.id}`}
                className="relative bg-brand-bg border border-brand-teal-light/20 rounded-2xl max-w-md w-full p-8 overflow-hidden z-10 text-left shadow-2xl"
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-brand-bg-darker/60 border border-brand-teal-light/15 flex items-center justify-center text-white hover:text-brand-accent hover:border-brand-accent/35 transition-colors"
                >
                  <X className="h-4.5 w-4.5" />
                </button>

                <div className="flex gap-5 items-center pb-6 border-b border-brand-teal-light/10">
                  <div className="h-20 w-20 rounded-full bg-brand-bg-darker border border-brand-teal-light/20 flex items-center justify-center font-extrabold text-3xl text-brand-accent shadow-inner">
                    {selectedMember.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-brand-accent">
                      {selectedMember.role}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">
                      {selectedMember.name}
                    </h3>
                    <p className="text-xs text-brand-text-pale/50 mt-1 font-medium">
                      Seniority: {selectedMember.seniority}
                    </p>
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <p className="text-brand-text-pale/85 text-sm leading-relaxed font-medium">
                    {selectedMember.bio}
                  </p>

                  <div className="space-y-2.5 text-xs text-brand-text-pale/60 pt-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-accent shrink-0" />
                      <a href={`mailto:${selectedMember.email}`} className="hover:text-brand-accent hover:underline font-semibold">
                        {selectedMember.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-accent shrink-0" />
                      <span className="font-semibold">On the team since {selectedMember.startDate}</span>
                    </div>
                  </div>

                  {/* Core Hobbies section */}
                  <div className="pt-4 border-t border-brand-teal-light/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text-pale/50 mb-2.5 flex items-center gap-1.5">
                      <Heart className="h-3.5 w-3.5 text-brand-accent fill-brand-accent/10" />
                      Interests & Hobbies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.hobbies.map((hobby, idx) => (
                        <span key={idx} className="bg-brand-bg-darker border border-brand-teal-light/10 px-2.5 py-1 rounded text-xs text-brand-text-pale font-semibold">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-brand-teal-light/10">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="bg-brand-accent hover:bg-brand-accent-hover text-brand-bg-darker font-bold text-sm px-6 py-2.5 rounded-full transition-colors duration-200"
                  >
                    Close Profile
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
