import { useState } from "react";

function GapChart() {
  const w = 660, h = 360;
  const padL = 55, padR = 80, padT = 25, padB = 45;
  const plotW = w - padL - padR, plotH = h - padT - padB;
  const satMin = 950, satMax = 1600, gpaMin = 2.8, gpaMax = 4.15;
  const sx = (s) => padL + ((s - satMin) / (satMax - satMin)) * plotW;
  const sy = (g) => padT + plotH - ((g - gpaMin) / (gpaMax - gpaMin)) * plotH;

  const schools = [
    { name: "Rice", lo: 1490, hi: 1570, avg: 1540, gpa: 3.96, c: "#2f8b55" },
    { name: "UT Austin", lo: 1230, hi: 1490, avg: 1360, gpa: 3.8, c: "#379bd0" },
    { name: "UT Dallas", lo: 1170, hi: 1410, avg: 1290, gpa: 3.78, c: "#dfc653" },
    { name: "Spelman", lo: 1110, hi: 1320, avg: 1250, gpa: 3.75, c: "#e4abc4" },
    { name: "UT Arlington", lo: 990, hi: 1230, avg: 1110, gpa: 3.2, c: "#90bdc1" },
    { name: "UTSA", lo: 1000, hi: 1200, avg: 1100, gpa: 3.0, c: "#ecc8a4" },
  ];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: 660, display: "block", margin: "20px auto" }}>
      <rect x={padL} y={padT} width={plotW} height={plotH} fill="#fafaf8" />
      {[1000,1100,1200,1300,1400,1500,1600].map(s=>(
        <g key={s}><line x1={sx(s)} y1={padT} x2={sx(s)} y2={padT+plotH} stroke="#ececea" strokeWidth={1}/>
        <text x={sx(s)} y={padT+plotH+18} textAnchor="middle" fontSize={10} fill="#aaa" fontFamily="'Space Grotesk',sans-serif">{s}</text></g>
      ))}
      {[3.0,3.2,3.4,3.6,3.8,4.0].map(g=>(
        <g key={g}><line x1={padL} y1={sy(g)} x2={padL+plotW} y2={sy(g)} stroke="#ececea" strokeWidth={1}/>
        <text x={padL-8} y={sy(g)+4} textAnchor="end" fontSize={10} fill="#aaa" fontFamily="'Space Grotesk',sans-serif">{g.toFixed(1)}</text></g>
      ))}
      <text x={padL+plotW/2} y={h-4} textAnchor="middle" fontSize={11} fill="#888" fontFamily="'Space Grotesk',sans-serif">SAT Score</text>
      <text x={12} y={padT+plotH/2} textAnchor="middle" fontSize={11} fill="#888" fontFamily="'Space Grotesk',sans-serif" transform={`rotate(-90,12,${padT+plotH/2})`}>GPA</text>

      {schools.map((s)=>(
        <g key={s.name}>
          <line x1={sx(s.lo)} y1={sy(s.gpa)} x2={sx(s.hi)} y2={sy(s.gpa)} stroke={s.c} strokeWidth={5} strokeLinecap="round" opacity={0.55}/>
          <circle cx={sx(s.avg)} cy={sy(s.gpa)} r={5} fill={s.c} stroke="#fff" strokeWidth={1.5}/>
          <text x={sx(s.hi)+6} y={sy(s.gpa)+4} fontSize={10} fill={s.c} fontFamily="'Space Grotesk',sans-serif" fontWeight={600}>{s.name}</text>
        </g>
      ))}

      <defs><marker id="ah" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#f24822"/></marker></defs>
      <line x1={sx(1180)+7} y1={sy(3.9)} x2={sx(1400)-7} y2={sy(3.9)} stroke="#f24822" strokeWidth={1.5} strokeDasharray="5 3" markerEnd="url(#ah)"/>
      <circle cx={sx(1180)} cy={sy(3.9)} r={7} fill="#f24822" stroke="#fff" strokeWidth={2}/>
      <text x={sx(1180)} y={sy(3.9)-12} textAnchor="middle" fontSize={11} fill="#f24822" fontFamily="'Space Grotesk',sans-serif" fontWeight={700}>1180</text>
      <text x={sx(1180)} y={sy(3.9)+18} textAnchor="middle" fontSize={9} fill="#f24822" fontFamily="'Space Grotesk',sans-serif">Danielle now</text>
      <circle cx={sx(1400)} cy={sy(3.9)} r={7} fill="#2f8b55" stroke="#fff" strokeWidth={2}/>
      <text x={sx(1400)} y={sy(3.9)-12} textAnchor="middle" fontSize={11} fill="#2f8b55" fontFamily="'Space Grotesk',sans-serif" fontWeight={700}>1400</text>
      <text x={sx(1400)} y={sy(3.9)+18} textAnchor="middle" fontSize={9} fill="#2f8b55" fontFamily="'Space Grotesk',sans-serif">Aug target</text>
    </svg>
  );
}

function ScorePath() {
  const w = 660, h = 240;
  const padL = 45, padR = 25, padT = 30, padB = 45;
  const plotW = w - padL - padR, plotH = h - padT - padB;
  const pts = [
    { wk: 0, sc: 1180, label: "Now" },
    { wk: 1, sc: 1180, label: "Diagnostic" },
    { wk: 3, sc: 1220 },
    { wk: 5, sc: 1270, label: "W5" },
    { wk: 7, sc: 1310 },
    { wk: 9, sc: 1350, label: "W9" },
    { wk: 11, sc: 1380 },
    { wk: 13, sc: 1400, label: "Aug 22" },
  ];
  const sx = (wk) => padL + (wk / 14) * plotW;
  const sy = (sc) => padT + plotH - ((sc - 1150) / (1430 - 1150)) * plotH;
  const line = pts.map(p => `${sx(p.wk)},${sy(p.sc)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: 660, display: "block", margin: "20px auto" }}>
      <rect x={padL} y={padT} width={plotW} height={plotH} fill="#fafaf8" />
      {[1200,1250,1300,1350,1400].map(s=>(
        <g key={s}><line x1={padL} y1={sy(s)} x2={padL+plotW} y2={sy(s)} stroke="#ececea" strokeWidth={1}/>
        <text x={padL-6} y={sy(s)+4} textAnchor="end" fontSize={10} fill="#aaa" fontFamily="'Space Grotesk',sans-serif">{s}</text></g>
      ))}
      <line x1={padL} y1={sy(1400)} x2={padL+plotW} y2={sy(1400)} stroke="#2f8b55" strokeWidth={1} strokeDasharray="5 3" opacity={0.4}/>
      <polyline points={line} fill="none" stroke="#1a1a1a" strokeWidth={2} strokeDasharray="7 4"/>
      {pts.map((p,i)=>{
        const first=i===0, last=i===pts.length-1;
        return(
          <g key={i}>
            <circle cx={sx(p.wk)} cy={sy(p.sc)} r={first||last?7:3.5} fill={first?"#f24822":last?"#2f8b55":"#1a1a1a"} stroke="#fff" strokeWidth={first||last?2:1}/>
            {p.label&&<>
              <text x={sx(p.wk)} y={sy(p.sc)-(first||last?14:10)} textAnchor="middle" fontSize={first||last?12:9} fill={first?"#f24822":last?"#2f8b55":"#888"} fontFamily="'Space Grotesk',sans-serif" fontWeight={700}>{first?"1180":last?"1400":p.label}</text>
              <text x={sx(p.wk)} y={sy(p.sc)+18} textAnchor="middle" fontSize={9} fill={first?"#f24822":last?"#2f8b55":"#888"} fontFamily="'Space Grotesk',sans-serif">{p.label}</text>
            </>}
          </g>
        );
      })}
    </svg>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 19, fontWeight: 700, letterSpacing: -0.5, color: "#1a1a1a", marginBottom: 10, paddingBottom: 8, borderBottom: "1px solid #e8e8e4" }}>{title}</h2>
      {children}
    </div>
  );
}

function P({ children, style }) {
  return <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, lineHeight: 1.7, color: "#333", marginBottom: 12, ...style }}>{children}</p>;
}

function Callout({ children, label }) {
  return (
    <div style={{ background: "#fafaf8", padding: "14px 16px", fontSize: 13, lineHeight: 1.65, color: "#666", fontFamily: "'Space Grotesk',sans-serif", marginTop: 12, marginBottom: 12 }}>
      {label && <strong style={{ color: "#1a1a1a" }}>{label} </strong>}
      {children}
    </div>
  );
}

export default function Report() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "32px 24px", fontFamily: "'Space Grotesk',sans-serif", color: "#1a1a1a", background: "#fff" }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: "2px solid #1a1a1a", paddingBottom: 18 }}>
        <div style={{ fontSize: 12, letterSpacing: 1.8, textTransform: "uppercase", color: "#999", marginBottom: 6 }}>illuminairy · sat score analysis</div>
        <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -1.5, margin: "0 0 4px", lineHeight: 1.1 }}>Danielle Cobbinah</h1>
        <div style={{ fontSize: 13, color: "#888" }}>Prepared May 22, 2026 · For Amma Cobbinah</div>
      </div>

      {/* Quick stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 28 }}>
        {[
          { l: "Current Score", v: "1180", c: "#f24822" },
          { l: "Target Score", v: "1400", c: "#2f8b55" },
          { l: "Gap", v: "+220", c: "#1a1a1a" },
          { l: "Test Date", v: "Aug 22", c: "#1a1a1a" },
        ].map((x, i) => (
          <div key={i} style={{ background: "#fafaf8", padding: "12px 10px", textAlign: "center" }}>
            <div style={{ fontSize: 9, letterSpacing: 1.2, textTransform: "uppercase", color: "#999", marginBottom: 3 }}>{x.l}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: x.c, letterSpacing: -0.5 }}>{x.v}</div>
          </div>
        ))}
      </div>

      {/* ---- NARRATIVE ---- */}

      <Section title="Danielle's profile">
        <P>Let's start with what's clear: Danielle is a strong, capable student. All A's. 5's on her AP exams. A GPA around 3.9. She's not just keeping up in rigorous coursework — she's excelling in it. That takes discipline, intelligence, and real academic ability. Those are not qualities that disappear when she sits down for the SAT.</P>
        <P>She's targeting competitive schools — UT, Rice, and Spelman — and she should be. Her academic record supports those ambitions. The frustration is that her SAT score doesn't reflect what she's clearly capable of, and after three attempts in the 1100s, it probably feels like the test is the one thing standing between her and the schools she's worked so hard to reach.</P>
        <P>We want to be direct about something: the SAT score is not measuring Danielle's intelligence. It's not measuring how hard she works. It's not measuring whether she belongs at these schools. It's measuring a very specific set of skills — speed, pacing, pattern recognition under time pressure — that school never trains students for. That's why her grades and her SAT score don't match. And that's exactly why this situation is fixable.</P>
        <P>Students with Danielle's profile — high GPA, strong AP performance, but a suppressed SAT score — are actually the students who improve the most with the right support. The knowledge is already there. The work ethic is already there. What's missing is SAT-specific skills — pacing, timing, test strategy — and those are trainable. Once we identify exactly what's pulling her score down and build a plan around it, she'll start seeing real improvement quickly — often within the first few weeks. That kind of early progress matters, because it replaces frustration with confidence, which changes everything about how she approaches the test.</P>
      </Section>

      <Section title="Should Danielle retake the SAT?">
        <P><strong style={{ color: "#2f8b55" }}>Yes.</strong> The August 22 SAT is 13 weeks away. That's enough time for a meaningful score increase — but only if she changes her approach. College Board data from over 250,000 students shows that retaking the SAT without changing how you prep gains only about 40 points on average. 35% of retakers actually score lower. Danielle has taken it three times with similar results, which confirms that more of the same won't move the score. A different approach will.</P>

        <P>August 22 is the right date. Those scores arrive well before Early Action and Early Decision deadlines for all of Danielle's target schools — UT Austin (October 15 EA), Spelman (November 1 EA/ED), and Rice (November 1 ED I). That gives her 13 weeks to prepare, which is exactly the timeline we'd recommend for the score increase she needs.</P>
      </Section>

      <Section title="Why smart kids score low on the SAT">
        <P>This is the part most families find surprising — and the part that usually brings the most relief once they understand it.</P>

        <P>Danielle has all A's and scores 5's on AP exams. She clearly knows the content being tested. So why does the SAT keep coming back in the 1100s? The answer is that the SAT is not testing what school tests. It's testing something fundamentally different.</P>

        <P>School rewards depth, persistence, revision, and thoroughness. A student who takes their time, double-checks their work, and pursues precision gets rewarded with A's. The SAT rewards the opposite: speed, rapid pattern recognition, and confident decision-making under severe time pressure — often choosing an answer without being 100% certain. These are completely different cognitive demands, and being excellent at one does not automatically translate to the other.</P>

        <P>College Board data shows that high school GPAs have risen steadily for decades while SAT scores have continued to decline. Nearly 60% of student grades don't match their standardized test performance, and in most cases the grades are higher. A student can take multivariable calculus and score 5's on AP exams and still struggle with SAT algebra — not because they can't do the math, but because the SAT is testing mathematical fluency under time conditions that school never replicates.</P>

        <P>But it's not just about speed. Most students who are stuck in a score range also have specific content gaps — topics where they're consistently losing points without realizing it. It might be geometry and trig. It might be a specific type of reading question. It might be grammar conventions they were never taught explicitly. The SAT covers content from across years of school, and almost every student has a few areas where their foundation is weaker than they think. Those gaps don't show up in school grades because school tests don't cover every topic on every test. The SAT does.</P>

        <P>Then there's the perfectionism factor. A 2024 study published in the European Archives of Psychiatry found that students who strive for perfection and have highly self-critical evaluation styles experience the highest rates of test anxiety. Not because they're weak — because they care deeply about getting things right. That same perfectionism that drives a 3.9 GPA becomes a liability on a test that gives 75 seconds per question. Spending even 10 extra seconds per question double-checking or second-guessing means running out of time before reaching the last 5-8 questions. It doesn't matter if you know how to answer them if you never get to answer them.</P>

        <P>The SAT is also 2 hours and 14 minutes of sustained focus — one of the longest tests most students have ever taken. Most school tests are 45-50 minutes. If Danielle's performance drops in the second half, that's not a knowledge problem. It's a stamina problem. And stamina is built through practice — specifically through taking full-length timed tests under real conditions, which most students haven't done enough of.</P>

        <P>And there are practical things too. The Digital SAT has a built-in graphing calculator that can increase math speed by 30-40%. Students who are good at math often skip it because they can do the work in their head — but "can do it" and "can do it in 75 seconds" are different things.</P>

        <Callout label="What we need to find out:">We won't know exactly what's holding Danielle's score down until we see her score reports and run a diagnostic. It could be pacing. It could be specific content gaps in math or reading. It could be stamina. It's probably a combination. The point is that these are identifiable — once we see where she's losing points, we can build a plan that targets those specific areas. We'll work on one thing at a time until it's fixed, then move to the next. That's how she'll see real improvement quickly — not by spreading effort across everything at once, but by systematically closing the gaps that are pulling her score down.</Callout>
      </Section>

      <Section title="Where Danielle stands vs. her target schools">
        <P>The table below shows where Danielle's current score and her August target fall relative to each school's admitted student SAT range.</P>

        <div style={{ overflowX: "auto", marginTop: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, fontFamily: "'Space Grotesk',sans-serif" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #1a1a1a" }}>
                {["School","Middle 50% SAT","At 1180","At 1400","Key Deadline"].map(h=>(
                  <th key={h} style={{ textAlign: h==="School"?"left":"center", padding: "7px 6px", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", fontSize: 10, color: "#888" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { s: "Rice", r: "1490–1570", a: "Well below", b: "Getting closer", ad: "Nov 1 (ED I) / Jan 4 (RD)", ac: "#f24822", bc: "#dfc653" },
                { s: "UT Austin", r: "1230–1490", a: "Below range", b: "Competitive (above avg)", ad: "Oct 15 (EA) / Dec 1 (RD)", ac: "#f24822", bc: "#2f8b55" },
                { s: "UT Dallas", r: "1170–1410", a: "Bottom edge", b: "Top quartile", ad: "Rolling / May 1", ac: "#dfc653", bc: "#2f8b55" },
                { s: "Spelman", r: "1110–1320", a: "Mid-range", b: "Top quartile", ad: "Nov 1 (EA/ED) / Feb 1 (RD)", ac: "#dfc653", bc: "#2f8b55" },
                { s: "UT Arlington", r: "990–1230", a: "Competitive", b: "Well above range", ad: "Rolling / Jun 1", ac: "#2f8b55", bc: "#2f8b55" },
                { s: "UTSA", r: "1000–1200", a: "Competitive", b: "Well above range", ad: "Rolling / Jun 1", ac: "#2f8b55", bc: "#2f8b55" },
              ].map((r, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #ececea" }}>
                  <td style={{ padding: "9px 6px 9px 0", fontWeight: 600 }}>{r.s}</td>
                  <td style={{ padding: 9, textAlign: "center", color: "#666" }}>{r.r}</td>
                  <td style={{ padding: 9, textAlign: "center", color: r.ac, fontWeight: 600 }}>{r.a}</td>
                  <td style={{ padding: 9, textAlign: "center", color: r.bc, fontWeight: 600, fontSize: 11 }}>{r.b}</td>
                  <td style={{ padding: 9, textAlign: "center", color: "#666", fontSize: 11 }}>{r.ad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <P style={{ marginTop: 16 }}>At 1400, Danielle would be above UT Austin's average admitted score of 1360, putting her in a competitive position for EA. At Spelman, a 1400 would place her in the top quartile of admitted students — a very strong position. At UT Dallas, she'd be near the top of the range. Rice has the highest SAT range on her list at 1490–1570, so a strong score combined with her GPA, AP performance, and the rest of her application will all matter there.</P>
      </Section>

      <Section title="What score Danielle can realistically get">
        <P>Based on Danielle's academic profile — all A's, AP 5's, strong course rigor — a score in the 1350–1400 range is realistic for August with 12 weeks of personalized tutoring. College Board research shows that approximately 80 hours of guided preparation corresponds to gains of 200+ points. At 6-7 hours per week over 13 weeks, that math lines up.</P>

        <P>A 1400 is what we'd aim for. No ethical tutor promises a specific number, but the factors limiting Danielle's score right now — pacing, stamina, test-taking speed — are among the most trainable issues we see. Students who already know the content but are being held back by how they take the test tend to see the fastest and largest improvements once the specific bottleneck is identified and targeted.</P>

        <P>Here's what's important for Danielle to hear: she will feel the improvement happening. This isn't a situation where she puts in 12 weeks of work and just hopes the number goes up on test day. Within the first few weeks, she'll be solving question types faster that used to slow her down. She'll finish sections she used to run out of time on. She'll stop second-guessing answers she had right the first time. That tangible, week-over-week progress is what makes the process work — because confidence on the SAT isn't something you fake. It comes from knowing you've seen this exact question type 50 times and you know exactly how to handle it.</P>

        <P>Every Sunday, you'll receive a progress report showing where Danielle's estimated score is, what she worked on that week, what's coming next, and how she's tracking against her milestones. There won't be any guessing about whether it's working — you'll see it in the data.</P>

        <P>And if Danielle wants to keep going after August — whether to push higher for Rice or simply because she wants the best score possible — she'll have a strong foundation to build on. But right now, the focus is August 22 and getting to 1400.</P>
      </Section>

      <Section title="Danielle's path to 1400">
        <ScorePath />
        <P>The path above shows estimated milestone scores across a 13-week prep cycle. Progress is not perfectly linear — the first few weeks are diagnostic and foundational, so the biggest score jumps typically happen in weeks 5-10 as pacing improves and weak areas get targeted.</P>
      </Section>

      <Section title="How we'll get her there">
        <P>Most SAT prep tries to cover everything at once — a little geometry, a little grammar, a little reading, all in the same week. The problem with that approach is nothing sticks. Danielle ends up with surface-level exposure to 20 different question types but hasn't actually mastered any of them.</P>

        <P>We do the opposite. We start by figuring out which question types are costing her the most points. Then we work on that one thing until she's got it. We teach it, she practices it, we review her mistakes together, she does more problems, and we keep going until that weakness is closed. Then we move to the next one down the list. This is how score improvements happen fastest — by drilling one concept deep into memory rather than skipping across the surface of everything.</P>

        <P>Sessions aren't lectures. We work through problems together in real time. Danielle solves problems live, thinks out loud, and we correct any mistakes in her reasoning as they happen. That immediate feedback loop is what separates tutoring from self-study — she's not just finding out she got something wrong after the fact. She's learning why her thinking went off track in the moment and how to fix it.</P>

        <div style={{ marginBottom: 20, marginTop: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>The 12-week plan:</div>

          {[
            {
              wk: "Week 1",
              title: "Diagnostic + Review",
              items: [
                "Session 1 (Wednesday): Full-length timed SAT diagnostic — 2 hours 14 minutes, done over camera. This replicates exact test-day conditions.",
                "Session 2 (Friday): Detailed review of diagnostic results. We walk through every missed question, identify patterns, and present Danielle's personalized plan — which question types to work on first, in what order, and why."
              ]
            },
            {
              wk: "Weeks 2–5",
              title: "Highest-Impact Weaknesses First",
              items: [
                "Twice-weekly tutoring sessions — working on the question types costing Danielle the most points, one at a time until mastered",
                "Live problem-solving during sessions — Danielle works through problems in real time, thinks out loud, and gets immediate feedback",
                "Daily assigned practice between sessions — specific problems targeting the same areas covered in tutoring",
                "Timed pacing drills to build speed on question types she knows but answers too slowly",
                "Full-length timed practice test at week 5 to measure progress"
              ]
            },
            {
              wk: "Weeks 6–9",
              title: "Building the Score",
              items: [
                "Continue working down the list of weaknesses — each one addressed until it's no longer costing her points",
                "Twice-weekly sessions with a mix of targeted work and timed section practice",
                "Full-length timed practice test at week 9 — scores tracked against milestones",
                "Mistake analysis after every practice test: what went wrong, why, and what to work on next",
                "Pacing refinement — getting Danielle comfortable managing the clock section by section"
              ]
            },
            {
              wk: "Weeks 10–13",
              title: "Test Readiness",
              items: [
                "Timed section practice under test-day conditions",
                "Final review of any remaining weak areas",
                "Confidence building — by this point Danielle has seen every question type dozens of times and knows exactly how to handle them",
                "Danielle walks into August 22 prepared, not hoping"
              ]
            }
          ].map((phase, i) => (
            <div key={i} style={{ marginBottom: 16, paddingLeft: 16, borderLeft: "3px solid #e8e8e4" }}>
              <div style={{ fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase", color: "#888", marginBottom: 2 }}>{phase.wk}</div>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{phase.title}</div>
              {phase.items.map((item, j) => (
                <div key={j} style={{ display: "flex", gap: 8, marginBottom: 5, fontSize: 13, lineHeight: 1.55, color: "#555" }}>
                  <span style={{ color: "#2f8b55", flexShrink: 0, marginTop: 1 }}>✱</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section title="What's included">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {[
            "Full-length timed diagnostic (Week 1)",
            "Personalized plan based on diagnostic results",
            "Twice-weekly tutoring sessions",
            "Live problem-solving with immediate feedback",
            "Daily assigned practice problems",
            "Full-length timed practice tests at weeks 5 and 9",
            "Mistake analysis after every test",
            "Timed pacing drills",
            "Weekly progress report sent every Sunday",
            "Estimated score tracking against milestones",
            "Access to student portal with assignments and schedule",
            "Tutor who scored 1450+ on the Digital SAT",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, fontSize: 13, lineHeight: 1.5, color: "#444" }}>
              <span style={{ color: "#2f8b55", flexShrink: 0 }}>✱</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <Callout label="Weekly progress reports:">Every Sunday, you'll receive a progress report with Danielle's current estimated score, what was covered that week, what's coming next week, and how she's tracking against her milestones. No guessing about whether it's working.</Callout>
      </Section>

      <Section title="What we need from you">
        <P>To build Danielle's personalized plan and hit the ground running, we'll need:</P>
        <div style={{ marginBottom: 12 }}>
          {[
            "SAT score reports for all three attempts (from her College Board account)",
            "Transcript or GPA breakdown",
            "Danielle's availability from now through August 19 — so we can schedule sessions around her summer plans",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 14, lineHeight: 1.55, color: "#333" }}>
              <span style={{ color: "#f24822", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <P>If you can send the score reports before tomorrow's call, we can start reviewing them tonight and come to the call with Danielle ready to discuss specific findings.</P>
      </Section>

      {/* Next Steps */}
      <div style={{ background: "#1a1a1a", color: "#fff", padding: "24px 22px", marginBottom: 20 }}>
        <h2 style={{ fontSize: 19, fontWeight: 700, letterSpacing: -0.5, marginBottom: 10, color: "#fff", fontFamily: "'Space Grotesk',sans-serif" }}>Next steps</h2>
        <div style={{ marginBottom: 4 }}>
          {[
            { n: "1", text: "Send Danielle's score reports (all 3 attempts) before tomorrow's call." },
            { n: "2", text: "Follow-up call with Danielle — tomorrow, 10:00 AM CT. We'll walk through this report together and answer her questions." },
            { n: "3", text: "Enroll and start Week 1. Danielle takes her diagnostic Wednesday, reviews results Friday. Tutoring begins the following week." },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
              <div style={{ background: "#f24822", color: "#fff", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{s.n}</div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: "#ddd", fontFamily: "'Space Grotesk',sans-serif" }}>{s.text}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 14, color: "#fff", fontWeight: 700, marginTop: 12, fontFamily: "'Space Grotesk',sans-serif" }}>$99/week · Cancel anytime</div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", paddingTop: 14, fontSize: 11, color: "#bbb", fontFamily: "'Space Grotesk',sans-serif" }}>
        illuminairy · sat<br />
        Founded by a Duke & Georgia Tech graduate · Tutors scored 1450+ on the SAT
      </div>
    </div>
  );
}
