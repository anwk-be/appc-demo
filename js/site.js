/* Shared header, footer and components. In WordPress these become
   header.php, footer.php and template parts; here they are rendered by JS
   so every static page stays in sync. */

(function () {
  const ICONS = {
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M8 17v-5"/><path d="M13 17V8"/><path d="M18 17v-9"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>'
  };
  const icon = (name, cls = "") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  APPC.icon = icon;

  const NAV = [
    { id: "about", label: "About", href: "about.html" },
    { id: "members", label: "Members", href: "members.html" },
    { id: "what-we-do", label: "What we do", href: "what-we-do.html" },
    { id: "news", label: "News", href: "news.html" },
    { id: "events", label: "Events", href: "events.html" },
    { id: "resources", label: "Resources", href: "resources.html" },
    { id: "membership", label: "Membership", href: "membership.html" },
    { id: "partner", label: "Partner", href: "partner.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];
  const page = document.body.dataset.page || "";
  const current = (id) => (id === page ? ' aria-current="page"' : "");

  const brand = `
    <a class="brand" href="index.html" aria-label="Asia Pacific Post Cooperative, home">
      <span class="brand__mark" aria-hidden="true">APP</span>
      <span class="brand__name"><span class="long">Asia Pacific<br>Post Cooperative</span><span class="short">APPC</span></span>
    </a>`;

  const header = document.getElementById("site-header");
  if (header) {
    header.outerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="site-header">
        <div class="container site-header__inner">
          ${brand}
          <nav class="main-nav" aria-label="Main">
            <ul>${NAV.map((n) => `<li><a href="${n.href}"${current(n.id)}>${n.label}</a></li>`).join("")}</ul>
          </nav>
          <a class="btn btn--navy header-login" href="login.html">${icon("lock")}<span class="label-long">Member login</span><span class="label-short">Login</span></a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">${icon("menu")}</button>
        </div>
        <nav class="mobile-nav" id="mobile-nav" aria-label="Main">
          <ul>${[{ id: "home", label: "Home", href: "index.html" }, ...NAV]
            .map((n) => `<li><a href="${n.href}"${current(n.id)}>${n.label}</a></li>`).join("")}</ul>
        </nav>
      </header>`;
    const toggle = document.querySelector(".menu-toggle");
    const mobile = document.getElementById("mobile-nav");
    toggle.addEventListener("click", () => {
      const open = mobile.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      toggle.innerHTML = icon(open ? "close" : "menu");
    });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.outerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              ${brand}
              <p>An association of 28 postal operators across Asia and the Pacific, working together since 1994.</p>
            </div>
            <div>
              <h2>Explore</h2>
              <ul>
                <li><a href="about.html">About APPC</a></li>
                <li><a href="members.html">Members</a></li>
                <li><a href="what-we-do.html">What we do</a></li>
                <li><a href="news.html">News and insights</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="resources.html">Resources</a></li>
              </ul>
            </div>
            <div>
              <h2>Get involved</h2>
              <ul>
                <li><a href="membership.html">Membership</a></li>
                <li><a href="partner.html">Partner with us</a></li>
                <li><a href="contact.html">Contact the secretariat</a></li>
                <li><a href="login.html">Member login</a></li>
              </ul>
            </div>
            <div>
              <h2>Secretariat</h2>
              <ul class="contact-list">
                <li>${icon("mail")}<a href="mailto:info@app.coop">info@app.coop</a></li>
                <li>${icon("pin")}<span>447 Geylang Road, #02-00<br>Singapore 389406<br>(moving to Bangkok in 2027)</span></li>
                <li>${icon("globe")}<a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 Asia Pacific Post Cooperative</span>
            <nav aria-label="Legal"><a href="#">Terms of use</a> · <a href="#">Cookie policy</a> · <a href="#">Privacy</a></nav>
          </div>
        </div>
      </footer>
      <details class="proto-bar">
        <summary>Prototype tour</summary>
        <div class="proto-bar__panel">
          <strong>Suggested click-through</strong>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="members.html">Members map</a></li>
            <li><a href="what-we-do.html">What we do</a></li>
            <li><a href="news.html">News</a> → <a href="article.html">Article</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="resources.html">Resources</a></li>
            <li><a href="membership.html">Membership</a></li>
            <li><a href="partner.html">Partner with us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="login.html">Member login</a></li>
          </ol>
          <small>Sample content is used for news, events and resources.</small>
        </div>
      </details>`;
  }

  /* ---------- Reusable renderers ---------- */
  const initials = (name) => name.replace(/^(Mr|Ms|Mrs|Dr)\.? /, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

  APPC.render = {
    newsCard: (n, feature = false) => `
      <a class="card news-card${feature ? " news-card--feature" : ""}" href="article.html">
        <div class="placeholder-img">${icon("image")}</div>
        <div class="news-card__body">
          <span class="eyebrow">${n.cat}</span>
          <h3>${n.title}</h3>
          <p>${n.excerpt}</p>
          <time>${n.date}</time>
        </div>
      </a>`,
    event: (e) => `
      <li class="event${e.upcoming ? "" : " event--past"}">
        <details>
          <summary>
            <span class="event__date"><span class="day">${e.day}</span><span class="mon">${e.mon} ${e.year}</span></span>
            <span class="event__main">
              <span class="tag">${e.type}</span>
              <h3>${e.title}</h3>
              <span class="event__loc">${icon("pin")}${e.loc}</span>
            </span>
            ${icon("chevron", "event__chev")}
          </summary>
          <div class="event__detail">
            <p>${e.text}</p>
            ${e.upcoming ? `<a class="link-arrow" href="contact.html?type=general">Register interest ${icon("arrow")}</a>` : `<a class="link-arrow" href="article.html">Read the recap ${icon("arrow")}</a>`}
          </div>
        </details>
      </li>`,
    programme: (p) => `
      <div class="card programme-card" id="${p.id}">
        <span class="icon-tile">${icon(p.icon)}</span>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
        <a class="link-arrow" href="what-we-do.html#${p.id}">Learn more ${icon("arrow")}</a>
      </div>`,
    person: (p) => `
      <div class="card person-card">
        <span class="avatar" aria-hidden="true">${initials(p.name)}</span>
        <strong>${p.name}</strong>
        <span class="role">${p.role}</span>
        <span class="org">${p.org}</span>
      </div>`,
    resource: (r) => `
      <div class="resource" data-type="${r.type}">
        <span class="resource__icon">${icon("file")}</span>
        <div class="resource__body">
          <span class="tag">${r.type}</span>
          <strong>${r.title}</strong>
          <span class="meta">${r.meta}</span>
          ${r.text ? `<p>${r.text}</p>` : ""}
        </div>
        <a class="resource__dl" href="#" aria-label="Download ${r.title}">${icon("download")}</a>
      </div>`,
    memberCard: (m) => `
      <button class="member-card" type="button" data-code="${m.code}" data-region="${m.region}">
        <span class="member-card__code" aria-hidden="true">${m.code}</span>
        <span><strong>${m.name}</strong><span class="country">${m.country}</span></span>
      </button>`
  };

  // Fill any [data-render] container: data-render="news" data-limit="3" etc.
  document.querySelectorAll("[data-render]").forEach((el) => {
    const kind = el.dataset.render;
    const limit = +el.dataset.limit || Infinity;
    const r = APPC.render;
    if (kind === "news") el.innerHTML = APPC.news.slice(0, limit).map((n, i) => r.newsCard(n, el.dataset.feature === "true" && i === 0)).join("");
    if (kind === "events-upcoming") el.innerHTML = APPC.events.filter((e) => e.upcoming).slice(0, limit).map(r.event).join("");
    if (kind === "events-past") el.innerHTML = APPC.events.filter((e) => !e.upcoming).slice(0, limit).map(r.event).join("");
    if (kind === "programmes") el.innerHTML = APPC.programmes.slice(0, limit).map(r.programme).join("");
    if (kind === "board") el.innerHTML = APPC.board.map(r.person).join("");
    if (kind === "team") el.innerHTML = APPC.team.map(r.person).join("");
    if (kind === "resources") el.innerHTML = APPC.resources.slice(0, limit).map(r.resource).join("");
  });
  document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = icon(el.dataset.icon); });

  /* ---------- Filter chips ---------- */
  APPC.chips = function (container, values, onChange) {
    container.innerHTML = ["All", ...values].map((v, i) => `<button class="chip" type="button" aria-pressed="${i === 0}" data-value="${v}">${v}</button>`).join("");
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      container.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === btn));
      onChange(btn.dataset.value);
    });
  };

  const resFilter = document.getElementById("resource-filter");
  if (resFilter) {
    const types = [...new Set(APPC.resources.map((r) => r.type))];
    APPC.chips(resFilter, types, (v) => {
      document.querySelectorAll(".resource").forEach((el) => { el.hidden = v !== "All" && el.dataset.type !== v; });
    });
  }

  /* ---------- Member map ---------- */
  const W = 1200, H = 560;
  const project = (lat, lon) => [((lon - 40) / (182 - 40)) * W, ((52 - lat) / 100) * H];
  const REGION_LABELS = [
    ["West Asia", 52, 32], ["South Asia", 80, 15], ["East Asia", 128, 47], ["Southeast Asia", 112, -12],
    ["Oceania", 135, -28], ["Pacific Islands", 166, -27]
  ];

  APPC.map = function (wrap, { onSelect, interactive = true } = {}) {
    let grid = "";
    for (let x = 0; x <= W; x += 150) grid += `<line x1="${x}" y1="0" x2="${x}" y2="${H}"/>`;
    for (let y = 0; y <= H; y += 70) grid += `<line x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
    const labels = REGION_LABELS.map(([t, lon, lat]) => { const [x, y] = project(lat, lon); return `<text class="map-region" x="${x}" y="${y}" text-anchor="middle">${t}</text>`; }).join("");
    const dots = APPC.members.map((m) => {
      const [x, y] = project(m.lat, m.lon);
      return `<g class="map-dot" data-code="${m.code}" ${interactive ? `tabindex="0" role="button" aria-label="${m.name}, ${m.country}"` : ""}>
        <circle class="ring" cx="${x}" cy="${y}" r="15"/><circle class="dot" cx="${x}" cy="${y}" r="8"/></g>`;
    }).join("");
    const hq = APPC.secretariatHQ, [hx, hy] = project(hq.lat, hq.lon);
    wrap.innerHTML = `
      <svg class="map-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Map of APPC's 28 member posts across Asia and the Pacific">
        <g stroke="#FFFFFF" stroke-opacity=".75" stroke-width="1">${grid}</g>
        ${labels}
        <g class="map-hq"><circle cx="${hx}" cy="${hy}" r="11"/></g>
        ${dots}
      </svg>
      <div class="map-pop" hidden></div>
      <div class="map-legend"><span><i style="background:var(--red)"></i>Member post</span><span><i style="background:var(--yellow)"></i>Secretariat (Bangkok, from 2027)</span></div>`;

    const pop = wrap.querySelector(".map-pop");
    const svg = wrap.querySelector("svg");
    const showPop = (g, html) => {
      pop.innerHTML = html; pop.hidden = false;
      const c = g.querySelector("circle").getBoundingClientRect(), box = wrap.getBoundingClientRect();
      let left = c.left - box.left + 18, top = c.top - box.top - 10;
      if (left + 270 > box.width) left = c.left - box.left - 270;
      if (top + 110 > box.height) top = box.height - 120;
      pop.style.left = Math.max(8, left) + "px"; pop.style.top = Math.max(8, top) + "px";
    };
    const select = (code) => {
      svg.querySelectorAll(".map-dot").forEach((g) => g.classList.toggle("is-active", g.dataset.code === code));
      const g = svg.querySelector(`.map-dot[data-code="${code}"]`);
      const m = APPC.members.find((x) => x.code === code);
      if (onSelect) onSelect(m);
      else if (g) showPop(g, `<strong>${m.name}</strong>${m.country} · ${m.region}<br><a href="members.html#${m.code}">View profile →</a>`);
    };
    if (interactive) {
      svg.addEventListener("click", (e) => { const g = e.target.closest(".map-dot"); if (g) select(g.dataset.code); });
      svg.addEventListener("keydown", (e) => { const g = e.target.closest(".map-dot"); if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); select(g.dataset.code); } });
      const hqEl = svg.querySelector(".map-hq");
      hqEl.addEventListener("mouseenter", () => showPop(hqEl, `<strong>${hq.label}</strong>${hq.sub}`));
      document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) pop.hidden = true; });
    }
    return {
      select,
      dim: (region) => svg.querySelectorAll(".map-dot").forEach((g) => {
        const m = APPC.members.find((x) => x.code === g.dataset.code);
        g.classList.toggle("is-dim", region !== "All" && m.region !== region);
      })
    };
  };

  const homeMap = document.getElementById("home-map");
  if (homeMap) APPC.map(homeMap);

  /* ---------- Members directory ---------- */
  const dir = document.getElementById("member-grid");
  if (dir) {
    const panel = document.getElementById("profile-panel");
    const showProfile = (m) => {
      panel.innerHTML = `
        <span class="member-card__code" aria-hidden="true">${m.code}</span>
        <span class="eyebrow">${m.region}</span>
        <h3>${m.name}</h3>
        <p>The national postal operator of ${m.country} and a member of APPC.</p>
        <dl>
          <dt>Country</dt><dd>${m.country}</dd>
          <dt>Region</dt><dd>${m.region}</dd>
          <dt>Website</dt><dd>${m.web ? `<a href="https://${m.web}" target="_blank" rel="noopener">${m.web}</a>` : "To be added"}</dd>
        </dl>
        <a class="link-arrow" href="news.html">News from ${m.name} ${icon("arrow")}</a>`;
      dir.querySelectorAll(".member-card").forEach((c) => c.classList.toggle("is-active", c.dataset.code === m.code));
      history.replaceState(null, "", "#" + m.code);
    };
    const map = APPC.map(document.getElementById("members-map"), { onSelect: showProfile });
    dir.innerHTML = APPC.members.map(APPC.render.memberCard).join("") +
      `<div class="member-card member-card--tbc" data-region="tbc"><span class="member-card__code" aria-hidden="true">28</span><span><strong>28th member</strong><span class="country">Profile to be confirmed</span></span></div>`;
    dir.addEventListener("click", (e) => {
      const c = e.target.closest(".member-card[data-code]");
      if (c) { map.select(c.dataset.code); if (window.innerWidth < 1024) panel.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
    });
    APPC.chips(document.getElementById("region-filter"), APPC.regions, (v) => {
      dir.querySelectorAll(".member-card").forEach((c) => { c.hidden = v !== "All" && c.dataset.region !== v; });
      map.dim(v);
    });
    const start = location.hash.slice(1);
    if (APPC.members.some((m) => m.code === start)) map.select(start);
  }

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contact-form");
  if (form) {
    const type = new URLSearchParams(location.search).get("type");
    if (type) form.elements.enquiry.value = type;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const name = form.elements.name.value.split(" ")[0];
      form.outerHTML = `<div class="form-success" role="status"><strong>Thank you, ${name}.</strong>The secretariat will reply within two working days. (Prototype: nothing has been sent.)</div>`;
    });
  }
})();
