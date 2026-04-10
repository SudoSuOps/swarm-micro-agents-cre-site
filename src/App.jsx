export default function App() {
  const agents = [
    {
      name: "Capital Markets Agent",
      desc: "Normalizes lender quotes, structures debt comparisons, and prepares investment-committee-ready outputs.",
    },
    {
      name: "Title Company Agent",
      desc: "Reviews commitments, exceptions, and closing documents with structured issue flags and risk summaries.",
    },
    {
      name: "Data Room Agent",
      desc: "Turns deal-room document sprawl into organized diligence intelligence, missing-item alerts, and workflow receipts.",
    },
    {
      name: "Lease Abstract Agent",
      desc: "Extracts key lease terms, rent structures, options, and obligations into reliable, structured outputs.",
    },
    {
      name: "Broker Package Agent",
      desc: "Transforms raw property facts and financials into polished investment narratives, summaries, and OM support.",
    },
    {
      name: "Asset Management Agent",
      desc: "Supports portfolio monitoring, watchlists, variance review, and property-level operational intelligence.",
    },
  ];

  const deploymentModes = [
    "Serverless cloud",
    "Dedicated infrastructure",
    "Private deployment",
    "Edge and on-prem appliances",
  ];

  const useCases = [
    "Debt placement workflows",
    "Title and closing review",
    "Diligence and data room analysis",
    "Lease abstraction",
    "Offering memorandum support",
    "Portfolio intelligence",
  ];

  const graphSkills = [
    "Title review",
    "Capital markets analysis",
    "Lease abstraction",
    "Diligence review",
    "Broker packaging",
    "Portfolio monitoring",
  ];

  const comparison = {
    generic: [
      "Broad assistants with loose task boundaries",
      "Hard to evaluate in production workflows",
      "Unstructured outputs that require manual cleanup",
      "Cloud-only assumptions",
      "Weak alignment with real CRE roles and systems",
    ],
    swarm: [
      "Narrow micro-domain agents for real CRE functions",
      "Defendable outputs with tighter task boundaries",
      "Structured intelligence designed for downstream systems",
      "Cloud, private, dedicated, and edge deployment options",
      "Built around actual business workflows, not demos",
    ],
  };

  const refinerySteps = [
    {
      title: "Ingest",
      desc: "Bring in documents, workflows, templates, and operating context including leases, title files, rent rolls, lender quotes, and diligence materials.",
    },
    {
      title: "Map",
      desc: "Align the task to the correct micro-domain skill so each workflow routes into a narrow intelligence layer built for that CRE function.",
    },
    {
      title: "Query",
      desc: "Query the Intelligence Graph for connected domain knowledge, prior workflow patterns, and structured business context.",
    },
    {
      title: "Generate",
      desc: "Produce structured, workflow-native outputs such as memos, flags, comparisons, JSON, summaries, and action-ready intelligence.",
    },
    {
      title: "Deliver",
      desc: "Return the output into the client workflow through APIs, batch pipelines, internal tools, dashboards, or sovereign edge deployment.",
    },
  ];

  const infrastructureCards = [
    "High-performance GPU infrastructure",
    "Sovereign deployment support",
    "Structured workflow delivery",
    "Cloud-to-edge architecture",
  ];

  const productShelf = [
    {
      name: "Capital Markets Agent",
      desc: "Debt quotes, lender comparisons, credit summaries, and investment committee preparation.",
    },
    {
      name: "Title Company Agent",
      desc: "Commitment review, exception tracking, and structured closing intelligence.",
    },
    {
      name: "Data Room Agent",
      desc: "Diligence extraction, missing-item detection, and deal-room workflow support.",
    },
    {
      name: "Lease Abstract Agent",
      desc: "Term extraction, rent logic, options, obligations, and lease structure.",
    },
    {
      name: "Broker Package Agent",
      desc: "Offering memo support, investment highlights, and marketing-ready package intelligence.",
    },
    {
      name: "Asset Management Agent",
      desc: "Portfolio monitoring, watchlists, operating intelligence, and variance review.",
    },
  ];

  const outcomes = [
    "Reduce manual review time",
    "Increase workflow consistency",
    "Improve structured data capture",
    "Shorten turnaround on high-value CRE tasks",
    "Create reusable intelligence across teams and workflows",
  ];

  const enterprisePoints = [
    "Structured outputs for downstream systems",
    "Deployment flexibility across cloud, dedicated, private, and edge",
    "Workflow-native integration",
    "Compliance-aware architecture",
    "Production-oriented delivery model",
  ];

  const metrics = [
    { value: "Micro-domain", label: "narrow CRE agents built for real desk workflows" },
    { value: "Cloud → Edge", label: "deployment flexibility from prototype to sovereign delivery" },
    { value: "Workflow-native", label: "structured outputs designed for downstream systems" },
    { value: "Defendable", label: "verified intelligence built for operational trust" },
  ];

  const graphNodes = [
    { label: "Capital", pos: "top-10 left-1/2 -translate-x-1/2", glow: "bg-slate-300/10" },
    { label: "Title", pos: "top-24 left-12", glow: "bg-blue-300/10" },
    { label: "Leases", pos: "top-24 right-12", glow: "bg-indigo-300/10" },
    { label: "Data Room", pos: "bottom-28 left-10", glow: "bg-slate-200/10" },
    { label: "Portfolio", pos: "bottom-28 right-10", glow: "bg-blue-200/10" },
    { label: "Broker", pos: "bottom-10 left-1/2 -translate-x-1/2", glow: "bg-slate-100/8" },
    { label: "Underwriting", pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", glow: "bg-white/8" },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-slate-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" />
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/6 blur-3xl" />
        <div className="absolute top-[28rem] -left-24 h-80 w-80 rounded-full bg-indigo-500/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-slate-300/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#030712]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.32em] text-slate-200/85">Swarm & Bee</div>
            <div className="text-xs text-slate-500">Commercial Compute Intelligence Refinery</div>
          </div>
          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#agents" className="transition hover:text-white">Agents</a>
            <a href="#graph" className="transition hover:text-white">Intelligence Graph</a>
            <a href="#deployment" className="transition hover:text-white">Deployment</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-slate-200/12 bg-slate-100/8 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-100/20 hover:bg-slate-100/12"
          >
            Book a Demo
          </a>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
                Sovereign compute · verified intelligence · CRE micro-domains
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
                The intelligence layer for commercial real estate micro-domain AI.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Swarm & Bee builds defendable CRE agents delivered through sovereign compute,
                production-grade infrastructure, and seamless integration from cloud to edge.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full border border-slate-200/12 bg-slate-100/92 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-white shadow-[0_0_20px_rgba(148,163,184,0.06)]"
                >
                  Talk to Swarm & Bee
                </a>
                <a
                  href="#agents"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.04]"
                >
                  Explore Micro-Domain Agents
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  ["Cloud to edge", "Deploy through serverless, dedicated, private, or sovereign rails."],
                  ["Defendable outputs", "Structured, auditable intelligence designed for real operating teams."],
                  ["Workflow-native", "Built to integrate with existing CRE processes, APIs, and document flows."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                    <div className="text-sm font-medium text-white">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 shadow-2xl shadow-black/30">
                <div className="rounded-[1.5rem] border border-white/8 bg-[#06101f]/90 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-300/75">Swarm Hive</div>
                      <div className="mt-2 text-2xl font-semibold text-white">Micro-domain agent network</div>
                    </div>
                    <div className="rounded-full border border-slate-200/12 bg-slate-100/8 px-3 py-1 text-xs text-slate-100">
                      Live graph
                    </div>
                  </div>

                  <div className="relative mt-8 grid min-h-[25rem] place-items-center overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#020817]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_42%)]" />
                    <div className="absolute h-64 w-64 rounded-full border border-slate-200/8" />
                    <div className="absolute h-96 w-96 rounded-full border border-white/5" />
                    <div className="absolute h-[30rem] w-[30rem] rounded-full border border-slate-300/5" />

                    <div className="absolute left-1/2 top-1/2 h-px w-72 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-300/20 to-transparent" />
                    <div className="absolute left-1/2 top-1/2 h-px w-80 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-transparent via-blue-200/16 to-transparent" />
                    <div className="absolute left-1/2 top-1/2 h-px w-80 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gradient-to-r from-transparent via-indigo-200/14 to-transparent" />
                    <div className="absolute left-1/2 top-1/2 h-px w-64 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-gradient-to-r from-transparent via-slate-300/14 to-transparent" />

                    <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300/6 blur-2xl animate-pulse" />

                    {graphNodes.map((node, i) => (
                      <div
                        key={node.label}
                        className={`absolute ${node.pos} rounded-full border border-slate-200/12 bg-slate-900/90 px-4 py-2 text-xs text-slate-200 shadow-lg shadow-black/40`}
                      >
                        <div className={`absolute inset-0 rounded-full blur-md ${node.glow} ${i % 2 === 0 ? "animate-pulse" : ""}`} />
                        <div className="relative">{node.label}</div>
                      </div>
                    ))}

                    <div className="relative rounded-full border border-slate-200/14 bg-slate-100/8 px-6 py-6 text-center backdrop-blur-sm shadow-[0_0_40px_rgba(148,163,184,0.08)]">
                      <div className="text-xs uppercase tracking-[0.25em] text-slate-300/75">Query the machine</div>
                      <div className="mt-2 text-lg font-medium text-white">Connected domain skill</div>
                    </div>

                    <div className="absolute bottom-4 right-4 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-500">
                      Compounding workflow intelligence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 lg:grid-cols-4 lg:px-8">
            {metrics.map((item) => (
              <div key={item.value} className="rounded-3xl border border-white/8 bg-slate-900/60 p-5">
                <div className="text-xl font-semibold text-white">{item.value}</div>
                <div className="mt-2 text-sm leading-6 text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="agents" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">What we build</div>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Narrow CRE intelligence products, not generic AI wrappers.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Each Swarm & Bee agent is aligned to a real-world commercial real estate function,
              designed for measurable workflow value, structured outputs, and production use.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="rounded-[1.75rem] border border-white/8 bg-slate-900/70 p-6 transition hover:border-slate-200/14 hover:bg-slate-900 hover:-translate-y-0.5"
              >
                <div className="text-lg font-medium text-white">{agent.name}</div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{agent.desc}</p>
                <div className="mt-6 inline-flex rounded-full border border-slate-200/12 bg-slate-100/8 px-3 py-1 text-xs text-slate-200">
                  CRE micro-domain
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="graph" className="border-y border-white/8 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/8 bg-slate-900/70 p-8">
                <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Why micro-domain AI wins</div>
                <h3 className="mt-4 text-3xl font-semibold text-white">Sharper boundaries. Better reliability. Higher ROI.</h3>
                <ul className="mt-8 space-y-4 text-slate-300">
                  {[
                    "Tighter task boundaries than broad general-purpose assistants",
                    "Clearer evaluation and higher operational trust in real CRE workflows",
                    "Structured outputs that integrate into title, diligence, debt, and portfolio systems",
                    "Higher business value because each agent maps to a real desk, role, or workflow",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7">
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/8 bg-gradient-to-br from-slate-200/8 via-white/[0.03] to-transparent p-8">
                <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Intelligence graph</div>
                <h3 className="mt-4 text-3xl font-semibold text-white">A living machine built from real domain skill.</h3>
                <p className="mt-5 text-slate-300 leading-8">
                  Swarm & Bee is not just a collection of models. It is a growing intelligence graph
                  built from real business workflows, structured outputs, connected domain knowledge,
                  and skill-aligned micro-domain agents.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {graphSkills.map((skill) => (
                    <div key={skill} className="rounded-full border border-white/8 bg-slate-950/70 px-4 py-2 text-sm text-slate-200">
                      {skill}
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-7 text-slate-400">
                  Every new workflow, document, and agent adds connected skill to the machine. Users
                  do not just chat with a model — they query a compounding operational graph for
                  retrieval, reasoning, and decision support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Why Swarm & Bee wins</div>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Narrow domain intelligence beats broad generic AI in high-value CRE workflows.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Generic AI tools are broad, impressive, and often misaligned with real commercial
              workflows. Swarm & Bee is built differently: narrow, defendable, workflow-native
              intelligence systems designed for measurable business value.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/8 bg-slate-900/70 p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-slate-500">Generic AI vendors</div>
              <div className="mt-4 space-y-4">
                {comparison.generic.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200/10 bg-gradient-to-br from-slate-200/8 via-white/[0.03] to-transparent p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-slate-300/75">Swarm & Bee</div>
              <div className="mt-4 space-y-4">
                {comparison.swarm.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-slate-200">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-slate-200/10 bg-slate-100/6 p-5 text-sm leading-7 text-slate-100">
                Swarm & Bee is not a generic AI wrapper. It is the intelligence layer for narrow,
                bankable CRE workflows.
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">How the refinery works</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                From documents and workflows to connected domain intelligence.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Swarm & Bee turns domain-specific workflows into a compounding intelligence system
                that grows stronger as more documents, outputs, and operating patterns move through
                the machine.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-5">
              {refinerySteps.map((step, index) => (
                <div key={step.title} className="rounded-[1.75rem] border border-white/8 bg-slate-900/70 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/10 bg-slate-100/8 text-sm font-medium text-slate-100">
                    {index + 1}
                  </div>
                  <div className="mt-5 text-lg font-medium text-white">{step.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="deployment" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Sovereign deployment</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                AI that runs where your data lives.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Deploy through cloud, dedicated infrastructure, private environments, or edge
                hardware. Swarm & Bee gives clients a seamless path from prototype to production,
                with sovereignty, control, and compliance built into the delivery model.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {deploymentModes.map((mode) => (
                  <div key={mode} className="rounded-2xl border border-white/8 bg-slate-900/70 p-5 text-sm text-slate-200">
                    {mode}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/8 bg-slate-900/70 p-8">
              <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Defendable intelligence</div>
              <h3 className="mt-4 text-3xl font-semibold text-white">Verified outputs for real operators.</h3>
              <div className="mt-8 space-y-4">
                {[
                  ["Structured workflow outputs", "Designed for downstream systems, not vague chat transcripts."],
                  ["Auditability", "Built for review, validation, and operational trust."],
                  ["Compliance-aware design", "Privacy, control, and deployment flexibility for serious environments."],
                  ["Production utility", "Intelligence that is bankable, actionable, and useful in live workflows."],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                    <div className="text-sm font-medium text-white">{title}</div>
                    <div className="mt-2 text-sm leading-7 text-slate-400">{body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/8 bg-slate-900/70 p-8">
                <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Infrastructure</div>
                <h3 className="mt-4 text-3xl font-semibold text-white">Production-grade rails from cloud to edge.</h3>
                <p className="mt-5 text-slate-300 leading-8">
                  Swarm & Bee is backed by serious compute, dedicated inference rails, and hardware
                  designed for reliable production delivery. We do not treat infrastructure as an
                  afterthought.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {infrastructureCards.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/8 bg-slate-900/70 p-8">
                <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Seamless integration</div>
                <h3 className="mt-4 text-3xl font-semibold text-white">Built to fit into existing workflows.</h3>
                <p className="mt-5 text-slate-300 leading-8">
                  Swarm & Bee integrates through APIs, batch pipelines, internal tools, structured
                  outputs, and edge appliances. Clients do not need to rebuild their operations to use
                  narrow, high-value intelligence.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "APIs",
                    "Batch processing",
                    "Document pipelines",
                    "Internal tools",
                    "Structured outputs",
                    "Edge appliances",
                  ].map((item) => (
                    <div key={item} className="rounded-full border border-slate-200/10 bg-slate-100/8 px-4 py-2 text-sm text-slate-100">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Product shelf</div>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              A growing shelf of CRE intelligence agents.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Swarm & Bee is building a portfolio of micro-domain agents for commercial real
              estate. Each product is narrow by design, aligned to a real function, and built for
              recurring workflow value.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productShelf.map((item) => (
              <div key={item.name} className="rounded-[1.75rem] border border-white/8 bg-slate-900/70 p-6">
                <div className="text-lg font-medium text-white">{item.name}</div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Use cases</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Micro-domain intelligence for real CRE workflows.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {useCases.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/8 bg-slate-900/70 p-6 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/8 bg-slate-900/70 p-8">
              <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Commercial outcomes</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Designed for measurable business leverage.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Swarm & Bee agents are built to save analyst time, reduce document friction,
                improve consistency, and accelerate high-value CRE workflows. The goal is not
                novelty. The goal is operational leverage.
              </p>
              <div className="mt-8 space-y-4">
                {outcomes.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/8 bg-gradient-to-br from-slate-200/8 via-white/[0.03] to-transparent p-8">
              <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Built for enterprise environments</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Deployment flexibility, privacy, and workflow-native control.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Swarm & Bee is built for organizations that care about control, compliance,
                deployment flexibility, and operational reliability. AI should integrate into the
                business, not sit beside it as a novelty tool.
              </p>
              <div className="mt-8 space-y-4">
                {enterprisePoints.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-slate-950/60 p-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-white/8 bg-gradient-to-br from-slate-200/8 via-white/[0.03] to-transparent p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-slate-300/75">Start the conversation</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Build the CRE intelligence layer your workflow actually needs.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Talk with Swarm & Bee about micro-domain agents, sovereign deployment, Intelligence
                Graph workflows, and production-grade CRE systems designed for recurring business
                value.
              </p>
            </div>

            <form className="grid gap-4 rounded-[1.5rem] border border-white/8 bg-slate-950/70 p-6">
              <input className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" placeholder="Name" />
              <input className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" placeholder="Company" />
              <input className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" placeholder="Email" />
              <textarea className="min-h-32 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" placeholder="Tell us about your workflow, deployment needs, or micro-domain use case." />
              <button className="rounded-full border border-slate-200/12 bg-slate-100/92 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-white shadow-[0_0_20px_rgba(148,163,184,0.06)]">
                Request a Demo
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-[#030712]/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-slate-300/75">Swarm & Bee</div>
            <div className="mt-1">Commercial Compute Intelligence Refinery</div>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <a href="mailto:build@swarmandbee.ai" className="transition hover:text-white">
              build@swarmandbee.ai
            </a>
            <a
              href="https://x.com/swarmandbee"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              @swarmandbee
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
