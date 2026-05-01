<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { 
      if (e.isIntersecting) e.target.classList.add('visible'); 
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
</script>
<template>
    <div>
        <!-- HERO -->
        <section class="hero">
            <div class="hero-glow hero-glow-1"></div>
            <div class="hero-glow hero-glow-2"></div>
            <div class="container position-relative" style="z-index:2;">
                <div class="row align-items-center gy-5">
                    <div class="col-lg-7">
                        <div class="hero-pill"><span class="hero-pill-dot"></span>Trusted Software Development Company
                        </div>
                        <h1>
                            Trusted<br>
                            <em>Software</em><br>
                            <em>Development</em><br>
                            <span class="line-accent">Company</span>
                        </h1>
                        <p class="hero-sub">CoderArth Technologies LLP is an India-based software development company
                            delivering custom web applications, mobile apps, enterprise software, and cloud solutions.
                        </p>
                        <div class="hero-actions">
                            <a href="#" class="btn-primary-hero">Start a Project</a>
                            <a href="#team" class="btn-ghost-hero">Meet the Team</a>
                        </div>
                        <div class="hero-stats">
                            <div>
                                <div class="hero-stat-num">2025</div>
                                <div class="hero-stat-label">Founded</div>
                            </div>
                            <div>
                                <div class="hero-stat-num">50+</div>
                                <div class="hero-stat-label">Projects Delivered</div>
                            </div>
                            <div>
                                <div class="hero-stat-num">15+</div>
                                <div class="hero-stat-label">Happy Clients</div>
                            </div>
                            <div>
                                <div class="hero-stat-num">4+</div>
                                <div class="hero-stat-label">Industries Served</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 hero-image-col">
                        <div class="hero-card-float">
                            <div class="hero-card-title">Our Expertise</div>
                            <div class="hero-tag-cloud">
                                <span class="hero-tag blue">React &amp; Next.js</span>
                                <span class="hero-tag green">Node.js</span>
                                <span class="hero-tag blue">Flutter</span>
                                <span class="hero-tag">Python / AI</span>
                                <span class="hero-tag green">PostgreSQL</span>
                                <span class="hero-tag">React Native</span>
                                <span class="hero-tag blue">OpenAI / GPT</span>
                                <span class="hero-tag">Cloud Solutions</span>
                                <span class="hero-tag green">Enterprise Apps</span>
                                <span class="hero-tag">Mobile Apps</span>
                                <span class="hero-tag blue">Custom Software</span>
                                <span class="hero-tag">HRMS Platforms</span>
                            </div>
                            <div style="margin-top:28px;padding-top:22px;border-top:1px solid rgba(255,255,255,0.1);">
                                <div
                                    style="font-size:12px;color:rgba(255,255,255,0.35);letter-spacing:0.05em;text-transform:uppercase;">
                                    Serving</div>
                                <div
                                    style="font-size:15px;color:rgba(255,255,255,0.75);margin-top:6px;font-weight:500;">
                                    Startups · Enterprises · Government</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MISSION -->
        <section class="mission-section" id="mission">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-lg-6 mission-left fade-up">
                        <span class="section-eyebrow">Our Mission &amp; Vision</span>
                        <h2 class="section-title" style="margin-bottom:24px;">Driving <em>Digital Transformation</em>
                            Through Technology</h2>
                        <p class="section-sub" style="margin-bottom:32px;">At CodersArth Technologies LLP, our mission
                            is to empower businesses with reliable, scalable, and secure software solutions that
                            simplify operations, accelerate growth, and deliver measurable business value.</p>
                        <blockquote class="mission-quote">We collaborate with startups, enterprises, and government
                            organizations to build future-ready, cloud-based platforms.</blockquote>
                    </div>
                    <div class="col-lg-6 mission-right fade-up delay-2">
                        <div class="pillar-card">
                            <div class="pillar-icon blue">⚡</div>
                            <div class="pillar-title">Innovation &amp; Engineering Excellence</div>
                            <div class="pillar-desc">We leverage modern frameworks, cloud platforms, and best
                                engineering practices to deliver future-ready software solutions.</div>
                        </div>
                        <div class="pillar-card">
                            <div class="pillar-icon green">🤝</div>
                            <div class="pillar-title">Client-Centric Approach</div>
                            <div class="pillar-desc">We align technology with business goals to improve efficiency,
                                performance, scalability, and return on investment.</div>
                        </div>
                        <div class="pillar-card">
                            <div class="pillar-icon gold">🛡️</div>
                            <div class="pillar-title">Security, Quality &amp; Scalability</div>
                            <div class="pillar-desc">Every solution follows enterprise-grade security standards,
                                performance optimization, and long-term stability planning.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- STORY / TIMELINE -->
        <section class="story-section">
            <div class="container">
                <div class="row gy-5 align-items-start">
                    <div class="col-lg-5 fade-up">
                        <span class="section-eyebrow">Our Story</span>
                        <h2 class="section-title" style="margin-bottom:40px;">Built as a <em>Modern Startup</em> With a
                            Clear Vision</h2>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-year">2025 — Foundation</div>
                                <div class="timeline-title">Where it all began</div>
                                <div class="timeline-desc">CoderArth Technologies LLP was founded as a technology-driven
                                    startup with a clear mission — to help businesses grow through reliable, scalable,
                                    and future-ready software solutions.</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2025+ — Early Growth</div>
                                <div class="timeline-title">Rapid expansion of capabilities</div>
                                <div class="timeline-desc">Rapidly expanding capabilities by delivering POS systems,
                                    vehicle tracking solutions, HRMS platforms, and custom enterprise software for
                                    growing organizations.</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">Future — Innovation &amp; Scale</div>
                                <div class="timeline-title">Becoming a trusted partner</div>
                                <div class="timeline-desc">Building scalable, secure, AI-enabled digital solutions while
                                    positioning CodersArth Technologies as a trusted long-term technology partner for
                                    enterprises and government projects.</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 fade-up delay-2">
                        <div class="story-visual">
                            <div class="story-visual-bg"></div>
                            <div class="story-tagline">"Technology that accelerates growth and delivers measurable
                                business value."</div>
                            <div class="story-stat-grid">
                                <div class="story-stat-card">
                                    <div class="story-stat-num">50+</div>
                                    <div class="story-stat-label">Projects Delivered</div>
                                </div>
                                <div class="story-stat-card">
                                    <div class="story-stat-num">15+</div>
                                    <div class="story-stat-label">Happy Clients</div>
                                </div>
                                <div class="story-stat-card">
                                    <div class="story-stat-num">4+</div>
                                    <div class="story-stat-label">Industries Served</div>
                                </div>
                                <div class="story-stat-card">
                                    <div class="story-stat-num">100%</div>
                                    <div class="story-stat-label">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- TEAM -->
        <section class="team-section" id="team">
            <div class="container">
                <div class="text-center fade-up" style="margin-bottom:60px;">
                    <span class="section-eyebrow">Meet Our Team</span>
                    <h2 class="section-title">The <em>People Behind</em> CodersArth</h2>
                    <p class="section-sub mx-auto" style="margin-top:14px;">Our team brings together expertise in
                        software development, project management, business strategy, and user experience design.</p>
                </div>
                <div class="row gy-4 justify-content-center">
                    <div class="col-sm-6 col-lg-3 fade-up delay-1">
                        <div class="team-card">
                            <div class="team-avatar" style="background: linear-gradient(135deg, #1a56db, #3b82f6);">AP
                            </div>
                            <div class="team-name">Aman Pandey</div>
                            <div class="team-role">Project Manager</div>
                            <div class="team-divider"></div>
                            <div class="team-desc">Responsible for end-to-end project planning, client coordination,
                                timeline management, and ensuring timely delivery of software solutions aligned with
                                business requirements.</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 fade-up delay-2">
                        <div class="team-card">
                            <div class="team-avatar" style="background: linear-gradient(135deg, #7c3aed, #a78bfa);">DV
                            </div>
                            <div class="team-name">Drishti Vishwakarma</div>
                            <div class="team-role">Social Media Manager</div>
                            <div class="team-divider"></div>
                            <div class="team-desc">Manages brand presence, digital communications, and content strategy.
                                Elevates social platforms to build credibility, trust, and engagement for CodersArth
                                Technologies.</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 fade-up delay-3">
                        <div class="team-card">
                            <div class="team-avatar" style="background: linear-gradient(135deg, #10b981, #34d399);">AL
                            </div>
                            <div class="team-name">Alaudin</div>
                            <div class="team-role">Business Development Manager</div>
                            <div class="team-divider"></div>
                            <div class="team-desc">Leads client acquisition, requirement analysis, proposal development.
                                Ensures business objectives are effectively translated into scalable and practical
                                software solutions.</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 fade-up delay-4">
                        <div class="team-card">
                            <div class="team-avatar" style="background: linear-gradient(135deg, #f59e0b, #fbbf24);">AY
                            </div>
                            <div class="team-name">Ayan</div>
                            <div class="team-role">UI/UX Designer</div>
                            <div class="team-divider"></div>
                            <div class="team-desc">Designs intuitive user interfaces and exceptional user experiences,
                                focusing on usability, accessibility, and visual excellence across web and mobile
                                applications.</div>
                        </div>
                    </div>
                </div>
                <div class="text-center fade-up"
                    style="margin-top:60px;padding:48px;background:var(--gray-50);border-radius:var(--radius-xl);border:1px solid var(--border);">
                    <div
                        style="font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:var(--ink);margin-bottom:10px;">
                        Join Our Growing Team</div>
                    <p
                        style="font-size:15px;color:var(--gray-600);margin-bottom:28px;max-width:460px;margin-left:auto;margin-right:auto;">
                        We are always looking for motivated professionals who are passionate about software development,
                        innovation, and problem-solving.</p>
                    <a href="#" class="btn-primary-hero">View Open Positions</a>
                </div>
            </div>
        </section>

        <!-- LEADERSHIP -->
        <section class="leadership-section">
            <div class="container">
                <div class="text-center fade-up" style="margin-bottom:60px;">
                    <span class="section-eyebrow">Leadership Team</span>
                    <h2 class="section-title">The <em>Minds Behind</em> CodersArth</h2>
                    <p class="section-sub mx-auto" style="margin-top:14px;">Our leadership team combines technical
                        expertise, strategic thinking, and industry experience to guide CodersArth Technologies LLP.</p>
                </div>
                <div class="row gy-4 justify-content-center">
                    <div class="col-sm-6 col-lg-4 fade-up delay-1">
                        <div class="leader-card">
                            <div class="leader-avatar" style="background: linear-gradient(135deg, #1a56db, #3b82f6);">RY
                            </div>
                            <div class="leader-name">Mr. Rahul Yadav</div>
                            <div class="leader-role">Founder &amp; CEO</div>
                            <div class="leader-desc">Leads the overall vision, business strategy, and technology
                                direction of CodersArth Technologies. Focused on building long-term client relationships
                                and delivering impactful digital transformation solutions.</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 fade-up delay-2">
                        <div class="leader-card">
                            <div class="leader-avatar" style="background: linear-gradient(135deg, #7c3aed, #a78bfa);">DP
                            </div>
                            <div class="leader-name">Mr. Dev Pandey</div>
                            <div class="leader-role">Chief Technology Officer (CTO)</div>
                            <div class="leader-desc">Oversees technical architecture, engineering team, and software
                                development standards. Responsible for ensuring scalable, secure, and high-quality
                                technology solutions across all projects.</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 fade-up delay-3">
                        <div class="leader-card">
                            <div class="leader-avatar" style="background: linear-gradient(135deg, #10b981, #059669);">RJ
                            </div>
                            <div class="leader-name">Mr. Rajveer</div>
                            <div class="leader-role">Strategic Investor</div>
                            <div class="leader-desc">Provides strategic guidance, financial insights, and market
                                direction to support sustainable growth, innovation, and long-term business planning for
                                CodersArth Technologies LLP.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- VALUES -->
        <section class="values-section">
            <div class="container">
                <div class="text-center fade-up" style="margin-bottom:60px;">
                    <span class="section-eyebrow">Our Values</span>
                    <h2 class="section-title">What <em>Drives</em> CodersArth</h2>
                    <p class="section-sub mx-auto" style="margin-top:14px;">Our values define how we work, grow, and
                        serve as a technology-driven organization. These principles guide every project we deliver.</p>
                </div>
                <div class="row gy-4">
                    <div class="col-sm-6 col-lg-3 fade-up delay-1">
                        <div class="value-card v1">
                            <div class="value-num">01</div>
                            <div class="value-title">Innovation</div>
                            <div class="value-desc">We continuously adopt modern technologies, tools, and frameworks to
                                design innovative software solutions that solve real business problems.</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 fade-up delay-2">
                        <div class="value-card v2">
                            <div class="value-num">02</div>
                            <div class="value-title">Passion for Technology</div>
                            <div class="value-desc">Our passion for software engineering drives us to deliver reliable,
                                scalable, and high-quality solutions for our clients.</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 fade-up delay-3">
                        <div class="value-card v3">
                            <div class="value-num">03</div>
                            <div class="value-title">Collaboration</div>
                            <div class="value-desc">We believe in transparent communication and close collaboration with
                                clients to ensure successful project outcomes and long-term partnerships.</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 fade-up delay-4">
                        <div class="value-card v4">
                            <div class="value-num">04</div>
                            <div class="value-title">Engineering Excellence</div>
                            <div class="value-desc">From code quality to performance and security, we follow best
                                practices to deliver enterprise-grade software solutions that exceed expectations.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="cta-section">
            <div class="cta-bg"></div>
            <div class="cta-glow"></div>
            <div class="container text-center position-relative" style="z-index:2;">
                <span class="section-eyebrow" style="color:var(--blue-light);">Let's Build Together</span>
                <h2 class="cta-title">Let's Build Your <em>Next Digital Solution</em></h2>
                <p class="cta-sub">Looking for a reliable software development partner? CodersArth Technologies LLP
                    helps startups, enterprises, and organizations build scalable web applications, mobile apps,
                    enterprise systems, and cloud-based solutions tailored to real business needs.</p>
                <div class="d-flex gap-3 justify-content-center flex-wrap">
                    <a href="#" class="btn-primary-hero">Start Your Project</a>
                    <a href="#team" class="btn-ghost-hero">Talk to Our Team</a>
                </div>
            </div>
        </section>

    </div>
</template>
<style scoped>
@import "~/assets/css/about_us.css";
</style>