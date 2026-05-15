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

        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
      </ul>

      <!-- Right Side Action Buttons (desktop) -->
      <div class="nav-actions">
        <a href="tel:+918881114429" class="btn-contact">
          <div class="phone-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div class="contact-text">
            <span class="contact-label">Talk to sales · 24×7</span>
            <span class="contact-num">+91 8881114429</span>
          </div>
        </a>

        <NuxtLink to="/consultancy" class="btn-consult">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Get Free Consultancy
        </NuxtLink>
      </div>

      <!-- Mobile Right Side -->
      <div class="nav-mobile-actions">
        <NuxtLink to="/consultancy" class="btn-consult-sm">Free Consult</NuxtLink>
        <button class="hamburger" :class="{ open: mobileMenuOpen }" @click="mobileMenuOpen = true" aria-label="Open menu">
          <i class="fa-solid fa-bars"></i>
         
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Drawer -->
    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <div class="mobile-menu-header">
        <NuxtLink to="/" class="logo" @click="mobileMenuOpen = false">
          <img src="/images/logo/black_logo.webp" height="40" alt="Logo Mark" />
        </NuxtLink>
        <button class="mobile-close" @click="mobileMenuOpen = false" aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="mobile-nav">
        <NuxtLink to="/about_us" class="mobile-link" @click="mobileMenuOpen = false">About Us</NuxtLink>

        <div class="mobile-accordion">
          <button class="mobile-link mobile-accordion-trigger" @click="toggleAccordion('services')">
            Services
            <svg class="mobile-chevron" :class="{ rotated: openAccordion === 'services' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="mobile-accordion-body" v-show="openAccordion === 'services'">
            <NuxtLink to="/web_dev_service" class="mobile-sub-link" @click="mobileMenuOpen = false">Web Development</NuxtLink>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">iOS Development</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Android Development</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Flutter / React Native</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">AI Integration</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Workflow Automation</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Chatbot Development</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">UI / UX Design</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Maintenance & Support</a>
          </div>
        </div>

        <div class="mobile-accordion">
          <button class="mobile-link mobile-accordion-trigger" @click="toggleAccordion('solutions')">
            Solutions
            <svg class="mobile-chevron" :class="{ rotated: openAccordion === 'solutions' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="mobile-accordion-body" v-show="openAccordion === 'solutions'">
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Healthcare</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Education</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Fintech</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Custom CRM</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">E-Commerce</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Startups</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Enterprise</a>
          </div>
        </div>

        <div class="mobile-accordion">
          <button class="mobile-link mobile-accordion-trigger" @click="toggleAccordion('packages')">
            Packages
            <svg class="mobile-chevron" :class="{ rotated: openAccordion === 'packages' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="mobile-accordion-body" v-show="openAccordion === 'packages'">
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Starter</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Growth</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Enterprise</a>
            <a href="#" class="mobile-sub-link" @click="mobileMenuOpen = false">Compare Plans</a>
          </div>
        </div>

        <NuxtLink to="/blog" class="mobile-link" @click="mobileMenuOpen = false">Blog</NuxtLink>
        <NuxtLink to="/contact" class="mobile-link" @click="mobileMenuOpen = false">Contact Us</NuxtLink>
      </div>

      <div class="mobile-menu-footer">
        <NuxtLink to="/consultancy" class="btn-consult mobile-cta" @click="mobileMenuOpen = false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Get Free Consultancy
        </NuxtLink>
      </div>
    </div>

    <!-- Backdrop -->
    <div v-if="mobileMenuOpen" class="mobile-backdrop" @click="mobileMenuOpen = false"></div>
  </div>
</template>

<script setup>
const showStrip = ref(true)
const mobileMenuOpen = ref(false)
const openAccordion = ref(null)

function toggleAccordion(name) {
  openAccordion.value = openAccordion.value === name ? null : name
}
</script>