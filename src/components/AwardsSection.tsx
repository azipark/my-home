import React from "react";
import { awards } from "@/lib/data";
import { Trophy } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="py-12 scroll-mt-24 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🏆 Awards
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-4">
          {awards.map((award, index) => (
            <MotionWrapper key={award.name} delay={index * 0.1}>
              <GlassCard className="p-4 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-1.5 mr-2"
                  >
                    <Trophy className="h-4 w-4 text-white" />
                  </motion.div>
                  <h3 className="font-medium">{award.name}</h3>
                </div>
                <div className="flex flex-col space-y-2 mt-auto">
                  <p className="text-xs text-muted-foreground mb-1 pl-8">
                    {award.issuer}
                  </p>
                  <motion.span
                    className="text-sm text-muted-foreground/80 bg-background/50 px-2 py-1 pl-8 rounded-md w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    {award.type}
                  </motion.span>
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
