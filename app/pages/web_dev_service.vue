<script setup>
function toggleService(row) {
  const isActive = row.classList.contains('active')
  document.querySelectorAll('.service-row.active').forEach(r => r.classList.remove('active'))
  if (!isActive) row.classList.add('active')
}
</script>

<template>
  <div class="pg-webdev">

    <!-- ═══ HERO ═══ -->
    <section class="h-root">
      <div class="h-grid-bg"></div>
      <div class="h-blob-1"></div>
      <div class="h-blob-2"></div>

      <div class="h-left">
        <div class="h-eyebrow">
          <div class="h-eyebrow-dot"></div>
          Web Development
        </div>

        <h1 class="h-title">
          High-Performance
          <span class="h-accent">Websites That <span class="h-accent-green">Convert.</span></span>
        </h1>

        <p class="h-desc">
          CoderArth builds SEO-ready, mobile-first web applications using React,
          Next.js, and Node.js — engineered for speed, scalability, and measurable
          results your business can actually see.
        </p>

        <div class="h-btns">
          <NuxtLink to="/consultancy" class="h-btn-primary">
            Start a Project
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>
          <a href="#portfolio" class="h-btn-secondary">
            View Case Studies
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>

        <div class="h-trust-row">
          <div class="h-avatars">
            <div class="h-avatar" style="background: #1a56db">AK</div>
            <div class="h-avatar" style="background: #10b981">SR</div>
            <div class="h-avatar" style="background: #8b5cf6">MP</div>
            <div class="h-avatar" style="background: #f59e0b">RD</div>
          </div>
          <div class="h-divider"></div>
          <div class="h-trust-text">
            <div class="h-stars">★★★★★</div>
            <strong>4.9/5</strong> from 120+ clients
          </div>
        </div>
      </div>

      <div class="h-right">
        <div class="h-img-wrap">
          <div class="h-card-float h-card-tl">
            <div class="h-card-icon h-card-icon-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h4l3-7 4 14 3-7h4" stroke="#1a56db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <div class="h-card-label">Core Web Vitals</div>
              <div class="h-card-val">99/100 <span>↑ Perfect</span></div>
            </div>
          </div>

          <div class="h-img-frame">
            <img src="/images/webdev.png" alt="Web Development" class="h-hero-img" />
          </div>

          <div class="h-card-float h-card-mr">
            <div class="h-card-icon h-card-icon-amber">
              <i class="fa-solid fa-arrow-trend-up" style="color: #f59e0b; font-size: 14px;"></i>
            </div>
            <div>
              <div class="h-card-label">Conversion rate</div>
              <div class="h-card-val">+43% <span>↑ MoM</span></div>
            </div>
          </div>

          <div class="h-delivery-card">
            <div class="h-delivery-eyebrow">Latest Delivery</div>
            <div class="h-delivery-name">NexaCommerce Platform</div>
            <div class="h-delivery-desc">Full-stack e-commerce. 50k+ daily users. Sub-1s load globally.</div>
            <div class="h-delivery-chips">
              <div class="h-delivery-chip">Next.js</div>
              <div class="h-delivery-chip">Node.js</div>
              <div class="h-delivery-chip">PostgreSQL</div>
              <div class="h-delivery-chip">AWS</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SERVICES ═══ -->
    <section class="services-section">
      <div class="section-header">
        <div class="section-header-left">
          <div class="section-eyebrow">Core Services</div>
          <h2 class="section-title">Everything Your Business<br /><span class="hi">Needs Online</span></h2>
        </div>
        <p class="section-header-right">
          A full-stack digital partner — design, development, AI, and growth — all under one roof.
        </p>
      </div>

      <div class="service-list">
        <div class="service-row active" @click="toggleService($event.currentTarget)">
          <div class="service-row-inner">
            <span class="sr-num">01</span>
            <div class="sr-left">
              <div class="sr-icon"><i class="fa-solid fa-code"></i></div>
              <span class="sr-name">Web Development</span>
            </div>
            <div class="sr-body">
              <p class="sr-desc">High-performance websites and web apps — SEO-ready, mobile-first, and conversion-optimised from day one with modern React &amp; Node.js stacks.</p>
              <div class="sr-tags">
                <span class="sr-tag">React</span><span class="sr-tag">Next.js</span><span class="sr-tag">Node.js</span><span class="sr-tag">TypeScript</span><span class="sr-tag">Headless CMS</span>
              </div>
            </div>
            <div class="sr-arrow">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 1v12M1 7h12" /></svg>
            </div>
          </div>
        </div>

        <div class="service-row" @click="toggleService($event.currentTarget)">
          <div class="service-row-inner">
            <span class="sr-num">02</span>
            <div class="sr-left">
              <div class="sr-icon"><i class="fa-solid fa-mobile-screen"></i></div>
              <span class="sr-name">App Development</span>
            </div>
            <div class="sr-body">
              <p class="sr-desc">Native and cross-platform mobile apps built with Flutter and React Native — polished UI, robust backend, shipped fast.</p>
              <div class="sr-tags">
                <span class="sr-tag">Flutter</span><span class="sr-tag">React Native</span><span class="sr-tag">iOS</span><span class="sr-tag">Android</span><span class="sr-tag">REST APIs</span>
              </div>
            </div>
            <div class="sr-arrow">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 1v12M1 7h12" /></svg>
            </div>
          </div>
        </div>

        <div class="service-row" @click="toggleService($event.currentTarget)">
          <div class="service-row-inner">
            <span class="sr-num">03</span>
            <div class="sr-left">
              <div class="sr-icon"><i class="fa-solid fa-robot"></i></div>
              <span class="sr-name">AI &amp; Automation</span>
            </div>
            <div class="sr-body">
              <p class="sr-desc">Chatbots, recommendation engines, data pipelines, and agentic workflows that reduce manual effort and unlock scale.</p>
              <div class="sr-tags">
                <span class="sr-tag">OpenAI</span><span class="sr-tag">LangChain</span><span class="sr-tag">Python</span><span class="sr-tag">n8n</span><span class="sr-tag">RAG</span>
              </div>
            </div>
            <div class="sr-arrow">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 1v12M1 7h12" /></svg>
            </div>
          </div>
        </div>

        <div class="service-row" @click="toggleService($event.currentTarget)">
          <div class="service-row-inner">
            <span class="sr-num">04</span>
            <div class="sr-left">
              <div class="sr-icon"><i class="fa-solid fa-pen-ruler"></i></div>
              <span class="sr-name">UI/UX Design</span>
            </div>
            <div class="sr-body">
              <p class="sr-desc">Research-driven design systems and prototypes that look stunning and convert — from wireframes to production-ready Figma files.</p>
              <div class="sr-tags">
                <span class="sr-tag">Figma</span><span class="sr-tag">Design Systems</span><span class="sr-tag">Prototyping</span><span class="sr-tag">Accessibility</span>
              </div>
            </div>
            <div class="sr-arrow">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 1v12M1 7h12" /></svg>
            </div>
          </div>
        </div>

        <div class="service-row" @click="toggleService($event.currentTarget)">
          <div class="service-row-inner">
            <span class="sr-num">05</span>
            <div class="sr-left">
              <div class="sr-icon"><i class="fa-solid fa-chart-line"></i></div>
              <span class="sr-name">SEO &amp; Growth</span>
            </div>
            <div class="sr-body">
              <p class="sr-desc">Technical SEO, Core Web Vitals optimisation, and growth experiments baked into every project — not bolted on after launch.</p>
              <div class="sr-tags">
                <span class="sr-tag">Technical SEO</span><span class="sr-tag">Core Web Vitals</span><span class="sr-tag">Analytics</span><span class="sr-tag">A/B Testing</span>
              </div>
            </div>
            <div class="sr-arrow">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 1v12M1 7h12" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PROCESS ═══ -->
    <section class="process-section">
      <div class="process-inner">
        <div class="section-header">
          <div class="section-header-left">
            <div class="section-eyebrow">How We Work</div>
            <h2 class="section-title">From Brief to <span class="hi">Live</span> in 5 Steps</h2>
          </div>
          <p class="section-header-right">
            A transparent, collaborative process designed to eliminate surprises and ship on time — every time.
          </p>
        </div>

        <div class="process-grid">
          <div class="process-step">
            <div class="step-num-wrap"><span class="step-num">01</span></div>
            <div class="step-icon-wrap"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="step-title">Discovery</div>
            <p class="step-desc">Goals, audience, technical constraints, and competitive landscape — all mapped out in a free consultation.</p>
          </div>
          <div class="process-step">
            <div class="step-num-wrap"><span class="step-num">02</span></div>
            <div class="step-icon-wrap"><i class="fa-solid fa-pencil-ruler"></i></div>
            <div class="step-title">Design</div>
            <p class="step-desc">Wireframes, high-fidelity Figma mockups, and interactive prototypes — your sign-off before a single line of code.</p>
          </div>
          <div class="process-step">
            <div class="step-num-wrap"><span class="step-num">03</span></div>
            <div class="step-icon-wrap"><i class="fa-solid fa-code"></i></div>
            <div class="step-title">Development</div>
            <p class="step-desc">Agile sprints with bi-weekly demos. CI/CD pipeline, code reviews, and automated testing built in from day one.</p>
          </div>
          <div class="process-step">
            <div class="step-num-wrap"><span class="step-num">04</span></div>
            <div class="step-icon-wrap"><i class="fa-solid fa-bug-slash"></i></div>
            <div class="step-title">QA &amp; Testing</div>
            <p class="step-desc">Cross-browser, device, performance, and accessibility testing — shipped only when it passes every check.</p>
          </div>
          <div class="process-step">
            <div class="step-num-wrap"><span class="step-num">05</span></div>
            <div class="step-icon-wrap"><i class="fa-solid fa-rocket"></i></div>
            <div class="step-title">Launch &amp; Support</div>
            <p class="step-desc">Zero-downtime deployment, monitoring setup, and ongoing maintenance plans to keep you scaling.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TECH STACK ═══ -->
    <section class="stack-section">
      <div class="stack-inner">
        <div class="section-header">
          <div class="section-header-left">
            <div class="section-eyebrow">Technology</div>
            <h2 class="section-title">Our <span class="hi">Tech Stack</span></h2>
          </div>
          <p class="section-header-right">
            We choose tools that are production-proven, developer-loved, and built for scale — not the flavour of the month.
          </p>
        </div>

        <div class="stack-grid">
          <div class="stack-cat">
            <div class="stack-cat-header">
              <div class="stack-cat-icon blue"><i class="fa-solid fa-layer-group"></i></div>
              <div class="stack-cat-label">Frontend</div>
            </div>
            <div class="stack-items">
              <span class="stack-item">React</span><span class="stack-item">Next.js</span>
              <span class="stack-item">TypeScript</span><span class="stack-item">Tailwind CSS</span>
              <span class="stack-item">Framer Motion</span>
            </div>
          </div>
          <div class="stack-cat">
            <div class="stack-cat-header">
              <div class="stack-cat-icon green"><i class="fa-solid fa-server"></i></div>
              <div class="stack-cat-label">Backend</div>
            </div>
            <div class="stack-items">
              <span class="stack-item">Node.js</span><span class="stack-item">Express</span>
              <span class="stack-item">NestJS</span><span class="stack-item">GraphQL</span>
              <span class="stack-item">REST APIs</span>
            </div>
          </div>
          <div class="stack-cat">
            <div class="stack-cat-header">
              <div class="stack-cat-icon blue"><i class="fa-solid fa-database"></i></div>
              <div class="stack-cat-label">Database &amp; Cloud</div>
            </div>
            <div class="stack-items">
              <span class="stack-item">PostgreSQL</span><span class="stack-item">MongoDB</span>
              <span class="stack-item">Redis</span><span class="stack-item">AWS</span>
              <span class="stack-item">Vercel</span>
            </div>
          </div>
          <div class="stack-cat">
            <div class="stack-cat-header">
              <div class="stack-cat-icon green"><i class="fa-solid fa-screwdriver-wrench"></i></div>
              <div class="stack-cat-label">CMS &amp; Tools</div>
            </div>
            <div class="stack-items">
              <span class="stack-item">Sanity</span><span class="stack-item">Contentful</span>
              <span class="stack-item">Strapi</span><span class="stack-item">Figma</span>
              <span class="stack-item">GitHub Actions</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PORTFOLIO ═══ -->
    <section class="portfolio-section" id="portfolio">
      <div class="portfolio-inner">
        <div class="section-header">
          <div class="section-header-left">
            <div class="section-eyebrow">Case Studies</div>
            <h2 class="section-title">Work That <span class="hi">Speaks</span></h2>
          </div>
          <p class="section-header-right">
            Real projects, real results — each one a step closer to what we can build for you.
          </p>
        </div>

        <div class="portfolio-grid">
          <div class="pcard">
            <div class="pcard-thumb thumb-bg-blue">
              <div class="thumb-pattern"></div>
              <div class="thumb-icon"><i class="fa-solid fa-cart-shopping"></i></div>
              <div class="pcard-thumb-label">E-Commerce</div>
            </div>
            <div class="pcard-body">
              <div class="pcard-tag">E-commerce · Next.js</div>
              <div class="pcard-title">NexaCommerce — Headless Storefront</div>
              <p class="pcard-desc">Full-stack headless commerce for a fashion brand. 50k+ daily active users, sub-1s LCP, 99/100 Lighthouse score.</p>
              <div class="pcard-stat">
                <div class="pstat"><div class="pstat-val">+43%</div><div class="pstat-label">Conversion</div></div>
                <div class="pstat"><div class="pstat-val">0.8s</div><div class="pstat-label">Load Time</div></div>
                <div class="pstat"><div class="pstat-val">50k+</div><div class="pstat-label">Daily Users</div></div>
              </div>
            </div>
          </div>

          <div class="pcard">
            <div class="pcard-thumb thumb-bg-green">
              <div class="thumb-pattern"></div>
              <div class="thumb-icon"><i class="fa-solid fa-heart-pulse"></i></div>
              <div class="pcard-thumb-label">HealthTech</div>
            </div>
            <div class="pcard-body">
              <div class="pcard-tag">HealthTech · React</div>
              <div class="pcard-title">MediTrack Patient Portal</div>
              <p class="pcard-desc">Patient management dashboard with real-time scheduling and EHR integrations. HIPAA-compliant.</p>
              <div class="pcard-stat">
                <div class="pstat"><div class="pstat-val">200+</div><div class="pstat-label">Clinics</div></div>
                <div class="pstat"><div class="pstat-val">40%</div><div class="pstat-label">Less Admin</div></div>
              </div>
            </div>
          </div>

          <div class="pcard">
            <div class="pcard-thumb thumb-bg-slate">
              <div class="thumb-pattern"></div>
              <div class="thumb-icon"><i class="fa-solid fa-chart-bar"></i></div>
              <div class="pcard-thumb-label">FinTech</div>
            </div>
            <div class="pcard-body">
              <div class="pcard-tag">FinTech · Node.js</div>
              <div class="pcard-title">FinEdge Analytics Dashboard</div>
              <p class="pcard-desc">Real-time financial analytics platform with websocket data feeds and custom charting engine.</p>
              <div class="pcard-stat">
                <div class="pstat"><div class="pstat-val">2ms</div><div class="pstat-label">Latency</div></div>
                <div class="pstat"><div class="pstat-val">99.9%</div><div class="pstat-label">Uptime</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ WHY US ═══ -->
    <section class="why-section">
      <div class="why-inner">
        <div class="section-header">
          <div class="section-header-left">
            <div class="section-eyebrow">Why CoderArth</div>
            <h2 class="section-title">Not Just a Dev Shop.<br />A <span class="hi">Growth Partner.</span></h2>
          </div>
        </div>

        <div class="why-grid">
          <div class="why-list">
            <div class="why-item">
              <div class="why-icon blue"><i class="fa-solid fa-gauge-high"></i></div>
              <div class="why-text">
                <div class="why-title">Performance-First Engineering</div>
                <p class="why-desc">Every site we ship targets 90+ Lighthouse scores out of the box — Core Web Vitals are non-negotiable, not an afterthought.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-icon green"><i class="fa-solid fa-circle-check"></i></div>
              <div class="why-text">
                <div class="why-title">Zero Scope Creep Guarantee</div>
                <p class="why-desc">Fixed-price contracts with clear deliverables. We scope carefully upfront so there are no surprise invoices at the end.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-icon blue"><i class="fa-regular fa-clock"></i></div>
              <div class="why-text">
                <div class="why-title">On-Time, Every Time</div>
                <p class="why-desc">96% of CoderArth projects launch on or before the agreed date. Our agile process makes delays visible and preventable early.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-icon green"><i class="fa-solid fa-headset"></i></div>
              <div class="why-text">
                <div class="why-title">Dedicated Project Manager</div>
                <p class="why-desc">One point of contact throughout. Weekly updates, real-time Slack access, and transparent Jira boards — no chasing required.</p>
              </div>
            </div>
          </div>

          <div class="why-right">
            <div class="wr-badge">Proven Track Record</div>
            <div class="wr-title">120+ Websites.<br />Zero Failed Launches.</div>
            <p class="wr-desc">Since 2016, CoderArth has shipped web products for startups, scale-ups, and enterprise teams across 14 countries — without a single missed launch deadline.</p>
            <div class="wr-metrics">
              <div class="wr-metric"><div class="wr-metric-val">120<span>+</span></div><div class="wr-metric-label">Web Projects</div></div>
              <div class="wr-metric"><div class="wr-metric-val">14<span>+</span></div><div class="wr-metric-label">Countries</div></div>
              <div class="wr-metric"><div class="wr-metric-val">8<span>yr</span></div><div class="wr-metric-label">In Business</div></div>
              <div class="wr-metric"><div class="wr-metric-val">4.9<span>★</span></div><div class="wr-metric-label">Avg Rating</div></div>
            </div>
            <NuxtLink to="/contact" class="btn-white">Get a Free Quote <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 7h10M7 2l5 5-5 5" /></svg></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PRICING ═══ -->
    <section class="pricing-section">
      <div class="pricing-inner">
        <div class="section-header" style="justify-content: center; text-align: center">
          <div class="section-header-left" style="max-width: 560px; margin: 0 auto">
            <div class="section-eyebrow">Pricing</div>
            <h2 class="section-title">Transparent, <span class="hi">Flat-Rate</span> Packages</h2>
            <p style="font-size: 0.9rem; color: var(--gray-400); margin-top: 14px; line-height: 1.7;">
              No hourly billing surprises. Choose a package or get a custom quote for your specific scope.
            </p>
          </div>
        </div>

        <div class="pricing-grid">
          <div class="price-card">
            <div class="price-tag-wrap"><span class="price-tag">Starter</span></div>
            <div class="price-amount"><sup>₹</sup>49,999<span>/project</span></div>
            <div>
              <div class="price-name">Business Website</div>
              <p class="price-desc">Perfect for early-stage startups and SMBs needing a professional online presence fast.</p>
            </div>
            <div class="price-divider"></div>
            <div class="price-features">
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>Up to 8 pages</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>Next.js + Headless CMS</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>Mobile responsive</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>Basic SEO setup</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>30-day support</div>
            </div>
            <NuxtLink to="/contact" class="price-btn">Get Started →</NuxtLink>
          </div>

          <div class="price-card featured">
            <div class="price-tag-wrap"><span class="price-tag">Growth</span><span class="popular-badge">Most Popular</span></div>
            <div class="price-amount"><sup>₹</sup>1,49,999<span>/project</span></div>
            <div>
              <div class="price-name">Web Application</div>
              <p class="price-desc">For growing businesses that need a custom web app with backend, auth, and integrations.</p>
            </div>
            <div class="price-divider"></div>
            <div class="price-features">
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>Full-stack React + Node.js</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>Custom auth + dashboard</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>REST API + integrations</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>AWS / Vercel deployment</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>90-day support + SLA</div>
            </div>
            <NuxtLink to="/contact" class="price-btn">Get Started →</NuxtLink>
          </div>

          <div class="price-card">
            <div class="price-tag-wrap"><span class="price-tag">Enterprise</span></div>
            <div class="price-amount">Custom<span> quote</span></div>
            <div>
              <div class="price-name">Scale &amp; Enterprise</div>
              <p class="price-desc">Complex platforms, dedicated teams, and ongoing development partnerships for scaling businesses.</p>
            </div>
            <div class="price-divider"></div>
            <div class="price-features">
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>Dedicated team (3–8 devs)</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>Microservices architecture</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>CI/CD + DevOps setup</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>24/7 monitoring + on-call</div>
              <div class="pf-item"><div class="pf-check"><svg viewBox="0 0 10 10" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><path d="M2 5l2 2 4-4" /></svg></div>Flexible retainer billing</div>
            </div>
            <NuxtLink to="/contact" class="price-btn">Talk to Us →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="cta-section">
      <div class="cta-banner">
        <div class="cta-left">
          <div class="cta-tag">Free Consultation</div>
          <h2 class="cta-title">Ready to Build Something<br /><span>That Actually Grows?</span></h2>
          <p class="cta-desc">Book a free 30-minute strategy call. We'll scope your project, suggest the right tech, and give you a ballpark budget — no strings attached.</p>
        </div>
        <div class="cta-actions">
          <NuxtLink to="/consultancy" class="btn-green">
            Book Free Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
          </NuxtLink>
          <a href="#portfolio" class="btn-outline-white">View Portfolio</a>
        </div>
      </div>
    </section>

  </div>
</template>

<style>
@import "~/assets/css/web_dev_service.css";
</style>
