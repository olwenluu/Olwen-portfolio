/**
 * MAIN JAVASCRIPT - PORTFOLIO INTERACTION & BILINGUAL RENDERING
 * -------------------------------------------------------------
 */

// Application State
const state = {
    lang: localStorage.getItem('portfolio_lang') || profileData.config.defaultLang || 'vi',
    theme: localStorage.getItem('portfolio_theme') || profileData.config.defaultTheme || 'light',
    activeProjectFilter: 'all',
    lightboxIndex: 0,
    typewriterTimeout: null
};

// DOM Elements
const elements = {
    html: document.documentElement,
    langToggle: document.getElementById('lang-toggle'),
    langText: document.getElementById('lang-text'),
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileMenu: document.getElementById('mobile-menu'),
    scrollProgress: document.getElementById('scroll-progress'),
    backToTopBtn: document.getElementById('back-to-top'),
    lightboxModal: document.getElementById('lightbox-modal'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxCaption: document.getElementById('lightbox-caption'),
    lightboxClose: document.getElementById('lightbox-close'),
    lightboxPrev: document.getElementById('lightbox-prev'),
    lightboxNext: document.getElementById('lightbox-next'),
    contactForm: document.getElementById('contact-form'),
    toast: document.getElementById('toast-notification'),
    toastMsg: document.getElementById('toast-message'),
    typewriterText: document.getElementById('typewriter-text')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initScrollEvents();
    initLightbox();
    initContactForm();
    initMobileMenu();
});

/* ==========================================================================
   THEME TOGGLE (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
    if (state.theme === 'light') {
        elements.html.classList.add('light');
        updateThemeIcon('sun');
    } else {
        elements.html.classList.remove('light');
        updateThemeIcon('moon');
    }

    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    if (elements.html.classList.contains('light')) {
        elements.html.classList.remove('light');
        state.theme = 'dark';
        updateThemeIcon('moon');
    } else {
        elements.html.classList.add('light');
        state.theme = 'light';
        updateThemeIcon('sun');
    }
    localStorage.setItem('portfolio_theme', state.theme);
}

function updateThemeIcon(type) {
    if (!elements.themeIcon) return;
    elements.themeIcon.setAttribute('data-lucide', type === 'sun' ? 'sun' : 'moon');
    if (window.lucide) lucide.createIcons();
}

/* ==========================================================================
   LANGUAGE SWITCHER (VI / EN)
   ========================================================================== */
function initLanguage() {
    if (elements.langToggle) {
        elements.langToggle.addEventListener('click', toggleLanguage);
    }
    applyLanguage(state.lang);
}

function toggleLanguage() {
    state.lang = state.lang === 'vi' ? 'en' : 'vi';
    localStorage.setItem('portfolio_lang', state.lang);
    applyLanguage(state.lang);
}

function applyLanguage(lang) {
    const data = profileData[lang] || profileData.vi;
    
    // Update language switch button text & flag
    if (elements.langText) {
        elements.langText.textContent = lang === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN';
    }
    elements.html.setAttribute('lang', lang);

    // Render Navigation
    renderNav(data.nav);

    // Render Hero Section
    renderHero(data.hero);

    // Render About Section
    renderAbout(data.about);

    // Render Experiences & Projects
    renderExperiences(data.experiences);

    // Render Skills
    renderSkills(data.skills);

    // Render Education & Certifications
    renderEducation(data.education);

    // Render Contact
    renderContact(data.contact);

    // Render Footer
    renderFooter(data.footer);

    // Re-initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Re-start typewriter animation with new language roles
    initTypewriter(data.hero.roles);
}

/* ==========================================================================
   SECTION RENDERERS
   ========================================================================== */

function renderNav(nav) {
    const navLinks = {
        'nav-home': nav.home,
        'nav-about': nav.about,
        'nav-experiences': nav.experiences,
        'nav-skills': nav.skills,
        'nav-education': nav.education,
        'nav-contact': nav.contact,
        'nav-cv': nav.downloadCv,
        // Mobile nav
        'm-nav-home': nav.home,
        'm-nav-about': nav.about,
        'm-nav-experiences': nav.experiences,
        'm-nav-skills': nav.skills,
        'm-nav-education': nav.education,
        'm-nav-contact': nav.contact,
        'm-nav-cv': nav.downloadCv
    };

    for (const [id, text] of Object.entries(navLinks)) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }
}

function renderHero(hero) {
    const greetingEl = document.getElementById('hero-greeting');
    const nameEl = document.getElementById('hero-name');
    const taglineEl = document.getElementById('hero-tagline');
    const ctaProjectsEl = document.getElementById('hero-cta-projects');
    const ctaContactEl = document.getElementById('hero-cta-contact');
    const statusEl = document.getElementById('hero-status');
    const expBadgeEl = document.getElementById('hero-exp-badge');
    const roasBadgeEl = document.getElementById('hero-roas-badge');
    const avatarImgEl = document.getElementById('hero-avatar-img');

    if (greetingEl) greetingEl.textContent = hero.greeting;
    if (nameEl) nameEl.textContent = hero.name;
    if (taglineEl) taglineEl.textContent = hero.tagline;
    if (ctaProjectsEl) ctaProjectsEl.textContent = hero.ctaProjects;
    if (ctaContactEl) ctaContactEl.textContent = hero.ctaContact;
    if (statusEl) statusEl.textContent = hero.statusAvailable;
    if (expBadgeEl) expBadgeEl.textContent = hero.experienceBadge;
    if (roasBadgeEl) roasBadgeEl.textContent = hero.roasBadge;
    if (avatarImgEl) {
        avatarImgEl.onerror = function() {
            if (this.src.includes('.png')) {
                this.src = 'assets/images/avatar.jpg';
            } else if (this.src.includes('.jpg')) {
                this.src = 'assets/images/avatar.png';
            }
        };
        if (profileData.config.avatarUrl) {
            avatarImgEl.src = profileData.config.avatarUrl;
        }
    }
}

function renderAbout(about) {
    const badgeEl = document.getElementById('about-badge');
    const titleEl = document.getElementById('about-title');
    const subtitleEl = document.getElementById('about-subtitle');
    const p1El = document.getElementById('about-p1');
    const p2El = document.getElementById('about-p2');
    const statsContainer = document.getElementById('about-stats');
    const quickInfoContainer = document.getElementById('about-quick-info');
    const galleryTitleEl = document.getElementById('about-gallery-title');
    const gallerySubtitleEl = document.getElementById('about-gallery-subtitle');
    const galleryContainer = document.getElementById('about-gallery-grid');

    if (badgeEl) badgeEl.textContent = about.sectionBadge;
    if (titleEl) titleEl.textContent = about.title;
    if (subtitleEl) subtitleEl.textContent = about.subtitle;
    if (p1El) p1El.innerHTML = about.bioParagraph1;
    if (p2El) p2El.innerHTML = about.bioParagraph2;
    if (galleryTitleEl) galleryTitleEl.textContent = about.galleryTitle;
    if (gallerySubtitleEl) gallerySubtitleEl.textContent = about.gallerySubtitle;

    // Render Stats
    if (statsContainer) {
        statsContainer.innerHTML = about.stats.map(stat => `
            <div class="glass-card p-5 text-center flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-3">
                    <i data-lucide="${stat.icon}" class="w-6 h-6"></i>
                </div>
                <div class="text-3xl font-extrabold gradient-text mb-1">${stat.value}</div>
                <div class="text-sm font-medium text-slate-400 dark:text-slate-400">${stat.label}</div>
            </div>
        `).join('');
    }

    // Render Quick Info
    if (quickInfoContainer) {
        quickInfoContainer.innerHTML = about.quickInfo.map(item => `
            <div class="flex items-start gap-3 p-3 rounded-lg bg-slate-500/5 border border-slate-500/10">
                <div class="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
                <div>
                    <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">${item.label}:</span>
                    <p class="text-sm font-medium text-slate-200 dark:text-slate-200 mt-0.5">${item.value}</p>
                </div>
            </div>
        `).join('');
    }

    // Render Gallery (Clean images without text captions)
    if (galleryContainer && profileData.gallery) {
        galleryContainer.innerHTML = profileData.gallery.map((img, idx) => `
            <div class="gallery-img-container aspect-square glass-card overflow-hidden group cursor-pointer" onclick="openLightbox(${idx})">
                <img src="${img.src}" alt="Gallery Image ${idx + 1}" class="gallery-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async">
                <div class="gallery-overlay">
                    <div class="text-white bg-black/60 backdrop-blur-md p-3 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <i data-lucide="maximize-2" class="w-5 h-5"></i>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderExperiences(exp) {
    const badgeEl = document.getElementById('exp-badge');
    const titleEl = document.getElementById('exp-title');
    const subtitleEl = document.getElementById('exp-subtitle');
    const timelineTitleEl = document.getElementById('exp-timeline-title');
    const projectsTitleEl = document.getElementById('exp-projects-title');
    const timelineContainer = document.getElementById('exp-timeline');
    const filterContainer = document.getElementById('project-filters');

    if (badgeEl) badgeEl.textContent = exp.sectionBadge;
    if (titleEl) titleEl.textContent = exp.title;
    if (subtitleEl) subtitleEl.textContent = exp.subtitle;
    if (timelineTitleEl) timelineTitleEl.textContent = exp.timelineTitle;
    if (projectsTitleEl) projectsTitleEl.textContent = exp.projectsTitle;

    // Render Timeline
    if (timelineContainer) {
        timelineContainer.innerHTML = exp.timeline.map(item => `
            <div class="timeline-item mb-10 last:mb-0">
                <div class="timeline-dot"></div>
                <div class="glass-card p-6 ml-2">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 class="text-lg font-bold text-slate-100">${item.role}</h4>
                        <span class="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">${item.period}</span>
                    </div>
                    <div class="text-sm font-semibold text-indigo-400/90 mb-3">${item.company}</div>
                    <p class="text-sm text-slate-300 mb-4">${item.description}</p>
                    <ul class="space-y-2 mb-4 text-xs text-slate-400">
                        ${item.achievements.map(ach => `
                            <li class="flex items-start gap-2">
                                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                                <span>${ach}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-700/50">
                        ${item.tags.map(tag => `
                            <span class="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render Project Filter Buttons
    if (filterContainer) {
        filterContainer.innerHTML = Object.entries(exp.categories).map(([key, label]) => `
            <button class="filter-btn ${state.activeProjectFilter === key ? 'active' : ''}" onclick="filterProjects('${key}')">
                ${label}
            </button>
        `).join('');
    }

    // Render Project Cards
    renderProjectsList(exp.projects);
}

function filterProjects(category) {
    state.activeProjectFilter = category;
    const data = profileData[state.lang] || profileData.vi;
    
    // Update active class on buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const currentBtn = Array.from(document.querySelectorAll('.filter-btn')).find(b => 
        b.textContent.trim() === data.experiences.categories[category]
    );
    if (currentBtn) currentBtn.classList.add('active');

    renderProjectsList(data.experiences.projects);
}

function renderProjectsList(projects) {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    const filtered = state.activeProjectFilter === 'all' 
        ? projects 
        : projects.filter(p => p.category === state.activeProjectFilter);

    container.innerHTML = filtered.map(proj => `
        <div class="glass-card overflow-hidden flex flex-col group">
            <div class="relative aspect-video overflow-hidden">
                <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-3 right-3 bg-indigo-600/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ${proj.highlight}
                </div>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <div class="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">${proj.client}</div>
                    <h4 class="text-lg font-bold text-slate-100 mb-3">${proj.title}</h4>
                    <p class="text-sm text-slate-300 mb-4">${proj.description}</p>
                    <div class="space-y-1.5 mb-4 bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                        <div class="text-xs font-semibold text-slate-400 uppercase">${state.lang === 'vi' ? 'Kết quả đạt được:' : 'Key Outcomes:'}</div>
                        ${proj.results.map(r => `
                            <div class="text-xs text-slate-300 flex items-center gap-2">
                                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-indigo-400"></i>
                                <span>${r}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/50">
                    ${proj.tags.map(t => `
                        <span class="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">${t}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

function renderSkills(skills) {
    const badgeEl = document.getElementById('skills-badge');
    const titleEl = document.getElementById('skills-title');
    const subtitleEl = document.getElementById('skills-subtitle');
    const container = document.getElementById('skills-grid');

    if (badgeEl) badgeEl.textContent = skills.sectionBadge;
    if (titleEl) titleEl.textContent = skills.title;
    if (subtitleEl) subtitleEl.textContent = skills.subtitle;

    if (container) {
        container.innerHTML = skills.categories.map(cat => `
            <div class="glass-card p-6">
                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/50">
                    <div class="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                        <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
                    </div>
                    <h4 class="text-base font-bold text-slate-100">${cat.name}</h4>
                </div>
                <div class="space-y-5">
                    ${cat.skills.map(s => `
                        <div>
                            <div class="flex justify-between text-xs font-semibold mb-1.5">
                                <span class="text-slate-200">${s.name}</span>
                                <span class="text-indigo-400">${s.level}%</span>
                            </div>
                            <div class="skill-bar-bg">
                                <div class="skill-bar-fill" style="width: ${s.level}%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

function renderEducation(edu) {
    const badgeEl = document.getElementById('edu-badge');
    const titleEl = document.getElementById('edu-title');
    const subtitleEl = document.getElementById('edu-subtitle');
    const degreesTitleEl = document.getElementById('edu-degrees-title');
    const certsTitleEl = document.getElementById('edu-certs-title');
    const degreesContainer = document.getElementById('edu-degrees-list');
    const certsContainer = document.getElementById('edu-certs-grid');

    if (badgeEl) badgeEl.textContent = edu.sectionBadge;
    if (titleEl) titleEl.textContent = edu.title;
    if (subtitleEl) subtitleEl.textContent = edu.subtitle;
    if (degreesTitleEl) degreesTitleEl.textContent = edu.degreesTitle;
    if (certsTitleEl) certsTitleEl.textContent = edu.certificationsTitle;

    // Degrees
    if (degreesContainer) {
        degreesContainer.innerHTML = edu.degrees.map(deg => `
            <div class="glass-card p-6 relative overflow-hidden">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                        <h4 class="text-lg font-bold text-slate-100">${deg.degree}</h4>
                        <div class="text-sm font-semibold text-indigo-400 mt-1">${deg.school}</div>
                    </div>
                    <span class="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">${deg.period}</span>
                </div>
                ${deg.grade ? `<div class="text-xs font-semibold text-emerald-400 mb-2">${deg.grade}</div>` : ''}
                <p class="text-xs text-slate-300 leading-relaxed">${deg.details || ''}</p>
            </div>
        `).join('');
    }

    // Certifications
    if (certsContainer) {
        certsContainer.innerHTML = edu.certifications.map(cert => `
            <div class="glass-card p-5 flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <i data-lucide="award" class="w-5 h-5"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-1">
                        <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">${cert.issuer}</span>
                        <span class="text-[11px] font-bold text-indigo-400">${cert.year}</span>
                    </div>
                    <h5 class="text-sm font-bold text-slate-100 mt-0.5 truncate">${cert.name}</h5>
                    <div class="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                        <i data-lucide="check" class="w-3 h-3 text-emerald-400"></i>
                        <span>${cert.code}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderContact(contact) {
    const badgeEl = document.getElementById('contact-badge');
    const titleEl = document.getElementById('contact-title');
    const subtitleEl = document.getElementById('contact-subtitle');
    const infoTitleEl = document.getElementById('contact-info-title');
    const formTitleEl = document.getElementById('contact-form-title');
    
    const labelName = document.getElementById('label-name');
    const labelEmail = document.getElementById('label-email');
    const labelSubject = document.getElementById('label-subject');
    const labelMessage = document.getElementById('label-message');
    const sendBtn = document.getElementById('contact-submit-btn');
    const subjectSelect = document.getElementById('contact-subject');

    if (badgeEl) badgeEl.textContent = contact.sectionBadge;
    if (titleEl) titleEl.textContent = contact.title;
    if (subtitleEl) subtitleEl.textContent = contact.subtitle;
    if (infoTitleEl) infoTitleEl.textContent = contact.infoTitle;
    if (formTitleEl) formTitleEl.textContent = contact.formTitle;

    if (labelName) labelName.textContent = contact.labels.fullName;
    if (labelEmail) labelEmail.textContent = contact.labels.email;
    if (labelSubject) labelSubject.textContent = contact.labels.subject;
    if (labelMessage) labelMessage.textContent = contact.labels.message;
    if (sendBtn) {
        sendBtn.innerHTML = `<span>${contact.labels.sendBtn}</span> <i data-lucide="send" class="w-4 h-4 ml-2"></i>`;
    }

    if (subjectSelect && contact.subjects) {
        subjectSelect.innerHTML = contact.subjects.map(s => `<option value="${s}">${s}</option>`).join('');
    }

    // Contact info items
    const emailEl = document.getElementById('contact-email-val');
    const phoneEl = document.getElementById('contact-phone-val');
    const locEl = document.getElementById('contact-loc-val');

    if (emailEl) {
        emailEl.textContent = profileData.config.email;
        const emailLink = emailEl.closest('a');
        if (emailLink) emailLink.href = `mailto:${profileData.config.email}`;
    }
    if (phoneEl) {
        phoneEl.textContent = profileData.config.phone;
        const phoneLink = phoneEl.closest('a');
        if (phoneLink) phoneLink.href = `tel:${profileData.config.phone.replace(/[\s\-\(\)]/g, '')}`;
    }
    if (locEl) {
        locEl.textContent = (profileData.config.location && profileData.config.location[state.lang]) || 'Việt Nam';
    }
}

function renderFooter(footer) {
    const rightsEl = document.getElementById('footer-rights');
    const builtEl = document.getElementById('footer-built');
    const footerBrandName = document.getElementById('footer-brand-name');
    const headerBrandName = document.getElementById('header-brand-name');
    const year = new Date().getFullYear();
    const brandName = state.lang === 'vi' ? 'YEN LUU' : 'OLWEN LUU';
    const headerName = state.lang === 'vi' ? 'YẾN LƯU' : 'OLWEN LUU';

    if (headerBrandName) headerBrandName.textContent = headerName;
    if (footerBrandName) footerBrandName.textContent = brandName;
    if (rightsEl) rightsEl.textContent = `© ${year} ${brandName}. ${footer.rights}`;
    if (builtEl) builtEl.textContent = footer.builtWith;
}

/* ==========================================================================
   DYNAMIC TYPEWRITER EFFECT
   ========================================================================== */
let typewriterCharIndex = 0;
let typewriterRoleIndex = 0;
let typewriterIsDeleting = false;

function initTypewriter(roles) {
    if (state.typewriterTimeout) {
        clearTimeout(state.typewriterTimeout);
    }
    typewriterCharIndex = 0;
    typewriterRoleIndex = 0;
    typewriterIsDeleting = false;
    typewriterTick(roles);
}

function typewriterTick(roles) {
    if (!elements.typewriterText || !roles || roles.length === 0) return;

    const currentRole = roles[typewriterRoleIndex];
    
    if (typewriterIsDeleting) {
        elements.typewriterText.textContent = currentRole.substring(0, typewriterCharIndex - 1);
        typewriterCharIndex--;
    } else {
        elements.typewriterText.textContent = currentRole.substring(0, typewriterCharIndex + 1);
        typewriterCharIndex++;
    }

    let speed = typewriterIsDeleting ? 40 : 80;

    if (!typewriterIsDeleting && typewriterCharIndex === currentRole.length) {
        speed = 2000; // Pause at end of word
        typewriterIsDeleting = true;
    } else if (typewriterIsDeleting && typewriterCharIndex === 0) {
        typewriterIsDeleting = false;
        typewriterRoleIndex = (typewriterRoleIndex + 1) % roles.length;
        speed = 500;
    }

    state.typewriterTimeout = setTimeout(() => typewriterTick(roles), speed);
}

/* ==========================================================================
   SCROLL EVENTS (PROGRESS BAR, BACK TO TOP & SCROLLSPY)
   ========================================================================== */
function initScrollEvents() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;

        if (elements.scrollProgress) {
            elements.scrollProgress.style.width = `${progress}%`;
        }

        if (elements.backToTopBtn) {
            if (scrollTop > 400) {
                elements.backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                elements.backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                elements.backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
                elements.backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
            }
        }

        // ScrollSpy Active Nav Highlight
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);

            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-indigo-400', 'font-bold'));
                if (link) link.classList.add('text-indigo-400', 'font-bold');
            }
        });
    });

    if (elements.backToTopBtn) {
        elements.backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/* ==========================================================================
   LIGHTBOX MODAL
   ========================================================================== */
function initLightbox() {
    if (elements.lightboxClose) {
        elements.lightboxClose.addEventListener('click', closeLightbox);
    }
    if (elements.lightboxPrev) {
        elements.lightboxPrev.addEventListener('click', () => changeLightboxImage(-1));
    }
    if (elements.lightboxNext) {
        elements.lightboxNext.addEventListener('click', () => changeLightboxImage(1));
    }

    if (elements.lightboxModal) {
        elements.lightboxModal.addEventListener('click', (e) => {
            if (e.target === elements.lightboxModal) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!elements.lightboxModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') changeLightboxImage(-1);
        if (e.key === 'ArrowRight') changeLightboxImage(1);
    });
}

function openLightbox(index) {
    if (!profileData.gallery || !profileData.gallery[index]) return;
    state.lightboxIndex = index;
    updateLightboxContent();
    elements.lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    elements.lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
    const total = profileData.gallery.length;
    state.lightboxIndex = (state.lightboxIndex + direction + total) % total;
    updateLightboxContent();
}

function updateLightboxContent() {
    const item = profileData.gallery[state.lightboxIndex];
    if (!item) return;
    elements.lightboxImg.src = item.src;
    if (elements.lightboxCaption) {
        const caption = state.lang === 'vi' ? item.captionVi : item.captionEn;
        if (caption) {
            elements.lightboxCaption.textContent = caption;
            elements.lightboxCaption.style.display = 'block';
        } else {
            elements.lightboxCaption.textContent = '';
            elements.lightboxCaption.style.display = 'none';
        }
    }
}

/* ==========================================================================
   CONTACT FORM & TOAST
   ========================================================================== */
function initContactForm() {
    if (!elements.contactForm) return;

    elements.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
        const langData = profileData[state.lang] || profileData.vi;

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>${langData.contact.labels.sending}</span> <i data-lucide="loader-2" class="w-4 h-4 ml-2 animate-spin"></i>`;
            if (window.lucide) lucide.createIcons();
        }

        // Simulate network submission
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span>${langData.contact.labels.sendBtn}</span> <i data-lucide="send" class="w-4 h-4 ml-2"></i>`;
                if (window.lucide) lucide.createIcons();
            }

            elements.contactForm.reset();
            showToast(langData.contact.labels.success);
        }, 900);
    });
}

function showToast(message) {
    if (!elements.toast || !elements.toastMsg) return;
    elements.toastMsg.textContent = message;
    elements.toast.classList.add('show');

    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 4500);
}

/* ==========================================================================
   VISUAL IN-BROWSER QUICK EDITOR (CHỈNH SỬA TRỰC QUAN MỌI LÚC MỌI NƠI)
   ========================================================================== */
function initQuickEditor() {
    const editBtn = document.getElementById('open-editor-btn');
    const editorModal = document.getElementById('editor-modal');
    const closeBtn = document.getElementById('close-editor-btn');
    const savePreviewBtn = document.getElementById('editor-save-preview');
    const downloadJsBtn = document.getElementById('editor-download-js');
    const copyCodeBtn = document.getElementById('editor-copy-code');

    if (!editBtn || !editorModal) return;

    // Open Modal
    editBtn.addEventListener('click', () => {
        populateEditorFields();
        editorModal.classList.remove('hidden');
        editorModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });

    // Close Modal
    const closeModal = () => {
        editorModal.classList.add('hidden');
        editorModal.classList.remove('flex');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    editorModal.addEventListener('click', (e) => {
        if (e.target === editorModal) closeModal();
    });

    // Keyboard shortcut (Ctrl + Shift + E)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
            e.preventDefault();
            editBtn.click();
        }
    });

    // File input avatar reader
    const avatarFileInput = document.getElementById('edit-avatar-file');
    const avatarTextInput = document.getElementById('edit-avatar');
    const avatarPreviewImg = document.getElementById('edit-avatar-preview');

    if (avatarFileInput) {
        avatarFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const result = event.target.result;
                    if (avatarPreviewImg) avatarPreviewImg.src = result;
                    if (avatarTextInput) avatarTextInput.value = result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (avatarTextInput) {
        avatarTextInput.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            if (avatarPreviewImg && val) {
                avatarPreviewImg.src = val;
            }
        });
    }

    // Populate current values into form inputs
    function populateEditorFields() {
        const d = profileData;
        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el && val !== undefined) el.value = val;
        };

        const currentAvatar = d.config.avatarUrl || 'assets/images/avatar.jpg';
        setVal('edit-name', d.vi.hero.name);
        setVal('edit-avatar', currentAvatar);
        if (avatarPreviewImg) avatarPreviewImg.src = currentAvatar;
        setVal('edit-email', d.config.email);
        setVal('edit-phone', d.config.phone);
        setVal('edit-location-vi', d.config.location.vi);
        setVal('edit-location-en', d.config.location.en);
        setVal('edit-tagline-vi', d.vi.hero.tagline);
        setVal('edit-tagline-en', d.en.hero.tagline);
        setVal('edit-bio-vi', d.vi.about.bioParagraph1);
        setVal('edit-bio-en', d.en.about.bioParagraph1);
        setVal('edit-linkedin', d.config.socials && d.config.socials.linkedin);
        setVal('edit-facebook', d.config.socials && d.config.socials.facebook);
        setVal('edit-tiktok', d.config.socials && d.config.socials.tiktok);
        setVal('edit-cv-url', d.config.cvUrl);
    }

    // Apply values to memory & re-render
    function applyEditorValues() {
        const getVal = (id) => (document.getElementById(id) ? document.getElementById(id).value.trim() : '');

        const name = getVal('edit-name') || profileData.vi.hero.name;
        const avatarUrl = getVal('edit-avatar') || profileData.config.avatarUrl || 'assets/images/avatar.jpg';
        const email = getVal('edit-email') || profileData.config.email;
        const phone = getVal('edit-phone') || profileData.config.phone;
        const locVi = getVal('edit-location-vi') || (profileData.config.location && profileData.config.location.vi);
        const locEn = getVal('edit-location-en') || (profileData.config.location && profileData.config.location.en);
        const taglineVi = getVal('edit-tagline-vi') || profileData.vi.hero.tagline;
        const taglineEn = getVal('edit-tagline-en') || profileData.en.hero.tagline;
        const bioVi = getVal('edit-bio-vi') || profileData.vi.about.bioParagraph1;
        const bioEn = getVal('edit-bio-en') || profileData.en.about.bioParagraph1;
        const linkedin = getVal('edit-linkedin');
        const facebook = getVal('edit-facebook');
        const tiktok = getVal('edit-tiktok');
        const cvUrl = getVal('edit-cv-url');

        // Update profileData in memory
        profileData.vi.hero.name = name;
        profileData.en.hero.name = name;
        profileData.config.avatarUrl = avatarUrl;
        profileData.config.email = email;
        profileData.config.phone = phone;
        if (!profileData.config.location) profileData.config.location = {};
        profileData.config.location.vi = locVi;
        profileData.config.location.en = locEn;
        profileData.vi.hero.tagline = taglineVi;
        profileData.en.hero.tagline = taglineEn;
        profileData.vi.about.bioParagraph1 = bioVi;
        profileData.en.about.bioParagraph1 = bioEn;
        if (!profileData.config.socials) profileData.config.socials = {};
        profileData.config.socials.linkedin = linkedin;
        profileData.config.socials.facebook = facebook;
        profileData.config.socials.tiktok = tiktok;
        profileData.config.cvUrl = cvUrl;

        // Re-apply to current page
        applyLanguage(state.lang);
        showToast(state.lang === 'vi' ? 'Đã cập nhật hiển thị xem trước thành công!' : 'Preview updated successfully!');
    }

    // Save & Preview
    if (savePreviewBtn) {
        savePreviewBtn.addEventListener('click', () => {
            applyEditorValues();
            closeModal();
        });
    }

    // Generate Javascript Code String
    function generateJsString() {
        applyEditorValues();
        return `/**\n * PORTFOLIO DATA CONFIGURATION (Song ngữ: Tiếng Việt & English)\n * Tự động tạo bởi Trình Chỉnh Sửa Trực Quan\n */\nconst profileData = ${JSON.stringify(profileData, null, 4)};\n`;
    }

    // Download updated profileData.js
    if (downloadJsBtn) {
        downloadJsBtn.addEventListener('click', () => {
            const content = generateJsString();
            const blob = new Blob([content], { type: 'text/javascript;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'profileData.js';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast(state.lang === 'vi' ? 'Đã tải file profileData.js mới về máy!' : 'profileData.js downloaded!');
        });
    }

    // Copy Code to Clipboard
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            const content = generateJsString();
            navigator.clipboard.writeText(content).then(() => {
                showToast(state.lang === 'vi' ? 'Đã sao chép toàn bộ mã vào Clipboard!' : 'Code copied to clipboard!');
            }).catch(() => {
                alert('Vui lòng cấp quyền sao chép trên trình duyệt');
            });
        });
    }
}

// Call initQuickEditor in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initQuickEditor();
});

