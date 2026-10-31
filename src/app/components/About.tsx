import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const education = [
  {
    school: "Amrita University",
    degree: "MBA, Business Analytics · Currently pursuing · Online",
    years: "2026—28",
  },
  {
    school: "Lendi Institute of Engineering & Technology",
    degree: "B.Tech, Computer Science and Information Technology · CGPA 8.49",
    years: "2022—26",
  },
  {
    school: "Narayana Junior College",
    degree: "Intermediate · 80%",
    years: "2020—22",
  },
];

const achievements = [
  "Winner — Declamation Contest, Youth Parliament, Government of India",
  "Hackathon Finalist — Andhra University & A-Hub",
  "Social Media & Marketing Lead — GeeksforGeeks Student Chapter, LIET · Branding, promotional content, and UI/UX bootcamp host",
];

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} id="about" className="py-32 relative bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-6 mb-24">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-lg text-white">02</span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">About & Experience</span>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-medium tracking-tighter mb-12 leading-[0.9]"
            >
              Curious by nature. <br />
              <span className="italic font-serif text-neutral-500">Structured</span> in process.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 text-lg font-light text-neutral-400 leading-relaxed">
              <p>
                I&apos;m Akshaya Sri Arasada, an Interaction Designer with a background in Computer Science and Information Technology. I transform complex workflows and technical requirements into intuitive, human-centered experiences.
              </p>
              <p>
                My work spans UX research, information architecture, interaction design, high-fidelity UI, prototyping, and design systems. My technical foundation helps me collaborate closely with developers and stakeholders.
              </p>
            </div>

            <div className="mt-20 pt-12 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-8">Education</span>
              <div className="divide-y divide-white/10">
                {education.map((item) => (
                  <div key={item.school} className="grid md:grid-cols-[1fr_2fr_auto] gap-4 py-6">
                    <h3 className="text-lg font-medium">{item.school}</h3>
                    <p className="text-neutral-400 font-light">{item.degree}</p>
                    <span className="text-xs font-mono text-neutral-500 pt-1">{item.years}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:mt-24 space-y-6"
          >
            <div className="border border-white/10 bg-white/[0.03] p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Experience / 01</span>
              <h3 className="text-3xl tracking-tight mt-8">Interaction Designer</h3>
              <p className="text-neutral-300 mt-2">Aegion Dynamic Solutions</p>
              <p className="text-xs font-mono text-neutral-500 mt-2">2025—present</p>
              <p className="text-neutral-400 font-light leading-relaxed mt-8">
                Designed complex scientific software and AI-powered mobile experiences across research, workflow analysis, information architecture, prototyping, reusable components, and cross-functional delivery. I also contribute to project management by coordinating priorities, timelines, and communication across teams to keep projects moving from concept to delivery.
              </p>
            </div>

            <div className="border border-white/10 p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Experience / 02</span>
              <h3 className="text-3xl tracking-tight mt-8">UX Audit</h3>
              <p className="text-neutral-300 mt-2">XIGAA</p>
              <p className="text-xs font-mono text-neutral-500 mt-2">2024—2025</p>
              <p className="text-neutral-400 font-light leading-relaxed mt-8">
                Conducted a UX audit of the Bank of Baroda mobile application as a usability analysis and research project.
              </p>
            </div>

            <div className="pt-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-6">Recognition & Leadership</span>
              <ul className="space-y-4">
                {achievements.map((achievement) => (
                  <li key={achievement} className="text-sm text-neutral-400 leading-relaxed border-l border-white/20 pl-4">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
