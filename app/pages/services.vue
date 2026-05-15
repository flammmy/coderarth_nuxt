<template>
  <div class="svc-pg">

    <!-- ═══ HERO ═══ -->
    <section class="svc-hero">
      <div class="svc-hero-bg"></div>
      <div class="svc-hero-blob-1"></div>
      <div class="svc-hero-blob-2"></div>
      <div class="svc-hero-content">
        <div class="svc-hero-eyebrow">
          <div class="svc-hero-dot"></div>
          What We Offer
        </div>
        <h1>End-to-End Digital <span class="svc-hero-accent">Solutions</span></h1>
        <p>
          From custom web apps to AI automation — CoderArth delivers every service your
          business needs to grow, scale, and stay ahead in a digital-first world.
        </p>
        <div class="svc-hero-actions">
          <NuxtLink to="/contact" class="svc-btn-primary">
            Start a Project
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/consultancy" class="svc-btn-ghost">Free Consultation →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══ SERVICES GRID ═══ -->
    <section class="svc-list-section">
      <div class="svc-list-inner">

        <div class="svc-section-header">
          <div class="section-eyebrow">Our Services</div>
          <h2 class="svc-section-title">Everything Your Business <span class="hi">Needs Online</span></h2>
          <p class="svc-section-desc">A full-stack digital partner — design, development, AI, and growth — all under one roof.</p>
        </div>

        <div class="svc-cards-grid">

          <!-- 01 Web Development -->
          <NuxtLink to="/web_dev_service" class="sv-card sv-blue">
            <div class="sv-banner">
              <span class="sv-num">01</span>
              <i class="fa-solid fa-code sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">Web Development</h3>
                <span class="sv-badge">Web Dev</span>
              </div>
              <p class="sv-desc">High-performance websites and web apps — SEO-ready, mobile-first, and conversion-optimised from day one.</p>
              <ul class="sv-list">
                <li>Custom business websites</li>
                <li>E-commerce platforms</li>
                <li>CMS integration (Headless)</li>
                <li>Performance &amp; Core Web Vitals</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Stack</span>
                  <span class="sv-stack-val">React · Next.js · Node.js</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </NuxtLink>

          <!-- 02 Mobile App Dev -->
          <div class="sv-card sv-green">
            <div class="sv-banner">
              <span class="sv-num">02</span>
              <i class="fa-solid fa-mobile-screen sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">Mobile App Development</h3>
                <span class="sv-badge">Mobile</span>
              </div>
              <p class="sv-desc">Cross-platform and native mobile apps built for speed, usability, and long-term growth on iOS and Android.</p>
              <ul class="sv-list">
                <li>iOS &amp; Android apps</li>
                <li>Cross-platform with Flutter</li>
                <li>React Native development</li>
                <li>App Store deployment &amp; support</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Stack</span>
                  <span class="sv-stack-val">Flutter · React Native · Swift</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>

          <!-- 03 UI/UX Design -->
          <div class="sv-card sv-purple">
            <div class="sv-banner">
              <span class="sv-num">03</span>
              <i class="fa-solid fa-pen-ruler sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">UI/UX &amp; Website Design</h3>
                <span class="sv-badge">UI / UX</span>
              </div>
              <p class="sv-desc">Research-driven design systems and Figma prototypes that look great and convert visitors into customers.</p>
              <ul class="sv-list">
                <li>Wireframes &amp; prototypes</li>
                <li>Design systems &amp; component libraries</li>
                <li>Brand identity &amp; visual language</li>
                <li>Accessibility &amp; WCAG compliance</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Tools</span>
                  <span class="sv-stack-val">Figma · Adobe XD · Framer</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>

          <!-- 04 Digital Marketing -->
          <div class="sv-card sv-amber">
            <div class="sv-banner">
              <span class="sv-num">04</span>
              <i class="fa-solid fa-chart-line sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">Digital Marketing &amp; SEO</h3>
                <span class="sv-badge">Marketing</span>
              </div>
              <p class="sv-desc">Grow online visibility with strategic SEO, SEM, and social media management. Reach the right audience and generate leads.</p>
              <ul class="sv-list">
                <li>Technical SEO &amp; on-page optimisation</li>
                <li>Google Ads &amp; paid search (SEM)</li>
                <li>Social media management</li>
                <li>Analytics &amp; conversion reporting</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Specialties</span>
                  <span class="sv-stack-val">SEO · SEM · Analytics</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>

          <!-- 05 Custom Software -->
          <div class="sv-card sv-blue">
            <div class="sv-banner">
              <span class="sv-num">05</span>
              <i class="fa-solid fa-laptop-code sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">Custom Software Development</h3>
                <span class="sv-badge">Software</span>
              </div>
              <p class="sv-desc">Tailor-made software that streamlines operations, automates workflows, and meets your unique business requirements at any scale.</p>
              <ul class="sv-list">
                <li>Custom web applications</li>
                <li>REST &amp; GraphQL APIs</li>
                <li>Third-party integrations</li>
                <li>Legacy system modernisation</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Stack</span>
                  <span class="sv-stack-val">Java · .NET · Python · Node.js</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>

          <!-- 06 Custom CRM -->
          <div class="sv-card sv-green">
            <div class="sv-banner">
              <span class="sv-num">06</span>
              <i class="fa-solid fa-users sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">Custom CRM Solutions</h3>
                <span class="sv-badge">CRM</span>
              </div>
              <p class="sv-desc">Manage leads, clients, sales, and team activities in one place with a CRM built for your specific workflow.</p>
              <ul class="sv-list">
                <li>Lead &amp; pipeline management</li>
                <li>Sales automation &amp; reporting</li>
                <li>Client portal &amp; communication</li>
                <li>Role-based access control</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Stack</span>
                  <span class="sv-stack-val">Node.js · PostgreSQL · React</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>

          <!-- 07 Custom ERP -->
          <div class="sv-card sv-purple">
            <div class="sv-banner">
              <span class="sv-num">07</span>
              <i class="fa-solid fa-gears sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">Custom ERP Solutions</h3>
                <span class="sv-badge">ERP</span>
              </div>
              <p class="sv-desc">Integrated ERP systems connecting finance, HR, inventory, and operations — giving your team a single source of truth.</p>
              <ul class="sv-list">
                <li>Finance &amp; accounting modules</li>
                <li>HR &amp; payroll management</li>
                <li>Inventory &amp; supply chain</li>
                <li>Real-time dashboards &amp; reports</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Stack</span>
                  <span class="sv-stack-val">Python · Laravel · MySQL</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>

          <!-- 08 AI & Automation -->
          <div class="sv-card sv-amber">
            <div class="sv-banner">
              <span class="sv-num">08</span>
              <i class="fa-solid fa-robot sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">AI &amp; Automation</h3>
                <span class="sv-badge">AI</span>
              </div>
              <p class="sv-desc">Chatbots, recommendation engines, and agentic workflows that reduce manual effort and unlock scale across your business.</p>
              <ul class="sv-list">
                <li>AI chatbots &amp; virtual assistants</li>
                <li>LLM integration (OpenAI, Claude)</li>
                <li>Workflow automation (n8n, Zapier)</li>
                <li>Data pipelines &amp; RAG systems</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Stack</span>
                  <span class="sv-stack-val">Python · LangChain · OpenAI</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>

          <!-- 09 Cloud & DevOps -->
          <div class="sv-card sv-blue">
            <div class="sv-banner">
              <span class="sv-num">09</span>
              <i class="fa-solid fa-cloud sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">Cloud &amp; DevOps</h3>
                <span class="sv-badge">Cloud</span>
              </div>
              <p class="sv-desc">Scalable cloud infrastructure, CI/CD pipelines, and DevOps practices that keep your applications fast, secure, and always online.</p>
              <ul class="sv-list">
                <li>AWS &amp; cloud architecture</li>
                <li>Docker &amp; Kubernetes</li>
                <li>CI/CD pipeline setup</li>
                <li>24/7 monitoring &amp; on-call</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Stack</span>
                  <span class="sv-stack-val">AWS · Docker · Kubernetes</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>

          <!-- 10 Database Management -->
          <div class="sv-card sv-green">
            <div class="sv-banner">
              <span class="sv-num">10</span>
              <i class="fa-solid fa-database sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">Database Management</h3>
                <span class="sv-badge">Database</span>
              </div>
              <p class="sv-desc">Efficient database design, optimisation, and maintenance ensuring your data is secure, fast, and ready to scale.</p>
              <ul class="sv-list">
                <li>Schema design &amp; optimisation</li>
                <li>Performance tuning &amp; indexing</li>
                <li>Backup &amp; disaster recovery</li>
                <li>Migration &amp; replication</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Stack</span>
                  <span class="sv-stack-val">PostgreSQL · MySQL · MongoDB</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>

          <!-- 11 Enterprise Solutions -->
          <div class="sv-card sv-purple">
            <div class="sv-banner">
              <span class="sv-num">11</span>
              <i class="fa-solid fa-building sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">Enterprise Solutions</h3>
                <span class="sv-badge">Enterprise</span>
              </div>
              <p class="sv-desc">Scalable enterprise-grade applications for complex workflows, large data volumes, and multi-team organisations.</p>
              <ul class="sv-list">
                <li>Microservices architecture</li>
                <li>50+ platform integrations</li>
                <li>Enterprise security &amp; compliance</li>
                <li>Dedicated development team</li>
              </ul>
              <div class="sv-foot">
                <div class="sv-stack-wrap">
                  <span class="sv-stack-label">Stack</span>
                  <span class="sv-stack-val">Microservices · Cloud · Kubernetes</span>
                </div>
                <span class="sv-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>

          <!-- Free Consultation -->
          <div class="sv-card sv-featured">
            <div class="sv-banner">
              <span class="sv-num">Free</span>
              <i class="fa-solid fa-comments sv-bicon"></i>
            </div>
            <div class="sv-body">
              <div class="sv-head">
                <h3 class="sv-title">Free Consultation</h3>
                <span class="sv-badge">No Cost</span>
              </div>
              <p class="sv-desc">Not sure where to start? Book a free 30-minute strategy call — we'll scope your project, suggest the right tech, and give you a ballpark.</p>
              <ul class="sv-list">
                <li>Project scoping &amp; planning</li>
                <li>Technology recommendation</li>
                <li>Budget &amp; timeline estimate</li>
                <li>No commitment required</li>
              </ul>
              <div class="sv-foot">
                <NuxtLink to="/consultancy" class="sv-consult-btn">
                  Book Free Call
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 7h10M7 2l5 5-5 5" /></svg>
                </NuxtLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ STATS STRIP ═══ -->
    <section class="svc-stats-strip">
      <div class="svc-stats-inner">
        <div class="svc-stat">
          <div class="svc-stat-num">200<span>+</span></div>
          <div class="svc-stat-label">Projects Delivered</div>
        </div>
        <div class="svc-stat-div"></div>
        <div class="svc-stat">
          <div class="svc-stat-num">11</div>
          <div class="svc-stat-label">Services Offered</div>
        </div>
        <div class="svc-stat-div"></div>
        <div class="svc-stat">
          <div class="svc-stat-num">14<span>+</span></div>
          <div class="svc-stat-label">Countries Served</div>
        </div>
        <div class="svc-stat-div"></div>
        <div class="svc-stat">
          <div class="svc-stat-num">4.9<span>★</span></div>
          <div class="svc-stat-label">Average Rating</div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="svc-cta-section">
      <div class="svc-cta-banner">
        <div class="svc-cta-left">
          <h2>Not Sure Which Service<br /><span>You Need?</span></h2>
          <p>Talk to our team. We'll help you figure out the right combination of services for your goals and budget — completely free.</p>
        </div>
        <div class="svc-cta-actions">
          <NuxtLink to="/consultancy" class="svc-cta-btn-primary">
            Book Free Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
          </NuxtLink>
          <NuxtLink to="/contact" class="svc-cta-btn-outline">Contact Us</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
@import "~/assets/css/services.css";
</style>
