import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Blocks, Braces, PenTool, Users } from "lucide-react";

const capabilities = [
  {
    icon: Blocks,
    title: "UX & Product Design",
    skills: ["Human-Centered Design", "UX Research & Audits", "Usability Testing", "Information Architecture", "User Journey Mapping", "Interaction Design"],
  },
  {
    icon: PenTool,
    title: "UI & Visual Design",
    skills: ["High-Fidelity UI", "Wireframing & Prototyping", "Visual Hierarchy", "Typography & Color Theory", "Design Systems", "Responsive Interfaces", "Accessibility & Consistency"],
  },
  {
    icon: Braces,
    title: "Tools & Technology",
    skills: ["Figma & FigJam", "Adobe XD", "Photoshop & Illustrator", "Canva & Wix", "HTML, CSS & JavaScript", "React & Python", "MySQL"],
  },
  {
    icon: Users,
    title: "Collaboration",
    skills: ["Stakeholder Communication", "Cross-Functional Collaboration", "Design Documentation", "Feedback & Iteration", "Workflow Definition", "Reusable Components", "Technical Requirements Translation"],
  },
];

export const Services = () => {
  const containerRef = useRef<HTMLElement>(null);
  useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} id="services" className="py-32 px-6 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_50%)] pointer-events-none" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] border border-dashed border-white/5 rounded-full pointer-events-none opacity-50"
      />

      <div className="container mx-auto relative z-10">
        <div className="mb-28 grid md:grid-cols-2 gap-16 items-end">
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-baseline gap-3">
                <span className="font-serif italic text-lg text-white">03</span>
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">Expertise</span>
              </div>
              <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
            </div>
            <h2 className="text-6xl md:text-9xl font-medium tracking-tighter leading-none">
              From systems <br />
              <span className="italic font-serif text-neutral-500">to screens.</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed md:pl-12 border-l border-white/10">
            I connect research, interaction design, visual craft, and technical understanding to make intricate products feel clear and usable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className={`group border border-white/10 p-7 bg-white/[0.025] hover:bg-white/[0.06] transition-colors ${index % 2 === 1 ? "lg:mt-16" : ""}`}
            >
              <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-black transition-colors">
                <capability.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium mb-6 tracking-tight">{capability.title}</h3>
              <ul className="space-y-3">
                {capability.skills.map((skill) => (
                  <li key={skill} className="text-sm text-neutral-400 font-light border-t border-white/5 pt-3">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
