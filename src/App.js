import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cards = [
  {
    title: "Cognitive Bento",
    subtitle: "Systems of focus",
    description: "A grid of modular thoughts, stacked like product tiles yet breathing like art.",
    tone: "bg-white",
  },
  {
    title: "Red Shift",
    subtitle: "Visual momentum",
    description: "Red accents orbit clean whites to highlight decisive ideas and sharp calls.",
    tone: "bg-ember text-white",
  },
  {
    title: "Black Logic",
    subtitle: "Precision layer",
    description: "Contrast blocks anchor the story with clarity, tone, and bold structure.",
    tone: "bg-ink text-white",
  },
  {
    title: "Human Signal",
    subtitle: "Profile focus",
    description: "Designing for people first, with transitions that feel intentional and calm.",
    tone: "bg-white",
  },
  {
    title: "Futurework",
    subtitle: "Selected experiments",
    description: "Interfaces that turn complex workflows into confident, tactile moments.",
    tone: "bg-snow",
  },
  {
    title: "Launch Ready",
    subtitle: "Let’s build",
    description: "A bento-ready system that scales with your ambition and storytelling.",
    tone: "bg-white",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-ink">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-90" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 sm:px-10">
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ember text-white">
              V
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-ink/70">Vetra Studio</div>
          </div>
          <div className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
            <span>Work</span>
            <span>Labs</span>
            <span>Manifesto</span>
            <span>Contact</span>
          </div>
        </motion.nav>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ember">
              Beyond AI Portfolio
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              A 20-year UI veteran crafting interfaces that rewire how humans feel technology.
            </h1>
            <p className="max-w-xl text-base text-ink/70 sm:text-lg">
              This is a bento-style narrative where white space dominates, red punctuates, and black
              anchors. Each tile is designed as a micro-ecosystem: focused, tactile, and ready for
              motion.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ember/20">
                Start a Project
              </button>
              <button className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink">
                View Labs
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative bento-card bento-soft overflow-hidden p-8"
          >
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-ink/10" />
            <div className="absolute bottom-6 left-6 h-12 w-12 rounded-2xl bg-ember" />
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Signature tile</p>
              <h2 className="text-2xl font-semibold">Human + Machine Symbiosis</h2>
              <p className="text-sm text-ink/70">
                A visual system inspired by future product sheets, softened with gradients, cut by
                sharp typography, and animated with intentional friction.
              </p>
              <div className="flex items-center gap-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`dot-${index}`}
                    className={`h-2 w-2 rounded-full ${index === 1 ? "bg-ember" : "bg-ink/20"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bento-card relative flex min-h-[220px] flex-col justify-between overflow-hidden p-6"
          >
            <div className="text-xs uppercase tracking-[0.4em] text-ink/50">Vertical thinking</div>
            <div className="flex items-end justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Sonic Narrative</h3>
                <p className="text-sm text-ink/70">
                  Sound-inspired UI rhythms, layered like analog grooves.
                </p>
              </div>
              <div className="vertical-word text-6xl font-semibold text-ink/15">SONIC</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bento-card flex min-h-[220px] flex-col justify-between bg-ink p-6 text-white"
          >
            <div className="text-xs uppercase tracking-[0.4em] text-white/60">Design stack</div>
            <div className="flex items-end justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Framer Motion</h3>
                <p className="text-sm text-white/70">
                  Motion as a storytelling tool, not decoration.
                </p>
              </div>
              <span className="rounded-full border border-white/30 px-3 py-1 text-xs">2024</span>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className={`bento-card flex min-h-[200px] flex-col justify-between p-6 ${card.tone}`}
              >
                <div className="text-xs uppercase tracking-[0.4em] opacity-70">{card.subtitle}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-sm opacity-70">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card bento-soft flex flex-col justify-between gap-6 p-8"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.4em] text-ink/60">Availability</span>
              <span className="rounded-full bg-ember px-3 py-1 text-xs font-semibold text-white">
                Open 3 Slots
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Let’s design something legendary.</h3>
              <p className="mt-3 text-sm text-ink/70">
                Fast sprints, deep research, and polish that honors every pixel. Reach out for a
                vision session.
              </p>
            </div>
            <button className="w-full rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
              Book a Vision Call
            </button>
          </motion.div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6 text-xs uppercase tracking-[0.4em] text-ink/50">
          <span>2024 Vetra Studio</span>
          <span>Portfolio system · v1.0</span>
        </footer>
      </main>
    </div>
  );
}
