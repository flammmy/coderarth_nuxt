 <template>
 <nav>
    <a href="index.html" class="logo">
      <div class="">
        <img src="/images/logo/black_logo.webp" height="48" alt="Logo Mark" />
      </div>
    </a>

    <ul class="nav-links">
      <li>
        <a href="#">
          About Us
        </a>
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
            <a class="dropdown-item">
              Digital Marketing
              <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <div class="submenu">
              <a href="#" class="submenu-item">React / Next.js</a>
              <a href="#" class="submenu-item">Node.js & APIs</a>
              <a href="#" class="submenu-item">E-Commerce</a>
              <a href="#" class="submenu-item">PWA Development</a>
            </div>
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
          <a href="#" class="dropdown-item">Retail & E-Commerce</a>
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

      <li><a href="blog.html">Blog</a></li>
      <li><a href="contact.html">Contact Us</a></li>
    </ul>
  </nav>
  </template>


