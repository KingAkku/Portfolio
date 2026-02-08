const motion =
  typeof window !== "undefined" &&
  window.FramerMotion &&
  window.FramerMotion.motion
    ? window.FramerMotion.motion
    : { div: "div" };

const quickFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  {
    title: "Neuro-Canvas",
    description: "Generative identity system for kinetic brands.",
    tags: ["Motion", "Identity", "AI"],
  },
  {
    title: "Bento Orbit",
    description: "Spatial UI kit for product storytelling.",
    tags: ["UI", "WebGL", "Systems"],
  },
  {
    title: "Signal Atlas",
    description: "Realtime insight dashboard for growth teams.",
    tags: ["Data", "SaaS", "Ops"],
  },
];

const skills = [
  "Motion-first UI",
  "Visual systems",
  "Creative direction",
  "Prototyping",
  "Product strategy",
  "Storytelling",
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-red-100 blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-20 h-72 w-72 rounded-full bg-red-200/60 blur-3xl" />

        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-black" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Kairo V
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-black/60">
                Beyond AI Portfolio
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-black/60 md:flex">
            <span>Work</span>
            <span>Process</span>
            <span>Contact</span>
          </nav>
          <button className="rounded-full border border-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
            Let&apos;s build
          </button>
        </header>

        <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
          <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={quickFade}
              initial="hidden"
              animate="show"
              className="rounded-[32px] border border-black/10 bg-white p-8 shadow-[0_40px_120px_rgba(0,0,0,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-black/60">
                20 y.o. UI Veteran
              </p>
              <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[0.15em] md:text-6xl">
                Redefine
                <span className="block text-red-500">Human Thinking</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-black/70">
                I design bento-first interfaces that feel cinematic, tactile, and
                radically human. Think of this space as a living blueprint: white
                silence, black structure, and red energy.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Framer Motion",
                  "Tailwind CSS",
                  "Immersive UI",
                  "AI Collab",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white">
                  View work
                </button>
                <button className="rounded-full border border-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em]">
                  Download deck
                </button>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[28px] border border-black/10 bg-black p-6 text-white"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Current focus
                </p>
                <h2 className="mt-6 text-2xl font-semibold uppercase tracking-[0.1em]">
                  Beyond AI
                  <span className="block text-red-400">Storytelling</span>
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  Sculpting interfaces that feel like worlds, not screens.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[28px] border border-black/10 bg-white p-6"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                  Stats
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-3xl font-semibold text-black">48+</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                      Launches
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-black">9 yrs</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                      Crafting UI
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[28px] border border-black/10 bg-white p-6 sm:col-span-2"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                  Bento manifesto
                </p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  White space is the stage. Black is the frame. Red is the pulse.
                  Every card is a scene, every hover a breath.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <motion.div
              variants={quickFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[32px] border border-black/10 bg-white p-8"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                Skill matrix
              </p>
              <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.2em]">
                Creative Powers
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -6 }}
                  className="rounded-[28px] border border-black/10 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold uppercase tracking-[0.2em]">
                      {project.title}
                    </h4>
                    <span className="text-xs uppercase tracking-[0.3em] text-red-500">
                      Case study
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-black/70">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-black/10 bg-white p-8"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                Process
              </p>
              <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.2em]">
                Flow in 3 acts
              </h3>
              <ol className="mt-6 space-y-4 text-sm text-black/70">
                <li>
                  <span className="font-semibold text-black">01</span> - Decode
                  the problem, map the emotion.
                </li>
                <li>
                  <span className="font-semibold text-black">02</span> - Design
                  the bento rhythm, choreograph motion.
                </li>
                <li>
                  <span className="font-semibold text-black">03</span> - Ship
                  the experience, measure the resonance.
                </li>
              </ol>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-black/10 bg-red-500 p-8 text-white"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                Contact
              </p>
              <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.2em]">
                Let&apos;s build
              </h3>
              <p className="mt-4 text-sm text-white/80">
                Looking for a UI veteran to craft your next impossible product?
              </p>
              <div className="mt-8 space-y-2 text-sm">
                <p>hello@kairo.studio</p>
                <p>Los Angeles · Remote</p>
              </div>
              <button className="mt-8 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
                Start a project
              </button>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}
