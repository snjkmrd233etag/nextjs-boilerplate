const navigationItems = [
  "Dashboard",
  "AI Assistant",
  "Tasks",
  "Wellness",
  "Resources",
  "Community",
];

const tasks = [
  { title: "Finish investor update draft", progress: "84%", ring: "from-cyan-300 to-cyan-500" },
  { title: "Review sprint priorities", progress: "61%", ring: "from-sky-200 to-cyan-300" },
  { title: "Prep Mysuru meetup notes", progress: "42%", ring: "from-cyan-200 to-teal-300" },
  { title: "Clear inbox triage", progress: "28%", ring: "from-slate-200 to-cyan-200" },
];

const suggestions = [
  "Summarize my day",
  "Plan a calm evening",
  "Draft a client reply",
  "Generate focus playlist",
];

const moodScale = [
  { label: "Calm", width: "92%", tone: "bg-cyan-200/90" },
  { label: "Focus", width: "74%", tone: "bg-sky-200/80" },
  { label: "Recovery", width: "58%", tone: "bg-teal-100/70" },
];

function SidebarIcon({ active = false }: { active?: boolean }) {
  return (
    <span
      aria-hidden
      className={[
        "grid size-10 place-items-center rounded-2xl border text-sm font-semibold transition-colors",
        active
          ? "border-cyan-200/60 bg-cyan-300/18 text-cyan-100 shadow-[0_0_24px_rgba(0,240,255,0.2)]"
          : "border-white/10 bg-white/6 text-slate-300",
      ].join(" ")}
    >
      <span className="block size-3 rounded-full border border-current" />
    </span>
  );
}

function ProgressRing({
  progress,
  ring,
}: {
  progress: string;
  ring: string;
}) {
  return (
    <div
      className={[
        "grid size-12 place-items-center rounded-full bg-gradient-to-br p-[1px]",
        ring,
      ].join(" ")}
    >
      <div className="grid size-full place-items-center rounded-full bg-[#0d1a34]/90 text-[11px] font-semibold text-cyan-50">
        {progress}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="snow-shell min-h-screen overflow-hidden bg-[#081120] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="snow-aura snow-aura-top" />
        <div className="snow-aura snow-aura-bottom" />
        <div className="snow-particles" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <aside className="glass-panel hidden w-[270px] shrink-0 flex-col justify-between rounded-[32px] p-5 lg:flex">
          <div className="space-y-8">
            <div className="rounded-[28px] border border-white/14 bg-white/8 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              <p className="text-xs uppercase tracking-[0.45em] text-cyan-100/72">
                Gamma Snowy
              </p>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Winter AI Hub
              </h1>
            </div>

            <nav className="space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={[
                    "group flex items-center gap-3 rounded-[24px] border px-3 py-3 transition-all",
                    index === 0
                      ? "border-cyan-200/30 bg-cyan-300/12 shadow-[0_8px_30px_rgba(0,240,255,0.12)]"
                      : "border-white/8 bg-white/4 hover:border-cyan-200/20 hover:bg-white/8",
                  ].join(" ")}
                >
                  <SidebarIcon active={index === 0} />
                  <span className="text-sm font-medium text-slate-100/92">
                    {item}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="rounded-[28px] border border-white/12 bg-gradient-to-br from-white/10 to-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/68">
              Snow Mode
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-200/82">
              Ambient assistant mode is tuned for a calm evening workflow with
              gentle prompts and low-noise alerts.
            </p>
          </div>
        </aside>

        <section className="flex min-h-screen flex-1 flex-col gap-6">
          <header className="glass-panel rounded-[32px] px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
              <div className="flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-2xl border border-cyan-200/35 bg-cyan-300/12 shadow-[0_0_24px_rgba(0,240,255,0.16)]">
                  <div className="size-5 rounded-full border border-cyan-100/90 bg-cyan-200/40" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.42em] text-cyan-100/70">
                    Gamma Snowy
                  </p>
                  <p className="text-sm text-slate-300/80">
                    Good evening, Sanjay
                  </p>
                </div>
              </div>

              <div className="flex flex-1 items-center gap-3">
                <div className="relative flex-1">
                  <div className="absolute left-4 top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(0,240,255,0.75)]" />
                  <input
                    aria-label="Search"
                    defaultValue="Search commands, memories, and workflows"
                    className="w-full rounded-[22px] border border-white/12 bg-white/8 py-4 pr-4 pl-10 text-sm text-slate-100 outline-none placeholder:text-slate-300/55"
                  />
                </div>
                <button
                  type="button"
                  aria-label="Notifications"
                  className="grid size-12 place-items-center rounded-2xl border border-white/12 bg-white/8 text-cyan-100 shadow-[0_0_24px_rgba(165,243,252,0.1)]"
                >
                  <span className="snow-bell" />
                </button>
                <div className="flex items-center gap-3 rounded-[24px] border border-white/12 bg-white/8 px-3 py-2">
                  <div className="grid size-10 place-items-center rounded-2xl border border-cyan-100/35 bg-gradient-to-br from-cyan-100/15 to-white/5 text-sm font-semibold text-white">
                    S
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="grid flex-1 gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(360px,0.95fr)]">
            <div className="flex flex-col gap-6">
              <section className="glass-panel relative overflow-hidden rounded-[36px] p-6 sm:p-8">
                <div className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-[radial-gradient(circle_at_top,rgba(165,243,252,0.22),transparent_62%)]" />
                <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-200/24 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.38em] text-cyan-100/76">
                      <span className="grid size-7 place-items-center rounded-full border border-cyan-200/35 bg-cyan-200/14">
                        <span className="block size-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(0,240,255,0.85)]" />
                      </span>
                      Personal AI Console
                    </div>
                    <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      How can I help you today, Sanjay?
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-7 text-slate-200/72">
                      Your evening workspace is tuned for focus, recovery, and
                      low-friction assistance across tasks, wellness, and local
                      context.
                    </p>
                  </div>

                  <div className="flex w-full max-w-md flex-col gap-3">
                    <div className="rounded-[28px] border border-white/14 bg-[#d6f9ff]/7 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-200/82">
                          Voice capture ready
                        </p>
                        <span className="rounded-full border border-cyan-200/30 bg-cyan-300/12 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100/82">
                          Live
                        </span>
                      </div>
                      <div className="mt-4 h-14 rounded-[20px] border border-white/12 bg-white/10" />
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                <section className="glass-panel rounded-[32px] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/68">
                        Today&apos;s Tasks
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        Priority queue
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-xs text-slate-200/70">
                      4 active
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {tasks.map((task) => (
                      <div
                        key={task.title}
                        className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/6 p-4"
                      >
                        <ProgressRing progress={task.progress} ring={task.ring} />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-slate-100">
                            {task.title}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-300/58">
                            Snowflake checkpoint
                          </p>
                        </div>
                        <span className="rounded-full border border-cyan-200/24 bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-50">
                          Focus
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="glass-panel rounded-[32px] p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/68">
                    Wellness Snapshot
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">
                      Nervous system check-in
                    </h3>
                    <span className="rounded-full border border-emerald-200/22 bg-emerald-200/10 px-3 py-1 text-xs text-emerald-50">
                      Balanced
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {moodScale.map((item) => (
                      <div key={item.label} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-200/78">{item.label}</span>
                          <span className="text-slate-300/60">{item.width}</span>
                        </div>
                        <div className="h-3 rounded-full bg-white/8 p-[2px]">
                          <div
                            className={`${item.tone} h-full rounded-full`}
                            style={{ width: item.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-8 w-full rounded-[22px] border border-cyan-200/34 bg-gradient-to-r from-cyan-300/20 to-sky-200/14 px-4 py-4 text-sm font-medium text-cyan-50 shadow-[0_0_28px_rgba(0,240,255,0.14)]"
                  >
                    Start Breathing Exercise
                  </button>
                </section>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
              <section className="glass-panel rounded-[32px] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/68">
                      Mysuru Winter Insights
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      Cool local conditions
                    </h3>
                  </div>
                  <div className="grid size-14 place-items-center rounded-full border border-cyan-200/30 bg-cyan-300/10">
                    <div className="size-6 rounded-full border border-cyan-100/60 bg-cyan-100/30 shadow-[0_0_20px_rgba(165,243,252,0.5)]" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["18", "Temp"],
                    ["42", "AQI"],
                    ["71%", "Humidity"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-[22px] border border-white/10 bg-white/7 px-4 py-4 text-center"
                    >
                      <p className="text-2xl font-semibold text-white">{value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-300/56">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-200/72">
                  Tip: Keep the next deep-work block near a bright window and
                  start with a two-minute reset before switching contexts.
                </p>
              </section>

              <section className="glass-panel rounded-[32px] p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/68">
                  Energy Balance
                </p>
                <div className="mt-6 flex items-center gap-6">
                  <div className="energy-orbit grid size-36 place-items-center rounded-full border border-white/10 bg-white/6">
                    <div className="grid size-24 place-items-center rounded-full border border-cyan-200/26 bg-[#0c1934]/95">
                      <div className="text-center">
                        <p className="text-3xl font-semibold text-white">76%</p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.26em] text-cyan-100/70">
                          Charged
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-slate-200/74">
                    <p>Focus reserve is stable.</p>
                    <p>Recovery trend improved after 6 PM.</p>
                    <p>One more light session is recommended.</p>
                  </div>
                </div>
              </section>

              <section className="glass-panel rounded-[32px] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/68">
                      Quick AI Suggestions
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      Start from a prompt
                    </h3>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      className="rounded-full border border-cyan-200/24 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50/92 transition-colors hover:bg-cyan-300/16"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>

      <button
        type="button"
        className="fixed right-4 bottom-4 z-20 rounded-full border border-cyan-200/36 bg-gradient-to-r from-cyan-300/36 to-sky-200/22 px-6 py-4 text-sm font-medium text-cyan-50 shadow-[0_18px_60px_rgba(0,240,255,0.25)] backdrop-blur-xl sm:right-8 sm:bottom-8"
      >
        Ask AI Anything
      </button>
    </main>
  );
}
