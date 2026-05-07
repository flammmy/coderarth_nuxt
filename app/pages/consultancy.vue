<template>
  <div class="pg-cons">

    <!-- ═══ HERO ═══ -->
    <section class="cons-hero">
      <div class="cons-hero-inner">
        <div class="cons-badge">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          Start Your Project Today
        </div>
        <h1>Let's Build Something <span>Amazing</span></h1>
        <p>Ready to transform your business with cutting-edge technology? Get started with a free consultation and let's discuss how we can help you achieve your digital goals.</p>
        <a href="#form" class="cons-hero-btn">
          Get Free Consultation
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <path d="M3 8h10M8 3l5 5-5 5" />
          </svg>
        </a>
      </div>
    </section>

    <!-- ═══ FORM ═══ -->
    <section class="cons-form-section" id="form">
      <div class="cons-form-inner">

        <!-- LEFT: benefits + contact -->
        <div class="cons-form-left">
          <div class="cons-section-label">Free Consultation</div>
          <h2>Start Your <span>Project Today</span></h2>
          <p>Tell us about your project and we'll respond within 24 hours with a personalized proposal — no commitment required.</p>
          <ul class="cons-form-benefits">
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Response within 24 hours
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Free initial consultation
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Detailed project proposal
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              No commitment required
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Transparent pricing
            </li>
          </ul>
          <div class="cons-form-contacts">
            <a href="tel:+918881114429" class="cons-form-clink">
              <div class="cons-form-cicon" style="background:rgba(59,130,246,0.15);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.1z"/>
                </svg>
              </div>
              <div>
                <span>Call us directly</span>
                <strong>+91-8881114429</strong>
              </div>
            </a>
            <a href="mailto:info@codersarth.com" class="cons-form-clink">
              <div class="cons-form-cicon" style="background:rgba(16,185,129,0.15);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span>Email us</span>
                <strong>info@codersarth.com</strong>
              </div>
            </a>
          </div>
        </div>

        <!-- RIGHT: form card -->
        <div class="cons-form-right">
          <div class="cons-form-card">
            <h3>Project Details</h3>
            <form class="cons-form">
              <div class="cons-field">
                <label for="c-name">First Name <span class="req">*</span></label>
                <input type="text" id="c-name" placeholder="Your name" />
              </div>
              <div class="cons-row">
                <div class="cons-field">
                  <label for="c-phone">Contact Number <span class="req">*</span></label>
                  <input type="tel" id="c-phone" placeholder="+91 98765 43210" />
                </div>
                <div class="cons-field">
                  <label for="c-company">Company Name</label>
                  <input type="text" id="c-company" placeholder="Your company (optional)" />
                </div>
              </div>
              <div class="cons-field">
                <label for="c-service">Service Interested In</label>
                <select id="c-service">
                  <option value="" disabled selected>Select a service</option>
                  <option>Web Application Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>Custom Software Development</option>
                  <option>CRM Development</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="cons-field">
                <label for="c-desc">Project Description</label>
                <textarea id="c-desc" rows="4" placeholder="Tell us about your project, goals, and timeline..."></textarea>
              </div>
              <button type="submit" class="cons-submit">
                Submit Project Request
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <path d="M3 8h10M8 3l5 5-5 5" />
                </svg>
              </button>
              <p class="cons-form-note">We'll reply within 24 hours. No spam, ever.</p>
            </form>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══ WHY CHOOSE ═══ -->
    <section class="cons-why">
      <div class="cons-why-inner">
        <div class="cons-section-label">Why Us</div>
        <h2>Why Choose <span>CodersArth Technologies?</span></h2>
        <p>We're committed to delivering exceptional results and building lasting partnerships with our clients.</p>
        <div class="cons-why-grid">
          <div class="cons-why-card">
            <div class="cons-why-icon" style="background: linear-gradient(135deg,#3b82f6,#1a56db);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3>Fast Response</h3>
            <p>Get a response within 24 hours and start your project quickly</p>
          </div>
          <div class="cons-why-card">
            <div class="cons-why-icon" style="background: linear-gradient(135deg,#10b981,#059669);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Quality Guarantee</h3>
            <p>100% satisfaction guarantee on all our projects and services</p>
          </div>
          <div class="cons-why-card">
            <div class="cons-why-icon" style="background: linear-gradient(135deg,#8b5cf6,#6d28d9);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Expert Team</h3>
            <p>Work with experienced developers and technology experts</p>
          </div>
          <div class="cons-why-card">
            <div class="cons-why-icon" style="background: linear-gradient(135deg,#f59e0b,#d97706);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
              </svg>
            </div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock support and maintenance for your projects</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PROCESS ═══ -->
    <section class="cons-process">
      <div class="cons-process-inner">
        <div class="cons-section-label dark">Our Process</div>
        <h2>A proven methodology that ensures successful project delivery and client satisfaction.</h2>
        <div class="cons-steps">
          <div class="cons-step">
            <div class="cons-step-num">1</div>
            <div class="cons-step-line"></div>
            <h3>Discovery</h3>
            <p>We analyze your requirements and create a detailed project plan</p>
          </div>
          <div class="cons-step">
            <div class="cons-step-num" style="background: linear-gradient(135deg,#10b981,#059669);">2</div>
            <div class="cons-step-line"></div>
            <h3>Design</h3>
            <p>Our designers create stunning UI/UX mockups for your approval</p>
          </div>
          <div class="cons-step">
            <div class="cons-step-num" style="background: linear-gradient(135deg,#8b5cf6,#6d28d9);">3</div>
            <div class="cons-step-line"></div>
            <h3>Development</h3>
            <p>Expert developers build your solution with regular updates</p>
          </div>
          <div class="cons-step">
            <div class="cons-step-num" style="background: linear-gradient(135deg,#f59e0b,#d97706);">4</div>
            <div class="cons-step-line cons-step-line--hidden"></div>
            <h3>Launch</h3>
            <p>We deploy your project and provide ongoing support</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ GET IN TOUCH ═══ -->
    <section class="cons-touch">
      <div class="cons-touch-inner">
        <div class="cons-touch-left">
          <h2>Get in Touch</h2>
          <p>Prefer to talk directly? Contact us through any of these channels and we'll be happy to discuss your project.</p>
          <div class="cons-contact-list">
            <div class="cons-contact-item">
              <div class="cons-ci-icon" style="background:rgba(59,130,246,0.15);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span class="cons-ci-label">Email Us</span>
                <span class="cons-ci-value">info@codersarth.com</span>
              </div>
            </div>
            <div class="cons-contact-item">
              <div class="cons-ci-icon" style="background:rgba(16,185,129,0.15);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.1z"/>
                </svg>
              </div>
              <div>
                <span class="cons-ci-label">Call Us</span>
                <span class="cons-ci-value">+91-8881114429</span>
              </div>
            </div>
            <div class="cons-contact-item">
              <div class="cons-ci-icon" style="background:rgba(139,92,246,0.15);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span class="cons-ci-label">Visit Us</span>
                <span class="cons-ci-value">Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
            <div class="cons-contact-item">
              <div class="cons-ci-icon" style="background:rgba(245,158,11,0.15);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div>
                <span class="cons-ci-label">Business Hours</span>
                <span class="cons-ci-value">Mon–Fri: 10AM–7PM</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cons-touch-right">
          <div class="cons-guarantee-card">
            <h3>Quick Response Guarantee</h3>
            <ul class="cons-guarantee-list">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Response within 24 hours
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Free initial consultation
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Detailed project proposal
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                No commitment required
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Transparent pricing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ BOTTOM CTA ═══ -->
    <section class="cons-cta">
      <div class="cons-cta-inner">
        <h2>Ready to Transform Your <span>Business?</span></h2>
        <p>Join hundreds of successful businesses that have revolutionized their operations with our technology solutions.</p>
        <div class="cons-cta-actions">
          <a href="#form" class="cons-cta-btn-primary">Start Your Project</a>
          <NuxtLink to="/contact" class="cons-cta-btn-ghost">Explore Services</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
@import "~/assets/css/consultancy.css";
</style>
