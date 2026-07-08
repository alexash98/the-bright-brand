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
    <section id="about" className="relative border-t border-neutral-200 bg-white py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 max-w-3xl text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
            Our People
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Built by people that <span className="text-brand-accent">care</span>.
          </h2>
          <p className="text-lg font-normal leading-relaxed text-neutral-600">
            Seed runs on high-agency, trust, and structural pods. We are fully transitioning to an Employee Ownership Trust (EOT) because we believe the people who build results should co-own the business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <motion.div
              layoutId={`member-card-${member.id}`}
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group relative flex cursor-pointer items-center gap-5 rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-lg transition-all duration-300 hover:border-brand-accent/25 hover:bg-white"
            >
              {/* Profile Avatar Initials */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-xl font-extrabold text-brand-accent transition-all duration-300 group-hover:bg-brand-accent/15">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>

              {/* Bio Core */}
              <div className="text-left">
                <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  {member.role}
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-brand-accent">
                  {member.name}
                </h3>
                <span className="mt-1.5 flex items-center gap-1 text-xs font-medium text-neutral-500">
                  <Calendar className="h-3 w-3 text-brand-accent" />
                  Started {member.startDate.split(" ")[1]}
                </span>
              </div>

              {/* Tiny Expand indicator */}
              <div className="absolute bottom-4 right-4 text-xs font-semibold text-neutral-400 transition-colors group-hover:text-brand-accent">
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
                className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 text-left shadow-2xl"
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-brand-accent/35 hover:text-brand-accent"
                >
                  <X className="h-4.5 w-4.5" />
                </button>

                <div className="flex items-center gap-5 border-b border-neutral-200 pb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-3xl font-extrabold text-brand-accent shadow-inner">
                    {selectedMember.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                      {selectedMember.role}
                    </span>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      {selectedMember.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-neutral-500">
                      Seniority: {selectedMember.seniority}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 py-6">
                  <p className="text-sm font-normal leading-relaxed text-neutral-600">
                    {selectedMember.bio}
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 shrink-0 text-brand-accent" />
                      <a href={`mailto:${selectedMember.email}`} className="font-semibold hover:text-brand-accent hover:underline">
                        {selectedMember.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 shrink-0 text-brand-accent" />
                      <span className="font-semibold">On the team since {selectedMember.startDate}</span>
                    </div>
                  </div>

                  {/* Core Hobbies section */}
                  <div className="border-t border-neutral-200 pt-4">
                    <h4 className="mb-2.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      <Heart className="h-3.5 w-3.5 fill-brand-accent/10 text-brand-accent" />
                      Interests & Hobbies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.hobbies.map((hobby, idx) => (
                        <span key={idx} className="rounded border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-semibold text-neutral-600">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end border-t border-neutral-200 pt-4">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="rounded-full bg-brand-accent px-6 py-2.5 text-sm font-bold text-brand-bg-darker transition-colors duration-200 hover:bg-brand-accent-hover"
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
