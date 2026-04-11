import React from "react";

export default function App() {
  const [selectedNode, setSelectedNode] = React.useState("Scaffold");

  const breakpoints = [
    {
      title: "Scaffold",
      problem: "Leaked answers, porous harnesses, hidden shortcuts.",
      fix: "Sealed task boundaries and explicit access control.",
      detail:
        "The harness itself leaks privileged information, exposes hidden verifier logic, or contaminates the environment before reasoning starts. This breaks legitimacy at the scaffold layer.",
      receipts: [
        "task boundary manifest",
        "accessible paths log",
        "prompt frame hash",
        "tool permission record",
      ],
      run: [
        ["01", "Task boundary loaded", "Only declared files and tools exposed to the agent."],
        ["02", "Prompt frame sealed", "System prompt and role policy hashed before execution."],
        ["03", "Access attempt checked", "Any out-of-scope file or hidden verifier path is denied."],
      ],
      x: "12%",
      y: "18%",
    },
    {
      title: "Memory",
      problem: "Weak facts become permanent truth.",
      fix: "Scored, sourced, revocable memory with approval states.",
      detail:
        "Persistent systems fail when provisional observations silently become trusted facts. SwarmCore treats memory as governed state: attributable, confidence-scored, reviewable, and revocable.",
      receipts: [
        "memory write log",
        "source attribution",
        "confidence score",
        "approval state",
      ],
      run: [
        ["01", "Working memory loaded", "Only scoped session memory is brought into context."],
        ["02", "Fact write proposed", "New memory is tagged as provisional, not truth."],
        ["03", "Approval boundary enforced", "Promotion to long-term memory requires policy or human approval."],
      ],
      x: "34%",
      y: "36%",
    },
    {
      title: "Retrieval",
      problem: "Untrusted context contaminates decisions.",
      fix: "Scoped retrieval with attributable source paths.",
      detail:
        "Agents should not pull arbitrary context and treat it as legitimate evidence. Retrieval must be task-scoped, source-bound, and visible in the receipt chain.",
      receipts: [
        "retrieval scope",
        "source path",
        "document lineage",
        "access policy match",
      ],
      run: [
        ["01", "Query scoped", "Retrieval is constrained to approved stores and task policy."],
        ["02", "Source selected", "Every retrieved document is attributable and logged."],
        ["03", "Context assembled", "Only approved context enters the decision path."],
      ],
      x: "56%",
      y: "20%",
    },
    {
      title: "Verifier",
      problem: "Spoofable pass signals and shallow checks.",
      fix: "Hardened validation tied to intended task completion.",
      detail:
        "A verifier that checks cosmetic output instead of true completion can be tricked by prompt injection, mocked outputs, or fake success markers. SwarmCore hardens the validation layer and checks the path, not only the artifact.",
      receipts: [
        "verifier version",
        "validation trace",
        "task completion proof",
        "spoof resistance checks",
      ],
      run: [
        ["01", "Verifier selected", "Validation version and policy are pinned before run."],
        ["02", "Output checked", "Verifier tests intended task completion, not cosmetic signals."],
        ["03", "Spoof scan passed", "PASS strings, mocks, and shortcut artifacts are rejected."],
      ],
      x: "74%",
      y: "42%",
    },
    {
      title: "Governance",
      problem: "Agents drift beyond their authority.",
      fix: "Role separation, escalation rules, human finality.",
      detail:
        "The junior should not act like the senior. The senior should not silently become final authority. SwarmCore binds every role to explicit permissions, escalation paths, and human finality thresholds.",
      receipts: [
        "role policy",
        "escalation reason",
        "authority class",
        "human review status",
      ],
      run: [
        ["01", "Role loaded", "Junior, senior, and human boundaries are explicit."],
        ["02", "Threshold crossed", "High-risk or ambiguous work triggers escalation."],
        ["03", "Human finality", "Final authority remains visible and reviewable."],
      ],
      x: "46%",
      y: "68%",
    },
    {
      title: "Audit",
      problem: "No receipts, no trust, no finality.",
      fix: "Full action lineage and reviewable decision traces.",
      detail:
        "Without a full record of what ran, what it saw, what policy applied, and whether a human approved the outcome, there is no defendable system. SwarmCore closes the loop with receipts.",
      receipts: [
        "model + version",
        "memory loaded",
        "tools used",
        "final decision lineage",
      ],
      run: [
        ["01", "Execution receipt started", "Every run gets an identity and lineage root."],
        ["02", "Trace appended", "Model, memory, retrieval, verifier, and actions are recorded."],
        ["03", "Outcome sealed", "Final path is reviewable and survives scrutiny."],
      ],
      x: "81%",
      y: "72%",
    },
  ];

  const principles = [
    "Sealed task boundaries",
    "Role-defined agents",
    "Memory discipline",
    "Retrieval integrity",
    "Verifier hardening",
    "Human finality",
    "Full receipts",
  ];

  const rails = [
    {
      name: "Detect",
      text: "Find breaks in the chain before they become false confidence.",
    },
    {
      name: "Bound",
      text: "Constrain what agents can see, do, store, and claim.",
    },
    {
      name: "Verify",
      text: "Validate the path, not just the output.",
    },
    {
      name: "Escalate",
      text: "Route meaningful risk to stronger reviewers and humans.",
    },
    {
      name: "Seal",
      text: "Leave receipts that survive scrutiny.",
    },
  ];

  const evidence = [
    "Answer leakage through scaffolds",
    "Memory poisoning and unverified persistence",
    "Retrieval contamination from untrusted context",
    "Verifier spoofing through shallow pass signals",
    "Role drift in autonomous systems",
    "Benchmark wins without mechanical legitimacy",
  ];

  const activeNode =
    breakpoints.find((node) => node.title === selectedNode) || breakpoints[0];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.10),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.10),transparent_18%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_20%)]" />

      <main className="relative mx-auto max-w-[1400px] px-6 py-10 md:px-10 lg:px-12">
        <section className="grid gap-10">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs tracking-[0.25em] text-amber-200 uppercase">
              SwarmCore
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Audit Layer for Serious AI
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              AI is breaking in the
              <span className="block text-amber-300">layers around the model.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 md:text-xl">
              SwarmCore is the mechanics and audit layer for building agent systems that can survive scrutiny. It exposes breaks in the chain, constrains authority, hardens verification, and leaves receipts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-amber-300 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5">
                Enter the Graph
              </button>
              <button className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Read the Doctrine
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["System failure", "Scaffold, memory, retrieval, verifier, governance."],
                ["Defendable build", "Bounded agents with real mechanics and finality."],
                ["Traceable outcomes", "Receipts for what ran, what it saw, and why."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-neutral-400">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/80 p-4 shadow-2xl shadow-black/30">
            <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-neutral-400">
              <span>swarm-core / graph</span>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-emerald-300">integrity map</span>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-[560px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
                  <path d="M130 140 C 260 160, 260 250, 360 255 S 560 120, 620 165 S 750 240, 785 285" stroke="rgba(251,191,36,0.55)" strokeWidth="3" fill="none" strokeDasharray="8 8" />
                  <path d="M355 255 C 420 360, 460 410, 505 470" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="none" />
                  <path d="M505 470 C 620 470, 690 520, 790 505" stroke="rgba(251,191,36,0.35)" strokeWidth="2.5" fill="none" />
                  <path d="M625 165 C 690 210, 740 235, 790 285" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" />
                  <path d="M140 140 C 220 240, 310 420, 500 470" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
                </svg>

                {breakpoints.map((node, idx) => {
                  const active = selectedNode === node.title;
                  return (
                    <button
                      key={node.title}
                      onClick={() => setSelectedNode(node.title)}
                      className="absolute w-[240px] -translate-x-1/2 -translate-y-1/2 text-left"
                      style={{ left: node.x, top: node.y }}
                    >
                      <div
                        className={`rounded-[1.4rem] border p-4 shadow-xl shadow-black/20 backdrop-blur-md transition ${
                          active
                            ? "border-amber-300/40 bg-neutral-900/95 ring-1 ring-amber-300/20"
                            : "border-white/10 bg-neutral-950/80 hover:border-amber-300/30 hover:bg-neutral-900/90"
                        }`}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className="text-sm font-semibold tracking-wide text-white">{node.title}</div>
                          <div
                            className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] ${
                              active
                                ? "border border-amber-300/25 bg-amber-300/10 text-amber-200"
                                : "border border-red-400/20 bg-red-400/10 text-red-300"
                            }`}
                          >
                            break {idx + 1}
                          </div>
                        </div>
                        <p className="text-sm leading-6 text-neutral-300">{node.problem}</p>
                        <div className="mt-3 rounded-2xl border border-amber-300/15 bg-amber-300/10 px-3 py-2 text-xs leading-5 text-amber-100">
                          SwarmCore fix: {node.fix}
                        </div>
                      </div>
                    </button>
                  );
                })}

                <div className="absolute left-[46%] top-[68%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.9)]" />
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950/70 p-5">
                  <div className="text-xs uppercase tracking-[0.28em] text-amber-300">Selected breakpoint</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{activeNode.title}</h3>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 text-[11px] uppercase tracking-[0.24em] text-neutral-500">Failure mode</div>
                    <p className="text-sm leading-7 text-neutral-300">{activeNode.problem}</p>
                  </div>

                  <div className="mt-3 rounded-2xl border border-amber-300/15 bg-amber-300/10 p-4">
                    <div className="mb-2 text-[11px] uppercase tracking-[0.24em] text-amber-200/80">SwarmCore fix</div>
                    <p className="text-sm leading-7 text-amber-100">{activeNode.fix}</p>
                  </div>

                  <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 text-[11px] uppercase tracking-[0.24em] text-neutral-500">Why it breaks trust</div>
                    <p className="text-sm leading-7 text-neutral-300">{activeNode.detail}</p>
                  </div>

                  <div className="mt-4">
                    <div className="mb-3 text-[11px] uppercase tracking-[0.24em] text-neutral-500">Receipts SwarmCore logs</div>
                    <div className="grid gap-2">
                      {activeNode.receipts.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-amber-300/15 bg-amber-300/10 px-3 py-2 text-sm text-amber-100"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950/70 p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-xs uppercase tracking-[0.28em] text-amber-300">Run trace</div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                      execution
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {activeNode.run.map(([step, title, text], idx) => (
                      <div key={step + title} className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
                        {idx < activeNode.run.length - 1 && (
                          <div className="absolute left-[23px] top-[54px] h-10 w-px bg-gradient-to-b from-amber-300/50 to-transparent" />
                        )}
                        <div className="flex gap-3">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-[11px] font-semibold text-amber-200">
                            {step}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">{title}</div>
                            <div className="mt-1 text-sm leading-6 text-neutral-400">{text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-neutral-900/80 p-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Execution summary</div>
                    <div className="mt-2 text-sm leading-7 text-neutral-300">
                      SwarmCore does not only ask whether an answer was produced. It asks whether the path was sealed, attributable, policy-bound, and mechanically valid.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-300">Why SwarmCore exists</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Benchmarks can be passed through contaminated paths.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-300">
              A system can look powerful while being structurally unsound. SwarmCore treats intelligence as an operating environment problem: what the agent can access, how memory mutates, what retrieval was allowed, whether the verifier was spoofable, and whether a human remained the real authority boundary.
            </p>

            <div className="mt-8 space-y-3">
              {evidence.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-neutral-950/60 px-4 py-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-300" />
                  <div className="text-sm leading-6 text-neutral-300">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900/80 p-8 shadow-xl shadow-black/20">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-300">The build standard</div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {principles.map((item, i) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs tracking-[0.25em] text-neutral-500">0{i + 1}</div>
                  <div className="mt-2 text-lg font-medium text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-10">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-300">How it works</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              SwarmCore turns brittle agent chains into reviewable systems.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {rails.map((rail, idx) => (
              <div key={rail.name} className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs tracking-[0.3em] text-neutral-500">0{idx + 1}</span>
                  {idx < rails.length - 1 && <span className="hidden text-neutral-600 md:block">→</span>}
                </div>
                <div className="text-lg font-semibold text-white">{rail.name}</div>
                <div className="mt-3 text-sm leading-6 text-neutral-400">{rail.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-300">System shape</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Junior. Senior. Human. Receipts.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300">
              SwarmCore is built for role-defined systems. Junior agents intake, classify, and package. Senior agents review, interpret, and escalate. Humans retain final authority when risk, ambiguity, or policy thresholds are crossed.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Junior", "Bounded worker for intake, triage, extraction, and routing."],
                ["Senior", "Reviewer for judgment, correction, exception handling, and policy-sensitive decisions."],
                ["Human CEO", "Final authority with visibility into evidence, memory, policy, and action history."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-neutral-950/60 p-5">
                  <div className="text-lg font-semibold text-white">{title}</div>
                  <div className="mt-3 text-sm leading-6 text-neutral-400">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-100">SwarmCore asks</div>
            <div className="mt-4 space-y-4 text-white">
              {[
                "Was the task boundary sealed?",
                "Was memory legitimate, sourced, and revocable?",
                "Was retrieval allowed for this task?",
                "Was the verifier mechanically valid?",
                "Did the agent act within its authority?",
                "Can the entire path survive scrutiny?",
              ].map((q) => (
                <div key={q} className="rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-4 text-sm leading-6">
                  {q}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[2.2rem] border border-white/10 bg-white/5 px-8 py-10 text-center backdrop-blur-sm md:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-300">Closing statement</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              AI does not just need better outputs.
              <span className="block text-amber-300">It needs better construction.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-300 md:text-lg">
              SwarmCore is the audit and mechanics layer for serious AI systems — built to expose breaks, constrain behavior, verify the path, and make outcomes defendable by design.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button className="rounded-2xl bg-amber-300 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/20">
                Launch SwarmCore
              </button>
              <button className="rounded-2xl border border-white/15 bg-neutral-950/60 px-5 py-3 text-sm font-semibold text-white">
                Open the doctrine
              </button>
            </div>
          </div>
        </section>

        <footer className="relative mt-16 border-t border-white/10 pt-8 pb-4">
          <div className="flex flex-col gap-4 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-base font-semibold tracking-wide text-white">Swarm & Bee</div>
              <a
                href="mailto:build@swarmandbee.ai"
                className="transition hover:text-amber-300"
              >
                build@swarmandbee.ai
              </a>
            </div>

            <div className="flex flex-col gap-1 md:items-end">
              <a
                href="https://x.com/swarmandbee"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-amber-300"
              >
                x.com/swarmandbee
              </a>
              <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                SwarmCore by design
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
