<template>
  <section class="hero">
    <div class="grid-bg"><img src='/images/hero_bg.jpg' alt='Background Image' /></div>

    <div class="container-fluid px-0 w-100 hero-container">
      <div class="row g-0 align-items-center">
        <!-- LEFT COLUMN -->
        <div class="col-12 col-lg-6">
          <div class="hero-left">
            <div class="pill-badge">
              <span class="dot"></span>
              Trusted by 1,200+ businesses across India
            </div>

            <h1 class="hero-headline">
              Build. Grow. Scale
              <br />
              <span class="highlight">- With CodersArth Technologies</span><br />
            </h1>

            <p class="hero-sub">
              From startups to established brands, we turn your ideas into high-performing digital experiences that
              drive visibility, engagement, and measurable growth. We help businesses grow through Web Development,
              Digital Marketing, App Development, Custom CRM solutions, and Free Consulting.

            </p>

            <div class="hero-actions">
              <NuxtLink to="/consultancy" class="btn-hero-primary">
                Get Free Consultation
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </NuxtLink>
              <a href="#" class="btn-hero-secondary">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                </svg>
                See Our Work
              </a>
            </div>

            <div class="social-proof">
              <div class="avatars">
                <div class="avatar-placeholder" style="
                      background: linear-gradient(135deg, #1a56db, #3b82f6);
                    ">
                  AK
                </div>
                <div class="avatar-placeholder" style="
                      background: linear-gradient(135deg, #10b981, #34d399);
                      margin-left: -10px;
                    ">
                  RS
                </div>
                <div class="avatar-placeholder" style="
                      background: linear-gradient(135deg, #8b5cf6, #a78bfa);
                      margin-left: -10px;
                    ">
                  MP
                </div>
                <div class="avatar-placeholder" style="
                      background: linear-gradient(135deg, #f59e0b, #fcd34d);
                      margin-left: -10px;
                    ">
                  VT
                </div>
                <div class="avatar-placeholder" style="
                      background: linear-gradient(135deg, #ef4444, #fca5a5);
                      margin-left: -10px;
                    ">
                  NK
                </div>
              </div>
              <div class="proof-text">
                <div class="stars">★★★★★</div>
                <div><strong>4.9/5</strong> from 130+ verified reviews</div>
              </div>
            </div>

            <div class="trust-strip">
              <div class="trust-badge green">
                <span class="icon">✓</span> Top-Rated on Upwork
              </div>
              <div class="trust-badge blue">
                <span class="icon">🏆</span> Award-Winning Agency
              </div>
              <div class="trust-badge">
                <span class="icon">🤝</span> Google Partner
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="col-12 col-lg-6">
          <div class="hero-right">
            <div class="connector-line line-1"></div>
            <div class="connector-line line-2"></div>
            <div class="connector-line line-3"></div>
            <div class="connector-line line-4"></div>

            <div class="phone-mockup">
              <div class="phone-inner">
                <div class="phone-notch"></div>
                <div class="phone-screen">
                  <div class="phone-screen-header">
                    <span class="phone-logo-sm">codersArth</span>
                    <div class="phone-dot-nav">
                      <span></span><span></span><span></span>
                    </div>
                  </div>

                  <div class="phone-hero-card">
                    <h4>Peak Performance</h4>
                    <p>Your site ranks in top 6% globally</p>
                    <div class="phone-metric">
                      <div class="metric-chip">
                        <span>98</span><span>Speed</span>
                      </div>
                      <div class="metric-chip">
                        <span>2.1s</span><span>Load</span>
                      </div>
                      <div class="metric-chip">
                        <span>99%</span><span>Uptime</span>
                      </div>
                    </div>
                  </div>

                  <div class="phone-stats">
                    <div class="stat-card">
                      <div class="val">12.4k</div>
                      <div class="lbl">Monthly Visitors</div>
                    </div>
                    <div class="stat-card green">
                      <div class="val">↑ 38%</div>
                      <div class="lbl">Lead Growth</div>
                    </div>
                    <div class="stat-card">
                      <div class="val">₹48L</div>
                      <div class="lbl">Revenue Driven</div>
                    </div>
                    <div class="stat-card green">
                      <div class="val">3.2x</div>
                      <div class="lbl">ROI Average</div>
                    </div>
                  </div>

                  <div class="phone-list">
                    <div class="phone-list-item">
                      <div class="list-icon blue">🌐</div>
                      <div class="list-text">
                        <div class="title">Web Development</div>
                        <div class="sub">React, Next.js, Node.js</div>
                      </div>
                      <span class="list-badge live">Live</span>
                    </div>
                    <div class="phone-list-item">
                      <div class="list-icon green">📈</div>
                      <div class="list-text">
                        <div class="title">SEO &amp; Growth</div>
                        <div class="sub">Rank #1 organically</div>
                      </div>
                      <span class="list-badge new">New</span>
                    </div>
                    <div class="phone-list-item">
                      <div class="list-icon yellow">🤖</div>
                      <div class="list-text">
                        <div class="title">AI Integration</div>
                        <div class="sub">Agentic workflows</div>
                      </div>
                      <span class="list-badge live">Live</span>
                    </div>
                    <div class="phone-list-item">
                      <div class="list-icon yellow">🎨</div>
                      <div class="list-text">
                        <div class="title">UI/UX Design</div>
                        <div class="sub">Modern, sleek interfaces</div>
                      </div>
                      <span class="list-badge live">Live</span>
                    </div>
                    <div class="phone-list-item">
                      <div class="list-icon blue">☁️</div>
                      <div class="list-text">
                        <div class="title">Cloud Solutions</div>
                        <div class="sub">Scalable infrastructure</div>
                      </div>
                      <span class="list-badge live">Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Cards -->
            <div class="float-card fc-award">
              <div class="fc-icon yellow">🏆</div>
              <div class="fc-text">
                <div class="val">Award Winner</div>
                <div class="sub">Best Agency 2024</div>
              </div>
            </div>

            <div class="float-card fc-rating">
              <div class="fc-icon green">⭐</div>
              <div class="fc-text">
                <div class="stars-s">★★★★★</div>
                <div class="val">4.9 Rating</div>
                <div class="sub">130+ Reviews</div>
              </div>
            </div>

            <div class="float-card fc-growth">
              <div class="fc-icon green">📊</div>
              <div class="fc-text">
                <div class="val">+247%</div>
                <div class="sub">Traffic Growth</div>
              </div>
            </div>

            <div class="float-card fc-partner">
              <div class="fc-icon purple">🔗</div>
              <div class="fc-text">
                <div class="val">Google Partner</div>
                <div class="sub">Certified Agency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <!-- ══ PAGE HERO ══ -->
    <div class="page-hero" style="
          background-image: url(&quot;/images/services_bg.jpg&quot;);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-blend-mode: overlay;
          background-color: rgba(255, 255, 255, 0.4);
          width: 100%;
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 20px;
          position: relative;
        ">
      <div class="service-header">
        <div class="pill" style="position: relative; z-index: 2">
          <span class="dot"></span> What We Do
        </div>

        <h1 style="position: relative; z-index: 2; margin-top: 20px">
          End-to-End Digital Solutions
          <span class="accent"> Under One Roof</span>
        </h1>

        <p style="
            position: relative;
            z-index: 2;
            max-width: 600px;
            margin: 20px auto;
          ">
          We provide end-to-end digital solutions to help your business grow, streamline operations, and build a strong
          online presence. Our services are designed to support startups, small businesses, and growing brands with
          scalable and result-driven technology.
        </p>

        <div class="hero-btns" style="position: relative; z-index: 2">
          <NuxtLink to="/contact" class="btn-hero-primary">
            Get a Free Proposal
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </NuxtLink>
          <a href="#" class="btn-hero-secondary">View Case Studies</a>
        </div>
      </div>
    </div>

    <!-- ══ CORE SERVICES ══ -->
    <section class="svc-section">
      <h2 class="sr-only">Our services — everything your business needs online</h2>
      <div class="container">

        <div class="row align-items-center gy-4">
          <div class="col-lg-5 text-center text-lg-start">
            <div class="svc-pill">Our Services</div>

            <h2 class="svc-heading">
              Everything your business<br>
              <span class="accent">needs online</span>
            </h2>

            <p class="svc-subtext mx-auto mx-lg-0">
              A full-stack digital partner — design, development, AI, and growth — all under one roof.
              We turn complex ideas into scalable digital solutions.
            </p>

            <div class="svc-divider-line mx-auto mx-lg-0"></div>

            <div class="svc-stats">
              <div class="stat-item">
                <span class="stat-num">150+</span>
                <span class="stat-label">Projects delivered</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">8+</span>
                <span class="stat-label">Services offered</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">98%</span>
                <span class="stat-label">Client satisfaction</span>
              </div>
            </div>


          </div>

          <div class="col-lg-7">
            <div class="hero-visual">
              <div class="hero-img-wrap">
                <span><img src="/images/services_image.webp"></span>
              </div>
              <div class="hero-badge">
                <i class="fa-solid fa-rocket"></i>
                Full-stack digital partner
              </div>
              <div class="hero-badge-2">
                <i class="fa-solid fa-circle-check" style="color:#185FA5;font-size:14px;"></i>
                Trusted by 50+ brands
              </div>
            </div>
          </div>
        </div>

        <div class="section-label text-center">
          <span
            style="font-size:13px;color:var(--color-text-secondary);letter-spacing:0.05em;text-transform:uppercase;">Explore
            our services</span>
        </div>

        <div class="scroll-section">
          <button class="scroll-btn left" @click="svcPrev"><span>&#8249;</span></button>

          <Swiper
            class="svc-swiper"
            :space-between="24"
            :slides-per-view="1.15"
            :breakpoints="svcBreakpoints"
            @swiper="onSvcSwiper"
          >
            <SwiperSlide>
              <NuxtLink to="/web_dev_service" class="svc-card">
                <div class="svc-card-accent-line"></div>
                <div class="svc-card-top">
                  <div class="svc-card-icon"><i class="fa-solid fa-code"></i></div>
                  <span class="svc-card-badge">Web Dev</span>
                </div>
                <h3 class="svc-card-title">Web Development</h3>
                <p class="svc-card-desc">We build fast, responsive, and user-friendly websites tailored to your business
                  needs. From business websites to custom platforms, we focus on performance, design, and scalability.</p>
                <div class="svc-card-divider"></div>
                <div class="svc-card-tags">
                  <span class="svc-tag"><span class="svc-tag-dot"></span>React</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>PHP</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>JavaScript</span>
                </div>
                <div class="svc-card-footer">
                  <div>
                    <div class="svc-card-stack-label">Stack</div>
                    <div class="svc-card-stack-value">React, PHP, JavaScript</div>
                  </div>
                  <div class="svc-card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
              </NuxtLink>
            </SwiperSlide>

            <SwiperSlide>
              <div class="svc-card">
                <div class="svc-card-accent-line"></div>
                <div class="svc-card-top">
                  <div class="svc-card-icon"><i class="fa-solid fa-mobile-screen"></i></div>
                  <span class="svc-card-badge">Mobile</span>
                </div>
                <h3 class="svc-card-title">Mobile App Dev</h3>
                <p class="svc-card-desc">We develop modern, scalable mobile and web applications that improve user
                  experience and support business growth. Our apps are built for performance, usability, and long-term
                  success.</p>
                <div class="svc-card-divider"></div>
                <div class="svc-card-tags">
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Flutter</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>React Native</span>
                </div>
                <div class="svc-card-footer">
                  <div>
                    <div class="svc-card-stack-label">Stack</div>
                    <div class="svc-card-stack-value">Flutter, React Native</div>
                  </div>
                  <div class="svc-card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="svc-card">
                <div class="svc-card-accent-line"></div>
                <div class="svc-card-top">
                  <div class="svc-card-icon"><i class="fa-solid fa-chart-line"></i></div>
                  <span class="svc-card-badge">Marketing</span>
                </div>
                <h3 class="svc-card-title">Digital Marketing & Social Media</h3>
                <p class="svc-card-desc">Grow your online visibility with strategic digital marketing and social media
                  management. We help you reach the right audience, increase engagement, and generate quality leads.</p>
                <div class="svc-card-divider"></div>
                <div class="svc-card-tags">
                  <span class="svc-tag"><span class="svc-tag-dot"></span>SEO</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>SEM</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Analytics</span>
                </div>
                <div class="svc-card-footer">
                  <div>
                    <div class="svc-card-stack-label">Specialties</div>
                    <div class="svc-card-stack-value">SEO, SEM, Social Media</div>
                  </div>
                  <div class="svc-card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="svc-card">
                <div class="svc-card-accent-line"></div>
                <div class="svc-card-top">
                  <div class="svc-card-icon"><i class="fa-solid fa-database"></i></div>
                  <span class="svc-card-badge">Database</span>
                </div>
                <h3 class="svc-card-title">Database Management</h3>
                <p class="svc-card-desc">Efficient database design, optimization, and maintenance ensuring data security
                  and scalability.</p>
                <div class="svc-card-divider"></div>
                <div class="svc-card-tags">
                  <span class="svc-tag"><span class="svc-tag-dot"></span>MySQL</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>PostgreSQL</span>
                </div>
                <div class="svc-card-footer">
                  <div>
                    <div class="svc-card-stack-label">Technologies</div>
                    <div class="svc-card-stack-value">MySQL, PostgreSQL</div>
                  </div>
                  <div class="svc-card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="svc-card">
                <div class="svc-card-accent-line"></div>
                <div class="svc-card-top">
                  <div class="svc-card-icon"><i class="fa-solid fa-laptop-code"></i></div>
                  <span class="svc-card-badge">Software</span>
                </div>
                <h3 class="svc-card-title">Software Development</h3>
                <p class="svc-card-desc">Custom software solutions to streamline operations and meet unique business
                  requirements.</p>
                <div class="svc-card-divider"></div>
                <div class="svc-card-tags">
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Java</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>.NET</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Python</span>
                </div>
                <div class="svc-card-footer">
                  <div>
                    <div class="svc-card-stack-label">Stack</div>
                    <div class="svc-card-stack-value">Java, .NET, Python</div>
                  </div>
                  <div class="svc-card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="svc-card">
                <div class="svc-card-accent-line"></div>
                <div class="svc-card-top">
                  <div class="svc-card-icon"><i class="fa-solid fa-gears"></i></div>
                  <span class="svc-card-badge">ERP</span>
                </div>
                <h3 class="svc-card-title">Custom ERP Solution</h3>
                <p class="svc-card-desc">Tailor-made ERP systems to integrate and automate core business processes like
                  finance, HR, and inventory.</p>
                <div class="svc-card-divider"></div>
                <div class="svc-card-tags">
                  <span class="svc-tag"><span class="svc-tag-dot"></span>HR</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Finance</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Inventory</span>
                </div>
                <div class="svc-card-footer">
                  <div>
                    <div class="svc-card-stack-label">Modules</div>
                    <div class="svc-card-stack-value">HR, Finance, Inventory</div>
                  </div>
                  <div class="svc-card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="svc-card">
                <div class="svc-card-accent-line"></div>
                <div class="svc-card-top">
                  <div class="svc-card-icon"><i class="fa-solid fa-users"></i></div>
                  <span class="svc-card-badge">CRM</span>
                </div>
                <h3 class="svc-card-title">Custom CRM</h3>
                <p class="svc-card-desc">Streamline your business operations with a custom CRM built specifically for your
                  workflow. Manage leads, clients, sales, and team activities efficiently in one place.</p>
                <div class="svc-card-divider"></div>
                <div class="svc-card-tags">
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Lead Mgmt</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Automation</span>
                </div>
                <div class="svc-card-footer">
                  <div>
                    <div class="svc-card-stack-label">Features</div>
                    <div class="svc-card-stack-value">Lead Mgmt, Automation</div>
                  </div>
                  <div class="svc-card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="svc-card">
                <div class="svc-card-accent-line"></div>
                <div class="svc-card-top">
                  <div class="svc-card-icon"><i class="fa-solid fa-pen-ruler"></i></div>
                  <span class="svc-card-badge">UI / UX</span>
                </div>
                <h3 class="svc-card-title">Website Designing</h3>
                <p class="svc-card-desc">Creative, user-friendly website designs focused on great user experience and
                  strong brand identity.</p>
                <div class="svc-card-divider"></div>
                <div class="svc-card-tags">
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Figma</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Adobe XD</span>
                </div>
                <div class="svc-card-footer">
                  <div>
                    <div class="svc-card-stack-label">Tools</div>
                    <div class="svc-card-stack-value">Figma, Adobe XD</div>
                  </div>
                  <div class="svc-card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="svc-card">
                <div class="svc-card-accent-line"></div>
                <div class="svc-card-top">
                  <div class="svc-card-icon"><i class="fa-solid fa-building"></i></div>
                  <span class="svc-card-badge">Enterprise</span>
                </div>
                <h3 class="svc-card-title">Enterprise Solutions</h3>
                <p class="svc-card-desc">Scalable enterprise-grade applications for complex workflows, large data volumes,
                  and organizational needs.</p>
                <div class="svc-card-divider"></div>
                <div class="svc-card-tags">
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Cloud</span>
                  <span class="svc-tag"><span class="svc-tag-dot"></span>Microservices</span>
                </div>
                <div class="svc-card-footer">
                  <div>
                    <div class="svc-card-stack-label">Solutions</div>
                    <div class="svc-card-stack-value">Cloud, Microservices</div>
                  </div>
                  <div class="svc-card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button class="scroll-btn right" @click="svcNext"><span>&#8250;</span></button>
        </div>

      </div>
    </section>

    <!-- ══ ENTERPRISE SOLUTIONS ══ 
    <section class="py-5 px-3 px-md-4 px-xl-5">
      <div class="container-fluid px-lg-4">

        <div class="row align-items-center g-4 mb-4">

          <div class="col-12 col-md-6 order-md-1">
            <div class="ent-header-visual">
              <div class="hdr-badge-tl">
                <i class="fa-solid fa-shield-halved"></i>
                Enterprise-grade security
              </div>
              <div class="header-img-placeholder">
                <img src="/images/tech_logos//images/system_abstract.jpg" alt="Enterprise system abstract" />
              </div>
              <div class="hdr-badge-br">
                <i class="fa-solid fa-rocket"></i>
                Go live in days
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 order-md-2 d-flex flex-column gap-4">
            <div class="section-pill-enterprise">Enterprise</div>
            <h2 class="ent-heading">Built for <span class="accent">Enterprise</span></h2>
            <p class="ent-subtext">Connect core systems across your business with seamless integrations for eCommerce,
              ERP, CRM, and beyond.</p>

            <div class="ent-feature-list">
              <div class="ent-feature-item"><i class="fa-solid fa-check"></i>Plug-and-play integrations with 50+
                platforms</div>
              <div class="ent-feature-item"><i class="fa-solid fa-check"></i>Real-time data sync across all departments
              </div>
              <div class="ent-feature-item"><i class="fa-solid fa-check"></i>Enterprise-grade security &amp; compliance
              </div>
            </div>

            <div class="ent-stat-strip">
              <div class="ent-stat-item">
                <span class="ent-stat-num">200+</span>
                <div class="ent-stat-label">Deployments</div>
              </div>
              <div class="ent-stat-item">
                <span class="ent-stat-num">99.9%</span>
                <div class="ent-stat-label">Uptime SLA</div>
              </div>
              <div class="ent-stat-item">
                <span class="ent-stat-num">50+</span>
                <div class="ent-stat-label">Integrations</div>
              </div>
            </div>
          </div>

        </div>

        <div class="ent-divider"><span>Our enterprise solutions</span></div>

        <div class="row g-3 align-items-start">

          <div class="col-12 col-lg-5 col-xl-4 d-flex flex-column gap-3">

            <div class="left-header-img">
              <img src="/images/tech_logos//images/ent-first.jpg" alt="Enterprise first" />
            </div>

            <div class="bc bc-dark">
              <span class="bc-label">02 — Backend</span>
              <div class="img-zone">
                <i class="fa-regular fa-image"></i>
                <span>ERP dashboard screenshot</span>
              </div>
              <h3>ERP Integration</h3>
              <p>Connect enterprise resource planning systems to improve data flow, real-time reporting, and operational
                efficiency across all departments.</p>
              <div class="bc-stack">SAP · Oracle · Microsoft Dynamics</div>
              <div class="d-flex align-items-center justify-content-between mt-1">
                <span class="bc-tag tag-dark"><i class="fa-solid fa-circle" style="font-size:6px;"></i> Live sync</span>
                <div class="bc-arrow">
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          <div class="col-12 col-lg-7 col-xl-8 d-flex flex-column gap-3">

            <div class="bc bc-hero">
              <div class="bc-hero-img">
                <i class="fa-regular fa-image"></i>
                <span>Platform screenshot</span>
              </div>
              <span class="bc-label">01 — Core</span>
              <h3>Marketplace Platforms</h3>
              <div class="hero-stats">
                <div>
                  <span class="hero-stat-num">120+</span>
                  <div class="hero-stat-label">Vendors managed</div>
                </div>
                <div>
                  <span class="hero-stat-num">99.9%</span>
                  <div class="hero-stat-label">Uptime SLA</div>
                </div>
                <div>
                  <span class="hero-stat-num">3×</span>
                  <div class="hero-stat-label">Faster checkout</div>
                </div>
              </div>
              <p>Build and integrate multi-vendor marketplace platforms that streamline vendor management, payments, and
                order workflows efficiently.</p>
              <div class="bc-stack">Shopify · WooCommerce · Custom</div>
              <div class="d-flex align-items-center justify-content-between mt-3">
                <span class="bc-tag tag-hero"><i class="fa-solid fa-bolt" style="font-size:9px;"></i>
                  Production-ready</span>
                <div class="bc-arrow">
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="row g-3">

              <div class="col-12 col-sm-6 col-xl-4">
                <div class="bc bc-ai bc-sm h-100">
                  <div class="bc-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round">
                      <path
                        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <h3>CRM Solutions</h3>
                  <p>Optimise customer relationships, automate follow-ups, and improve engagement.</p>
                  <div class="img-zone-sm">
                    <i class="fa-regular fa-image"></i>
                    <span>CRM screenshot</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <span class="bc-tag tag-dark">Leads · Deals</span>
                    <div class="bc-arrow">
                      <svg fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-xl-4">
                <div class="bc bc-design bc-sm h-100">
                  <div class="bc-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round">
                      <path
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-4.5L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                  <h3>Custom API &amp; Integrations</h3>
                  <p>Connect third-party tools, gateways, and internal systems via robust APIs.</p>
                  <div class="img-zone-sm">
                    <i class="fa-regular fa-image"></i>
                    <span>API diagram</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <span class="bc-tag tag-green">REST · GraphQL</span>
                    <div class="bc-arrow">
                      <svg fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-xl-4">
                <div class="bc bc-ecom bc-sm h-100">
                  <div class="bc-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round">
                      <path d="M3 3v18h18M7 16l4-4 4 4 4-4" />
                    </svg>
                  </div>
                  <h3>Data &amp; Reporting</h3>
                  <p>Real-time dashboards and analytics pipelines that surface key insights.</p>
                  <div class="img-zone-sm">
                    <i class="fa-regular fa-image"></i>
                    <span>Dashboard chart</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <span class="bc-tag tag-blue">Live · Analytics</span>
                    <div class="bc-arrow">
                      <svg fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>-->

    <!-- ══ TECH STACK ══ -->
    <section class="section section-alt section-center">
      <div class="container">
        <div class="section-pill">Tech Stack</div>

        <h2 class="section-title">
          Built With the <span class="accent">Best Tools</span>
        </h2>

        <p class="section-sub">
          We use battle-tested, modern technologies to build scalable products that last.
        </p>

        <!-- FRONTEND -->
        <div class="tech-category">
          <div class="tech-category-header">
            <h3 class="tech-category-title">Frontend Technologies</h3>
            <div class="tech-scroll-btns">
              <button class="tech-scroll-btn" onclick="scrollTechRow('frontend', -260)">&#8249;</button>
              <button class="tech-scroll-btn" onclick="scrollTechRow('frontend', 260)">&#8250;</button>
            </div>
          </div>
          <div class="tech-scroll-section">
            <div class="tech-scroll-row" id="frontend">
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/reactjs.png" alt="React"></div>
                  <span class="tc-tag">Frontend</span>
                </div>
                <span class="tc-name">React</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/nextjs.png" alt="Next.js"></div>
                  <span class="tc-tag">Framework</span>
                </div>
                <span class="tc-name">Next.js</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/vuejs.png" alt="Vue.js"></div>
                  <span class="tc-tag">Frontend</span>
                </div>
                <span class="tc-name">Vue.js</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/angular.png" alt="Angular"></div>
                  <span class="tc-tag">Frontend</span>
                </div>
                <span class="tc-name">Angular</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/html.png" alt="HTML5"></div>
                  <span class="tc-tag">Markup</span>
                </div>
                <span class="tc-name">HTML5</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/css.png" alt="CSS3"></div>
                  <span class="tc-tag">Styling</span>
                </div>
                <span class="tc-name">CSS3</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/javascript.png" alt="JavaScript"></div>
                  <span class="tc-tag">Frontend</span>
                </div>
                <span class="tc-name">JavaScript</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/typescript.png" alt="TypeScript"></div>
                  <span class="tc-tag">Frontend</span>
                </div>
                <span class="tc-name">TypeScript</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/tailwind.png" alt="Tailwind"></div>
                  <span class="tc-tag">UI</span>
                </div>
                <span class="tc-name">Tailwind CSS</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/bootstrap.png" alt="Bootstrap"></div>
                  <span class="tc-tag">UI</span>
                </div>
                <span class="tc-name">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>

        <!-- BACKEND -->
        <div class="tech-category">
          <div class="tech-category-header">
            <h3 class="tech-category-title">Backend Technologies</h3>
            <div class="tech-scroll-btns">
              <button class="tech-scroll-btn" onclick="scrollTechRow('backend', -260)">&#8249;</button>
              <button class="tech-scroll-btn" onclick="scrollTechRow('backend', 260)">&#8250;</button>
            </div>
          </div>
          <div class="tech-scroll-section">
            <div class="tech-scroll-row" id="backend">
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/nodejs.png" alt="Node.js"></div>
                  <span class="tc-tag">Backend</span>
                </div>
                <span class="tc-name">Node.js</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/express.png" alt="Express"></div>
                  <span class="tc-tag">Framework</span>
                </div>
                <span class="tc-name">Express.js</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/python.png" alt="Python"></div>
                  <span class="tc-tag">Backend</span>
                </div>
                <span class="tc-name">Python</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/django.png" alt="Django"></div>
                  <span class="tc-tag">Framework</span>
                </div>
                <span class="tc-name">Django</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                 <div class="tech-chip-icon"><img src="/images/tech_logos/fastapi.png" alt="FastAPI" width="60"></div>
                  <span class="tc-tag">Framework</span>
                </div>
                <span class="tc-name">FastAPI</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/php.png" alt="PHP"></div>
                  <span class="tc-tag">Backend</span>
                </div>
                <span class="tc-name">PHP</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/laravel.png" alt="Laravel"></div>
                  <span class="tc-tag">Framework</span>
                </div>
                <span class="tc-name">Laravel</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/codeignitor.png" alt="CodeIgniter"></div>
                  <span class="tc-tag">Framework</span>
                </div>
                <span class="tc-name">CodeIgniter</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/java.png" alt="Java"></div>
                  <span class="tc-tag">Backend</span>
                </div>
                <span class="tc-name">Java</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/springboot.png" alt="Spring Boot"></div>
                  <span class="tc-tag">Framework</span>
                </div>
                <span class="tc-name">Spring Boot</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/golang.png" alt="Golang" width="60"></div>
                  <span class="tc-tag">Backend</span>
                </div>
                <span class="tc-name">Golang</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/kafka.png" alt="Kafka"></div>
                  <span class="tc-tag">Event Stream</span>
                </div>
                <span class="tc-name">Kafka</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/openai.png" alt="OpenAI"></div>
                  <span class="tc-tag">AI</span>
                </div>
                <span class="tc-name">OpenAI / GPT</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ANDROID DEVELOPMENT -->
        <div class="tech-category">
          <div class="tech-category-header">
            <h3 class="tech-category-title">Android Development</h3>
            <div class="tech-scroll-btns">
              <button class="tech-scroll-btn" onclick="scrollTechRow('android', -260)">&#8249;</button>
              <button class="tech-scroll-btn" onclick="scrollTechRow('android', 260)">&#8250;</button>
            </div>
          </div>
          <div class="tech-scroll-section">
            <div class="tech-scroll-row" id="android">
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/flutter.png" alt="Flutter"></div>
                  <span class="tc-tag">Mobile</span>
                </div>
                <span class="tc-name">Flutter</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/react_native.png" alt="React Native"></div>
                  <span class="tc-tag">Mobile</span>
                </div>
                <span class="tc-name">React Native</span>
              </div>
            </div>
          </div>
        </div>

        <!-- DATABASE -->
        <div class="tech-category">
          <div class="tech-category-header">
            <h3 class="tech-category-title">Database Technologies</h3>
            <div class="tech-scroll-btns">
              <button class="tech-scroll-btn" onclick="scrollTechRow('database', -260)">&#8249;</button>
              <button class="tech-scroll-btn" onclick="scrollTechRow('database', 260)">&#8250;</button>
            </div>
          </div>
          <div class="tech-scroll-section">
            <div class="tech-scroll-row" id="database">
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/postgres.png" alt="PostgreSQL"></div>
                  <span class="tc-tag">Database</span>
                </div>
                <span class="tc-name">PostgreSQL</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/mysql.png" alt="MySQL"></div>
                  <span class="tc-tag">Database</span>
                </div>
                <span class="tc-name">MySQL</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/sqlite.png" alt="SQLite"></div>
                  <span class="tc-tag">Database</span>
                </div>
                <span class="tc-name">SQLite</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/sql_server.png" alt="SQL Server"></div>
                  <span class="tc-tag">Database</span>
                </div>
                <span class="tc-name">SQL Server</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/mongo.png" alt="MongoDB"></div>
                  <span class="tc-tag">NoSQL</span>
                </div>
                <span class="tc-name">MongoDB</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/cassandra.png" alt="Cassandra" width="60"></div>
                  <span class="tc-tag">NoSQL</span>
                </div>
                <span class="tc-name">Cassandra</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/redis.png" alt="Redis"></div>
                  <span class="tc-tag">Cache DB</span>
                </div>
                <span class="tc-name">Redis</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/Clickhouse.png" alt="ClickHouse"></div>
                  <span class="tc-tag">Analytics</span>
                </div>
                <span class="tc-name">ClickHouse</span>
              </div>
              <div class="tech-chip">
                <div class="tech-chip-top">
                  <div class="tech-chip-icon"><img src="/images/tech_logos/elastic.png" alt="Elasticsearch"></div>
                  <span class="tc-tag">Search DB</span>
                </div>
                <span class="tc-name">Elasticsearch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ══ CTA BANNER ══ -->
    <div class="cta-banner">
      <div class="left">
        <p>Ready to build something great?</p>
        <h2>Let's Turn Your Idea Into a <span>Live Product</span></h2>
      </div>
      <div class="cta-btns">
        <NuxtLink to="/contact" class="btn-cta-white">Get Free Proposal</NuxtLink>
        <NuxtLink to="/contact" class="btn-cta-outline">Talk to an Expert →</NuxtLink>
      </div>
    </div>
  </section>
  <!-- ══ WORK IN PROGRESS ══ 
  <section class="pw-section">
    <div class="container-fluid px-3 px-sm-4 px-lg-5">
      <div class="row align-items-end mb-4 gy-3">
        <div class="col-12 col-md-6">
          <div class="pw-eyebrow">
            <div class="pw-eyebrow-dot"></div>
            Live &amp; In Progress
          </div>
          <h2 class="pw-title">Work We're <span>Proud Of</span></h2>
          <p class="pw-subtitle">
            A snapshot of what we're currently building and shipping for our
            clients.
          </p>
        </div>
        <div class="col-12 col-md-6 d-flex flex-wrap gap-2 justify-content-md-end">
          <div class="pw-filter pw-active" onclick="filterCards('all', this)">
            All
          </div>
          <div class="pw-filter" onclick="filterCards('web app', this)">
            Web App
          </div>
          <div class="pw-filter" onclick="filterCards('mobile', this)">
            Mobile
          </div>
          <div class="pw-filter" onclick="filterCards('e-commerce', this)">
            E-Commerce
          </div>
          <div class="pw-filter" onclick="filterCards('ai', this)">AI</div>
        </div>
      </div>

      <div class="row g-3" id="pw-grid">
        <div class="col-12 col-lg-8" data-category="web app">
          <div class="pw-card pw-featured">
            <div class="pw-featured-inner">
              <div class="pw-card-thumb" style="background: var(--gray-900)">
                <div class="pw-featured-label">★ Featured</div>
                <div class="pw-thumb-grid">
                  <div class="pw-thumb-block" style="background: rgba(26, 86, 219, 0.5)"></div>
                  <div class="pw-thumb-block" style="background: rgba(59, 130, 246, 0.3)"></div>
                  <div class="pw-thumb-block" style="
                        background: rgba(59, 130, 246, 0.2);
                        grid-column: span 2;
                        display: flex;
                        align-items: center;
                        padding: 14px;
                        gap: 10px;
                      ">
                    <div style="
                          flex: 1;
                          height: 8px;
                          background: rgba(255, 255, 255, 0.1);
                          border-radius: 4px;
                          overflow: hidden;
                        ">
                      <div style="
                            width: 72%;
                            height: 100%;
                            background: var(--blue-light);
                            border-radius: 4px;
                          "></div>
                    </div>
                    <span style="
                          font-size: 11px;
                          color: rgba(255, 255, 255, 0.5);
                          white-space: nowrap;
                        ">72% done</span>
                  </div>
                </div>
              </div>
              <div class="pw-card-body d-flex flex-column justify-content-between">
                <div>
                  <div class="pw-card-meta">
                    <div class="pw-status pw-status-progress">
                      <div class="pw-status-dot"></div>
                      In Progress
                    </div>
                    <div class="pw-type-badge">Web App</div>
                  </div>
                  <div class="pw-card-title">
                    FinTrack Pro — Dashboard &amp; Analytics
                  </div>
                  <div class="pw-card-desc">
                    A full-scale financial management platform for SMEs with
                    real-time reporting, budget tracking, and AI-driven spend
                    insights.
                  </div>
                  <div class="pw-progress-wrap">
                    <div class="pw-progress-label">
                      Completion <span>72%</span>
                    </div>
                    <div class="pw-progress-bar">
                      <div class="pw-progress-fill" style="width: 72%"></div>
                    </div>
                  </div>
                </div>
                <div class="pw-card-footer">
                  <div class="pw-tech-chips">
                    <div class="pw-chip">Next.js</div>
                    <div class="pw-chip">Node.js</div>
                    <div class="pw-chip">PostgreSQL</div>
                    <div class="pw-chip">OpenAI</div>
                  </div>
                  <div class="pw-arrow-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#475569" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4" data-category="e-commerce">
          <div class="pw-card">
            <div class="pw-card-thumb" style="background: var(--green-pale)">
              <div class="pw-thumb-grid">
                <div class="pw-thumb-block" style="background: rgba(16, 185, 129, 0.25)"></div>
                <div class="pw-thumb-block" style="background: rgba(16, 185, 129, 0.15)"></div>
                <div class="pw-thumb-block" style="background: rgba(16, 185, 129, 0.1)"></div>
                <div class="pw-thumb-block" style="background: rgba(16, 185, 129, 0.2)"></div>
              </div>
            </div>
            <div class="pw-card-body">
              <div class="pw-card-meta">
                <div class="pw-status pw-status-live">
                  <div class="pw-status-dot"></div>
                  Live
                </div>
                <div class="pw-type-badge">E-Commerce</div>
              </div>
              <div class="pw-card-title">GreenLeaf — Organic Store</div>
              <div class="pw-card-desc">
                Custom Shopify storefront with subscription boxes, loyalty
                rewards, and WhatsApp order notifications.
              </div>
              <div class="pw-card-footer">
                <div class="pw-tech-chips">
                  <div class="pw-chip">Shopify</div>
                  <div class="pw-chip">React</div>
                  <div class="pw-chip">n8n</div>
                </div>
                <div class="pw-arrow-btn">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#475569" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4" data-category="mobile">
          <div class="pw-card">
            <div class="pw-card-thumb" style="background: var(--blue-pale)">
              <div style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    gap: 10px;
                    padding: 20px;
                  ">
                <div style="
                      width: 52px;
                      height: 52px;
                      border-radius: 14px;
                      background: var(--blue);
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    ">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="2" width="14" height="20" rx="3" stroke="white" stroke-width="1.5" />
                    <path d="M9 18h6" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    <circle cx="12" cy="7" r="2" fill="white" opacity=".6" />
                  </svg>
                </div>
                <div style="display: flex; gap: 5px">
                  <div style="
                        width: 32px;
                        height: 4px;
                        border-radius: 2px;
                        background: var(--blue);
                      "></div>
                  <div style="
                        width: 20px;
                        height: 4px;
                        border-radius: 2px;
                        background: var(--blue-light);
                        opacity: 0.4;
                      "></div>
                  <div style="
                        width: 14px;
                        height: 4px;
                        border-radius: 2px;
                        background: var(--blue-light);
                        opacity: 0.25;
                      "></div>
                </div>
              </div>
            </div>
            <div class="pw-card-body">
              <div class="pw-card-meta">
                <div class="pw-status pw-status-progress">
                  <div class="pw-status-dot"></div>
                  In Progress
                </div>
                <div class="pw-type-badge">Mobile</div>
              </div>
              <div class="pw-card-title">MediBook — Doctor App</div>
              <div class="pw-card-desc">
                Flutter-based patient-doctor appointment app with video
                consult, e-prescriptions, and lab report uploads.
              </div>
              <div class="pw-progress-wrap">
                <div class="pw-progress-label">
                  Completion <span>45%</span>
                </div>
                <div class="pw-progress-bar">
                  <div class="pw-progress-fill" style="width: 45%"></div>
                </div>
              </div>
              <div class="pw-card-footer">
                <div class="pw-tech-chips">
                  <div class="pw-chip">Flutter</div>
                  <div class="pw-chip">Firebase</div>
                  <div class="pw-chip">WebRTC</div>
                </div>
                <div class="pw-arrow-btn">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#475569" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4" data-category="ai">
          <div class="pw-card">
            <div class="pw-card-thumb" style="background: var(--gray-900)">
              <div style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    gap: 12px;
                    padding: 20px;
                  ">
                <div style="display: flex; gap: 8px; align-items: center">
                  <div style="
                        width: 36px;
                        height: 36px;
                        border-radius: 10px;
                        background: rgba(52, 211, 153, 0.15);
                        border: 1px solid rgba(52, 211, 153, 0.3);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      ">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" fill="#34d399" />
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#34d399" stroke-width="1.5"
                        stroke-linecap="round" />
                    </svg>
                  </div>
                  <svg width="20" height="2" viewBox="0 0 20 2">
                    <line x1="0" y1="1" x2="20" y2="1" stroke="rgba(52,211,153,.4)" stroke-width="1.5"
                      stroke-dasharray="3 2" />
                  </svg>
                  <div style="
                        width: 36px;
                        height: 36px;
                        border-radius: 10px;
                        background: rgba(26, 86, 219, 0.2);
                        border: 1px solid rgba(26, 86, 219, 0.4);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      ">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="3" stroke="#3b82f6" stroke-width="1.5" />
                      <path d="M9 12l2 2 4-4" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <span style="
                      font-size: 10px;
                      color: rgba(255, 255, 255, 0.25);
                      letter-spacing: 0.08em;
                      text-transform: uppercase;
                    ">AI Pipeline</span>
              </div>
            </div>
            <div class="pw-card-body">
              <div class="pw-card-meta">
                <div class="pw-status pw-status-live">
                  <div class="pw-status-dot"></div>
                  Live
                </div>
                <div class="pw-type-badge">AI</div>
              </div>
              <div class="pw-card-title">AutoReply — AI Support Bot</div>
              <div class="pw-card-desc">
                LangChain-powered customer support agent trained on client
                documentation, integrated with Intercom and Slack.
              </div>
              <div class="pw-card-footer">
                <div class="pw-tech-chips">
                  <div class="pw-chip">LangChain</div>
                  <div class="pw-chip">OpenAI</div>
                  <div class="pw-chip">Python</div>
                </div>
                <div class="pw-arrow-btn">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#475569" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pw-bottom-strip mt-4">
        <div class="pw-stats">
          <div class="pw-stat">
            <div class="pw-stat-num">12<span>+</span></div>
            <div class="pw-stat-label">Active projects</div>
          </div>
          <div class="pw-stat">
            <div class="pw-stat-num">4</div>
            <div class="pw-stat-label">Launching this month</div>
          </div>
          <div class="pw-stat">
            <div class="pw-stat-num">98<span>%</span></div>
            <div class="pw-stat-label">On-time delivery</div>
          </div>
          <div class="pw-stat">
            <div class="pw-stat-num">6</div>
            <div class="pw-stat-label">Industries served</div>
          </div>
        </div>
        <a class="pw-cta" href="#">View all projects
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg></a>
      </div>
    </div>
  </section>
  -->


  <section class="faq-section">
    <div class="container">
      <div class="row g-5">

        <!-- LEFT -->
        <div class="col-lg-4">
          <div class="faq-left">
            <div class="label-tag">FAQ</div>

            <h2>Find Questions<br>&amp; <span class="accent">Answers.</span></h2>

            <p>Don't find the answer you need? Our team is here to help you with anything from project scoping to
              technical consultation.</p>

            <NuxtLink to="/contact" class="contact-btn">
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>

            <div class="stats-row">
              <div class="stat-item">
                <div class="stat-num">200<span>+</span></div>
                <div class="stat-label">Projects Delivered</div>
              </div>
              <div class="stat-item">
                <div class="stat-num">98<span>%</span></div>
                <div class="stat-label">Client Satisfaction</div>
              </div>
              <div class="stat-item">
                <div class="stat-num">8<span>+</span></div>
                <div class="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="col-lg-8">
          <div class="faq-right">

            <div class="faq-item open">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span class="faq-question-text">How can I start a project with your company?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
              <div class="faq-body">
                <div class="faq-body-inner">
                  Simply contact us through our website, email, or phone. We'll schedule a consultation to understand your requirements, goals, and budget. After that, we'll share a proposal with timeline, scope, and cost. Once approved, the project begins.
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span class="faq-question-text">What services do you provide?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
              <div class="faq-body">
                <div class="faq-body-inner">
                  We offer a range of digital services including <span class="pill">Website Design &amp; Development</span> <span class="pill">CRM Software Development</span> <span class="pill">Digital Marketing</span> and <span class="pill">Custom Software Solutions</span>. Each service is tailored to meet your business needs.
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span class="faq-question-text">How do you handle project pricing and payments?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
              <div class="faq-body">
                <div class="faq-body-inner">
                  Project pricing depends on scope, complexity, and timeline. We follow a milestone-based payment structure: <span class="pill">Advance payment</span> to start the project, <span class="pill">Mid-phase payment</span> based on progress, and <span class="pill">Final payment</span> before delivery.
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span class="faq-question-text">How can I get a project from you or collaborate?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
              <div class="faq-body">
                <div class="faq-body-inner">
                  If you're a client, you can directly reach out to us with your requirements. If you're looking to collaborate or outsource work, contact us with your portfolio and expertise. We evaluate partnerships based on quality and reliability.
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span class="faq-question-text">What is your project policy?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
              <div class="faq-body">
                <div class="faq-body-inner">
                  Our project policy ensures transparency and smooth execution. A clear scope of work is defined before starting, timelines are mutually agreed upon, and regular updates are provided throughout. Any additional features outside scope may require extra cost.
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span class="faq-question-text">Do you offer revisions or changes during the project?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
              <div class="faq-body">
                <div class="faq-body-inner">
                  Yes, we provide a limited number of revisions as per the agreed scope. Additional changes or major modifications beyond the initial requirements may involve extra charges and timeline adjustments.
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span class="faq-question-text">What is your refund policy?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
              <div class="faq-body">
                <div class="faq-body-inner">
                  Advance payments are generally non-refundable once the project has started. If the project is canceled before work begins, a partial refund may be issued. No refund is applicable after significant work has been completed. Refund terms are clearly mentioned in the agreement before starting.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="tba-wrap">
    <div class="tba-eyebrow">
      <div class="tba-rule"></div>
      <span class="tba-label">Trusted by teams at</span>
      <div class="tba-rule"></div>
    </div>

    <div class="tba-fade-box">
      <div class="tba-track-outer">
        <div class="tba-track">
          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-blue">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#1a56db" />
                <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#3b82f6" opacity=".5" />
                <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#3b82f6" opacity=".5" />
                <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#1a56db" opacity=".25" />
              </svg>
            </div>
            <span class="tba-chip-name">Infosys</span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-green">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3L20 8V16L12 21L4 16V8L12 3Z" fill="#10b981" opacity=".2" stroke="#10b981"
                  stroke-width="1.5" />
                <circle cx="12" cy="12" r="3" fill="#10b981" />
              </svg>
            </div>
            <span class="tba-chip-name">Tata <span>Digital</span></span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-blue">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#1a56db" stroke-width="1.5" opacity=".3" />
                <circle cx="12" cy="12" r="5" fill="#1a56db" opacity=".15" />
                <path d="M8 12h8M12 8v8" stroke="#1a56db" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <span class="tba-chip-name">Nykaa</span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-slate">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 7h14M5 12h10M5 17h7" stroke="#475569" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <span class="tba-chip-name">Razor<span>pay</span></span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-green">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" fill="#10b981" opacity=".15" />
                <path d="M9 12l2 2 4-4" stroke="#10b981" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <span class="tba-chip-name">Zepto</span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-blue">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 12h4l3-7 4 14 3-7h4" stroke="#1a56db" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <span class="tba-chip-name">MakeMyTrip</span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-slate">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="6" width="16" height="12" rx="2" stroke="#475569" stroke-width="1.5" />
                <path d="M8 6V5a4 4 0 018 0v1" stroke="#475569" stroke-width="1.5" />
                <circle cx="12" cy="12" r="2" fill="#475569" opacity=".5" />
              </svg>
            </div>
            <span class="tba-chip-name">Domino's</span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-green">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6l-4.9 2.6.9-5.5-4-3.9 5.5-.8z" fill="#10b981" opacity=".2"
                  stroke="#10b981" stroke-width="1.4" stroke-linejoin="round" />
              </svg>
            </div>
            <span class="tba-chip-name">Max <span>Life</span></span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-blue">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 17l4-8 4 6 3-4 5 6" stroke="#1a56db" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <span class="tba-chip-name">Eureka <span>Forbes</span></span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-slate">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="12" r="5" stroke="#475569" stroke-width="1.5" opacity=".5" />
                <circle cx="15" cy="12" r="5" stroke="#475569" stroke-width="1.5" opacity=".5" />
              </svg>
            </div>
            <span class="tba-chip-name">Jubilant <span>FoodWorks</span></span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-blue">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#1a56db" />
                <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#3b82f6" opacity=".5" />
                <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#3b82f6" opacity=".5" />
                <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#1a56db" opacity=".25" />
              </svg>
            </div>
            <span class="tba-chip-name">Infosys</span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-green">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3L20 8V16L12 21L4 16V8L12 3Z" fill="#10b981" opacity=".2" stroke="#10b981"
                  stroke-width="1.5" />
                <circle cx="12" cy="12" r="3" fill="#10b981" />
              </svg>
            </div>
            <span class="tba-chip-name">Tata <span>Digital</span></span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-blue">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#1a56db" stroke-width="1.5" opacity=".3" />
                <circle cx="12" cy="12" r="5" fill="#1a56db" opacity=".15" />
                <path d="M8 12h8M12 8v8" stroke="#1a56db" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <span class="tba-chip-name">Nykaa</span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-slate">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 7h14M5 12h10M5 17h7" stroke="#475569" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <span class="tba-chip-name">Razor<span>pay</span></span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-green">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" fill="#10b981" opacity=".15" />
                <path d="M9 12l2 2 4-4" stroke="#10b981" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <span class="tba-chip-name">Zepto</span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-blue">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 12h4l3-7 4 14 3-7h4" stroke="#1a56db" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <span class="tba-chip-name">MakeMyTrip</span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-slate">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="6" width="16" height="12" rx="2" stroke="#475569" stroke-width="1.5" />
                <path d="M8 6V5a4 4 0 018 0v1" stroke="#475569" stroke-width="1.5" />
                <circle cx="12" cy="12" r="2" fill="#475569" opacity=".5" />
              </svg>
            </div>
            <span class="tba-chip-name">Domino's</span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-green">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6l-4.9 2.6.9-5.5-4-3.9 5.5-.8z" fill="#10b981" opacity=".2"
                  stroke="#10b981" stroke-width="1.4" stroke-linejoin="round" />
              </svg>
            </div>
            <span class="tba-chip-name">Max <span>Life</span></span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-blue">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 17l4-8 4 6 3-4 5 6" stroke="#1a56db" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <span class="tba-chip-name">Eureka <span>Forbes</span></span>
          </div>

          <div class="tba-chip">
            <div class="tba-icon-ring tba-ic-slate">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="12" r="5" stroke="#475569" stroke-width="1.5" opacity=".5" />
                <circle cx="15" cy="12" r="5" stroke="#475569" stroke-width="1.5" opacity=".5" />
              </svg>
            </div>
            <span class="tba-chip-name">Jubilant <span>FoodWorks</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="testi-section">
    <!-- HEADER -->
    <div class="header-band">
      <div class="header-left">
        <div class="eyebrow">Client Testimonials</div>
        <h2 class="section-title">
          What Our <em>Clients</em><br />Are Saying
        </h2>
      </div>

      <div class="header-right">
        <div class="agg-rating">
          <div class="agg-score">4.9</div>
          <div class="agg-right">
            <div class="stars">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star half"></div>
            </div>
            <div class="agg-label">Based on 200+ verified reviews</div>
          </div>
        </div>

        <div class="nav-arrows">
          <button class="arrow-btn" aria-label="Prev">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M10 4L6 8l4 4" />
            </svg>
          </button>
          <button class="arrow-btn" aria-label="Next">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- ROW 1 -->
    <div class="marquee-wrap">
      <div class="marquee-track" id="row1">
        <div class="tcard accent-blue">
          <div class="quote-mark">"</div>
          <div class="card-stars">
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
          </div>
          <p class="tcard-body">
            Space To Tech delivered our Flutter app in 8 weeks — on time, on
            budget, and with pixel-perfect design. The team communicated
            proactively and the code quality is outstanding.
          </p>
          <div class="tcard-divider"></div>
          <div class="tcard-author">
            <div class="avatar av-blue">JM</div>
            <div class="author-info">
              <div class="author-name">James Mitchell</div>
              <div class="author-role">CEO, FinEdge Solutions</div>
            </div>
            <span class="platform-badge pb-google">Google</span>
          </div>
        </div>

        <div class="tcard">
          <div class="quote-mark">"</div>
          <div class="card-stars">
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
          </div>
          <p class="tcard-body">
            Their React Native team took our complex logistics platform and
            turned it into a seamless mobile experience. Post-launch support
            has been fantastic — zero downtime in 6 months.
          </p>
          <div class="tcard-divider"></div>
          <div class="tcard-author">
            <div class="avatar av-teal">SR</div>
            <div class="author-info">
              <div class="author-name">Sophia Rahman</div>
              <div class="author-role">CTO, SwiftRoute Logistics</div>
            </div>
            <span class="platform-badge pb-clutch">Clutch</span>
          </div>
        </div>

        <div class="tcard accent-green">
          <div class="quote-mark">"</div>
          <div class="card-stars">
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
          </div>
          <p class="tcard-body">
            We needed a no-code backend integrated with our existing
            infrastructure. Space To Tech made it feel effortless. What we
            thought would take 6 months shipped in 10 weeks.
          </p>
          <div class="tcard-divider"></div>
          <div class="tcard-author">
            <div class="avatar av-green">AK</div>
            <div class="author-info">
              <div class="author-name">Arjun Kumar</div>
              <div class="author-role">Founder, EduSpark</div>
            </div>
            <span class="platform-badge pb-linkedin">LinkedIn</span>
          </div>
        </div>

        <div class="tcard">
          <div class="quote-mark">"</div>
          <div class="card-stars">
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
          </div>
          <p class="tcard-body">
            The UI/UX team redesigned our entire platform. User retention
            jumped 43% within the first month. They don't just code — they
            think product. Truly a partner, not a vendor.
          </p>
          <div class="tcard-divider"></div>
          <div class="tcard-author">
            <div class="avatar av-rose">LP</div>
            <div class="author-info">
              <div class="author-name">Laura Pérez</div>
              <div class="author-role">Product Lead, MediTrack</div>
            </div>
            <span class="platform-badge pb-google">Google</span>
          </div>
        </div>

        <div class="tcard accent-blue">
          <div class="quote-mark">"</div>
          <div class="card-stars">
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
          </div>
          <p class="tcard-body">
            Scalable Angular architecture, clean documentation, and a dev team
            that actually explains their decisions. Our engineering lead said
            it was the best handoff he'd ever seen.
          </p>
          <div class="tcard-divider"></div>
          <div class="tcard-author">
            <div class="avatar av-indigo">TW</div>
            <div class="author-info">
              <div class="author-name">Tom Warren</div>
              <div class="author-role">VP Engineering, BuildStack</div>
            </div>
            <span class="platform-badge pb-clutch">Clutch</span>
          </div>
        </div>

        <!-- Duplicate for seamless loop -->
        <div class="tcard accent-blue">
          <div class="quote-mark">"</div>
          <div class="card-stars">
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
          </div>
          <p class="tcard-body">
            Space To Tech delivered our Flutter app in 8 weeks — on time, on
            budget, and with pixel-perfect design. The team communicated
            proactively and the code quality is outstanding.
          </p>
          <div class="tcard-divider"></div>
          <div class="tcard-author">
            <div class="avatar av-blue">JM</div>
            <div class="author-info">
              <div class="author-name">James Mitchell</div>
              <div class="author-role">CEO, FinEdge Solutions</div>
            </div>
            <span class="platform-badge pb-google">Google</span>
          </div>
        </div>

        <div class="tcard">
          <div class="quote-mark">"</div>
          <div class="card-stars">
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
          </div>
          <p class="tcard-body">
            Their React Native team took our complex logistics platform and
            turned it into a seamless mobile experience. Post-launch support
            has been fantastic — zero downtime in 6 months.
          </p>
          <div class="tcard-divider"></div>
          <div class="tcard-author">
            <div class="avatar av-teal">SR</div>
            <div class="author-info">
              <div class="author-name">Sophia Rahman</div>
              <div class="author-role">CTO, SwiftRoute Logistics</div>
            </div>
            <span class="platform-badge pb-clutch">Clutch</span>
          </div>
        </div>

        <div class="tcard accent-green">
          <div class="quote-mark">"</div>
          <div class="card-stars">
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
          </div>
          <p class="tcard-body">
            We needed a no-code backend integrated with our existing
            infrastructure. Space To Tech made it feel effortless. What we
            thought would take 6 months shipped in 10 weeks.
          </p>
          <div class="tcard-divider"></div>
          <div class="tcard-author">
            <div class="avatar av-green">AK</div>
            <div class="author-info">
              <div class="author-name">Arjun Kumar</div>
              <div class="author-role">Founder, EduSpark</div>
            </div>
            <span class="platform-badge pb-linkedin">LinkedIn</span>
          </div>
        </div>

        <div class="tcard">
          <div class="quote-mark">"</div>
          <div class="card-stars">
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
          </div>
          <p class="tcard-body">
            The UI/UX team redesigned our entire platform. User retention
            jumped 43% within the first month. They don't just code — they
            think product. Truly a partner, not a vendor.
          </p>
          <div class="tcard-divider"></div>
          <div class="tcard-author">
            <div class="avatar av-rose">LP</div>
            <div class="author-info">
              <div class="author-name">Laura Pérez</div>
              <div class="author-role">Product Lead, MediTrack</div>
            </div>
            <span class="platform-badge pb-google">Google</span>
          </div>
        </div>

        <div class="tcard accent-blue">
          <div class="quote-mark">"</div>
          <div class="card-stars">
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
            <div class="card-star"></div>
          </div>
          <p class="tcard-body">
            Scalable Angular architecture, clean documentation, and a dev team
            that actually explains their decisions. Our engineering lead said
            it was the best handoff he'd ever seen.
          </p>
          <div class="tcard-divider"></div>
          <div class="tcard-author">
            <div class="avatar av-indigo">TW</div>
            <div class="author-info">
              <div class="author-name">Tom Warren</div>
              <div class="author-role">VP Engineering, BuildStack</div>
            </div>
            <span class="platform-badge pb-clutch">Clutch</span>
          </div>
        </div>
      </div>
    </div>
     <div class="lp-backdrop" id="lpBackdrop">
    <div class="lp-modal" id="lpModal">
      <button class="lp-close" onclick="lpClose()" title="Close">
        &#x2715;
      </button>

      <div class="lp-timer-bar">
        <div class="lp-timer-fill" id="lpTimerFill"></div>
      </div>

      <div id="lpFormWrap">
        <div class="lp-badge">
          <div class="lp-badge-dot"></div>
          We respond within 24 hours
        </div>
        <h2 class="lp-title">Start Your <span>Project</span></h2>
        <p class="lp-sub">
          Tell us about your project and we'll get back to you with a
          personalized proposal.
        </p>

        <div class="lp-row">
          <div class="lp-field">
            <label class="lp-label">First Name <span>*</span></label>
            <input class="lp-input" type="text" placeholder="John" id="lp-fname" />
          </div>
          <div class="lp-field">
            <label class="lp-label">Last Name</label>
            <input class="lp-input" type="text" placeholder="Doe" />
          </div>
          <div class="lp-field">
            <label class="lp-label">Contact Number <span>*</span></label>
            <input class="lp-input" type="tel" placeholder="+91 98765 43210" id="lp-phone" />
          </div>
          <div class="lp-field">
            <label class="lp-label">Company Name</label>
            <input class="lp-input" type="text" placeholder="Acme Inc." />
          </div>
          <div class="lp-field lp-full">
            <label class="lp-label">Project Description</label>
            <textarea class="lp-textarea" placeholder="Briefly describe what you're looking to build..."></textarea>
          </div>
        </div>

        <button class="lp-submit" onclick="lpSubmit()">
          Submit Project Request
        </button>
        <div class="lp-footer-note">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#475569" stroke-width="1.5" />
          </svg>
          Your info is safe — no spam, ever.
        </div>
      </div>

      <div class="lp-success" id="lpSuccess">
        <div class="lp-success-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="#10b981" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <h3>We've got your details!</h3>
        <p>
          Our team will reach out within 24 hours<br />with a personalized
          proposal.
        </p>
        <button class="lp-submit" style="max-width: 200px; margin-top: 4px" onclick="lpClose()">
          Close
        </button>
      </div>
    </div>
  </div>

    <!-- BOTTOM BAR -->
    <div class="bottom-bar">
      <div class="trust-logos">
        <span class="trust-label">Reviewed on</span>
        <span class="trust-pill">Google ★ 4.9</span>
        <span class="trust-pill">Clutch ★ 5.0</span>
        <span class="trust-pill">LinkedIn ✓</span>
        <span class="trust-pill">GoodFirms ★ 4.8</span>
      </div>

      <NuxtLink to="/consultancy" class="cta-btn">
        Start Your Project
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"
          stroke-linecap="round">
          <path d="M3 8h10M8 3l5 5-5 5" />
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

const svcSwiperRef = ref(null)

function onSvcSwiper(swiper) {
  svcSwiperRef.value = swiper
}

function svcPrev() {
  svcSwiperRef.value?.slidePrev()
}

function svcNext() {
  svcSwiperRef.value?.slideNext()
}

const svcBreakpoints = {
  480:  { slidesPerView: 1.5,  spaceBetween: 16 },
  640:  { slidesPerView: 2,    spaceBetween: 20 },
  1024: { slidesPerView: 3,    spaceBetween: 24 },
  1280: { slidesPerView: 4,    spaceBetween: 24 },
}
</script>

<style>
/* ── Swiper services carousel overrides ── */
.svc-swiper {
  width: 100%;
  overflow: hidden;
}

.svc-swiper .swiper-slide {
  height: auto;
}

/* Let Swiper control width; remove the fixed min/max from individual cards */
.svc-swiper .swiper-slide .svc-card,
.svc-swiper .swiper-slide > a.svc-card {
  min-width: unset;
  max-width: unset;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

/* Mobile: reduce side padding on the scroll-section wrapper */
@media (max-width: 480px) {
  .scroll-section {
    padding: 0 32px;
  }
}
</style>