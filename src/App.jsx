import React from "react";

export default function App() {
  const [selectedNode, setSelectedNode] = React.useState("Scaffold");

  const nodes = [
    {
      id: "scaffold",
      title: "Scaffold",
      short: "Leaked answers, porous harnesses, hidden shortcuts.",
      fix: "Seal task boundaries and enforce explicit access control.",
      why: "The system is contaminated before reasoning even begins. Hidden files, verifier logic, or injected answer paths turn the run into theater.",
      receipts: [
        "task boundary manifest",
        "accessible path log",
        "prompt frame hash",
        "tool permission record",
      ],
      steps: [
        ["01", "Task scope loaded", "Only declared files, tools, and permissions are exposed."],
        ["02", "Boundary check active", "Hidden paths and undeclared answer sources are blocked."],
        ["03", "Run sealed", "The environment is hashed before execution begins."],
      ],
      x: 16,
      y: 18,
    },
    {
      id: "memory",
      title: "Memory",
      short: "Weak facts become permanent truth.",
      fix: "Score, source, and gate all memory writes.",
      why: "If provisional observations silently become truth, every future decision inherits poisoned state. Memory has to be attributable, reviewable, and revocable.",
      receipts: [
        "memory write log",
        "source attribution",
        "confidence score",
        "approval state",
      ],
      steps: [
        ["01", "Working memory loaded", "Only scoped session memory is brought into context."],
        ["02", "Fact write proposed", "New facts remain provisional until promotion rules are satisfied."],
        ["03", "Approval enforced", "Long-term truth requires policy or human sign-off."],
      ],
      x: 34,
      y: 38,
    },
    {
      id: "retrieval",
      title: "Retrieval",
      short: "Untrusted context contaminates decisions.",
      fix: "Scope retrieval to approved sources and visible paths.",
      why: "A model should not be able to pull arbitrary context and pass it off as legitimate evidence. Retrieval must be bounded, attributable, and reviewable.",
      receipts: [
        "retrieval scope",
        "source path",
        "document lineage",
        "access policy match",
      ],
      steps: [
        ["01", "Query scoped", "Retrieval is limited to approved stores and task policy."],
        ["02", "Source selected", "Every retrieved item is attributable and logged."],
        ["03", "Context assembled", "Only approved context enters the reasoning path."],
      ],
      x: 56,
      y: 20,
    },
    {
      id: "verifier",
      title: "Verifier",
      short: "Spoofable pass signals and shallow checks.",
      fix: "Validate intended task completion, not cosmetic outputs.",
      why: "A verifier that only looks for superficial success markers can be gamed by mocks, injections, and fake artifacts. The path has to be checked, not just the result string.",
      receipts: [
        "verifier version",
        "validation trace",
        "task completion proof",
        "spoof resistance checks",
      ],
      steps: [
        ["01", "Verifier pinned", "Validation policy and version are fixed before the run."],
        ["02", "Execution reviewed", "Outputs are checked against intended task completion."],
        ["03", "Spoof scan passed", "PASS strings, mocks, and shortcut artifacts are rejected."],
      ],
      x: 76,
      y: 42,
    },
    {
      id: "governance",
      title: "Governance",
      short: "Agents drift beyond their authority.",
      fix: "Bind roles, escalation, and human finality.",
      why: "The junior should not act like the senior. The senior should not silently become final authority. Strong systems define role boundaries and escalation thresholds in code and policy.",
      receipts: [
        "role policy",
        "escalation reason",
        "authority class",
        "human review status",
      ],
      steps: [
        ["01", "Role loaded", "Junior, senior, and human boundaries are explicit."],
        ["02", "Threshold crossed", "Risk or ambiguity triggers escalation."],
        ["03", "Finality assigned", "Human authority remains visible where it matters."],
      ],
      x: 46,
      y: 72,
    },
    {
      id: "audit",
      title: "Audit",
      short: "No receipts, no trust, no finality.",
      fix: "Record full lineage and reviewable decision traces.",
      why: "Without receipts for what ran, what it accessed, what policy applied, and who approved the outcome, there is no defendable system.",
      receipts: [
        "model + version",
        "memory loaded",
        "tools used",
        "final decision lineage",
      ],
      steps: [
        ["01", "Receipt started", "Each run gets an identity and lineage root."],
        ["02", "Trace appended", "Model, memory, retrieval, verifier, and action events are recorded."],
        ["03", "Outcome sealed", "The final path is reviewable and survives scrutiny."],
      ],
      x: 84,
      y: 74,
    },
  ];

  const active = nodes.find((node) => node.title === selectedNode) || nodes[0];

  const buildStandard = [
    "Sealed task boundaries",
    "Role-defined agents",
    "Memory discipline",
    "Retrieval integrity",
    "Verifier hardening",
    "Human finality",
    "Full receipts",
  ];

  const stack = [
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

  return (
    <>
      <style>{`
        :root {
          --bg: #07090d;
          --panel: rgba(14, 17, 22, 0.82);
          --panel-strong: rgba(11, 13, 18, 0.94);
          --panel-soft: rgba(255,255,255,0.04);
          --line: rgba(255,255,255,0.10);
          --line-soft: rgba(255,255,255,0.06);
          --text: #f8fafc;
          --muted: #9ba3af;
          --muted-2: #7b8491;
          --accent: #f4c24f;
          --accent-soft: rgba(244,194,79,0.12);
          --green: #7ee7b1;
          --green-soft: rgba(126,231,177,0.12);
          --red: #fca5a5;
          --red-soft: rgba(252,165,165,0.12);
          --shadow: 0 24px 80px rgba(0,0,0,0.42);
          --radius-xl: 28px;
          --radius-lg: 22px;
          --radius-md: 18px;
        }

        * { box-sizing: border-box; }
        html, body, #root { min-height: 100%; margin: 0; }
        body {
          background:
            radial-gradient(circle at top, rgba(244,194,79,0.12), transparent 25%),
            radial-gradient(circle at 82% 18%, rgba(251,191,36,0.10), transparent 16%),
            linear-gradient(180deg, rgba(255,255,255,0.03), transparent 18%),
            var(--bg);
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .app {
          max-width: 1460px;
          margin: 0 auto;
          padding: 28px 20px 88px;
          position: relative;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 18px;
          align-items: stretch;
          margin-bottom: 18px;
        }

        .hero-copy,
        .hero-side,
        .workspace,
        .section,
        .footer {
          border: 1px solid var(--line);
          background: var(--panel);
          backdrop-filter: blur(18px);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow);
        }

        .hero-copy {
          padding: 28px;
        }

        .hero-side {
          padding: 18px;
          display: grid;
          gap: 12px;
          align-content: start;
          min-height: 100%;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          border-radius: 999px;
          border: 1px solid rgba(244,194,79,0.24);
          background: rgba(244,194,79,0.10);
          color: #f6db8f;
          padding: 10px 14px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--accent);
          display: inline-block;
        }

        h1 {
          margin: 16px 0 0;
          max-width: 920px;
          font-size: clamp(3rem, 6vw, 6.25rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
        }

        h1 .accent {
          display: block;
          color: var(--accent);
        }

        .lead {
          margin: 22px 0 0;
          max-width: 780px;
          color: var(--muted);
          font-size: 1.1rem;
          line-height: 1.95;
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .btn {
          appearance: none;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.04);
          color: white;
          border-radius: 18px;
          padding: 14px 18px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform .18s ease, border-color .18s ease, background .18s ease;
        }

        .btn:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.08);
        }

        .btn.primary {
          color: #121212;
          background: var(--accent);
          border-color: rgba(244,194,79,0.32);
          box-shadow: 0 16px 32px rgba(244,194,79,0.18);
        }

        .mini-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 28px;
        }

        .mini-card,
        .side-card,
        .inspector-block,
        .trace-step,
        .standard-card,
        .stack-card,
        .system-card,
        .ask-card {
          border: 1px solid var(--line-soft);
          background: var(--panel-soft);
          border-radius: var(--radius-lg);
        }

        .mini-card {
          padding: 16px;
        }

        .mini-card h3,
        .side-card h3,
        .inspector-title,
        .system-card h3,
        .stack-card h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: 700;
        }

        .mini-card p,
        .side-card p,
        .stack-card p,
        .system-card p,
        .ask-card,
        .inspector-copy,
        .receipt-item,
        .trace-text {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
          font-size: 0.94rem;
        }

        .side-card {
          padding: 16px;
        }

        .side-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }

        .status {
          border-radius: 999px;
          border: 1px solid rgba(126,231,177,0.2);
          background: var(--green-soft);
          color: var(--green);
          padding: 7px 10px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .side-metric {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .metric {
          border: 1px solid var(--line-soft);
          background: rgba(255,255,255,0.03);
          border-radius: 16px;
          padding: 14px;
        }

        .metric-label {
          color: var(--muted-2);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .metric-value {
          margin-top: 8px;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
        }

        .workspace {
          padding: 16px;
          display: grid;
          gap: 14px;
          margin-bottom: 22px;
        }

        .workspace-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 18px;
          border: 1px solid var(--line-soft);
          background: rgba(255,255,255,0.03);
          color: var(--muted-2);
          font-size: 12px;
        }

        .workspace-grid {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr) 400px;
          gap: 14px;
          min-height: 720px;
        }

        .rail,
        .graph-stage,
        .inspector {
          border-radius: 24px;
          border: 1px solid var(--line-soft);
          background: var(--panel-strong);
          overflow: hidden;
        }

        .rail,
        .inspector {
          padding: 16px;
        }

        .rail-title,
        .inspector-eyebrow,
        .section-eyebrow {
          color: var(--accent);
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .rail-list {
          display: grid;
          gap: 10px;
          margin-top: 14px;
        }

        .rail-item {
          text-align: left;
          appearance: none;
          width: 100%;
          padding: 14px;
          border-radius: 18px;
          border: 1px solid var(--line-soft);
          background: rgba(255,255,255,0.03);
          color: white;
          cursor: pointer;
          transition: transform .18s ease, border-color .18s ease, background .18s ease;
        }

        .rail-item:hover {
          transform: translateY(-1px);
          border-color: rgba(244,194,79,0.22);
          background: rgba(255,255,255,0.05);
        }

        .rail-item.active {
          border-color: rgba(244,194,79,0.35);
          background: rgba(244,194,79,0.10);
        }

        .rail-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .rail-item-title {
          font-size: 0.97rem;
          font-weight: 700;
        }

        .break-badge {
          border-radius: 999px;
          padding: 5px 8px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          border: 1px solid rgba(252,165,165,0.18);
          background: var(--red-soft);
          color: var(--red);
          white-space: nowrap;
        }

        .rail-item.active .break-badge {
          border-color: rgba(244,194,79,0.22);
          background: rgba(244,194,79,0.14);
          color: #f6db8f;
        }

        .rail-item p {
          margin-top: 10px;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.9rem;
        }

        .graph-stage {
          position: relative;
          min-height: 720px;
          background:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(180deg, rgba(12,15,21,0.98), rgba(8,10,15,0.96));
          background-size: 34px 34px, 34px 34px, cover;
        }

        .graph-stage svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .node {
          position: absolute;
          width: 230px;
          transform: translate(-50%, -50%);
        }

        .node button {
          width: 100%;
          appearance: none;
          border: 0;
          background: transparent;
          padding: 0;
          text-align: left;
          cursor: pointer;
        }

        .node-card {
          border-radius: 22px;
          border: 1px solid var(--line-soft);
          background: rgba(12,14,19,0.85);
          padding: 16px;
          box-shadow: 0 16px 36px rgba(0,0,0,0.22);
          backdrop-filter: blur(12px);
          transition: transform .18s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease;
        }

        .node-card:hover {
          transform: translateY(-2px);
          border-color: rgba(244,194,79,0.24);
          background: rgba(16,19,25,0.94);
        }

        .node-card.active {
          border-color: rgba(244,194,79,0.38);
          background: rgba(18,22,28,0.96);
          box-shadow: 0 18px 40px rgba(244,194,79,0.08);
        }

        .node-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }

        .node-title {
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .node-card p {
          margin: 0;
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .node-fix {
          margin-top: 12px;
          padding: 10px 12px;
          border-radius: 16px;
          border: 1px solid rgba(244,194,79,0.16);
          background: var(--accent-soft);
          color: #f7e7b9;
          font-size: 0.82rem;
          line-height: 1.55;
        }

        .core-pulse {
          position: absolute;
          left: 49%;
          top: 48%;
          width: 14px;
          height: 14px;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 28px rgba(244,194,79,0.9);
        }

        .inspector {
          display: grid;
          gap: 12px;
          align-content: start;
        }

        .inspector-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0;
        }

        .inspector-block {
          padding: 14px;
        }

        .inspector-label {
          color: var(--muted-2);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .inspector-copy {
          line-height: 1.8;
        }

        .receipt-list {
          display: grid;
          gap: 8px;
          margin-top: 10px;
        }

        .receipt-item {
          padding: 11px 12px;
          border-radius: 14px;
          border: 1px solid rgba(244,194,79,0.14);
          background: var(--accent-soft);
          color: #f6e3a4;
        }

        .trace-list {
          display: grid;
          gap: 10px;
        }

        .trace-step {
          padding: 14px;
        }

        .trace-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .trace-num {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid rgba(244,194,79,0.18);
          background: var(--accent-soft);
          color: #f6db8f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          flex: 0 0 auto;
        }

        .trace-title {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .trace-text {
          margin-top: 4px;
        }

        .sections {
          display: grid;
          gap: 20px;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .section {
          padding: 26px;
        }

        .section h2 {
          margin: 12px 0 0;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .section-copy {
          margin-top: 18px;
          color: var(--muted);
          line-height: 1.9;
          font-size: 1rem;
        }

        .evidence-list,
        .standard-grid,
        .stack-grid,
        .system-grid,
        .ask-grid {
          display: grid;
          gap: 10px;
          margin-top: 20px;
        }

        .evidence-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px 16px;
          border-radius: 18px;
          border: 1px solid var(--line-soft);
          background: rgba(255,255,255,0.03);
          color: var(--muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .evidence-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--accent);
          margin-top: 6px;
          flex: 0 0 auto;
        }

        .standard-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .standard-card,
        .system-card,
        .stack-card,
        .ask-card {
          padding: 18px;
        }

        .std-num,
        .stack-num {
          font-size: 11px;
          color: var(--muted-2);
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .std-title {
          margin-top: 8px;
          color: white;
          font-size: 1rem;
          font-weight: 700;
        }

        .stack-grid {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .stack-card p,
        .system-card p {
          margin-top: 8px;
        }

        .system-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ask-grid {
          margin-top: 16px;
        }

        .ask-card {
          color: white;
          line-height: 1.75;
        }

        .closing {
          text-align: center;
        }

        .closing h2 {
          max-width: 900px;
          margin: 12px auto 0;
          font-size: clamp(2.1rem, 4.8vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.05em;
        }

        .closing h2 .accent {
          color: var(--accent);
          display: block;
        }

        .closing .section-copy {
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer {
          margin-top: 20px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-brand {
          display: grid;
          gap: 4px;
        }

        .footer-brand strong {
          font-size: 1rem;
        }

        .footer a,
        .footer span {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.94rem;
        }

        .footer a:hover {
          color: var(--accent);
        }

        @media (max-width: 1260px) {
          .hero,
          .two-col,
          .workspace-grid {
            grid-template-columns: 1fr;
          }

          .workspace-grid {
            min-height: auto;
          }

          .graph-stage {
            min-height: 720px;
          }

          .stack-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 860px) {
          .mini-cards,
          .standard-grid,
          .system-grid,
          .stack-grid {
            grid-template-columns: 1fr;
          }

          .graph-stage {
            min-height: auto;
            padding: 12px;
          }

          .graph-stage svg,
          .core-pulse {
            display: none;
          }

          .node {
            position: relative;
            inset: auto !important;
            transform: none;
            width: 100%;
            left: auto !important;
            top: auto !important;
            margin-bottom: 10px;
          }

          .footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="app">
        <section className="hero">
          <div className="hero-copy">
            <div className="pill">
              SwarmCore
              <span className="dot" />
              Audit Layer for Serious AI
            </div>

            <h1>
              AI is breaking in the
              <span className="accent">layers around the model.</span>
            </h1>

            <p className="lead">
              SwarmCore is the mechanics and audit layer for building agent systems that can survive scrutiny. It exposes breaks in the chain, constrains authority, hardens verification, and leaves receipts.
            </p>

            <div className="cta-row">
              <button className="btn primary">Enter the Graph</button>
              <button className="btn">Read the Doctrine</button>
            </div>

            <div className="mini-cards">
              {[
                ["System failure", "Scaffold, memory, retrieval, verifier, governance."],
                ["Defendable build", "Bounded agents with real mechanics and finality."],
                ["Traceable outcomes", "Receipts for what ran, what it saw, and why."],
              ].map(([title, text]) => (
                <div key={title} className="mini-card">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-side">
            <div className="side-card">
              <div className="side-top">
                <h3>swarm-core / graph</h3>
                <span className="status">integrity map</span>
              </div>
              <p>
                A real AI system fails in the shell around the model. SwarmCore makes those breaks visible, attributable, and fixable.
              </p>
            </div>

            <div className="side-metric">
              {[
                ["Primary focus", "mechanics"],
                ["Truth mode", "receipts"],
                ["Control layer", "human finality"],
                ["Build posture", "defendable"],
              ].map(([label, value]) => (
                <div className="metric" key={label}>
                  <div className="metric-label">{label}</div>
                  <div className="metric-value">{value}</div>
                </div>
              ))}
            </div>

            <div className="side-card">
              <div className="side-top">
                <h3>Active thesis</h3>
              </div>
              <p>
                AI does not only need stronger models. It needs sealed boundaries, role control, hardened verification, and reviewable lineage.
              </p>
            </div>
          </aside>
        </section>

        <section className="workspace">
          <div className="workspace-topbar">
            <span>swarm-core / graph</span>
            <span>integrity map · execution surface · receipt inspector</span>
          </div>

          <div className="workspace-grid">
            <aside className="rail">
              <div className="rail-title">Breakpoints</div>
              <div className="rail-list">
                {nodes.map((node, idx) => {
                  const activeNode = node.title === selectedNode;
                  return (
                    <button
                      key={node.id}
                      className={`rail-item ${activeNode ? "active" : ""}`}
                      onClick={() => setSelectedNode(node.title)}
                    >
                      <div className="rail-item-top">
                        <div className="rail-item-title">{node.title}</div>
                        <div className="break-badge">break {idx + 1}</div>
                      </div>
                      <p>{node.short}</p>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="graph-stage">
              <svg viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
                <path d="M130 140 C 250 155, 282 250, 360 270 S 560 120, 625 165 S 735 245, 792 290" stroke="rgba(244,194,79,0.56)" strokeWidth="3" fill="none" strokeDasharray="8 10" />
                <path d="M350 270 C 430 360, 465 430, 510 505" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="none" />
                <path d="M510 505 C 620 510, 700 535, 836 518" stroke="rgba(244,194,79,0.34)" strokeWidth="2.5" fill="none" />
                <path d="M620 168 C 690 210, 752 250, 810 300" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" />
                <path d="M140 140 C 220 260, 320 442, 510 505" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
              </svg>

              {nodes.map((node, idx) => {
                const activeNode = node.title === selectedNode;
                return (
                  <div
                    key={node.id}
                    className="node"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <button onClick={() => setSelectedNode(node.title)}>
                      <div className={`node-card ${activeNode ? "active" : ""}`}>
                        <div className="node-top">
                          <div className="node-title">{node.title}</div>
                          <div className="break-badge">break {idx + 1}</div>
                        </div>
                        <p>{node.short}</p>
                        <div className="node-fix">SwarmCore fix: {node.fix}</div>
                      </div>
                    </button>
                  </div>
                );
              })}

              <div className="core-pulse" />
            </div>

            <aside className="inspector">
              <div className="inspector-eyebrow">Selected breakpoint</div>
              <h3 className="inspector-title">{active.title}</h3>

              <div className="inspector-block">
                <div className="inspector-label">Failure mode</div>
                <p className="inspector-copy">{active.short}</p>
              </div>

              <div className="inspector-block">
                <div className="inspector-label">SwarmCore fix</div>
                <p className="inspector-copy">{active.fix}</p>
              </div>

              <div className="inspector-block">
                <div className="inspector-label">Why it breaks trust</div>
                <p className="inspector-copy">{active.why}</p>
              </div>

              <div className="inspector-block">
                <div className="inspector-label">Receipts SwarmCore logs</div>
                <div className="receipt-list">
                  {active.receipts.map((item) => (
                    <div key={item} className="receipt-item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="inspector-block">
                <div className="inspector-label">Run trace</div>
                <div className="trace-list">
                  {active.steps.map(([num, title, text]) => (
                    <div key={num + title} className="trace-step">
                      <div className="trace-row">
                        <div className="trace-num">{num}</div>
                        <div>
                          <div className="trace-title">{title}</div>
                          <div className="trace-text">{text}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <div className="sections">
          <div className="two-col">
            <section className="section">
              <div className="section-eyebrow">Why SwarmCore exists</div>
              <h2>Benchmarks can be passed through contaminated paths.</h2>
              <p className="section-copy">
                A system can look powerful while being structurally unsound. SwarmCore treats intelligence as an operating environment problem: what the agent can access, how memory mutates, what retrieval was allowed, whether the verifier was spoofable, and whether a human remained the real authority boundary.
              </p>

              <div className="evidence-list">
                {[
                  "Answer leakage through scaffolds",
                  "Memory poisoning and unverified persistence",
                  "Retrieval contamination from untrusted context",
                  "Verifier spoofing through shallow pass signals",
                  "Role drift in autonomous systems",
                  "Benchmark wins without mechanical legitimacy",
                ].map((item) => (
                  <div key={item} className="evidence-item">
                    <div className="evidence-dot" />
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="section">
              <div className="section-eyebrow">The build standard</div>
              <h2>Bound the system. Verify the path. Leave receipts.</h2>
              <div className="standard-grid">
                {buildStandard.map((item, i) => (
                  <div key={item} className="standard-card">
                    <div className="std-num">0{i + 1}</div>
                    <div className="std-title">{item}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="section">
            <div className="section-eyebrow">How it works</div>
            <h2>SwarmCore turns brittle agent chains into reviewable systems.</h2>
            <div className="stack-grid">
              {stack.map((item, idx) => (
                <div key={item.name} className="stack-card">
                  <div className="stack-num">0{idx + 1}</div>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="two-col">
            <section className="section">
              <div className="section-eyebrow">System shape</div>
              <h2>Junior. Senior. Human. Receipts.</h2>
              <p className="section-copy">
                SwarmCore is built for role-defined systems. Junior agents intake, classify, and package. Senior agents review, interpret, and escalate. Humans retain final authority when risk, ambiguity, or policy thresholds are crossed.
              </p>

              <div className="system-grid">
                {[
                  ["Junior", "Bounded worker for intake, triage, extraction, and routing."],
                  ["Senior", "Reviewer for judgment, correction, exception handling, and policy-sensitive decisions."],
                  ["Human CEO", "Final authority with visibility into evidence, memory, policy, and action history."],
                ].map(([title, text]) => (
                  <div key={title} className="system-card">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="section">
              <div className="section-eyebrow">SwarmCore asks</div>
              <h2>Did the system earn the answer?</h2>
              <div className="ask-grid">
                {[
                  "Was the task boundary sealed?",
                  "Was memory legitimate, sourced, and revocable?",
                  "Was retrieval allowed for this task?",
                  "Was the verifier mechanically valid?",
                  "Did the agent act within its authority?",
                  "Can the entire path survive scrutiny?",
                ].map((item) => (
                  <div key={item} className="ask-card">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="section closing">
            <div className="section-eyebrow">Closing statement</div>
            <h2>
              AI does not just need better outputs.
              <span className="accent">It needs better construction.</span>
            </h2>
            <p className="section-copy">
              SwarmCore is the audit and mechanics layer for serious AI systems — built to expose breaks, constrain behavior, verify the path, and make outcomes defendable by design.
            </p>
            <div className="cta-row" style={{ justifyContent: "center", marginTop: 28 }}>
              <button className="btn primary">Launch SwarmCore</button>
              <button className="btn">Open the doctrine</button>
            </div>
          </section>
        </div>

        <footer className="footer">
          <div className="footer-brand">
            <strong>Swarm & Bee</strong>
            <a href="mailto:build@swarmandbee.ai">build@swarmandbee.ai</a>
          </div>
          <div className="footer-brand" style={{ textAlign: "right" }}>
            <a href="https://x.com/swarmandbee" target="_blank" rel="noreferrer">
              x.com/swarmandbee
            </a>
            <span>SwarmCore by design</span>
          </div>
        </footer>
      </div>
    </>
  );
}
