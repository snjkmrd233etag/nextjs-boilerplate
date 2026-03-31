"use client";

import { useState } from "react";

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    eyebrow: "Overview",
    description: "A live snapshot of focus, tasks, and support tools.",
  },
  {
    id: "assistant",
    label: "AI Assistant",
    eyebrow: "Copilot",
    description: "Draft replies, summarize the day, and plan the next move.",
  },
  {
    id: "tasks",
    label: "Tasks",
    eyebrow: "Execution",
    description: "Stay on the highest-value work and clear the queue faster.",
  },
  {
    id: "wellness",
    label: "Wellness",
    eyebrow: "Reset",
    description: "Use breathing, recovery, and check-ins to reduce overload.",
  },
  {
    id: "resources",
    label: "Resources",
    eyebrow: "Context",
    description: "Surface notes, workflows, and saved material instantly.",
  },
  {
    id: "community",
    label: "Community",
    eyebrow: "Network",
    description: "Track meetups, discussions, and local activity at a glance.",
  },
];

const tasks = [
  {
    title: "Finish investor update draft",
    progress: "84%",
    ring: "from-cyan-300 to-cyan-500",
    phase: "Needs final review",
  },
  {
    title: "Review sprint priorities",
    progress: "61%",
    ring: "from-sky-200 to-cyan-300",
    phase: "Team alignment",
  },
  {
    title: "Prep Mysuru meetup notes",
    progress: "42%",
    ring: "from-cyan-200 to-teal-300",
    phase: "Research in progress",
  },
  {
    title: "Clear inbox triage",
    progress: "28%",
    ring: "from-slate-200 to-cyan-200",
    phase: "Low-energy task",
  },
];

const suggestions = [
  {
    label: "Summarize my day",
    response: "I prepared a concise evening recap with wins, blockers, and one follow-up.",
  },
  {
    label: "Plan a calm evening",
    response: "I built a lighter schedule with a reset window, dinner, and one focused block.",
  },
  {
    label: "Draft a client reply",
    response: "I framed a warm, professional response and pulled the main action items forward.",
  },
  {
    label: "Generate focus playlist",
    response: "I queued an instrumental set for a 45-minute deep-work session.",
  },
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
        "grid size-10 place-items-center rounded-2xl border text-sm font-semibold transition-all duration-300",
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
  const [activeNav, setActiveNav] = useState(navigationItems[0]);
  const [activeTask, setActiveTask] = useState(tasks[0]);
  const [searchValue, setSearchValue] = useState("");
  const [experienceMessage, setExperienceMessage] = useState(
    "Your workspace is ready. Pick a prompt, open a section, or launch a reset."
  );
  const [isBreathing, setIsBreathing] = useState(false);
  const [notificationsOn, setNotificationsOn] = useState(true);

  const handleSearchAction = () => {
    const query = searchValue.trim();

    setExperienceMessage(
      query
        ? `Running "${query}" across commands, saved context, and current workflows.`
        : "Type a command or prompt first, then I can search the workspace experience."
    );
  };

  const handleBreathingToggle = () => {
    setIsBreathing((current) => {
      const next = !current;
      setExperienceMessage(
        next
          ? "Breathing exercise started. Inhale for 4, hold for 4, exhale for 6."
          : "Breathing exercise paused. Your regular workspace is active again."
      );
      return next;
    });
  };

  const handleNotificationToggle = () => {
    setNotificationsOn((current) => {
      const next = !current;
      setExperienceMessage(
        next
          ? "Gentle notifications are back on for important updates and reminders."
          : "Notifications are muted. The dashboard will stay quiet until you re-enable them."
      );
      return next;
    });
  };

  return (
    <main className="snow-shell min-h-screen overflow-hidden bg-[#081120] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="snow-aura snow-aura-top" />
        <div className="snow-aura snow-aura-bottom" />
        <div className="snow-particles" />
        <div className="aurora-grid" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <aside className="glass-panel hidden w-[290px] shrink-0 flex-col justify-between rounded-[32px] p-5 lg:flex">
          <div className="space-y-8">
            <div className="rounded-[28px] border border-white/14 bg-white/8 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              <p className="text-xs uppercase tracking-[0.45em] text-cyan-100/72">
                Gamma Snowy
              </p>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Winter AI Hub
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-200/74">
                A calmer control room with visible actions instead of decorative controls.
              </p>
            </div>

            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = item.id === activeNav.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveNav(item);
                      setExperienceMessage(item.description);
                    }}
                    className={[
                      "interactive-surface group flex w-full items-center gap-3 rounded-[24px] border px-3 py-3 text-left transition-all duration-300",
                      isActive
                        ? "border-cyan-200/30 bg-cyan-300/12 shadow-[0_8px_30px_rgba(0,240,255,0.12)]"
                        : "border-white/8 bg-white/4 hover:border-cyan-200/20 hover:bg-white/8",
                    ].join(" ")}
                    aria-pressed={isActive}
                  >
                    <SidebarIcon active={isActive} />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-slate-100/92">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.28em] text-slate-300/52">
                        {item.eyebrow}
                      </span>
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="rounded-[28px] border border-white/12 bg-gradient-to-br from-white/10 to-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/68">
              Snow Mode
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-200/82">
              Ambient assistant mode is tuned for a calm evening workflow with gentle prompts and low-noise alerts.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="soft-glow size-2.5 rounded-full bg-emerald-300" />
              <span className="text-sm text-slate-200/72">
                {notificationsOn ? "Calm alerts active" : "Quiet mode active"}
              </span>
            </div>
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
                  <p className="text-sm text-slate-300/80">Good evening, Sanjay</p>
                </div>
              </div>

              <div className="flex flex-1 items-center gap-3">
                <div className="relative flex-1">
                  <div className="absolute left-4 top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(0,240,255,0.75)]" />
                  <input
                    aria-label="Search"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="Search commands, memories, and workflows"
                    className="w-full rounded-[22px] border border-white/12 bg-white/8 py-4 pr-4 pl-10 text-sm text-slate-100 outline-none placeholder:text-slate-300/55"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSearchAction}
                  className="interactive-surface rounded-[22px] border border-cyan-200/28 bg-cyan-300/14 px-4 py-3 text-sm font-medium text-cyan-50"
                >
                  Search
                </button>
                <button
                  type="button"
                  aria-label="Notifications"
                  aria-pressed={notificationsOn}
                  onClick={handleNotificationToggle}
                  className="interactive-surface grid size-12 place-items-center rounded-2xl border border-white/12 bg-white/8 text-cyan-100 shadow-[0_0_24px_rgba(165,243,252,0.1)]"
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
                      {activeNav.label}
                    </div>
                    <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      Make the dashboard feel alive, not static.
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-7 text-slate-200/72">
                      {activeNav.description}
                    </p>
                  </div>

                  <div className="flex w-full max-w-md flex-col gap-3">
                    <div className="rounded-[28px] border border-white/14 bg-[#d6f9ff]/7 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-200/82">Experience feed</p>
                        <span className="rounded-full border border-cyan-200/30 bg-cyan-300/12 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100/82">
                          {isBreathing ? "Reset" : "Live"}
                        </span>
                      </div>
                      <p
                        aria-live="polite"
                        className="mt-4 rounded-[20px] border border-white/12 bg-white/10 px-4 py-4 text-sm leading-6 text-slate-100/88"
                      >
                        {experienceMessage}
                      </p>
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
                    {tasks.map((task) => {
                      const isActive = task.title === activeTask.title;

                      return (
                        <button
                          key={task.title}
                          type="button"
                          onClick={() => {
                            setActiveTask(task);
                            setExperienceMessage(`${task.title} selected. ${task.phase}.`);
                          }}
                          className={[
                            "interactive-surface flex w-full items-center gap-4 rounded-[24px] border p-4 text-left transition-all duration-300",
                            isActive
                              ? "border-cyan-200/26 bg-cyan-300/10 shadow-[0_12px_35px_rgba(0,240,255,0.08)]"
                              : "border-white/10 bg-white/6",
                          ].join(" ")}
                        >
                          <ProgressRing progress={task.progress} ring={task.ring} />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-slate-100">{task.title}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-300/58">
                              {task.phase}
                            </p>
                          </div>
                          <span className="rounded-full border border-cyan-200/24 bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-50">
                            Open
                          </span>
                        </button>
                      );
                    })}
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
                            className={`${item.tone} h-full rounded-full transition-[width] duration-500`}
                            style={{ width: item.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleBreathingToggle}
                    className="interactive-surface mt-8 w-full rounded-[22px] border border-cyan-200/34 bg-gradient-to-r from-cyan-300/20 to-sky-200/14 px-4 py-4 text-sm font-medium text-cyan-50 shadow-[0_0_28px_rgba(0,240,255,0.14)]"
                  >
                    {isBreathing ? "Pause Breathing Exercise" : "Start Breathing Exercise"}
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
                  Tip: Keep the next deep-work block near a bright window and start with a two-minute reset before switching contexts.
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
                      key={suggestion.label}
                      type="button"
                      onClick={() => setExperienceMessage(suggestion.response)}
                      className="interactive-surface rounded-full border border-cyan-200/24 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50/92 transition-colors hover:bg-cyan-300/16"
                    >
                      {suggestion.label}
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
        onClick={() =>
          setExperienceMessage(
            `AI workspace opened for ${activeTask.title.toLowerCase()}. Starting with ${activeNav.label.toLowerCase()} context.`
          )
        }
        className="interactive-surface fixed right-4 bottom-4 z-20 rounded-full border border-cyan-200/36 bg-gradient-to-r from-cyan-300/36 to-sky-200/22 px-6 py-4 text-sm font-medium text-cyan-50 shadow-[0_18px_60px_rgba(0,240,255,0.25)] backdrop-blur-xl sm:right-8 sm:bottom-8"
      >
        Ask AI Anything
      </button>
    </main>
  );
}
