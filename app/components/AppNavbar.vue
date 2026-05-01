<template>
  <div class="nav-wrapper">
    <!-- Announcement Strip -->
    <div v-if="showStrip" class="announcement-strip">
      <span class="strip-icon">⚡</span>
      <div class="strip-text">
        Book a <span class="strip-underline">free personalized demo</span> + get a complimentary ROI analysis
        <button class="strip-btn">Get Started →</button>
      </div>
      <button class="strip-close" @click="showStrip = false">×</button>
    </div>

    <!-- Navbar -->
    <nav>
      <NuxtLink to="/" class="logo">
        <div class="">
          <img src="/images/logo/black_logo.webp" height="48" alt="Logo Mark" />
        </div>
      </NuxtLink>

      <ul class="nav-links">
        <li>
          <NuxtLink to="/about_us" class="dropdown-item">
            About Us
          </NuxtLink>
        </li>

        <li>
          <a href="#">
            Services
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div class="dropdown">
            <div class="has-sub">
              <NuxtLink to="/web_dev_service" class="dropdown-item">
                Web Development
              </NuxtLink>
              
            </div>
            <div class="has-sub">
              <a class="dropdown-item">
                App Development
                <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <div class="submenu">
                <a href="#" class="submenu-item">iOS Development</a>
                <a href="#" class="submenu-item">Android Development</a>
                <a href="#" class="submenu-item">Flutter / React Native</a>
              </div>
            </div>
            <div class="has-sub">
              <a class="dropdown-item">
                AI & Automation
                <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <div class="submenu">
                <a href="#" class="submenu-item">AI Integration</a>
                <a href="#" class="submenu-item">Workflow Automation</a>
                <a href="#" class="submenu-item">Chatbot Development</a>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">UI / UX Design</a>
            <a href="#" class="dropdown-item">Maintenance & Support</a>
          </div>
        </li>

        <li>
          <a href="#">
            Solutions
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div class="dropdown">
            <div class="dropdown-label">By Industry</div>
            <a href="#" class="dropdown-item">Healthcare</a>
            <a href="#" class="dropdown-item">Education</a>
            <a href="#" class="dropdown-item">Fintech</a>
            <a href="#" class="dropdown-item">Custom CRM</a>
            <a href="#" class="dropdown-item">E-Commerce</a>
            <div class="dropdown-divider"></div>
            <div class="dropdown-label">By Size</div>
            <a href="#" class="dropdown-item">Startups</a>
            <a href="#" class="dropdown-item">Enterprise</a>
          </div>
        </li>

        <li>
          <a href="#">
            Packages
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div class="dropdown">
            <a href="#" class="dropdown-item">Starter</a>
            <a href="#" class="dropdown-item">Growth</a>
            <a href="#" class="dropdown-item">Enterprise</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Compare Plans</a>
          </div>
        </li>

        <li><a href="#">Blog</a></li>
        <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
      </ul>

      <!-- Right Side Action Buttons -->
      <div class="nav-actions">
        <a href="tel:+911234567890" class="btn-contact">
          <div class="phone-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div class="contact-text">
            <span class="contact-label">Talk to sales · 24×7</span>
            <span class="contact-num">+91 1234567890</span>
          </div>
        </a>

        <NuxtLink to="/contact" class="btn-consult">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Get Free Consultancy
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
const showStrip = ref(true)
</script>