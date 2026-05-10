<template>
  <div class="blog-page">

    <!-- ═══ HERO ═══ -->
    <section class="blog-hero">
      <div class="blog-hero-content">
        <div class="hero-eyebrow">CoderArth Blog</div>
        <h1>Insights &amp; <span>Ideas</span></h1>
        <p class="hero-desc">
          Stay ahead with expert articles on web development, mobile apps, cloud
          architecture, AI, and the tech trends shaping tomorrow's digital
          landscape.
        </p>
      </div>

      <div class="blog-search-wrap">
        <input
          class="blog-search"
          type="text"
          placeholder="Search articles, topics, or technologies…"
        />
        <svg
          class="blog-search-icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <circle cx="7.5" cy="7.5" r="5.5" />
          <path d="M16 16l-3.5-3.5" />
        </svg>
      </div>

      <div class="blog-stats">
        <div class="blog-stat">
          <span class="blog-stat-num">50+</span>
          <span class="blog-stat-label">Articles</span>
        </div>
        <div class="blog-stat-divider"></div>
        <div class="blog-stat">
          <span class="blog-stat-num">8</span>
          <span class="blog-stat-label">Categories</span>
        </div>
        <div class="blog-stat-divider"></div>
        <div class="blog-stat">
          <span class="blog-stat-num">10K+</span>
          <span class="blog-stat-label">Monthly Readers</span>
        </div>
        <div class="blog-stat-divider"></div>
        <div class="blog-stat">
          <span class="blog-stat-num">Weekly</span>
          <span class="blog-stat-label">New Posts</span>
        </div>
      </div>
    </section>

    <!-- ═══ FEATURED POST ═══ -->
    <section class="blog-featured">
      <div class="section-eyebrow">Featured Article</div>

      <a href="#" class="featured-card">
        <div class="featured-img">
          <div class="featured-img-icon">
            <svg viewBox="0 0 40 40" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 5L5 12.5v10L20 30l15-7.5v-10L20 5z" />
              <path d="M5 12.5L20 20l15-7.5" />
              <line x1="20" y1="20" x2="20" y2="30" />
            </svg>
          </div>
        </div>
        <div class="featured-body">
          <div class="featured-meta">
            <span class="post-tag tag-blue">Cloud &amp; DevOps</span>
            <span class="post-date">May 5, 2026</span>
          </div>
          <h2>Building Scalable Microservices on AWS: A Complete 2026 Guide</h2>
          <p>
            Discover how to architect resilient, cost-efficient microservices using
            AWS ECS, API Gateway, and Lambda. We cover container orchestration,
            service mesh patterns, observability best practices, and the real-world
            trade-offs teams face when moving from monolith to micro.
          </p>
          <div class="featured-author">
            <div class="author-avatar">AR</div>
            <div class="author-info">
              <div class="author-name">Arjun Rao</div>
              <div class="author-role">Senior Cloud Architect</div>
            </div>
            <div class="read-time">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <circle cx="6.5" cy="6.5" r="5.5"/>
                <path d="M6.5 3.5v3l2 1.5"/>
              </svg>
              12 min read
            </div>
          </div>
        </div>
      </a>
    </section>

    <!-- ═══ POSTS GRID ═══ -->
    <section class="blog-grid-section">
      <div class="blog-grid-header">
        <h2>Latest <span>Articles</span></h2>
        <div class="filter-tabs">
          <a href="#" class="filter-tab active">All</a>
          <a href="#" class="filter-tab">Web Dev</a>
          <a href="#" class="filter-tab">Mobile</a>
          <a href="#" class="filter-tab">AI &amp; ML</a>
          <a href="#" class="filter-tab">DevOps</a>
          <a href="#" class="filter-tab">UI/UX</a>
        </div>
      </div>

      <div class="posts-grid">

        <!-- Post 1 -->
        <a href="#" class="post-card">
          <div class="post-card-img bg-blue">
            <div class="post-card-icon">
              <svg viewBox="0 0 28 28" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6,9 2,11 6,13" />
                <polyline points="22,9 26,11 22,13" />
                <line x1="17" y1="7" x2="11" y2="21" />
              </svg>
            </div>
          </div>
          <div class="post-card-body">
            <div class="post-card-meta">
              <span class="post-tag tag-blue">Web Dev</span>
              <span class="post-date">Apr 28, 2026</span>
            </div>
            <h3>React 19 Server Components: What Every Developer Needs to Know</h3>
            <p>React 19 ships with first-class server component support. We break down the mental model, caching strategies, and when to reach for client components.</p>
            <div class="post-card-footer">
              <div class="post-card-author">
                <div class="author-avatar-sm av-blue">SR</div>
                <span class="post-card-author-name">Siddharth R.</span>
              </div>
              <span class="post-read-more">8 min →</span>
            </div>
          </div>
        </a>

        <!-- Post 2 -->
        <a href="#" class="post-card">
          <div class="post-card-img bg-green">
            <div class="post-card-icon">
              <svg viewBox="0 0 28 28" fill="none" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="3" width="18" height="22" rx="3" />
                <path d="M9 9h10M9 13h10M9 17h6" />
              </svg>
            </div>
          </div>
          <div class="post-card-body">
            <div class="post-card-meta">
              <span class="post-tag tag-green">Mobile</span>
              <span class="post-date">Apr 21, 2026</span>
            </div>
            <h3>Flutter vs React Native in 2026: Honest Performance Benchmarks</h3>
            <p>We benchmarked startup time, scrolling FPS, and memory usage across five real-world app scenarios so you don't have to.</p>
            <div class="post-card-footer">
              <div class="post-card-author">
                <div class="author-avatar-sm av-green">PK</div>
                <span class="post-card-author-name">Priya K.</span>
              </div>
              <span class="post-read-more">10 min →</span>
            </div>
          </div>
        </a>

        <!-- Post 3 -->
        <a href="#" class="post-card">
          <div class="post-card-img bg-purple">
            <div class="post-card-icon">
              <svg viewBox="0 0 28 28" fill="none" stroke="#a78bfa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 3a11 11 0 100 22A11 11 0 0014 3z" />
                <path d="M14 8v5l3.5 3.5" />
              </svg>
            </div>
          </div>
          <div class="post-card-body">
            <div class="post-card-meta">
              <span class="post-tag tag-purple">AI &amp; ML</span>
              <span class="post-date">Apr 14, 2026</span>
            </div>
            <h3>Integrating LLMs Into Your Product Without Breaking the UX</h3>
            <p>From prompt latency to graceful fallbacks — a practical playbook for embedding AI features users actually enjoy using.</p>
            <div class="post-card-footer">
              <div class="post-card-author">
                <div class="author-avatar-sm av-purple">AM</div>
                <span class="post-card-author-name">Ayesha M.</span>
              </div>
              <span class="post-read-more">9 min →</span>
            </div>
          </div>
        </a>

        <!-- Post 4 -->
        <a href="#" class="post-card">
          <div class="post-card-img bg-amber">
            <div class="post-card-icon">
              <svg viewBox="0 0 28 28" fill="none" stroke="#fbbf24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="14" cy="14" r="11" />
                <path d="M14 8l3 5H11l3-5zM14 20v-4" />
              </svg>
            </div>
          </div>
          <div class="post-card-body">
            <div class="post-card-meta">
              <span class="post-tag tag-amber">UI/UX</span>
              <span class="post-date">Apr 7, 2026</span>
            </div>
            <h3>Design Systems at Scale: Lessons From 200+ Projects</h3>
            <p>Token architecture, component API design, and the governance processes that keep teams aligned as products grow.</p>
            <div class="post-card-footer">
              <div class="post-card-author">
                <div class="author-avatar-sm av-amber">NK</div>
                <span class="post-card-author-name">Nikhil K.</span>
              </div>
              <span class="post-read-more">7 min →</span>
            </div>
          </div>
        </a>

        <!-- Post 5 -->
        <a href="#" class="post-card">
          <div class="post-card-img bg-indigo">
            <div class="post-card-icon">
              <svg viewBox="0 0 28 28" fill="none" stroke="#818cf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="22" height="22" rx="4" />
                <path d="M3 9h22M9 25V9" />
              </svg>
            </div>
          </div>
          <div class="post-card-body">
            <div class="post-card-meta">
              <span class="post-tag tag-blue">Web Dev</span>
              <span class="post-date">Mar 31, 2026</span>
            </div>
            <h3>Nuxt 4 Performance: Edge Rendering, ISR, and Cache Invalidation</h3>
            <p>A deep-dive into Nuxt 4's rendering modes and how to pick the right strategy for e-commerce, SaaS, and content-heavy sites.</p>
            <div class="post-card-footer">
              <div class="post-card-author">
                <div class="author-avatar-sm av-blue">VT</div>
                <span class="post-card-author-name">Vikram T.</span>
              </div>
              <span class="post-read-more">11 min →</span>
            </div>
          </div>
        </a>

        <!-- Post 6 -->
        <a href="#" class="post-card">
          <div class="post-card-img bg-teal">
            <div class="post-card-icon">
              <svg viewBox="0 0 28 28" fill="none" stroke="#2dd4bf" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 3L4 8v10l10 6 10-6V8L14 3z" />
                <path d="M4 8l10 6 10-6" />
                <line x1="14" y1="14" x2="14" y2="24" />
              </svg>
            </div>
          </div>
          <div class="post-card-body">
            <div class="post-card-meta">
              <span class="post-tag tag-green">DevOps</span>
              <span class="post-date">Mar 24, 2026</span>
            </div>
            <h3>Zero-Downtime Deployments: Kubernetes Blue-Green Strategy Explained</h3>
            <p>Step-by-step setup of blue-green deployments on Kubernetes with automated rollbacks, health probes, and traffic splitting.</p>
            <div class="post-card-footer">
              <div class="post-card-author">
                <div class="author-avatar-sm av-green">RD</div>
                <span class="post-card-author-name">Rohan D.</span>
              </div>
              <span class="post-read-more">13 min →</span>
            </div>
          </div>
        </a>

      </div>

      <div class="blog-load-more">
        <button class="btn-load-more">
          Load More Articles
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M2 7h10M7 2l5 5-5 5" />
          </svg>
        </button>
      </div>
    </section>

    <!-- ═══ NEWSLETTER ═══ -->
    <section class="newsletter-section">
      <div class="newsletter-banner">
        <div class="newsletter-inner">
          <div class="newsletter-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Newsletter
          </div>
          <h2>Never Miss an <span>Insight</span></h2>
          <p>
            Get the best articles on software development, cloud, AI, and design
            delivered straight to your inbox — no spam, unsubscribe any time.
          </p>
          <div class="newsletter-form">
            <input
              class="newsletter-input"
              type="email"
              placeholder="your@email.com"
            />
            <button class="btn-newsletter">
              Subscribe
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </button>
          </div>
          <p class="newsletter-note">Join 10,000+ developers. No spam — we promise.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
@import "~/assets/css/blog.css";
</style>
