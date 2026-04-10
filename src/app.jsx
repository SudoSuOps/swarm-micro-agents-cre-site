import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
export default function SwarmAndBeeSite() {
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

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/30 selection:text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute top-[28rem] -left-24 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-200/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-amber-300/80">Swarm & Bee</div>
            <div className="text-xs text-neutral-400">Commercial Compute Intelligence Refinery</div>
          </div>
          <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
            <a href="#agents" className="hover:text-white">Agents</a>
            <a href="#graph" className="hover:text-white">Intelligence Graph</a>
            <a href="#deployment" className="hover:text-white">Deployment</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-100 transition hover:border-amber-200/50 hover:bg-amber-300/15"
          >
            Book a Demo
          </a>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-neutral-300">
                Sovereign compute · verified intelligence · CRE micro-domains
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                The intelligence layer for commercial real estate micro-domain AI.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
                Swarm & Bee builds defendable CRE agents delivered through sovereign compute,
                production-grade infrastructure, and seamless integration from cloud to edge.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-amber-300 px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-amber-200"
                >
                  Talk to Swarm & Bee
                </a>
                <a
                  href="#agents"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
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
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-medium text-white">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-neutral-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl shadow-black/30">
                <div className="rounded-[1.5rem] border border-amber-200/10 bg-neutral-900/90 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-amber-300/75">Swarm Hive</div>
                      <div className="mt-2 text-2xl font-semibold text-white">Micro-domain agent network</div>
                    </div>
                    <div className="rounded-full border border-amber-300/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-100">
                      Live graph
                    </div>
                  </div>

                  <div className="relative mt-8 grid min-h-[22rem] place-items-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-950">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.16),transparent_42%)]" />
                    <div className="absolute h-64 w-64 rounded-full border border-white/10" />
                    <div className="absolute h-96 w-96 rounded-full border border-white/5" />

                    {[
                      "Capital",
                      "Title",
                      "Leases",
                      "Data Room",
                      "Portfolio",
                      "Broker",
                      "Underwriting",
                    ].map((label, i) => {
                      const positions = [
                        "top-10 left-1/2 -translate-x-1/2",
                        "top-24 left-12",
                        "top-24 right-12",
                        "bottom-28 left-10",
                        "bottom-28 right-10",
                        "bottom-10 left-1/2 -translate-x-1/2",
                        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                      ];
                      return (
                        <div
                          key={label}
                          className={`absolute ${positions[i]} rounded-full border border-amber-300/20 bg-neutral-900/90 px-4 py-2 text-xs text-neutral-200 shadow-lg shadow-black/40`}
                        >
                          {label}
                        </div>
                      );
                    })}

                    <div className="relative rounded-full border border-amber-300/25 bg-amber-300/10 px-6 py-6 text-center backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Query the machine</div>
                      <div className="mt-2 text-lg font-medium text-white">Connected domain skill</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="agents" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.28em] text-amber-300/75">What we build</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Narrow CRE intelligence products, not generic AI wrappers.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                Each Swarm & Bee agent is aligned to a real-world commercial real estate function,
                designed for measurable workflow value, structured outputs, and production use.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {agents.map((agent) => (
                <div key={agent.name} className="rounded-[1.75rem] border border-white/10 bg-neutral-900/70 p-6 transition hover:border-amber-200/20 hover:bg-neutral-900">
                  <div className="text-lg font-medium text-white">{agent.name}</div>
                  <p className="mt-3 text-sm leading-7 text-neutral-400">{agent.desc}</p>
                  <div className="mt-6 inline-flex rounded-full border border-amber-300/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-100">
                    CRE micro-domain
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-neutral-900/70 p-8">
              <div className="text-sm uppercase tracking-[0.28em] text-amber-300/75">Why micro-domain AI wins</div>
              <h3 className="mt-4 text-3xl font-semibold text-white">Sharper boundaries. Better reliability. Higher ROI.</h3>
              <ul className="mt-8 space-y-4 text-neutral-300">
                {[
                  "Tighter task boundaries than broad general-purpose assistants",
                  "Clearer evaluation and higher operational trust in real CRE workflows",
                  "Structured outputs that integrate into title, diligence, debt, and portfolio systems",
                  "Higher business value because each agent maps to a real desk, role, or workflow",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="graph" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-300/10 via-white/[0.03] to-transparent p-8">
              <div className="text-sm uppercase tracking-[0.28em] text-amber-300/75">Intelligence graph</div>
              <h3 className="mt-4 text-3xl font-semibold text-white">A living machine built from real domain skill.</h3>
              <p className="mt-5 text-neutral-300 leading-8">
                Swarm & Bee is not just a collection of models. It is a growing intelligence graph
                built from real business workflows, structured outputs, connected domain knowledge,
                and skill-aligned micro-domain agents.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {graphSkills.map((skill) => (
                  <div key={skill} className="rounded-full border border-white/10 bg-neutral-950/70 px-4 py-2 text-sm text-neutral-200">
                    {skill}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-7 text-neutral-400">
                Every new workflow, document, and agent adds connected skill to the machine. Users
                do not just chat with a model — they query a compounding operational graph for
                retrieval, reasoning, and decision support.
              </p>
            </div>
          </div>
        </section>

        <section id="deployment" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-amber-300/75">Sovereign deployment</div>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                  AI that runs where your data lives.
                </h2>
                <p className="mt-5 text-lg leading-8 text-neutral-300">
                  Deploy through cloud, dedicated infrastructure, private environments, or edge
                  hardware. Swarm & Bee gives clients a seamless path from prototype to production,
                  with sovereignty, control, and compliance built into the delivery model.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {deploymentModes.map((mode) => (
                    <div key={mode} className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5 text-sm text-neutral-200">
                      {mode}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-neutral-900/70 p-8">
                <div className="text-sm uppercase tracking-[0.28em] text-amber-300/75">Defendable intelligence</div>
                <h3 className="mt-4 text-3xl font-semibold text-white">Verified outputs for real operators.</h3>
                <div className="mt-8 space-y-4">
                  {[
                    ["Structured workflow outputs", "Designed for downstream systems, not vague chat transcripts."],
                    ["Auditability", "Built for review, validation, and operational trust."],
                    ["Compliance-aware design", "Privacy, control, and deployment flexibility for serious environments."],
                    ["Production utility", "Intelligence that is bankable, actionable, and useful in live workflows."],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-sm font-medium text-white">{title}</div>
                      <div className="mt-2 text-sm leading-7 text-neutral-400">{body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-neutral-900/70 p-8">
              <div className="text-sm uppercase tracking-[0.28em] text-amber-300/75">Infrastructure</div>
              <h3 className="mt-4 text-3xl font-semibold text-white">Production-grade rails from cloud to edge.</h3>
              <p className="mt-5 text-neutral-300 leading-8">
                Swarm & Bee is backed by serious compute, dedicated inference rails, and hardware
                designed for reliable production delivery. We do not treat infrastructure as an
                afterthought.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "High-performance GPU systems",
                  "Dedicated inference options",
                  "Secure private environments",
                  "Cloud-to-edge deployment pathways",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-neutral-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-neutral-900/70 p-8">
              <div className="text-sm uppercase tracking-[0.28em] text-amber-300/75">Seamless integration</div>
              <h3 className="mt-4 text-3xl font-semibold text-white">Built to fit into existing workflows.</h3>
              <p className="mt-5 text-neutral-300 leading-8">
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
                  <div key={item} className="rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.28em] text-amber-300/75">Use cases</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Micro-domain intelligence for real CRE workflows.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {useCases.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-neutral-900/70 p-6 text-sm text-neutral-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-300/10 via-white/[0.03] to-transparent p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-amber-300/75">Start the conversation</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Build your CRE intelligence layer with Swarm & Bee.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
                Talk with us about micro-domain agents, sovereign deployment, workflow integration,
                and production-grade CRE intelligence systems.
              </p>
            </div>

            <form className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-neutral-950/70 p-6">
              <input className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500" placeholder="Name" />
              <input className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500" placeholder="Company" />
              <input className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500" placeholder="Email" />
              <textarea className="min-h-32 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500" placeholder="Tell us about your workflow, deployment needs, or micro-domain use case." />
              <button className="rounded-full bg-amber-300 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-amber-200">
                Request a Demo
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

