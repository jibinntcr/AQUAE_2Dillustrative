/**
 * AQUAE Impact & AQUAE Labs — 2026 Biophilic Telemetry & Multi-Page Controller
 * Features:
 * 1. Sticky Frosted Header & Mobile App-Like Navigation Drawer
 * 2. Scroll-Triggered Hardware-Accelerated Reveal Animations
 * 3. Interactive ALCI 7-Domain Heptagon & Telemetry Inspector (alci.html)
 * 4. Interactive Pillar & Workflow Highlighters
 * 5. Institutional Enquiry Form Validation & Topic Pre-Selection (contact.html)
 */

document.addEventListener('DOMContentLoaded', () => {
  const siteHeader = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  // 1. Sticky Header Scroll State
  const handleScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 16) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Navigation Drawer (Optimized for iOS & Android Touch)
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu when tapping outside on mobile
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // 3. Smooth Scroll-Triggered Reveal Animations
  const revealTargets = document.querySelectorAll(
    '.surface-card, .work-portal-card, .leader-card, .quote-feature-card, .glass-panel, .telemetry-stat-card, .timeline-step-card, .section-header'
  );

  if ('IntersectionObserver' in window && revealTargets.length > 0) {
    revealTargets.forEach((el, idx) => {
      el.classList.add('reveal-item');
      el.style.transitionDelay = `${(idx % 4) * 55}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    revealTargets.forEach((el) => observer.observe(el));
  }

  // 4. Interactive ALCI 7-Domain Heptagon & Domain Inspector (on alci.html)
  const domainData = {
    1: {
      code: 'DOMAIN 01 • OXYGEN',
      title: '1. Gross Oxygen Productivity',
      desc: 'Assesses the oxygen production associated with photosynthetic activity and ecosystem productivity.',
      metric: 'Photosynthetic Biomass & Net O₂ Flux (~435,511 L/ha/yr)',
      application: 'Primary Ecosystem Service & Atmospheric Life Support',
      plain: 'Just like human lungs need fresh air, trees use sunlight to turn carbon dioxide into breathable oxygen. 1 hectare of mature analog forest produces ~435,511 liters of oxygen every year—ALCI measures and values this life-support output.',
      svg: `<svg viewBox="0 0 320 130" aria-label="2D Animated Oxygen Production Illustration">
        <circle cx="52" cy="36" r="18" fill="rgba(250,204,21,0.22)" class="anim-ring"/>
        <circle cx="52" cy="36" r="11" fill="#FACC15"/>
        <line x1="74" y1="46" x2="128" y2="70" stroke="#FACC15" stroke-width="2" stroke-dasharray="4 4" class="anim-flow"/>
        <path d="M160 118 L160 75" stroke="#A16207" stroke-width="7" stroke-linecap="round"/>
        <g class="anim-sway">
          <circle cx="160" cy="64" r="32" fill="#0D9F6E" opacity="0.88"/>
          <circle cx="138" cy="74" r="22" fill="#10B981" opacity="0.85"/>
          <circle cx="182" cy="74" r="22" fill="#3DCAB1" opacity="0.85"/>
        </g>
        <g class="anim-float-1"><circle cx="222" cy="76" r="11" fill="rgba(61,202,177,0.25)" stroke="#3DCAB1" stroke-width="1.5"/><text x="222" y="79" fill="#fff" font-size="8" font-weight="800" text-anchor="middle">O₂</text></g>
        <g class="anim-float-2"><circle cx="254" cy="54" r="13" fill="rgba(56,189,248,0.25)" stroke="#38BDF8" stroke-width="1.5"/><text x="254" y="57" fill="#fff" font-size="9" font-weight="800" text-anchor="middle">O₂</text></g>
        <g class="anim-float-3"><circle cx="282" cy="82" r="10" fill="rgba(61,202,177,0.25)" stroke="#3DCAB1" stroke-width="1.5"/><text x="282" y="85" fill="#fff" font-size="7.5" font-weight="800" text-anchor="middle">O₂</text></g>
      </svg>`
    },
    2: {
      code: 'DOMAIN 02 • HYDROLOGY',
      title: '2. Water Purification Productivity',
      desc: 'Evaluates the contribution of ecosystems to natural water purification processes.',
      metric: 'Watershed Filtration & Riparian Bio-Indicators (16.59M L/ha/yr)',
      application: 'Freshwater Quality & Hydrological Services',
      plain: 'Forest canopies, deep roots, and soil microbes act like a giant natural water filter—cleaning up to 16.59 million liters of rainwater per hectare each year before it reaches rivers and wells.',
      svg: `<svg viewBox="0 0 320 130" aria-label="2D Animated Water Purification Illustration">
        <g class="anim-rain-1"><line x1="90" y1="10" x2="90" y2="26" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/></g>
        <g class="anim-rain-2"><line x1="160" y1="8" x2="160" y2="24" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/></g>
        <g class="anim-rain-3"><line x1="230" y1="12" x2="230" y2="28" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/></g>
        <rect x="46" y="38" width="228" height="22" rx="6" fill="rgba(16,185,129,0.28)" stroke="#10B981" stroke-width="1.2"/>
        <text x="160" y="52" fill="#A7F3D0" font-size="8.5" font-weight="700" text-anchor="middle">ROOT &amp; HUMUS BIO-FILTER LAYER</text>
        <rect x="46" y="64" width="228" height="20" rx="6" fill="rgba(180,83,9,0.32)" stroke="#D97706" stroke-width="1.2"/>
        <text x="160" y="77" fill="#FDE68A" font-size="8" font-weight="700" text-anchor="middle">MINERAL SUBSTRATE FILTRATION</text>
        <path d="M46 106 Q105 96 160 106 T274 106" fill="none" stroke="#38BDF8" stroke-width="4" stroke-dasharray="8 5" class="anim-flow"/>
      </svg>`
    },
    3: {
      code: 'DOMAIN 03 • BIOMASS',
      title: '3. Woody Biomass as Bulk Energy',
      desc: 'Measures woody above-ground biomass as an indicator of ecosystem productivity and its potential as a source of renewable energy.',
      metric: 'Allometric Standing Stock & Above-Ground Mass',
      application: 'Structural Carbon & Renewable Bio-Energy Equivalence',
      plain: 'As trees grow taller and thicker, their trunks and branches lock away massive amounts of carbon and solar energy—acting like a living green battery on the land.',
      svg: `<svg viewBox="0 0 320 130" aria-label="2D Animated Woody Biomass Illustration">
        <circle cx="105" cy="66" r="36" fill="#78350F" stroke="#F59E0B" stroke-width="2"/>
        <circle cx="105" cy="66" r="25" fill="none" stroke="#FBBF24" stroke-width="1.4" stroke-dasharray="4 3" class="anim-spin-slow"/>
        <circle cx="105" cy="66" r="14" fill="none" stroke="#FDE68A" stroke-width="1.4"/>
        <path d="M152 66 L186 66" stroke="#3DCAB1" stroke-width="2.2" stroke-dasharray="4 4" class="anim-flow"/>
        <rect x="198" y="76" width="16" height="32" rx="3" fill="#0D9F6E"/>
        <rect x="220" y="56" width="16" height="52" rx="3" fill="#10B981"/>
        <rect x="242" y="34" width="16" height="74" rx="3" fill="#3DCAB1" class="anim-bob"/>
      </svg>`
    },
    4: {
      code: 'DOMAIN 04 • MICROCLIMATE',
      title: '4. Cooling Effect Productivity',
      desc: 'Assesses the contribution of vegetation and ecological succession to local temperature regulation and landscape cooling.',
      metric: 'Canopy Evapotranspiration & Thermal Differential (1.87M kWh/ha/yr)',
      application: 'Landscape Microclimate & Heat Mitigation',
      plain: 'Forests sweat cool water vapor (evapotranspiration) and shade the ground—acting as nature’s air conditioner with a cooling power equal to 1.87 million kWh per hectare annually.',
      svg: `<svg viewBox="0 0 320 130" aria-label="2D Animated Cooling Effect Illustration">
        <g class="anim-sway"><path d="M65 92 Q160 28 255 92 Z" fill="rgba(13,159,110,0.85)" stroke="#3DCAB1" stroke-width="2"/></g>
        <g class="anim-float-1"><path d="M125 48 Q145 38 165 48 T205 48" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/></g>
        <g class="anim-float-2"><path d="M115 32 Q140 22 165 32 T215 32" fill="none" stroke="#7DD3FC" stroke-width="2.5" stroke-linecap="round"/></g>
        <rect x="98" y="98" width="124" height="22" rx="11" fill="rgba(56,189,248,0.2)" stroke="#38BDF8" stroke-width="1.2"/>
        <text x="160" y="112" fill="#E0F2FE" font-size="8.5" font-weight="800" text-anchor="middle">1.87M kWh COOLING / HA / YR</text>
      </svg>`
    },
    5: {
      code: 'DOMAIN 05 • LIVING SOIL',
      title: '5. Living Soil as a Sustainable Agriculture Product',
      desc: 'Evaluates the ecological value of living soil, including its organic matter and role in supporting soil health and sustainable agriculture.',
      metric: 'Soil Organic Matter (SOM) & Microbial Vitality',
      application: 'Regenerative Agriculture & Subsurface Fertility',
      plain: 'Healthy soil isn’t dead dirt—it is a living underground city of beneficial fungi, earthworms, and organic nutrients that grows nutritious food without chemical fertilizers.',
      svg: `<svg viewBox="0 0 320 130" aria-label="2D Animated Living Soil Illustration">
        <line x1="36" y1="42" x2="284" y2="42" stroke="#10B981" stroke-width="3"/>
        <rect x="36" y="44" width="248" height="72" rx="10" fill="rgba(120,53,15,0.45)" stroke="rgba(245,158,11,0.35)"/>
        <path d="M160 44 Q135 72 95 92 M160 44 Q185 72 225 92 M160 44 L160 102" stroke="#FBBF24" stroke-width="2" fill="none" stroke-dasharray="4 3" class="anim-flow"/>
        <circle cx="95" cy="92" r="6" fill="#3DCAB1" class="anim-ring"/>
        <circle cx="160" cy="100" r="5" fill="#F59E0B" class="anim-bob"/>
        <circle cx="225" cy="92" r="6" fill="#3DCAB1" class="anim-ring"/>
        <text x="160" y="68" fill="#FDE68A" font-size="8" font-weight="700" text-anchor="middle">HUMUS &amp; MYCORRHIZAL WEB</text>
      </svg>`
    },
    6: {
      code: 'DOMAIN 06 • WRC',
      title: '6. Soil Water Retention Capacity (WRC)',
      desc: 'Assesses the capacity of soil to retain water and support ecosystem functions and local hydrological processes.',
      metric: 'Infiltration Rate & Soil Moisture Holding Capacity',
      application: 'Drought Resilience & Groundwater Recharge',
      plain: 'Organic-rich forest soil acts like a giant natural sponge—soaking up heavy monsoon rain to prevent flash floods and slowly releasing moisture during dry seasons.',
      svg: `<svg viewBox="0 0 320 130" aria-label="2D Animated Soil Water Retention Capacity Illustration">
        <rect x="52" y="24" width="216" height="82" rx="14" fill="rgba(14,116,144,0.28)" stroke="#38BDF8" stroke-width="1.8"/>
        <g class="anim-bob"><ellipse cx="102" cy="56" rx="22" ry="12" fill="rgba(56,189,248,0.45)" stroke="#7DD3FC"/><text x="102" y="59" fill="#fff" font-size="7.5" font-weight="800" text-anchor="middle">H₂O</text></g>
        <g class="anim-float-2"><ellipse cx="162" cy="74" rx="24" ry="13" fill="rgba(61,202,177,0.45)" stroke="#3DCAB1"/><text x="162" y="77" fill="#fff" font-size="7.5" font-weight="800" text-anchor="middle">H₂O</text></g>
        <g class="anim-bob"><ellipse cx="218" cy="54" rx="20" ry="11" fill="rgba(56,189,248,0.45)" stroke="#7DD3FC"/><text x="218" y="57" fill="#fff" font-size="7.5" font-weight="800" text-anchor="middle">H₂O</text></g>
        <text x="160" y="98" fill="#BAE6FD" font-size="8" font-weight="800" text-anchor="middle">NATURAL SPONGE MATRIX (WRC)</text>
      </svg>`
    },
    7: {
      code: 'DOMAIN 07 • RSCV',
      title: '7. Biodiversity as a Conservation Product (RSCV)',
      desc: 'Evaluates biodiversity through species richness and Relative Species Conservation Value (RSCV), recognising the conservation importance of species within an ecosystem.',
      metric: 'Species Richness & Relative Species Conservation Value (RSCV)',
      application: 'Habitat Complexity & Trophic Resilience',
      plain: 'A plantation of one single tree species is fragile, whereas a biodiverse forest home to rare birds, amphibians, pollinators, and medicinal plants is resilient and irreplaceable. RSCV scores how many species—and how globally rare they are—thrive on the land.',
      svg: `<svg viewBox="0 0 320 130" aria-label="2D Animated Biodiversity RSCV Illustration">
        <line x1="160" y1="65" x2="78" y2="32" stroke="#3DCAB1" stroke-width="1.6" stroke-dasharray="4 4" class="anim-flow"/>
        <line x1="160" y1="65" x2="242" y2="32" stroke="#3DCAB1" stroke-width="1.6" stroke-dasharray="4 4" class="anim-flow"/>
        <line x1="160" y1="65" x2="78" y2="100" stroke="#10B981" stroke-width="1.6" stroke-dasharray="4 4" class="anim-flow"/>
        <line x1="160" y1="65" x2="242" y2="100" stroke="#10B981" stroke-width="1.6" stroke-dasharray="4 4" class="anim-flow"/>
        <circle cx="160" cy="65" r="22" fill="#071E36" stroke="#3DCAB1" stroke-width="2" class="anim-bob"/>
        <text x="160" y="68" fill="#3DCAB1" font-size="8.5" font-weight="900" text-anchor="middle">RSCV</text>
        <circle cx="78" cy="32" r="15" fill="#0F294A" stroke="#38BDF8" stroke-width="1.5"/>
        <text x="78" y="35" fill="#38BDF8" font-size="6.5" font-weight="800" text-anchor="middle">BIRDS</text>
        <circle cx="242" cy="32" r="15" fill="#0F294A" stroke="#FACC15" stroke-width="1.5"/>
        <text x="242" y="35" fill="#FACC15" font-size="6.5" font-weight="800" text-anchor="middle">INSECTS</text>
        <circle cx="78" cy="100" r="15" fill="#0F294A" stroke="#10B981" stroke-width="1.5"/>
        <text x="78" y="103" fill="#10B981" font-size="6.5" font-weight="800" text-anchor="middle">FLORA</text>
        <circle cx="242" cy="100" r="15" fill="#0F294A" stroke="#3DCAB1" stroke-width="1.5"/>
        <text x="242" y="103" fill="#3DCAB1" font-size="6.5" font-weight="800" text-anchor="middle">FAUNA</text>
      </svg>`
    }
  };

  const heptagonNodes = document.querySelectorAll('.heptagon-node');
  const domainCards = document.querySelectorAll('.domain-interactive-card');
  const inspectorCode = document.getElementById('inspectorCode');
  const inspectorTitle = document.getElementById('inspectorTitle');
  const inspectorDesc = document.getElementById('inspectorDesc');
  const inspectorMetric = document.getElementById('inspectorMetric');
  const inspectorApp = document.getElementById('inspectorApp');
  const inspectorIllus = document.getElementById('inspectorIllus');
  const inspectorPlain = document.getElementById('inspectorPlain');

  const selectDomain = (id) => {
    const d = domainData[id];
    if (!d) return;

    heptagonNodes.forEach((n) => {
      n.classList.toggle('active', n.getAttribute('data-domain') === String(id));
    });

    domainCards.forEach((c) => {
      c.classList.toggle('active', c.getAttribute('data-domain') === String(id));
    });

    if (inspectorCode) inspectorCode.textContent = d.code;
    if (inspectorTitle) inspectorTitle.textContent = d.title;
    if (inspectorDesc) inspectorDesc.textContent = d.desc;
    if (inspectorMetric) inspectorMetric.textContent = d.metric;
    if (inspectorApp) inspectorApp.textContent = d.application;
    if (inspectorIllus && d.svg) inspectorIllus.innerHTML = d.svg;
    if (inspectorPlain && d.plain) {
      inspectorPlain.innerHTML = `<strong>In Simple Terms (Beginner Guide)</strong>${d.plain}`;
    }
  };

  heptagonNodes.forEach((node) => {
    node.addEventListener('click', () => {
      selectDomain(node.getAttribute('data-domain'));
    });
  });

  domainCards.forEach((card) => {
    card.addEventListener('click', () => {
      selectDomain(card.getAttribute('data-domain'));
      const consoleEl = document.querySelector('.alci-interactive-console');
      if (consoleEl && window.innerWidth < 960) {
        consoleEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // 5. Contact & Enquiry Form Controller (contact.html)
  const enquiryForm = document.getElementById('aquaeEnquiryForm');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const resetEnquiryBtn = document.getElementById('resetEnquiryBtn');
  const formErrorMsg = document.getElementById('formErrorMsg');
  const areaSelect = document.getElementById('areaOfEnquiry');
  const enquiryTagBtns = document.querySelectorAll('.enquiry-tag-btn');

  // Pre-select Area of Enquiry if passed via URL parameter (?area=...)
  if (areaSelect) {
    const params = new URLSearchParams(window.location.search);
    const areaParam = params.get('area');
    if (areaParam) {
      Array.from(areaSelect.options).forEach((opt) => {
        if (opt.value.toLowerCase() === areaParam.toLowerCase()) {
          areaSelect.value = opt.value;
        }
      });
    }
  }

  enquiryTagBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetVal = btn.getAttribute('data-area');
      enquiryTagBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      if (areaSelect && targetVal) {
        areaSelect.value = targetVal;
        areaSelect.focus();
      }
    });
  });

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName');
      const workEmail = document.getElementById('workEmail');
      const country = document.getElementById('country');
      const areaOfEnquiry = document.getElementById('areaOfEnquiry');
      const enquiryDescription = document.getElementById('enquiryDescription');
      const privacyConsent = document.getElementById('privacyConsent');

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail.value.trim());

      if (
        !fullName.value.trim() ||
        !emailValid ||
        !country.value.trim() ||
        !areaOfEnquiry.value ||
        !enquiryDescription.value.trim() ||
        !privacyConsent.checked
      ) {
        if (formErrorMsg) {
          formErrorMsg.style.display = 'block';
          formErrorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      if (formErrorMsg) {
        formErrorMsg.style.display = 'none';
      }

      enquiryForm.style.display = 'none';
      if (confirmationMessage) {
        confirmationMessage.classList.add('visible');
        confirmationMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  if (resetEnquiryBtn && enquiryForm && confirmationMessage) {
    resetEnquiryBtn.addEventListener('click', () => {
      enquiryForm.reset();
      confirmationMessage.classList.remove('visible');
      enquiryForm.style.display = 'block';
    });
  }

  // 6. Interactive 3D E-Book Flipbook & Embedded PDF Reader Studio (index.html & education.html)
  const ebookLibrary = {
    whitepaper: {
      title: 'White Paper: ALCI — AQUAE Impact (V1)',
      pdfUrl: 'assets/Resources/White_Paper_ALCI-_Aqua_Impact_V1.pdf',
      downloadName: 'White_Paper_ALCI_AQUAE_Impact_V1.pdf',
      spreads: [
        {
          left: {
            chapter: 'WHITE PAPER V1 • PAGES 1–4',
            title: 'Executive Summary & The Ecological Recognition Gap',
            body: `
              <p>Natural ecosystems are living, maturing continuums that generate vital life-support services every day. Yet conventional carbon markets value only a single metric—carbon—while ignoring the broader ecological machinery that keeps forests alive.</p>
              <p>The <strong>AQUAE Labs Ecosystem Conservation Index (ALCI)</strong> establishes a rigorous scientific framework for assessing, quantifying, and valuing seven interconnected ecosystem-service domains using empirical field measurements and Monitoring, Recording, and Verification (MRV).</p>
              <div class="ebook-highlight-box">
                <strong>Belipola Arboretum Empirical Benchmark (1 Hectare / Year):</strong><br/>
                • <strong>435,511 Liters</strong> of net photosynthetic oxygen production<br/>
                • <strong>16.59 Million Liters</strong> of natural water purification capacity<br/>
                • <strong>1.87 Million kWh</strong> of microclimate cooling equivalence
              </div>
            `,
            pageNum: 'Page 1–4'
          },
          right: {
            chapter: 'WHITE PAPER V1 • PAGES 5–11',
            title: 'The Seven Ecosystem Service Domains of ALCI',
            body: `
              <p>ALCI evaluates ecological performance across seven primary domains, calibrated against <strong>IUCN Red List Habitat Classification Guidelines (v3.1)</strong> and seral succession stages:</p>
              <ul>
                <li><strong>1. Gross Oxygen Productivity:</strong> Photosynthetic O₂ output measured across canopy leaf-area strata.</li>
                <li><strong>2. Water Purification Productivity:</strong> Bio-filtration of rainfall through root and humus horizons.</li>
                <li><strong>3. Woody Biomass as Bulk Energy:</strong> Standing allometric carbon and renewable bio-energy stock.</li>
                <li><strong>4. Cooling Effect Productivity:</strong> Evapotranspiration latent heat transfer and thermal buffering.</li>
                <li><strong>5. Living Soil:</strong> Soil organic matter (SOM) and mycorrhizal microbial vitality.</li>
                <li><strong>6. Soil Water Retention Capacity (WRC):</strong> Hydrological sponge capacity preventing floods and drought.</li>
                <li><strong>7. Biodiversity (RSCV):</strong> Relative Species Conservation Value across endemic flora and fauna.</li>
              </ul>
            `,
            pageNum: 'Page 5–11'
          }
        },
        {
          left: {
            chapter: 'WHITE PAPER V1 • PAGES 12–18',
            title: '33-Year Ecological Framework & 5-Year MRV Cycles',
            body: `
              <p>Unlike one-off estimates, ALCI tracks ecosystems as maturing living systems over a <strong>33-year ecological timeframe</strong>, with mandatory field re-monitoring and verification every <strong>5 years</strong>.</p>
              <p>At the world’s first Analog Forest—<strong>Belipola Arboretum in Sri Lanka</strong> (pioneered by Dr. F. Ranil Senanayake in the early 1980s)—the landscape is partitioned into 21 lettered sectors (<strong>Zones A through U</strong>) to measure plot-level succession from degraded tea monoculture to climax rainforest.</p>
              <div class="ebook-highlight-box">
                <strong>Scientific Equation Principle:</strong><br/>
                Each domain combines field-measured biological indicators with localized calibration constants, ensuring valuations reflect real ecological output rather than speculative assumptions.
              </div>
            `,
            pageNum: 'Page 12–18'
          },
          right: {
            chapter: 'WHITE PAPER V1 • PAGES 19–28',
            title: 'Creditonomics, Insured ALCI Assets & AQUAEChain',
            body: `
              <p>ALCI translates verified ecological evidence into structured environmental assets across two primary contract architectures:</p>
              <ul>
                <li><strong>Type 1 (Baseline Contracts):</strong> Recognising and protecting existing high-conservation-value climax ecosystems.</li>
                <li><strong>Type 2 (Aspirational Contracts):</strong> Financing progressive Analog Forestry restoration across 5 tiers (<em>Conservation, Restoration, Productivity, Biodiversity, Integrated</em>).</li>
              </ul>
              <div class="ebook-highlight-box">
                <strong>45%–55% Steward Revenue Allocation:</strong><br/>
                Between 45% and 55% of gross credit proceeds are allocated directly to local landowners, rural stewards, and community ecological monitors—backed by AQUAEChain traceability and a risk-aware insurance framework.
              </div>
            `,
            pageNum: 'Page 19–28'
          }
        }
      ]
    },
    greenpaper: {
      title: 'Green Paper: AQUAE Impact (July Executive Synthesis)',
      pdfUrl: 'assets/Resources/GreenPaper_AQUAE-July.pdf',
      downloadName: 'GreenPaper_AQUAE_July.pdf',
      spreads: [
        {
          left: {
            chapter: 'GREEN PAPER • PAGES 1–2',
            title: 'Beyond Carbon: Recognising the Full Value of Living Nature',
            body: `
              <p>The <strong>AQUAE Impact Green Paper (July Edition)</strong> presents a clear executive synthesis for institutional decision-makers, landowners, and sustainability leaders.</p>
              <p>While traditional environmental markets focus narrowly on carbon sequestration, living forests deliver essential photosynthetic oxygen, freshwater filtration, microclimate cooling, fertile soil regeneration, and irreplaceable biodiversity.</p>
              <div class="ebook-highlight-box">
                <strong>Core Thesis:</strong><br/>
                Nature should never be treated solely as a conservation cost. By making all 7 ecosystem services visible, assessable, and traceable, AQUAE creates sustainable economic incentives to keep forests standing.
              </div>
            `,
            pageNum: 'Page 1–2'
          },
          right: {
            chapter: 'GREEN PAPER • PAGES 3–5',
            title: 'Integrated Architecture: Science, Insurance & Blockchain',
            body: `
              <p>AQUAE connects four pillars into a unified natural capital ecosystem:</p>
              <ul>
                <li><strong>Analog Forestry & Belipola Benchmark:</strong> Four decades of proven ecological restoration in Sri Lanka’s central highlands.</li>
                <li><strong>The ALCI 7-Domain Index:</strong> Empirical field MRV across oxygen, water, biomass, cooling, living soil, WRC, and biodiversity.</li>
                <li><strong>Insured Environmental Assets:</strong> Underwriting frameworks addressing specified natural hazards and biomass reversal risks.</li>
                <li><strong>AQUAEChain & Global Exchange:</strong> Immutable digital registry and marketplace access via <a href="https://sale.aquaeimpact.com/" target="_blank" rel="noopener noreferrer" style="color:#0D9F6E; font-weight:700;">sale.aquaeimpact.com</a>.</li>
              </ul>
            `,
            pageNum: 'Page 3–5'
          }
        }
      ]
    }
  };

  const ebookLeftPage = document.getElementById('ebookLeftPage');
  const ebookRightPage = document.getElementById('ebookRightPage');
  const ebookSpreadIndicator = document.getElementById('ebookSpreadIndicator');
  const ebookPrevBtn = document.getElementById('ebookPrevBtn');
  const ebookNextBtn = document.getElementById('ebookNextBtn');
  const tabWhitepaper = document.getElementById('tabWhitepaper');
  const tabGreenpaper = document.getElementById('tabGreenpaper');
  const modeEbookBtn = document.getElementById('modeEbookBtn');
  const modePdfBtn = document.getElementById('modePdfBtn');
  const ebookSpreadContainer = document.getElementById('ebookSpreadContainer');
  const pdfEmbedContainer = document.getElementById('pdfEmbedContainer');
  const pdfViewerFrame = document.getElementById('pdfViewerFrame');
  const activeDocDownloadBtn = document.getElementById('activeDocDownloadBtn');

  let activeDocKey = 'whitepaper';
  let activeSpreadIdx = 0;
  let activeViewMode = 'ebook';

  const renderEbookConsole = () => {
    const doc = ebookLibrary[activeDocKey];
    if (!doc || !ebookLeftPage || !ebookRightPage) return;

    const totalSpreads = doc.spreads.length;
    if (activeSpreadIdx >= totalSpreads) activeSpreadIdx = 0;
    const spread = doc.spreads[activeSpreadIdx];

    ebookLeftPage.innerHTML = `
      <div>
        <div class="ebook-page-header">
          <span>${spread.left.chapter}</span>
          <span>${doc.title}</span>
        </div>
        <h4>${spread.left.title}</h4>
        ${spread.left.body}
      </div>
      <div class="ebook-page-footer-num">
        <span>AQUAE Impact Official Publication</span>
        <span>${spread.left.pageNum}</span>
      </div>
    `;

    ebookRightPage.innerHTML = `
      <div>
        <div class="ebook-page-header">
          <span>${spread.right.chapter}</span>
          <span>sale.aquaeimpact.com</span>
        </div>
        <h4>${spread.right.title}</h4>
        ${spread.right.body}
      </div>
      <div class="ebook-page-footer-num">
        <span>Verified Natural Capital Framework</span>
        <span>${spread.right.pageNum}</span>
      </div>
    `;

    if (ebookSpreadIndicator) {
      ebookSpreadIndicator.textContent = `Spread ${activeSpreadIdx + 1} of ${totalSpreads}`;
    }
    if (ebookPrevBtn) ebookPrevBtn.disabled = activeSpreadIdx === 0;
    if (ebookNextBtn) ebookNextBtn.disabled = activeSpreadIdx === totalSpreads - 1;

    if (tabWhitepaper) tabWhitepaper.classList.toggle('active', activeDocKey === 'whitepaper');
    if (tabGreenpaper) tabGreenpaper.classList.toggle('active', activeDocKey === 'greenpaper');

    if (modeEbookBtn) modeEbookBtn.classList.toggle('active', activeViewMode === 'ebook');
    if (modePdfBtn) modePdfBtn.classList.toggle('active', activeViewMode === 'pdf');

    if (ebookSpreadContainer && pdfEmbedContainer) {
      ebookSpreadContainer.style.display = activeViewMode === 'ebook' ? 'block' : 'none';
      pdfEmbedContainer.style.display = activeViewMode === 'pdf' ? 'block' : 'none';
    }

    if (pdfViewerFrame) {
      const targetSrc = `${doc.pdfUrl}#toolbar=1&navpanes=1`;
      if (pdfViewerFrame.getAttribute('src') !== targetSrc) {
        pdfViewerFrame.setAttribute('src', targetSrc);
      }
    }

    if (activeDocDownloadBtn) {
      activeDocDownloadBtn.setAttribute('href', doc.pdfUrl);
      activeDocDownloadBtn.setAttribute('download', doc.downloadName);
    }
  };

  if (ebookLeftPage && ebookRightPage) {
    renderEbookConsole();

    if (tabWhitepaper) {
      tabWhitepaper.addEventListener('click', () => {
        activeDocKey = 'whitepaper';
        activeSpreadIdx = 0;
        renderEbookConsole();
      });
    }

    if (tabGreenpaper) {
      tabGreenpaper.addEventListener('click', () => {
        activeDocKey = 'greenpaper';
        activeSpreadIdx = 0;
        renderEbookConsole();
      });
    }

    if (modeEbookBtn) {
      modeEbookBtn.addEventListener('click', () => {
        activeViewMode = 'ebook';
        renderEbookConsole();
      });
    }

    if (modePdfBtn) {
      modePdfBtn.addEventListener('click', () => {
        activeViewMode = 'pdf';
        renderEbookConsole();
      });
    }

    if (ebookPrevBtn) {
      ebookPrevBtn.addEventListener('click', () => {
        if (activeSpreadIdx > 0) {
          activeSpreadIdx -= 1;
          renderEbookConsole();
        }
      });
    }

    if (ebookNextBtn) {
      ebookNextBtn.addEventListener('click', () => {
        const doc = ebookLibrary[activeDocKey];
        if (doc && activeSpreadIdx < doc.spreads.length - 1) {
          activeSpreadIdx += 1;
          renderEbookConsole();
        }
      });
    }

    document.querySelectorAll('.ebook-select-btn, .ebook-cover').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const book = trigger.getAttribute('data-book');
        const mode = trigger.getAttribute('data-mode') || 'ebook';
        if (book && ebookLibrary[book]) {
          activeDocKey = book;
          activeSpreadIdx = 0;
          activeViewMode = mode;
          renderEbookConsole();
          const consoleEl = document.getElementById('ebookReaderConsole');
          if (consoleEl) {
            consoleEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }
});
