import React from "react";

export default function App() {
  const breakpoints = [
    {
      title: "Scaffold",
      problem: "Leaked answers, porous harnesses, hidden shortcuts.",
      fix: "Sealed task boundaries and explicit access control.",
      left: "12%",
      top: "18%",
    },
    {
      title: "Memory",
      problem: "Weak facts become permanent truth.",
      fix: "Scored, sourced, revocable memory with approval states.",
      left: "34%",
      top: "36%",
    },
    {
      title: "Retrieval",
      problem: "Untrusted context contaminates decisions.",
      fix: "Scoped retrieval with attributable source paths.",
      left: "56%",
      top: "20%",
    },
    {
      title: "Verifier",
      problem: "Spoofable pass signals and shallow checks.",
      fix: "Hardened validation tied to intended task completion.",
      left: "74%",
      top: "42%",
    },
    {
      title: "Governance",
      problem: "Agents drift beyond their authority.",
      fix: "Role separation, escalation rules, human finality.",
      left: "46%",
      top: "68%",
    },
    {
      title: "Audit",
      problem: "No receipts, no trust, no finality.",
      fix: "Full action lineage and reviewable decision traces.",
      left: "81%",
      top: "72%",
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
    ["Detect", "Find breaks in the chain before they become false confidence."],
    ["Bound", "Constrain what agents can see, do, store, and claim."],
    ["Verify", "Validate the path, not just the output."],
    ["Escalate", "Route meaningful risk to stronger reviewers and humans."],
    ["Seal", "Leave receipts that survive scrutiny."],
  ];

  const evidence = [
    "Answer leakage through scaffolds",
    "Memory poisoning and unverified persistence",
    "Retrieval contamination from untrusted context",
    "Verifier spoofing through shallow pass signals",
    "Role drift in autonomous systems",
    "Benchmark wins without mechanical legitimacy",
  ];

  return (
    <>
      <style>{`
        :root {
          --bg: #09090b;
          --bg-soft: rgba(255,255,255,0.04);
          --panel: rgba(17,17,20,0.88);
          --panel-2: rgba(10,10,12,0.72);
          --border: rgba(255,255,255,0.10);
          --text: #f5f5f5;
          --muted: #b5b5bd;
          --muted-2: #8c8c96;
          --accent: #f4c44f;
          --accent-soft: rgba(244,196,79,0.12);
          --danger-soft: rgba(248,113,113,0.12);
          --danger: #fca5a5;
          --ok-soft: rgba(52,211,153,0.12);
          --ok: #86efac;
          --shadow: 0 20px 60px rgba(0,0,0,0.35);
          --radius: 28px;
        }

        * { box-sizing: border-box; }
        html, body, #root { margin: 0; min-height: 100%; background: var(--bg); color: var(--text); }
        body {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at top, rgba(244,196,79,0.10), transparent 28%),
            radial-gradient(circle at 80% 20%, rgba(251,191,36,0.08), transparent 18%),
            linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 20%),
            var(--bg);
        }

        a { color: inherit; text-decoration: none; }

        .page {
          max-width: 1320px;
          margin: 0 auto;
          padding: 40px 24px 88px;
          position: relative;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(244,196,79,0.24);
          background: rgba(244,196,79,0.10);
          color: #f7d77e;
          border-radius: 999px;
          padding: 10px 14px;
          font-size: 12px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .pill-dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          display: inline-block;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 32px;
          align-items: center;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          max-width: 860px;
        }

        .hero h1 span { color: var(--accent); display: block; }

        .lead {
          max-width: 760px;
          margin-top: 24px;
          color: var(--muted);
          font-size: 1.18rem;
          line-height: 1.9;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .btn {
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.04);
          color: white;
          border-radius: 18px;
          padding: 14px 18px;
          font-weight: 700;
          font-size: 0.96rem;
          cursor: pointer;
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }
        .btn:hover { transform: translateY(-1px); background: rgba(255,255,255,0.08); }
        .btn.primary {
          background: var(--accent);
          color: #111;
          border-color: rgba(244,196,79,0.32);
          box-shadow: 0 12px 30px rgba(244,196,79,0.18);
        }

        .mini-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 14px;
          margin-top: 32px;
        }

        .card, .panel {
          background: var(--bg-soft);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          backdrop-filter: blur(16px);
        }

        .mini-card {
          padding: 18px;
          border-radius: 24px;
          background: var(--bg-soft);
          border: 1px solid var(--border);
        }
        .mini-card h3 {
          margin: 0 0 8px;
          font-size: 0.98rem;
        }
        .mini-card p {
          margin: 0;
          color: var(--muted-2);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .graph-shell {
          padding: 16px;
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .graph-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.04);
          padding: 12px 16px;
          border-radius: 18px;
          color: var(--muted-2);
          font-size: 12px;
          margin-bottom: 14px;
        }

        .status {
          display: inline-flex;
          border-radius: 999px;
          border: 1px solid rgba(52,211,153,0.2);
          background: var(--ok-soft);
          color: var(--ok);
          padding: 8px 10px;
        }

        .graph {
          position: relative;
          height: 540px;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid var(--border);
          background:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(180deg, rgba(10,10,12,0.92), rgba(15,15,17,0.88));
          background-size: 32px 32px, 32px 32px, cover;
        }

        .graph svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .node {
          position: absolute;
          width: 240px;
          transform: translate(-50%, -50%);
        }

        .node-box {
          background: rgba(10,10,12,0.86);
          border: 1px solid var(--border);
          border-radius: 22px;
          padding: 16px;
          box-shadow: 0 14px 30px rgba(0,0,0,0.22);
          backdrop-filter: blur(12px);
          transition: border-color .18s ease, background .18s ease, transform .18s ease;
        }

        .node-box:hover {
          border-color: rgba(244,196,79,0.35);
          background: rgba(18,18,21,0.94);
          transform: translateY(-2px);
        }

        .node-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }

        .node-title {
          font-size: 0.94rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .node-badge {
          border-radius: 999px;
          border: 1px solid rgba(248,113,113,0.18);
          background: var(--danger-soft);
          color: var(--danger);
          padding: 4px 8px;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .node p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.93rem;
        }

        .fix {
          margin-top: 12px;
          border-radius: 18px;
          border: 1px solid rgba(244,196,79,0.16);
          background: var(--accent-soft);
          padding: 10px 12px;
          color: #f7e8b8;
          font-size: 0.82rem;
          line-height: 1.6;
        }

        .core-dot {
          position: absolute;
          left: 46%;
          top: 68%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 30px rgba(244,196,79,0.9);
          transform: translate(-50%, -50%);
        }

        .section {
          margin-top: 84px;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 24px;
        }

        .panel {
          padding: 32px;
        }

        .eyebrow {
          font-size: 12px;
          letter-spacing: 0.30em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .section h2 {
          margin: 14px 0 0;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .section p.lead-2 {
          margin-top: 18px;
          color: var(--muted);
          line-height: 1.9;
          font-size: 1rem;
        }

        .evidence-list {
          margin-top: 24px;
          display: grid;
          gap: 10px;
        }

        .evidence-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          border-radius: 18px;
          border: 1px solid var(--border);
          background: rgba(10,10,12,0.52);
          padding: 14px 16px;
          color: var(--muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .evidence-dot {
          width: 10px;
          height: 10px;
          margin-top: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex: 0 0 auto;
        }

        .principles {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
        }

        .principle {
          border-radius: 22px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.04);
          padding: 20px;
        }

        .principle .num {
          font-size: 12px;
          color: var(--muted-2);
          letter-spacing: 0.24em;
        }

        .principle .label {
          margin-top: 10px;
          font-size: 1.05rem;
          font-weight: 600;
        }

        .flow {
          padding: 32px;
          background: linear-gradient(180deg, rgba(17,17,20,0.95), rgba(9,9,11,0.94));
        }

        .flow-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0,1fr));
          gap: 14px;
          margin-top: 28px;
        }

        .flow-card {
          border-radius: 22px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.04);
          padding: 20px;
          min-height: 170px;
        }

        .flow-card .num {
          font-size: 12px;
          letter-spacing: 0.28em;
          color: var(--muted-2);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .flow-card h3 {
          margin: 12px 0 0;
          font-size: 1.12rem;
        }

        .flow-card p {
          margin: 12px 0 0;
          color: var(--muted-2);
          line-height: 1.7;
          font-size: 0.94rem;
        }

        .shape {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
        }

        .role-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 14px;
          margin-top: 24px;
        }

        .role-card {
          border-radius: 22px;
          border: 1px solid var(--border);
          background: rgba(10,10,12,0.52);
          padding: 20px;
        }

        .role-card h3 {
          margin: 0;
          font-size: 1.08rem;
        }

        .role-card p {
          margin: 12px 0 0;
          color: var(--muted-2);
          line-height: 1.7;
          font-size: 0.94rem;
        }

        .asks {
          background: rgba(244,196,79,0.10);
          border-color: rgba(244,196,79,0.18);
        }

        .asks-list {
          margin-top: 18px;
          display: grid;
          gap: 12px;
        }

        .ask {
          border-radius: 18px;
          border: 1px solid var(--border);
          background: rgba(10,10,12,0.36);
          padding: 16px;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .closing {
          text-align: center;
          padding: 42px 32px;
        }

        .closing h2 {
          max-width: 860px;
          margin: 14px auto 0;
          font-size: clamp(2rem, 4.8vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.05em;
        }

        .closing h2 span { display: block; color: var(--accent); }

        .closing p {
          max-width: 780px;
          margin: 20px auto 0;
          color: var(--muted);
          line-height: 1.9;
          font-size: 1rem;
        }

        .footer-actions {
          margin-top: 28px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 1120px) {
          .hero,
          .section-grid,
          .shape {
            grid-template-columns: 1fr;
          }
          .flow-grid {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }
        }

        @media (max-width: 860px) {
          .mini-grid,
          .principles,
          .role-grid,
          .flow-grid {
            grid-template-columns: 1fr;
          }
          .graph {
            height: 760px;
          }
          .node {
            width: 220px;
          }
        }

        @media (max-width: 640px) {
          .page { padding: 28px 16px 72px; }
          .panel, .flow, .closing { padding: 24px; }
          .graph { height: 900px; }
          .node {
            position: relative;
            inset: auto !important;
            left: auto !important;
            top: auto !important;
            transform: none;
            width: 100%;
            margin: 16px 0;
            padding: 0 12px;
          }
          .graph svg, .core-dot { display: none; }
          .graph {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 12px 0;
            background:
              linear-gradient(180deg, rgba(17,17,20,0.95), rgba(9,9,11,0.94));
            height: auto;
          }
        }
      `}</style>

      <div className="page">
        <section className="hero">
          <div>
            <div className="pill">
              SwarmCore
              <span className="pill-dot" />
              Audit Layer for Serious AI
            </div>

            <h1>
              AI is breaking in the
              <span>layers around the model.</span>
            </h1>

            <p className="lead">
              SwarmCore is the mechanics and audit layer for building agent systems that can
              survive scrutiny. It exposes breaks in the chain, constrains authority, hardens
              verification, and leaves receipts.
            </p>

            <div className="actions">
              <button className="btn primary">Enter the Graph</button>
              <button className="btn">Read the Doctrine</button>
            </div>

            <div className="mini-grid">
              {[
                ["System failure", "Scaffold, memory, retrieval, verifier, governance."],
                ["Defendable build", "Bounded agents with real mechanics and finality."],
                ["Traceable outcomes", "Receipts for what ran, what it saw, and why."],
              ].map(([title, text]) => (
                <div className="mini-card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card graph-shell">
            <div className="graph-topbar">
              <span>swarm-core / graph</span>
              <span className="status">integrity map</span>
            </div>

            <div className="graph">
              <svg viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
                <path d="M130 140 C 260 160, 260 250, 360 255 S 560 120, 620 165 S 750 240, 785 285" stroke="rgba(244,196,79,0.55)" strokeWidth="3" fill="none" strokeDasharray="8 8" />
                <path d="M355 255 C 420 360, 460 410, 505 470" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="none" />
                <path d="M505 470 C 620 470, 690 520, 790 505" stroke="rgba(244,196,79,0.35)" strokeWidth="2.5" fill="none" />
                <path d="M625 165 C 690 210, 740 235, 790 285" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" />
                <path d="M140 140 C 220 240, 310 420, 500 470" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
              </svg>

              {breakpoints.map((node, idx) => (
                <div className="node" key={node.title} style={{ left: node.left, top: node.top }}>
                  <div className="node-box">
                    <div className="node-top">
                      <div className="node-title">{node.title}</div>
                      <div className="node-badge">break {idx + 1}</div>
                    </div>
                    <p>{node.problem}</p>
                    <div className="fix">SwarmCore fix: {node.fix}</div>
                  </div>
                </div>
              ))}

              <div className="core-dot" />
            </div>
          </div>
        </section>

        <section className="section section-grid">
          <div className="panel">
            <div className="eyebrow">Why SwarmCore exists</div>
            <h2>Benchmarks can be passed through contaminated paths.</h2>
            <p className="lead-2">
              A system can look powerful while being structurally unsound. SwarmCore treats
              intelligence as an operating environment problem: what the agent can access, how
              memory mutates, what retrieval was allowed, whether the verifier was spoofable,
              and whether a human remained the real authority boundary.
            </p>

            <div className="evidence-list">
              {evidence.map((item) => (
                <div className="evidence-item" key={item}>
                  <span className="evidence-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="eyebrow">The build standard</div>
            <div className="principles">
              {principles.map((item, i) => (
                <div className="principle" key={item}>
                  <div className="num">0{i + 1}</div>
                  <div className="label">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section flow card">
          <div className="eyebrow">How it works</div>
          <h2>SwarmCore turns brittle agent chains into reviewable systems.</h2>

          <div className="flow-grid">
            {rails.map(([name, text], idx) => (
              <div className="flow-card" key={name}>
                <div className="num">
                  <span>0{idx + 1}</span>
                  {idx < rails.length - 1 ? <span>→</span> : <span />}
                </div>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section shape">
          <div className="panel">
            <div className="eyebrow">System shape</div>
            <h2>Junior. Senior. Human. Receipts.</h2>
            <p className="lead-2">
              SwarmCore is built for role-defined systems. Junior agents intake, classify, and
              package. Senior agents review, interpret, and escalate. Humans retain final
              authority when risk, ambiguity, or policy thresholds are crossed.
            </p>

            <div className="role-grid">
              {[
                ["Junior", "Bounded worker for intake, triage, extraction, and routing."],
                ["Senior", "Reviewer for judgment, correction, exception handling, and policy-sensitive decisions."],
                ["Human CEO", "Final authority with visibility into evidence, memory, policy, and action history."],
              ].map(([title, text]) => (
                <div className="role-card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel asks">
            <div className="eyebrow" style={{ color: "#fde7a7" }}>SwarmCore asks</div>
            <div className="asks-list">
              {[
                "Was the task boundary sealed?",
                "Was memory legitimate, sourced, and revocable?",
                "Was retrieval allowed for this task?",
                "Was the verifier mechanically valid?",
                "Did the agent act within its authority?",
                "Can the entire path survive scrutiny?",
              ].map((q) => (
                <div className="ask" key={q}>{q}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section panel closing">
          <div className="eyebrow">Closing statement</div>
          <h2>
            AI does not just need better outputs.
            <span>It needs better construction.</span>
          </h2>
          <p>
            SwarmCore is the audit and mechanics layer for serious AI systems — built to expose
            breaks, constrain behavior, verify the path, and make outcomes defendable by design.
          </p>
          <div className="footer-actions">
            <button className="btn primary">Launch SwarmCore</button>
            <button className="btn">Open the doctrine</button>
          </div>
        </section>

        <footer
          style={{
            marginTop: "64px",
            borderTop: "1px solid rgba(255,255,255,0.10)",
            paddingTop: "24px",
            paddingBottom: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#a1a1aa",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "16px", letterSpacing: "0.02em" }}>
                Swarm & Bee
              </div>
              <a
                href="mailto:build@swarmandbee.ai"
                style={{ color: "#a1a1aa", textDecoration: "none" }}
              >
                build@swarmandbee.ai
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "right" }}>
              <a
                href="https://x.com/swarmandbee"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#a1a1aa", textDecoration: "none" }}
              >
                x.com/swarmandbee
              </a>
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "#71717a",
                }}
              >
                SwarmCore by design
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
