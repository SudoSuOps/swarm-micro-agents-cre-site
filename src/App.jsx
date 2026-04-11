import React from "react";

export default function App() {
  const [selectedNode, setSelectedNode] = React.useState("Scaffold");
  const [search, setSearch] = React.useState("");

  const graphRef = React.useRef(null);
  const doctrineRef = React.useRef(null);

  const nodes = [
    {
      id: "scaffold",
      title: "Scaffold",
      short: "Leaked answers, porous harnesses, hidden shortcuts.",
      fix: "Seal task boundaries and enforce explicit access control.",
      why: "The system is contaminated before reasoning even begins. Hidden files, verifier logic, or injected answer paths turn the run into theater instead of legitimate execution.",
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
      why: "If provisional observations silently become truth, every future decision inherits poisoned state. Memory must be attributable, reviewable, and revocable.",
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
      why: "A model should not pull arbitrary context and pass it off as legitimate evidence. Retrieval has to be bounded, attributable, and visible in the receipt chain.",
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
      x: 77,
      y: 43,
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

  const edges = [
    { id: "e1", d: "M145 150 C 245 165, 300 225, 355 265", nodes: ["Scaffold", "Memory"] },
    { id: "e2", d: "M355 265 C 420 355, 470 430, 510 500", nodes: ["Memory", "Governance"] },
    { id: "e3", d: "M150 145 C 310 125, 470 120, 620 165", nodes: ["Scaffold", "Retrieval"] },
    { id: "e4", d: "M620 165 C 700 220, 760 255, 805 300", nodes: ["Retrieval", "Verifier"] },
    { id: "e5", d: "M510 500 C 635 520, 730 535, 845 520", nodes: ["Governance", "Audit"] },
    { id: "e6", d: "M150 155 C 245 300, 360 430, 510 500", nodes: ["Scaffold", "Governance"] },
  ];

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
    { name: "Detect", text: "Find breaks in the chain before they become false confidence." },
    { name: "Bound", text: "Constrain what agents can see, do, store, and claim." },
    { name: "Verify", text: "Validate the path, not just the output." },
    { name: "Escalate", text: "Route meaningful risk to stronger reviewers and humans." },
    { name: "Seal", text: "Leave receipts that survive scrutiny." },
  ];

  const active = nodes.find((node) => node.title === selectedNode) || nodes[0];

  const filteredNodes = nodes.filter((node) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      node.title.toLowerCase().includes(q) ||
      node.short.toLowerCase().includes(q) ||
      node.fix.toLowerCase().includes(q) ||
      node.why.toLowerCase().includes(q)
    );
  });

  const isConnectedToActive = (title) => {
    if (title === selectedNode) return true;
    return edges.some(
      (edge) => edge.nodes.includes(selectedNode) && edge.nodes.includes(title)
    );
  };

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        :root {
          --bg: #f7f6f2;
          --bg-2: #f3f1eb;
          --panel: rgba(255,255,255,0.82);
          --panel-strong: rgba(255,255,255,0.96);
          --panel-soft: rgba(255,255,255,0.74);
          --line: #e8e2d7;
          --line-2: #ece7de;
          --text: #171717;
          --muted: #5f6670;
          --muted-2: #8b93a0;
          --accent: #c8951f;
          --accent-soft: #f7edd1;
          --accent-line: rgba(200,149,31,0.22);
          --danger: #c37b7b;
          --danger-soft: #f6e5e5;
          --success: #6f9b7d;
          --success-soft: #e9f3ec;
          --shadow: 0 20px 60px rgba(32, 28, 20, 0.08);
          --shadow-soft: 0 10px 28px rgba(32, 28, 20, 0.05);
          --radius-xl: 28px;
          --radius-lg: 22px;
          --radius-md: 18px;
          --radius-sm: 14px;
        }

        * { box-sizing: border-box; }
        html, body, #root { min-height: 100%; margin: 0; }
        html { scroll-behavior: smooth; }

        body {
          background:
            radial-gradient(circle at top, rgba(200,149,31,0.10), transparent 24%),
            radial-gradient(circle at 80% 14%, rgba(200,149,31,0.08), transparent 14%),
            linear-gradient(180deg, rgba(255,255,255,0.65), transparent 20%),
            linear-gradient(180deg, var(--bg), var(--bg-2));
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        *:focus-visible {
          outline: 2px solid rgba(200,149,31,0.35);
          outline-offset: 2px;
        }

        .app {
          max-width: 1460px;
          margin: 0 auto;
          padding: 18px 18px 72px;
        }

        .topbar {
          position: sticky;
          top: 12px;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 14px 18px;
          border: 1px solid rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(18px);
          border-radius: 20px;
          box-shadow: var(--shadow-soft);
          margin-bottom: 18px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .brand-mark {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: linear-gradient(135deg, #d3a53e, #f1d37e);
          box-shadow: 0 0 0 6px rgba(200,149,31,0.08);
        }

        .nav {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
        }

        .nav button,
        .nav a {
          appearance: none;
          border: 1px solid var(--line);
          background: white;
          color: var(--text);
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all .18s ease;
        }

        .nav button:hover,
        .nav a:hover {
          border-color: var(--accent-line);
          background: #fffdf8;
          color: #111;
          transform: translateY(-1px);
        }

        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 18px;
          margin-bottom: 18px;
        }

        .hero-copy,
        .hero-side,
        .workspace,
        .section,
        .footer {
          border: 1px solid rgba(255,255,255,0.52);
          background: var(--panel);
          backdrop-filter: blur(16px);
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
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          border-radius: 999px;
          border: 1px solid var(--accent-line);
          background: var(--accent-soft);
          color: #9a6d12;
          padding: 10px 14px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.24em;
          font-weight: 700;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--accent);
          display: inline-block;
        }

        h1 {
          margin: 18px 0 0;
          max-width: 920px;
          font-size: clamp(3rem, 6vw, 6rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
        }

        h1 .accent {
          display: block;
          color: #b88317;
        }

        .lead {
          margin: 22px 0 0;
          max-width: 760px;
          color: var(--muted);
          font-size: 1.08rem;
          line-height: 1.9;
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
          background: white;
          color: var(--text);
          border-radius: 16px;
          padding: 14px 18px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all .18s ease;
          box-shadow: 0 2px 0 rgba(0,0,0,0.01);
        }

        .btn:hover {
          transform: translateY(-1px);
          border-color: var(--accent-line);
          background: #fffdf8;
        }

        .btn.primary {
          color: #111;
          background: linear-gradient(180deg, #f2d381, #e8bb49);
          border-color: rgba(200,149,31,0.26);
          box-shadow: 0 12px 30px rgba(200,149,31,0.16);
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
          border: 1px solid var(--line-2);
          background: rgba(255,255,255,0.88);
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
          border: 1px solid rgba(111,155,125,0.18);
          background: var(--success-soft);
          color: #52755d;
          padding: 7px 10px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-weight: 700;
        }

        .side-metric {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .metric {
          border: 1px solid var(--line-2);
          background: rgba(255,255,255,0.94);
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
          font-size: 1.18rem;
          font-weight: 700;
          color: var(--text);
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
          border: 1px solid var(--line-2);
          background: rgba(255,255,255,0.88);
          color: var(--muted-2);
          font-size: 12px;
        }

        .workspace-grid {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr) 410px;
          gap: 14px;
          min-height: 740px;
        }

        .rail,
        .graph-stage,
        .inspector {
          border-radius: 24px;
          border: 1px solid var(--line-2);
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
          color: #b88317;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .search-wrap {
          margin-top: 14px;
        }

        .search-input {
          width: 100%;
          border: 1px solid var(--line);
          background: #fff;
          color: var(--text);
          border-radius: 14px;
          padding: 12px 14px;
          font-size: 0.94rem;
          outline: none;
          transition: all .18s ease;
        }

        .search-input:focus {
          border-color: rgba(200,149,31,0.28);
          box-shadow: 0 0 0 3px rgba(200,149,31,0.08);
        }

        .rail-count {
          margin-top: 10px;
          color: var(--muted-2);
          font-size: 12px;
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
          border: 1px solid var(--line-2);
          background: white;
          color: var(--text);
          cursor: pointer;
          transition: all .18s ease;
        }

        .rail-item:hover {
          transform: translateY(-1px);
          border-color: var(--accent-line);
          background: #fffdfa;
        }

        .rail-item.active {
          border-color: rgba(200,149,31,0.28);
          background: #fff9eb;
          box-shadow: inset 0 0 0 1px rgba(200,149,31,0.08);
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
          border: 1px solid rgba(195,123,123,0.2);
          background: var(--danger-soft);
          color: #a86565;
          white-space: nowrap;
          font-weight: 700;
        }

        .rail-item.active .break-badge,
        .node-card.active .break-badge {
          border-color: rgba(200,149,31,0.22);
          background: var(--accent-soft);
          color: #a27012;
        }

        .rail-item p {
          margin-top: 10px;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.9rem;
        }

        .graph-stage {
          position: relative;
          min-height: 740px;
          background:
            linear-gradient(#ece9e1 1px, transparent 1px),
            linear-gradient(90deg, #ece9e1 1px, transparent 1px),
            linear-gradient(180deg, #fdfcf8, #f7f5ef);
          background-size: 34px 34px, 34px 34px, cover;
        }

        .graph-stage svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .edge {
          transition: opacity .18s ease, stroke .18s ease, stroke-width .18s ease;
        }

        .edge.active {
          opacity: 1;
          stroke: rgba(200,149,31,0.72);
          stroke-width: 3.5;
        }

        .edge.dimmed {
          opacity: 0.18;
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
          border: 1px solid var(--line-2);
          background: rgba(255,255,255,0.95);
          padding: 16px;
          box-shadow: var(--shadow-soft);
          transition: all .18s ease;
        }

        .node-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent-line);
          background: #fffdfa;
        }

        .node-card.active {
          border-color: rgba(200,149,31,0.3);
          background: #fff9eb;
          box-shadow: 0 14px 36px rgba(200,149,31,0.10);
        }

        .node-card.dimmed {
          opacity: 0.42;
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
          border: 1px solid rgba(200,149,31,0.16);
          background: var(--accent-soft);
          color: #8a620f;
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
          box-shadow: 0 0 26px rgba(200,149,31,0.38);
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
          border: 1px solid rgba(200,149,31,0.14);
          background: var(--accent-soft);
          color: #8a620f;
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
          border: 1px solid rgba(200,149,31,0.18);
          background: var(--accent-soft);
          color: #a27012;
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
          border: 1px solid var(--line-2);
          background: rgba(255,255,255,0.88);
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
          color: var(--text);
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
          color: var(--text);
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
          color: #b88317;
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
          .topbar {
            position: static;
          }

          .nav {
            justify-content: flex-start;
          }

          .mini-cards,
          .standard-grid,
          .system-grid,
          .stack-grid,
          .side-metric {
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
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark" />
            <span>SwarmCore</span>
          </div>

          <div className="nav">
            <button onClick={() => scrollToRef(graphRef)}>Graph</button>
            <button onClick={() => scrollToRef(doctrineRef)}>Doctrine</button>
            <a href="mailto:build@swarmandbee.ai">Contact</a>
          </div>
        </header>

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
              SwarmCore is the mechanics and audit layer for building agent systems that can survive scrutiny. It is built on sovereign compute, treats data as a high-value asset, runs where the data lives, and verifies every path before trust is earned.
            </p>

            <div className="cta-row">
              <button className="btn primary" onClick={() => scrollToRef(graphRef)}>
                Enter the Graph
              </button>
              <button className="btn" onClick={() => scrollToRef(doctrineRef)}>
                Read the Doctrine
              </button>
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
                <h3>Chain Integrity Map</h3>
                <span className="status">live structure</span>
              </div>
              <p>
                A real AI system fails in the shell around the model. SwarmCore makes those breaks visible, attributable, and fixable.
              </p>
            </div>

            <div className="side-metric">
              {[
                ["Primary focus", "mechanics"],
                ["Compute posture", "sovereign"],
                ["Deployment shape", "edge-first"],
                ["Data stance", "high-value"],
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

        <section className="workspace" ref={graphRef}>
          <div className="workspace-topbar">
            <span>swarm-core / chain integrity map</span>
            <span>graph · execution surface · receipt inspector</span>
          </div>

          <div className="workspace-grid">
            <aside className="rail">
              <div className="rail-title">Breakpoints</div>

              <div className="search-wrap">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search scaffold, memory, verifier..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="rail-count">
                {filteredNodes.length} visible node{filteredNodes.length === 1 ? "" : "s"}
              </div>

              <div className="rail-list">
                {filteredNodes.map((node) => {
                  const activeNode = node.title === selectedNode;
                  return (
                    <button
                      key={node.id}
                      className={`rail-item ${activeNode ? "active" : ""}`}
                      onClick={() => setSelectedNode(node.title)}
                    >
                      <div className="rail-item-top">
                        <div className="rail-item-title">{node.title}</div>
                        <div className="break-badge">break</div>
                      </div>
                      <p>{node.short}</p>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="graph-stage">
              <svg viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
                {edges.map((edge) => {
                  const activeEdge = edge.nodes.includes(selectedNode);
                  return (
                    <path
                      key={edge.id}
                      className={`edge ${activeEdge ? "active" : "dimmed"}`}
                      d={edge.d}
                      stroke="#d7d1c7"
                      strokeWidth="2.5"
                      fill="none"
                    />
                  );
                })}
              </svg>

              {nodes.map((node) => {
                const activeNode = node.title === selectedNode;
                const connected = isConnectedToActive(node.title);
                const dimmed = selectedNode && !connected;

                return (
                  <div
                    key={node.id}
                    className="node"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <button onClick={() => setSelectedNode(node.title)}>
                      <div className={`node-card ${activeNode ? "active" : ""} ${dimmed ? "dimmed" : ""}`}>
                        <div className="node-top">
                          <div className="node-title">{node.title}</div>
                          <div className="break-badge">break</div>
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

        <div className="sections" ref={doctrineRef}>
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

          <section className="section">
            <div className="section-eyebrow">How we build</div>
            <h2>Own the compute. Value the data. Run at the edge.</h2>
            <p className="section-copy">
              Swarm & Bee builds on sovereign compute because trust cannot be rented. We treat data as a high-value asset, keep intelligence close to where the data lives, and design systems that remain inspectable, controllable, and defendable under real operational pressure.
            </p>

            <div className="system-grid">
              {[
                ["Own the compute", "The infrastructure is part of the product. We do not outsource the trust boundary."],
                ["Value the data", "Data is not exhaust. It is a strategic asset that deserves controls, lineage, and care."],
                ["Edge-first by design", "AI should run where the data lives whenever possible, not force the data to travel."],
                ["Sovereignty before convenience", "Control, auditability, and finality matter more than easy defaults."],
                ["Verify everything", "Every meaningful action should leave receipts that survive scrutiny."],
                ["Human finality", "The human remains the executive boundary when risk, ambiguity, or policy thresholds rise."],
              ].map(([title, text]) => (
                <div key={title} className="system-card">
                  <h3>{title}</h3>
                  <p>{text}</p>
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
              <button className="btn primary" onClick={() => scrollToRef(graphRef)}>
                Enter the Graph
              </button>
              <button className="btn" onClick={() => scrollToRef(doctrineRef)}>
                Read the Doctrine
              </button>
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
