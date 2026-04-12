import React from "react";
import {
  createRun,
  getApiBase,
  getRunReceipts,
  listAssets,
  submitContact,
} from "./lib/api";

function formatMoney(cents) {
  if (!Number.isFinite(cents)) return "Custom";
  if (cents === 0) return "Free";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export default function App() {
  const graphRef = React.useRef(null);
  const doctrineRef = React.useRef(null);
  const platformRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const [selectedNode, setSelectedNode] = React.useState("Scaffold");
  const [search, setSearch] = React.useState("");
  const [assets, setAssets] = React.useState([]);
  const [assetsState, setAssetsState] = React.useState({ loading: true, error: "" });
  const [runState, setRunState] = React.useState({
    loading: false,
    error: "",
    run: null,
    steps: [],
    receipts: [],
  });
  const [contactState, setContactState] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "",
    loading: false,
    error: "",
    success: "",
  });

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
    "Run ledger",
  ];

  const stack = [
    { name: "Expose", text: "Name where it breaks. Scaffold, retrieval, memory, verifier, authority — each one a real failure mode." },
    { name: "Seal", text: "Lock what the agent can see, do, remember, and claim. No undeclared paths. No hidden context." },
    { name: "Verify", text: "Validate the path, not just the output string. A verifier that checks surface signals is theater." },
    { name: "Escalate", text: "Route risk to stronger reviewers. Humans stay in the loop at the thresholds that matter." },
    { name: "Ledger", text: "Leave receipts. Every run, every decision, every path. Signed and survives scrutiny." },
  ];

  const platform = [
    { name: "Datasets", desc: "Domain-specific training pairs. Weighed on dual scales, provenance-stamped, deed-recorded. Class A through Class C." },
    { name: "Fine-tunes", desc: "Specialist models cooked on sovereign hardware. Before/after benchmarks included. Not weights — working systems." },
    { name: "Evaluations", desc: "Structured eval packs with ground-truth scoring. Deterministic, reproducible, receipt-backed." },
    { name: "Run Ledger", desc: "Every agent run recorded. Model version, memory state, retrieval scope, verifier result, outcome. Auditable." },
    { name: "Cookbook", desc: "Verified recipes for building on sovereign compute. Step-by-step, proven in production, oven settings included." },
    { name: "CLI", desc: "swarmcore install. Local control of the full pipeline — boundaries, memory, retrieval, verification — from your terminal." },
    { name: "Docs", desc: "Complete reference for sealed boundaries, memory discipline, retrieval integrity, verifier hardening, and governance." },
    { name: "Providers", desc: "Connect SwarmCore to your existing agent infrastructure. Bring your own stack. The receipts travel with the run." },
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

  const handleNodeSelect = React.useCallback(async (title) => {
    setSelectedNode(title);
    setRunState((prev) => ({ ...prev, loading: true, error: "" }));

    try {
      const createdRun = await createRun({
        run_type: "graph_node_select",
        status: "started",
        title: `Inspect ${title}`,
        initial_payload: {
          graph_node: title,
          ui_surface: "chain-integrity-map",
          policy: "defendable-mechanics",
        },
      });

      const receiptData = await getRunReceipts(createdRun.id);

      setRunState({
        loading: false,
        error: "",
        run: receiptData.run || createdRun,
        steps: receiptData.steps || [],
        receipts: receiptData.receipts || [],
      });
    } catch (error) {
      setRunState({
        loading: false,
        error: error.message || "Failed to create live run",
        run: null,
        steps: [],
        receipts: [],
      });
    }
  }, []);

  React.useEffect(() => {
    let cancelled = false;

    async function loadAssets() {
      setAssetsState({ loading: true, error: "" });
      try {
        const data = await listAssets();
        if (!cancelled) {
          setAssets(Array.isArray(data) ? data : []);
          setAssetsState({ loading: false, error: "" });
        }
      } catch (error) {
        if (!cancelled) {
          setAssets([]);
          setAssetsState({
            loading: false,
            error: error.message || "Failed to load assets",
          });
        }
      }
    }

    loadAssets();
    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {
    handleNodeSelect("Scaffold");
  }, [handleNodeSelect]);

  async function handleContactSubmit(event) {
    event.preventDefault();
    setContactState((prev) => ({
      ...prev,
      loading: true,
      error: "",
      success: "",
    }));

    try {
      const result = await submitContact({
        name: contactState.name,
        email: contactState.email,
        company: contactState.company,
        message: contactState.message,
        website: contactState.website,
      });

      setContactState({
        name: "",
        email: "",
        company: "",
        message: "",
        website: "",
        loading: false,
        error: "",
        success: `Stored as ${result.id}${result.emailed ? " and emailed." : "."}`,
      });
    } catch (error) {
      setContactState((prev) => ({
        ...prev,
        loading: false,
        error: error.message || "Failed to submit contact form",
        success: "",
      }));
    }
  }

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

        .app { max-width: 1460px; margin: 0 auto; padding: 18px 18px 72px; }
        .topbar {
          position: sticky; top: 12px; z-index: 20;
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          padding: 14px 18px; border: 1px solid rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.78); backdrop-filter: blur(18px);
          border-radius: 20px; box-shadow: var(--shadow-soft); margin-bottom: 18px;
        }
        .brand { display: flex; align-items: center; gap: 10px; font-weight: 700; letter-spacing: -0.02em; }
        .brand-mark {
          width: 32px; height: 32px; border-radius: 999px; display: inline-flex;
          align-items: center; justify-content: center;
          background: linear-gradient(180deg, #f6dfa4, #ebc45c);
          border: 1px solid rgba(200,149,31,0.22);
          box-shadow: 0 0 0 6px rgba(200,149,31,0.08); font-size: 16px;
        }
        .nav { display: flex; flex-wrap: wrap; gap: 10px; }
        .nav button, .nav a {
          appearance: none; border: 1px solid var(--line); background: white; color: var(--text);
          padding: 10px 14px; border-radius: 999px; font-size: 0.9rem; font-weight: 600;
          text-decoration: none; cursor: pointer; transition: all .18s ease;
        }
        .nav button:hover, .nav a:hover { border-color: var(--accent-line); background: #fffdf8; transform: translateY(-1px); }
        .nav .nav-cta {
          background: linear-gradient(180deg, #f2d381, #e8bb49); border-color: rgba(200,149,31,0.26);
          box-shadow: 0 6px 18px rgba(200,149,31,0.14);
        }

        .hero { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 18px; margin-bottom: 18px; }
        .hero-copy, .hero-side, .workspace, .section, .footer {
          border: 1px solid rgba(255,255,255,0.52); background: var(--panel); backdrop-filter: blur(16px);
          border-radius: var(--radius-xl); box-shadow: var(--shadow);
        }
        .hero-copy { padding: 28px; position: relative; }
        .hero-side { padding: 18px; display: grid; gap: 12px; align-content: start; }
        .hero-corner-badge {
          position: absolute; top: 22px; right: 22px; width: 44px; height: 44px; border-radius: 999px;
          display: inline-flex; align-items: center; justify-content: center;
          border: 1px solid rgba(200,149,31,0.18);
          background: linear-gradient(180deg, rgba(255,250,235,0.98), rgba(247,237,209,0.96));
          box-shadow: 0 8px 24px rgba(200,149,31,0.10); font-size: 20px;
        }

        .pill {
          display: inline-flex; align-items: center; gap: 10px; width: fit-content;
          border-radius: 999px; border: 1px solid var(--accent-line); background: var(--accent-soft);
          color: #9a6d12; padding: 10px 14px; font-size: 12px; text-transform: uppercase;
          letter-spacing: 0.24em; font-weight: 700;
        }
        .dot { width: 8px; height: 8px; border-radius: 999px; background: var(--accent); display: inline-block; }

        h1 { margin: 18px 0 0; max-width: 920px; font-size: clamp(3rem, 6vw, 6rem); line-height: 0.95; letter-spacing: -0.055em; }
        h1 .accent { display: block; color: #b88317; }
        .lead { margin: 22px 0 0; max-width: 760px; color: var(--muted); font-size: 1.08rem; line-height: 1.9; }

        .cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
        .btn {
          appearance: none; border: 1px solid var(--line); background: white; color: var(--text);
          border-radius: 16px; padding: 14px 18px; font-size: 0.95rem; font-weight: 700;
          cursor: pointer; transition: all .18s ease;
        }
        .btn:hover { transform: translateY(-1px); border-color: var(--accent-line); background: #fffdf8; }
        .btn.primary {
          background: linear-gradient(180deg, #f2d381, #e8bb49); border-color: rgba(200,149,31,0.26);
          box-shadow: 0 12px 30px rgba(200,149,31,0.16);
        }

        .failure-strip { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 0; }
        .failure-tag {
          display: inline-flex; align-items: center; gap: 8px; padding: 9px 13px; border-radius: 999px;
          border: 1px solid rgba(195,123,123,0.2); background: rgba(246,229,229,0.7); font-size: 0.86rem;
        }
        .failure-layer { font-weight: 700; color: #171717; }
        .failure-mode { color: #a86565; font-size: 0.8rem; }

        .posture-strip { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
        .posture-badge {
          display: inline-flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 999px;
          border: 1px solid var(--line); background: rgba(255,255,255,0.92); font-size: 0.88rem; font-weight: 600;
        }

        .mini-cards, .asset-grid, .system-grid, .stack-grid, .standard-grid, .ask-grid {
          display: grid; gap: 12px;
        }
        .mini-cards { grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 28px; }
        .asset-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 20px; }
        .stack-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        .standard-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .system-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .ask-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

        .mini-card, .side-card, .inspector-block, .trace-step, .standard-card, .stack-card, .system-card, .ask-card, .asset-card, .contact-card {
          border: 1px solid var(--line-2); background: rgba(255,255,255,0.88); border-radius: var(--radius-lg);
        }

        .mini-card, .side-card, .asset-card, .contact-card, .standard-card, .stack-card, .system-card, .ask-card { padding: 16px; }
        .mini-card h3, .side-card h3, .system-card h3, .stack-card h3, .asset-card h3 { margin: 0; font-size: 1rem; font-weight: 700; }
        .mini-card p, .side-card p, .stack-card p, .system-card p, .asset-card p, .ask-card { margin: 8px 0 0; color: var(--muted); line-height: 1.75; font-size: 0.94rem; }

        .side-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 10px; }
        .status {
          border-radius: 999px; border: 1px solid rgba(111,155,125,0.18); background: var(--success-soft);
          color: #52755d; padding: 7px 10px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.22em; font-weight: 700;
        }
        .side-metric { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
        .metric { border: 1px solid var(--line-2); background: rgba(255,255,255,0.94); border-radius: 16px; padding: 14px; }
        .metric-label { color: var(--muted-2); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; }
        .metric-value { margin-top: 8px; font-size: 1.02rem; font-weight: 700; }

        .workspace { padding: 16px; display: grid; gap: 14px; margin-bottom: 22px; }
        .workspace-topbar {
          display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px;
          border-radius: 18px; border: 1px solid var(--line-2); background: rgba(255,255,255,0.88);
          color: var(--muted-2); font-size: 12px;
        }
        .workspace-grid { display: grid; grid-template-columns: 280px minmax(0, 1fr) 410px; gap: 14px; min-height: 740px; }
        .rail, .graph-stage, .inspector { border-radius: 24px; border: 1px solid var(--line-2); background: var(--panel-strong); overflow: hidden; }
        .rail, .inspector { padding: 16px; }

        .rail-title, .inspector-eyebrow, .section-eyebrow {
          color: #b88317; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; font-weight: 700;
        }

        .search-wrap { margin-top: 14px; }
        .search-input {
          width: 100%; border: 1px solid var(--line); background: #fff; color: var(--text); border-radius: 14px;
          padding: 12px 14px; font-size: 0.94rem; outline: none;
        }
        .rail-count { margin-top: 10px; color: var(--muted-2); font-size: 12px; }
        .rail-list { display: grid; gap: 10px; margin-top: 14px; }
        .rail-item {
          text-align: left; appearance: none; width: 100%; padding: 14px; border-radius: 18px; border: 1px solid var(--line-2);
          background: white; color: var(--text); cursor: pointer; transition: all .18s ease;
        }
        .rail-item:hover { transform: translateY(-1px); border-color: var(--accent-line); background: #fffdfa; }
        .rail-item.active { border-color: rgba(200,149,31,0.28); background: #fff9eb; }
        .rail-item-top, .node-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
        .rail-item-title, .node-title { font-size: 0.97rem; font-weight: 700; }
        .break-badge {
          border-radius: 999px; padding: 5px 8px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em;
          border: 1px solid rgba(195,123,123,0.2); background: var(--danger-soft); color: #a86565; white-space: nowrap; font-weight: 700;
        }

        .graph-stage {
          position: relative; min-height: 740px;
          background: linear-gradient(#ece9e1 1px, transparent 1px), linear-gradient(90deg, #ece9e1 1px, transparent 1px), linear-gradient(180deg, #fdfcf8, #f7f5ef);
          background-size: 34px 34px, 34px 34px, cover;
        }
        .graph-stage svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
        .edge { transition: opacity .18s ease, stroke .18s ease, stroke-width .18s ease; }
        .edge.active { opacity: 1; stroke: rgba(200,149,31,0.72); stroke-width: 3.5; }
        .edge.dimmed { opacity: 0.18; }

        .node { position: absolute; width: 230px; transform: translate(-50%, -50%); }
        .node button { width: 100%; appearance: none; border: 0; background: transparent; padding: 0; text-align: left; cursor: pointer; }
        .node-card {
          border-radius: 22px; border: 1px solid var(--line-2); background: rgba(255,255,255,0.95);
          padding: 16px; box-shadow: var(--shadow-soft); transition: all .18s ease;
        }
        .node-card:hover { transform: translateY(-2px); border-color: var(--accent-line); background: #fffdfa; }
        .node-card.active { border-color: rgba(200,149,31,0.3); background: #fff9eb; box-shadow: 0 14px 36px rgba(200,149,31,0.10); }
        .node-card.dimmed { opacity: 0.42; }
        .node-card p { margin: 10px 0 0; color: var(--muted); font-size: 0.9rem; line-height: 1.7; }
        .node-fix {
          margin-top: 12px; padding: 10px 12px; border-radius: 16px; border: 1px solid rgba(200,149,31,0.16);
          background: var(--accent-soft); color: #8a620f; font-size: 0.82rem; line-height: 1.55;
        }
        .core-pulse {
          position: absolute; left: 49%; top: 48%; width: 14px; height: 14px; transform: translate(-50%, -50%);
          border-radius: 999px; background: var(--accent); box-shadow: 0 0 26px rgba(200,149,31,0.38);
        }

        .inspector { display: grid; gap: 12px; align-content: start; }
        .inspector-title { font-size: 1.6rem; font-weight: 700; margin: 0; }
        .inspector-block, .trace-step { padding: 14px; }
        .inspector-label { color: var(--muted-2); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 8px; }
        .inspector-copy, .receipt-item, .trace-text { color: var(--muted); line-height: 1.8; font-size: 0.94rem; }
        .receipt-list, .trace-list { display: grid; gap: 8px; margin-top: 10px; }
        .receipt-item {
          padding: 11px 12px; border-radius: 14px; border: 1px solid rgba(200,149,31,0.14);
          background: var(--accent-soft); color: #8a620f;
        }
        .trace-row { display: flex; gap: 12px; align-items: flex-start; }
        .trace-num {
          width: 34px; height: 34px; border-radius: 999px; border: 1px solid rgba(200,149,31,0.18);
          background: var(--accent-soft); color: #a27012; display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; flex: 0 0 auto;
        }
        .trace-title { margin: 0; font-size: 0.95rem; font-weight: 700; }

        .section { padding: 26px; }
        .section h2 { margin: 12px 0 0; font-size: clamp(2rem, 4vw, 3rem); line-height: 1.08; letter-spacing: -0.04em; }
        .section-copy { margin-top: 18px; color: var(--muted); line-height: 1.9; font-size: 1rem; }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .evidence-list { display: grid; gap: 10px; margin-top: 20px; }
        .evidence-item {
          display: flex; gap: 12px; align-items: flex-start; padding: 14px 16px; border-radius: 18px; border: 1px solid var(--line-2);
          background: rgba(255,255,255,0.88); color: var(--muted); line-height: 1.7; font-size: 0.95rem;
        }
        .evidence-dot { width: 10px; height: 10px; border-radius: 999px; background: var(--accent); margin-top: 6px; flex: 0 0 auto; }

        .asset-meta { display: flex; justify-content: space-between; gap: 10px; margin-top: 12px; color: var(--muted-2); font-size: 0.85rem; }
        .asset-type {
          display: inline-flex; padding: 6px 8px; border-radius: 999px; background: var(--accent-soft);
          color: #9a6d12; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .12em;
        }

        .contact-layout { display: grid; grid-template-columns: 1fr 1.3fr; gap: 18px; margin-top: 24px; align-items: start; }
        .contact-meta { display: grid; gap: 12px; }
        .contact-meta-card {
          border: 1px solid var(--line-2); background: rgba(255,255,255,0.88); border-radius: var(--radius-lg); padding: 18px;
        }
        .contact-meta-label { color: var(--muted-2); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 8px; }
        .contact-meta-value { font-size: 0.95rem; font-weight: 600; color: var(--text); }
        .contact-meta-value a { color: #b88317; }
        .contact-form { display: grid; gap: 12px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .input, .textarea {
          width: 100%; border: 1px solid var(--line); border-radius: 14px; background: white;
          padding: 12px 14px; font-size: 0.95rem; color: var(--text); outline: none;
          transition: border-color .15s ease;
        }
        .input:focus, .textarea:focus { border-color: rgba(200,149,31,0.4); }
        .textarea { min-height: 140px; resize: vertical; }
        .form-note { font-size: 0.88rem; color: var(--muted-2); }
        .form-error { color: #a86565; background: var(--danger-soft); border: 1px solid rgba(195,123,123,0.16); padding: 10px 14px; border-radius: 12px; font-size: 0.92rem; }
        .form-success-card {
          border: 1px solid rgba(111,155,125,0.2); background: var(--success-soft); border-radius: var(--radius-lg);
          padding: 28px; text-align: center;
        }
        .form-success-icon { font-size: 2rem; margin-bottom: 12px; }
        .form-success-title { font-size: 1.1rem; font-weight: 700; color: #3d6349; margin: 0 0 8px; }
        .form-success-body { color: #52755d; font-size: 0.94rem; line-height: 1.7; margin: 0; }

        @media (max-width: 860px) {
          .contact-layout { grid-template-columns: 1fr; }
        }

        .footer {
          margin-top: 20px; padding: 22px 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px;
        }
        .footer-brand { display: grid; gap: 4px; }
        .footer a, .footer span { color: var(--muted); text-decoration: none; font-size: 0.94rem; }

        @media (max-width: 1260px) {
          .hero, .two-col, .workspace-grid { grid-template-columns: 1fr; }
          .asset-grid, .stack-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .mini-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .graph-stage { min-height: 720px; }
        }

        @media (max-width: 860px) {
          .topbar { position: static; }
          .mini-cards, .asset-grid, .standard-grid, .system-grid, .stack-grid, .side-metric, .contact-grid { grid-template-columns: 1fr; }
          .graph-stage { min-height: auto; padding: 12px; }
          .graph-stage svg, .core-pulse { display: none; }
          .node {
            position: relative; inset: auto !important; transform: none; width: 100%;
            left: auto !important; top: auto !important; margin-bottom: 10px;
          }
          .footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="app">
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">🐝</span>
            <span>SwarmCore</span>
          </div>

          <nav className="nav" aria-label="Site navigation">
            <button onClick={() => scrollToRef(graphRef)}>Breakpoints</button>
            <button onClick={() => scrollToRef(doctrineRef)}>How it works</button>
            <button onClick={() => scrollToRef(platformRef)}>Platform</button>
            <button className="nav-cta" onClick={() => scrollToRef(contactRef)}>Talk to us →</button>
          </nav>
        </header>

        <main>
        <section className="hero" aria-label="Hero — SwarmCore overview">
          <div className="hero-copy">
            <div className="hero-corner-badge" aria-hidden="true">🐝</div>

            <div className="pill">
              Swarm &amp; Bee
              <span className="dot" />
              SwarmCore
            </div>

            <h1>
              AI fails in the layers
              <span className="accent">around the model.</span>
            </h1>

            <div className="failure-strip">
              {[
                ["Scaffold", "answers leak"],
                ["Retrieval", "context contaminates"],
                ["Memory", "weak facts persist"],
                ["Verifier", "surface signals pass"],
                ["Authority", "agents drift"],
              ].map(([layer, mode]) => (
                <div key={layer} className="failure-tag">
                  <span className="failure-layer">{layer}</span>
                  <span className="failure-mode">{mode}</span>
                </div>
              ))}
            </div>

            <p className="lead">
              SwarmCore hardens all five. Sealed boundaries. Controlled execution. Verified paths. Human finality. Full receipts. Built on sovereign compute — you own the hardware, you own the trust boundary.
            </p>

            <div className="cta-row">
              <button className="btn primary" onClick={() => scrollToRef(graphRef)}>
                See where it breaks →
              </button>
              <button className="btn" onClick={() => scrollToRef(platformRef)}>
                View the platform
              </button>
            </div>

            <div className="posture-strip">
              {[
                "Own the compute",
                "Own the trust boundary",
                "Run where data lives",
                "Human has final say",
                "Data is the product",
              ].map((text) => (
                <div key={text} className="posture-badge">
                  <span className="dot" />
                  {text}
                </div>
              ))}
            </div>

            <div className="mini-cards">
              {[
                ["The problem", "Five failure layers. Scaffold, retrieval, memory, verifier, authority. One break is enough."],
                ["The fix", "Sealed boundaries. Verified paths. Full receipts. Defendable by design, not by hope."],
                ["The platform", "Datasets. Fine-tunes. Evals. Receipts. A real operating surface, not a manifesto."],
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
                <h3>Why sovereign compute</h3>
                <span className="status">non-negotiable</span>
              </div>
              <p>
                You can't outsource the trust boundary. If the compute isn't yours, the boundary isn't yours. SwarmCore runs where your data lives — on hardware you control, under policy you set.
              </p>
            </div>

            <div className="side-metric">
              {[
                ["Compute", "yours"],
                ["Deployment", "edge-first"],
                ["Trust boundary", "yours"],
                ["Data", "high-value asset"],
              ].map(([label, value]) => (
                <div className="metric" key={label}>
                  <div className="metric-label">{label}</div>
                  <div className="metric-value">{value}</div>
                </div>
              ))}
            </div>

            <div className="side-card">
              <div className="side-top">
                <h3>Live run</h3>
              </div>
              <p>
                {runState.loading
                  ? "Creating a live run and loading receipts…"
                  : runState.run
                  ? `Receipt issued: ${runState.run.id}`
                  : runState.error
                  ? "Backend offline — receipts unavailable."
                  : "Select a breakpoint below to create a live run."}
              </p>
            </div>
          </aside>
        </section>

        <section className="workspace" ref={graphRef} aria-label="Chain Integrity Map — interactive graph">
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
                      onClick={() => handleNodeSelect(node.title)}
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
                    <button onClick={() => handleNodeSelect(node.title)}>
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
                <div className="inspector-copy">{active.short}</div>
              </div>

              <div className="inspector-block">
                <div className="inspector-label">SwarmCore fix</div>
                <div className="inspector-copy">{active.fix}</div>
              </div>

              <div className="inspector-block">
                <div className="inspector-label">Why it breaks trust</div>
                <div className="inspector-copy">{active.why}</div>
              </div>

              <div className="inspector-block">
                <div className="inspector-label">Live run</div>
                <div className="inspector-copy">
                  {runState.loading
                    ? "Creating run..."
                    : runState.run
                    ? `${runState.run.id} · ${runState.run.run_type} · ${runState.run.status}`
                    : runState.error || "No live run yet"}
                </div>
              </div>

              <div className="inspector-block">
                <div className="inspector-label">Receipts SwarmCore logs</div>
                <div className="receipt-list">
                  {(runState.receipts.length ? runState.receipts.map((item) => item.receipt_type) : active.receipts).map((item, idx) => (
                    <div key={`${item}-${idx}`} className="receipt-item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="inspector-block">
                <div className="inspector-label">Run trace</div>
                <div className="trace-list">
                  {(runState.steps.length
                    ? runState.steps.map((step) => [
                        String(step.sequence).padStart(2, "0"),
                        step.title,
                        step.payload_json ? JSON.stringify(step.payload_json) : "No payload",
                      ])
                    : active.steps
                  ).map(([num, title, text]) => (
                    <div key={`${num}-${title}`} className="trace-step">
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

        <div ref={doctrineRef}>
          <div className="two-col">
            <section className="section" aria-label="Why SwarmCore exists">
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
                    <div className="metric-label">0{i + 1}</div>
                    <div className="metric-value" style={{ marginTop: 6 }}>{item}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="section" ref={platformRef} aria-label="SwarmCore platform surface">
            <div className="section-eyebrow">Platform surface</div>
            <h2>SwarmCore is a real operating surface. Not a manifesto.</h2>
            <p className="section-copy">
              Datasets, fine-tunes, evaluations, receipts, CLI, docs, cookbook, providers. Everything flows through the same ledgered, receipt-backed, sovereign stack.
            </p>
            <div className="asset-grid" style={{ marginTop: 24 }}>
              {platform.map((item) => (
                <div key={item.name} className="asset-card">
                  <div className="asset-type">{item.name}</div>
                  <p style={{ marginTop: 10 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section" aria-label="How SwarmCore works">
            <div className="section-eyebrow">The five-step fix</div>
            <h2>SwarmCore turns brittle agent chains into reviewable, defensible systems.</h2>
            <div className="stack-grid">
              {stack.map((item, idx) => (
                <div key={item.name} className="stack-card">
                  <div className="metric-label">0{idx + 1}</div>
                  <h3 style={{ marginTop: 8 }}>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="two-col">
            <section className="section" aria-label="Governance and human finality">
              <div className="section-eyebrow">Verification and human finality</div>
              <h2>Junior. Senior. Human. The loop stays closed.</h2>
              <p className="section-copy">
                Every serious system needs role clarity. Junior agents are bounded workers — intake, triage, extraction, routing. Senior agents review, interpret, correct, and escalate. Humans retain final authority where risk, ambiguity, or policy thresholds are crossed. Trust is earned through controls, not confidence scores.
              </p>

              <div className="system-grid">
                {[
                  ["Junior", "Bounded worker. Intake, triage, extraction, routing. No authority beyond its declared scope."],
                  ["Senior", "Reviewer and escalator. Judgment, correction, exception handling, policy-sensitive decisions."],
                  ["Human", "Final authority. Visibility into evidence, memory state, policy applied, and full action history."],
                ].map(([title, text]) => (
                  <div key={title} className="system-card">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="section" aria-label="SwarmCore audit questions">
              <div className="section-eyebrow">The six questions</div>
              <h2>Did the system earn the answer, or did it cheat to get there?</h2>
              <div className="ask-grid">
                {[
                  "Was the task boundary sealed before execution?",
                  "Was memory legitimate, sourced, and revocable?",
                  "Was retrieval scoped to approved sources only?",
                  "Was the verifier mechanically valid — not spoofable?",
                  "Did the agent act within its declared authority?",
                  "Can the entire path survive external scrutiny?",
                ].map((item) => (
                  <div key={item} className="ask-card">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="section" ref={contactRef}>
            <div className="section-eyebrow">Contact</div>
            <h2>Tell us what you want to build.</h2>
            <p className="section-copy">
              We respond to every serious inquiry. If it's a real system with real constraints, we'll have something useful to say.
            </p>

            <div className="contact-layout">
              {/* Left — meta cards */}
              <div className="contact-meta">
                {[
                  ["Email", <a href="mailto:build@swarmandbee.ai">build@swarmandbee.ai</a>],
                  ["Response time", "Same business day"],
                  ["What we take on", "Agent systems that need to survive scrutiny — CRE, legal, medical, finance."],
                  ["What to include", "What you're building, where it breaks, what you need it to do."],
                ].map(([label, value]) => (
                  <div key={label} className="contact-meta-card">
                    <div className="contact-meta-label">{label}</div>
                    <div className="contact-meta-value">{value}</div>
                  </div>
                ))}
              </div>

              {/* Right — form or success state */}
              {contactState.success ? (
                <div className="form-success-card">
                  <div className="form-success-icon">🐝</div>
                  <h3 className="form-success-title">Message received.</h3>
                  <p className="form-success-body">
                    Check your inbox — we sent a confirmation. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <div className="contact-grid">
                    <input
                      className="input"
                      placeholder="Name *"
                      value={contactState.name}
                      onChange={(e) => setContactState((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                    <input
                      className="input"
                      placeholder="Email *"
                      type="email"
                      value={contactState.email}
                      onChange={(e) => setContactState((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  <input
                    className="input"
                    placeholder="Company"
                    value={contactState.company}
                    onChange={(e) => setContactState((prev) => ({ ...prev, company: e.target.value }))}
                  />

                  <textarea
                    className="textarea"
                    placeholder="What are you building? Where does it need to hold up?"
                    value={contactState.message}
                    onChange={(e) => setContactState((prev) => ({ ...prev, message: e.target.value }))}
                    required
                  />

                  {/* Honeypot — hidden from real users, bots fill it */}
                  <input
                    className="input"
                    placeholder="Website"
                    value={contactState.website}
                    onChange={(e) => setContactState((prev) => ({ ...prev, website: e.target.value }))}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {contactState.error ? (
                    <div className="form-error">{contactState.error}</div>
                  ) : null}

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
                    <button className="btn primary" type="submit" disabled={contactState.loading}>
                      {contactState.loading ? "Sending..." : "Send message →"}
                    </button>
                    <span className="form-note">You'll get a confirmation in your inbox.</span>
                  </div>
                </form>
              )}
            </div>
          </section>

          <section className="section" aria-label="Closing statement">
            <div className="section-eyebrow">The bottom line</div>
            <h2>
              Five failure layers. Five fixes.
              <span className="accent">One sovereign platform.</span>
            </h2>
            <p className="section-copy">
              The scaffold leaks or it doesn't. The retrieval is scoped or it isn't. The memory is disciplined or it poisons. The verifier is real or it's theater. The authority is bound or it drifts. SwarmCore makes this mechanical, not aspirational — running on compute you own, with receipts that survive scrutiny, and humans who stay in the loop where it matters.
            </p>
            <div className="cta-row" style={{ justifyContent: "center", marginTop: 28 }}>
              <button className="btn primary" onClick={() => scrollToRef(graphRef)}>
                See where it breaks →
              </button>
              <button className="btn" onClick={() => scrollToRef(contactRef)}>
                Talk to Swarm &amp; Bee
              </button>
            </div>
          </section>
        </div>
        </main>

        <footer className="footer" aria-label="Site footer">
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
