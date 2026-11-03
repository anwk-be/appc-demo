/* Member community concept: shared shell, sample content and interactions.
   People, posts and numbers are SAMPLE content for the concept only. */

(function () {
  const EXTRA = {
    home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    help: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/>',
    thumb: '<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
    reply: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    clip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
    landmark: '<path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="m12 2 8 5H4z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68 1.65 1.65 0 0 0 10 3.17V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    laptop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
    coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    grad: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    video: '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    poll: '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="5" width="3" height="12"/>'
  };
  const ic = (name, cls = "") => EXTRA[name]
    ? `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${EXTRA[name]}</svg>`
    : APPC.icon(name, cls);

  /* ---------- Sample content ---------- */
  const CM = (window.CM = {});
  const post = (code) => APPC.members.find((m) => m.code === code) || { name: "APPC secretariat", code: "AP" };

  CM.me = { id: "mere", name: "Mere Tuilagi", role: "Customs and Compliance Lead", org: "FJ" };

  CM.people = [
    CM.me,
    { id: "kenji", name: "Kenji Morita", role: "International Mail Compliance Manager", org: "JP", groups: ["regulatory", "capability"], helps: ["US duty collection", "Advance data"], mod: "regulatory" },
    { id: "aroha", name: "Aroha Wilson", role: "Trade Compliance Manager", org: "NZ", groups: ["regulatory", "ecommerce"], helps: ["Returns", "Pacific routes"] },
    { id: "daniel", name: "Daniel Tan", role: "Head of Cross-border Products", org: "SG", groups: ["ecommerce", "air"], helps: ["ePacket", "Marketplaces"], mod: "ecommerce" },
    { id: "siriporn", name: "Siriporn Chaiyaporn", role: "Hub Operations Manager", org: "TH", groups: ["operations", "quality"], helps: ["Hub transit", "Disruption planning"], mod: "operations" },
    { id: "bat", name: "Bat-Erdene Gansukh", role: "Digital Services Lead", org: "MN", groups: ["it"], helps: ["Tracking integration"] },
    { id: "nimal", name: "Nimal Perera", role: "Customs Liaison Officer", org: "LK", groups: ["regulatory"], helps: ["Customs declarations"] },
    { id: "priya", name: "Priya Raman", role: "Quality of Service Analyst", org: "IN", groups: ["quality"], helps: ["QSF projects", "Benchmarking"], mod: "quality" },
    { id: "jun", name: "Jun-ho Lee", role: "IT Architect", org: "KR", groups: ["it"], helps: ["EDI messages", "APIs"], mod: "it" },
    { id: "sarah", name: "Sarah Mitchell", role: "Air Network Manager", org: "AU", groups: ["air", "operations"], helps: ["Air capacity", "Carrier contracts"], mod: "air" },
    { id: "sokha", name: "Sokha Chan", role: "Finance Manager", org: "KH", groups: ["finance"], helps: [] },
    { id: "joel", name: "Joel Kalsakau", role: "Postmaster, International", org: "VU", groups: ["operations", "capability"], helps: [] },
    { id: "wei", name: "Lim Wei Ling", role: "Settlement and Pricing Lead", org: "SG", groups: ["finance"], helps: ["Terminal dues"], mod: "finance" },
    { id: "appc", name: "APPC secretariat", role: "Community host", org: "AP", groups: [], helps: [], mod: "capability" }
  ];
  const person = (id) => CM.people.find((p) => p.id === id);
  const initials = (name) => name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const pic = (p, size = "") => `<span class="pic ${size} ${p.id === "appc" ? "pic--appc" : p.id === CM.me.id ? "pic--me" : ""}" aria-hidden="true">${p.id === "appc" ? "APP" : initials(p.name)}</span>`;
  const byline = (p) => `<strong>${p.name}</strong>${p.id === "appc" ? "" : ` · ${post(p.org).name}`}`;

  CM.groups = [
    { id: "regulatory", icon: "landmark", title: "Regulatory and customs", text: "US and EU rules, duty collection, advance data", members: 64, week: 23, pilot: true },
    { id: "operations", icon: "gear", title: "Operations", text: "Handover, routes and disruption handling", members: 48, week: 11 },
    { id: "air", icon: "plane", title: "Air and transport", text: "Air capacity and carrier contracts", members: 31, week: 6 },
    { id: "ecommerce", icon: "cart", title: "E-commerce and marketing", text: "Cross-border sellers and ePacket", members: 42, week: 9 },
    { id: "it", icon: "laptop", title: "IT and digital", text: "Vendors, tracking and data standards", members: 37, week: 8 },
    { id: "finance", icon: "coins", title: "Finance", text: "Settlement, terminal dues and pricing", members: 26, week: 3 },
    { id: "quality", icon: "award", title: "Quality of service", text: "Delivery benchmarks and improvement targets", members: 39, week: 7 },
    { id: "capability", icon: "grad", title: "Capability building", text: "Webinars, training and mentoring", members: 71, week: 12 }
  ];
  const group = (id) => CM.groups.find((g) => g.id === id);
  CM.myGroups = ["regulatory", "operations", "capability"];

  CM.threads = [
    { id: "duty", group: "regulatory", kind: "Question", by: "mere", ago: "2 days ago", replies: 4, helpful: 14,
      title: "How are you collecting duty on US-bound parcels now that de minimis has ended?",
      text: "We paused most US-bound parcels after 29 August 2025 and want to restart safely. Which duty collection model are you using, and how did you train counter staff?",
      answer: { by: "kenji", text: "We use a delivered-duty-paid model through a qualified party. Our playbook covers counter scripts, data fields and staff training." },
      posts: ["JP", "NZ", "SG", "LK"] },
    { id: "hub", group: "operations", kind: "Discussion", by: "siriporn", ago: "5 hours ago", replies: 4, helpful: 9,
      title: "Heads-up: transit delays through our Bangkok hub this week",
      text: "Expect 1–2 extra days on transit mail routed via Bangkok until Friday. Reply if you're seeing knock-on effects so we can prioritise your dispatches.",
      posts: ["KH", "LA", "VN"] },
    { id: "ead", group: "it", kind: "Question", by: "bat", ago: "Yesterday", replies: 3, helpful: 5,
      title: "Which vendors do you use for electronic advance data at the counter?",
      text: "We're choosing a system to capture customs data at 40 counters. What are you using, and what would you avoid?",
      posts: ["KR", "SG"] },
    { id: "epacket", group: "ecommerce", kind: "Discussion", by: "daniel", ago: "3 days ago", replies: 8, helpful: 17,
      title: "Join a shared ePacket campaign for the 11.11 sales season?",
      text: "We'd like to co-market ePacket with any posts interested. Shared creative, one landing page, your own rates. Six posts have said yes so far.",
      posts: ["MY", "TH", "VN", "PH"] }
  ];

  CM.events = [
    { day: "12", mon: "May", title: "Webinar: restarting US-bound parcels", group: "regulatory", host: "Hosted by Japan Post", going: 38 },
    { day: "26", mon: "May", title: "Clinic: preparing a QSF project", group: "quality", host: "Hosted by APPC secretariat", going: 21 },
    { day: "08", mon: "Jun", title: "APPC General Assembly 2027, Bangkok", group: "capability", host: "All members", going: 96 }
  ];

  CM.files = [
    { title: "US duty collection playbook", meta: "Shared by Japan Post · PDF · 2.1 MB", group: "regulatory" },
    { title: "Counter staff training: customs declarations", meta: "Shared by New Zealand Post · Slides · 6.4 MB", group: "regulatory" },
    { title: "Advance data fields checklist", meta: "Shared by Singpost · Spreadsheet · 0.3 MB", group: "regulatory" },
    { title: "EU import rules: briefing note", meta: "Shared by APPC secretariat · PDF · 0.8 MB", group: "regulatory" }
  ];

  CM.help = {
    requests: [
      { by: "mere", title: "Training template for counter staff on customs declarations", text: "We'd like to adapt a ready-made course rather than start from scratch.", group: "regulatory", offers: 2 },
      { by: "joel", title: "Advice on choosing a tracking provider", text: "Small post, limited budget. What should we ask vendors?", group: "it", offers: 1 },
      { by: "sokha", title: "Peer review of our 2027 pricing approach", text: "Looking for a 30-minute call with a post that has reviewed terminal dues recently.", group: "finance", offers: 0 }
    ],
    offers: [
      { by: "kenji", title: "1-hour clinic on US duty collection", text: "Open to any post planning to restart US-bound parcels. Up to 4 posts per session.", group: "regulatory", taken: 3, cap: 4 },
      { by: "aroha", title: "Our returns process playbook", text: "Templates and lessons from setting up cross-border returns.", group: "ecommerce", taken: 5, cap: null },
      { by: "sarah", title: "Disruption planning mentoring for Pacific posts", text: "Monthly call for six months on contingency routes and air capacity.", group: "air", taken: 2, cap: 3 },
      { by: "siriporn", title: "Study visit to our Bangkok hub", text: "Two-day visit for operations staff, timed with the 2027 General Assembly.", group: "operations", taken: 4, cap: 8 }
    ]
  };

  /* ---------- Shell ---------- */
  const page = document.body.dataset.cm;
  const nav = [
    { id: "home", label: "Home", href: "index.html", icon: "home" },
    { id: "groups", label: "Groups", href: "groups.html", icon: "grid" },
    { id: "help", label: "Help exchange", href: "help.html", icon: "help" },
    { id: "directory", label: "Directory", href: "directory.html", icon: "users" }
  ];
  const top = document.getElementById("cm-top");
  if (top) {
    top.outerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="cm-top">
        <a class="brand" href="index.html"><span class="brand__mark" aria-hidden="true">APP</span><span class="brand__name">APPC Community<small>Members only</small></span></a>
        <div class="cm-search"><label class="sr-only" for="cm-q">Search the community</label>${ic("search")}<input id="cm-q" type="search" placeholder="Search discussions, files and people"></div>
        <div class="cm-top__right">
          <a class="cm-back" href="../index.html">← app.coop</a>
          <button class="cm-icon-btn" type="button" aria-label="Notifications, 3 new" data-toast="3 new: Kenji answered your question, a help offer matched your request, and a webinar starts next week.">${ic("bell")}<span class="badge">3</span></button>
          <span class="cm-me">${pic(CM.me)}<span>${CM.me.name}<small>${post(CM.me.org).name}</small></span></span>
        </div>
      </header>`;
  }
  const side = document.getElementById("cm-side");
  if (side) {
    const activeGroup = document.body.dataset.group;
    side.outerHTML = `
      <aside class="cm-side" aria-label="Community">
        <ul class="cm-nav">${nav.map((n) => `<li><a href="${n.href}"${n.id === page ? ' aria-current="page"' : ""}>${ic(n.icon)}${n.label}</a></li>`).join("")}</ul>
        <h2>My groups</h2>
        <ul class="cm-nav cm-side__groups">${CM.myGroups.map((id) => { const g = group(id); return `<li><a href="group.html"${id === activeGroup ? ' aria-current="page"' : ""}><span class="dot ${g.week > 10 ? "is-new" : ""}"></span>${g.title}</a></li>`; }).join("")}</ul>
      </aside>`;
  }
  document.body.insertAdjacentHTML("beforeend", `
    <div class="cm-proto">
      <label><input type="checkbox" id="feature-toggle"> Show proposal features</label>
      <a href="../index.html">Back to website</a>
    </div>
    <div class="toast" role="status" aria-live="polite"></div>`);
  const ft = document.getElementById("feature-toggle");
  try { ft.checked = localStorage.getItem("appc-features") === "1"; } catch (e) {}
  document.body.classList.toggle("show-features", ft.checked);
  ft.addEventListener("change", () => {
    document.body.classList.toggle("show-features", ft.checked);
    try { localStorage.setItem("appc-features", ft.checked ? "1" : "0"); } catch (e) {}
  });

  const toastEl = document.querySelector(".toast");
  let toastTimer;
  CM.toast = (msg) => {
    toastEl.textContent = msg; toastEl.classList.add("is-on");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove("is-on"), 3200);
  };
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-toast]");
    if (t) { e.preventDefault(); CM.toast(t.dataset.toast); }
    const h = e.target.closest(".act[data-helpful]");
    if (h) {
      const on = h.getAttribute("aria-pressed") !== "true";
      h.setAttribute("aria-pressed", on);
      const n = h.querySelector("b"); n.textContent = +n.textContent + (on ? 1 : -1);
    }
    const once = e.target.closest("[data-once]");
    if (once && !once.classList.contains("is-done")) {
      once.classList.add("is-done");
      once.innerHTML = ic("check") + once.dataset.once;
      if (once.dataset.msg) CM.toast(once.dataset.msg);
      const counter = once.closest("[data-count]")?.querySelector(".count");
      if (counter) counter.textContent = +counter.textContent + 1;
    }
  });
  document.querySelectorAll("[data-ic]").forEach((el) => { el.innerHTML = ic(el.dataset.ic); });

  /* ---------- Renderers ---------- */
  CM.render = {
    thread: (t, { answer = true } = {}) => {
      const p = person(t.by), g = group(t.group);
      return `
      <article class="post">
        <div class="post__head">${pic(p)}<div class="post__who">${byline(p)}<br>in <a href="group.html">${g.title}</a> · ${t.ago}</div>
          <span class="post__kind"><span class="pill ${t.kind === "Question" ? "pill--red" : "pill--muted"}">${t.kind}</span></span></div>
        <h3><a href="thread.html">${t.title}</a></h3>
        <p>${t.text}</p>
        ${answer && t.answer ? `<div class="answer-preview">${ic("check")}<div><strong>Accepted answer from ${person(t.answer.by).name}, ${post(person(t.answer.by).org).name}:</strong> ${t.answer.text}</div></div>` : ""}
        <div class="post__actions">
          <button class="act" type="button" data-helpful aria-pressed="false">${ic("thumb")}Helpful <b>${t.helpful}</b></button>
          <a class="act" href="thread.html">${ic("reply")}${t.replies} replies</a>
          <span class="post__posts" title="Posts taking part">${t.posts.map((c) => `<span class="pic pic--sm">${c}</span>`).join("")}<span style="margin-left:6px">${t.posts.length} posts replied</span></span>
        </div>
      </article>`;
    },
    event: (ev) => `
      <li data-count><span class="date-tile"><b>${ev.day}</b><small>${ev.mon}</small></span>
        <div style="flex:1"><strong>${ev.title}</strong><span class="muted">${ev.host} · <span class="count">${ev.going}</span> going</span><br>
        <button class="btn btn--secondary btn--sm" type="button" data-once="Going" data-msg="You're registered. It's in your calendar and the weekly digest.">RSVP</button></div></li>`,
    file: (f) => `
      <div class="file-row"><span class="resource__icon">${ic("file")}</span><div><strong>${f.title}</strong>${f.meta}</div>
        <a class="resource__dl" href="#" data-toast="Prototype: downloads aren't connected." aria-label="Download ${f.title}">${ic("download")}</a></div>`,
    groupCard: (g) => `
      <div class="group-card${g.pilot ? " is-pilot" : ""}">
        <span class="icon-tile">${ic(g.icon)}</span>
        <h3><a href="group.html">${g.title}</a> ${g.pilot ? '<span class="pill">Pilot</span>' : ""}</h3>
        <p>${g.text}</p>
        <div class="group-card__foot"><span>${g.members} members · ${g.week} posts this week</span>
          ${CM.myGroups.includes(g.id) ? '<span class="pill pill--green">Joined</span>' : `<button class="btn btn--secondary btn--sm" type="button" data-once="Requested" data-msg="Request sent. The group moderator will approve it.">Ask to join</button>`}</div>
      </div>`,
    person: (p) => `
      <div class="person" data-org="${p.org}" data-groups="${(p.groups || []).join(" ")}" data-text="${(p.name + " " + p.role + " " + post(p.org).name + " " + (p.helps || []).join(" ")).toLowerCase()}">
        ${pic(p, "pic--lg")}
        <strong>${p.name}</strong>
        <span class="role">${p.role}${p.mod ? ` · Moderator, ${group(p.mod).title}` : ""}</span>
        <span class="org">${post(p.org).name}</span>
        <div class="tags">${(p.helps || []).map((h) => `<span>Can help with: ${h}</span>`).join("")}</div>
        <div class="btn-row">
          <button class="btn btn--navy btn--sm" type="button" data-message="${p.id}">${ic("send")}Message</button>
          <button class="btn btn--secondary btn--sm" type="button" data-once="Following" data-msg="You'll see ${p.name}'s posts in your feed.">Follow</button>
        </div>
      </div>`,
    helpCard: (h, kind) => {
      const p = person(h.by), g = group(h.group);
      const full = h.cap && h.taken >= h.cap;
      return `
      <div class="help-card" data-count>
        <div class="help-card__top">${pic(p)}<div class="post__who">${byline(p)}<br>${g.title}</div></div>
        <h3>${h.title}</h3>
        <p>${h.text}</p>
        <div class="help-card__foot">
          ${kind === "request"
            ? `<span><span class="count">${h.offers}</span> ${h.offers === 1 ? "post has" : "posts have"} offered help</span>
               ${h.by === CM.me.id ? '<span class="pill">Your request</span>' : `<button class="btn btn--primary btn--sm" type="button" data-once="Offered" data-msg="${p.name} will get your offer and can message you directly.">I can help</button>`}`
            : `<span><span class="count">${h.taken}</span>${h.cap ? ` of ${h.cap}` : ""} posts signed up</span>
               ${full ? '<span class="pill pill--muted">Full</span>' : `<button class="btn btn--primary btn--sm" type="button" data-once="Requested" data-msg="${h.cap ? `Request sent to ${post(p.org).name}. You'll get a message to agree a time.` : `${post(p.org).name}'s files are now in your library.`}">${h.cap ? "Request a spot" : "Get a copy"}</button>`}`}
        </div>
      </div>`;
    }
  };

  /* ---------- Message dialog (directory and threads) ---------- */
  document.body.insertAdjacentHTML("beforeend", `
    <dialog class="cm-modal" id="msg-dialog">
      <form method="dialog">
        <div class="cm-modal__head"><h2 id="msg-title">Message</h2><button class="cm-icon-btn" style="color:var(--navy)" value="cancel" aria-label="Close">${ic("close")}</button></div>
        <div class="cm-modal__body">
          <div class="field"><label for="msg-body">Your message</label><textarea id="msg-body" rows="5"></textarea></div>
          <div class="btn-row" style="margin-top:16px"><button class="btn btn--primary" value="send">${ic("send")}Send</button></div>
        </div>
      </form>
    </dialog>`);
  const dlg = document.getElementById("msg-dialog");
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-message]");
    if (!b) return;
    const p = person(b.dataset.message);
    document.getElementById("msg-title").textContent = `Message ${p.name}, ${post(p.org).name}`;
    document.getElementById("msg-body").value = `Hi ${p.name.split(" ")[0]}, I'm ${CM.me.name}, ${CM.me.role} at ${post(CM.me.org).name}. `;
    dlg.showModal();
  });
  dlg.addEventListener("close", () => { if (dlg.returnValue === "send") CM.toast("Message sent. Replies arrive here and by email."); });

  CM.ic = ic; CM.person = person; CM.group = group; CM.post = post; CM.pic = pic; CM.byline = byline;
})();
