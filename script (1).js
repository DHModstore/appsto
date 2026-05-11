// ===== APP DATA =====
const appsData = [
    {
        id: 1,
        name: "WhatsApp Plus",
        version: "v2.24.1",
        rating: 4.8,
        size: "45.2 MB",
        category: "whatsapp",
        icon: "fab fa-whatsapp",
        color: "#25D366",
        downloads: "125K",
        features: ["Anti-Delete", "Privacy Hide", "Themes", "Auto-Reply"],
        description: "Enhanced WhatsApp with privacy features, custom themes, and advanced messaging options.",
        screenshots: ["screen1", "screen2", "screen3"],
        changelog: [
            { version: "v2.24.1", date: "2024-01-15", changes: "Fixed crash on Android 14, added new privacy options" },
            { version: "v2.24.0", date: "2024-01-01", changes: "Updated base to WhatsApp 2.24, improved anti-delete" }
        ]
    },
    {
        id: 2,
        name: "Netflix Premium",
        version: "v8.95.1",
        rating: 4.9,
        size: "28.5 MB",
        category: "streaming",
        icon: "fas fa-play",
        color: "#E50914",
        downloads: "89K",
        features: ["4K HDR", "No Ads", "All Regions", "Download"],
        description: "Watch Netflix content in 4K HDR without subscription. Access all regional content.",
        screenshots: ["screen1", "screen2", "screen3"],
        changelog: [
            { version: "v8.95.1", date: "2024-01-10", changes: "Fixed playback issues, added Dolby Vision support" },
            { version: "v8.95.0", date: "2023-12-20", changes: "Updated to latest Netflix base, improved streaming" }
        ]
    },
    {
        id: 3,
        name: "Spotify Pro",
        version: "v8.8.42",
        rating: 4.7,
        size: "35.8 MB",
        category: "streaming",
        icon: "fab fa-spotify",
        color: "#1DB954",
        downloads: "210K",
        features: ["No Ads", "Unlimited Skips", "High Quality", "Offline"],
        description: "Premium Spotify experience with no ads, unlimited skips, and extreme audio quality.",
        screenshots: ["screen1", "screen2", "screen3"],
        changelog: [
            { version: "v8.8.42", date: "2024-01-08", changes: "Added lyrics sync, improved offline mode" },
            { version: "v8.8.40", date: "2023-12-15", changes: "Fixed login issues, updated UI" }
        ]
    },
    {
        id: 4,
        name: "Express VPN",
        version: "v10.45.0",
        rating: 4.6,
        size: "22.1 MB",
        category: "vpn",
        icon: "fas fa-shield-alt",
        color: "#0F4C81",
        downloads: "67K",
        features: ["All Servers", "No Logs", "Kill Switch", "Split Tunnel"],
        description: "Premium VPN with all server locations unlocked. Military-grade encryption.",
        screenshots: ["screen1", "screen2", "screen3"],
        changelog: [
            { version: "v10.45.0", date: "2024-01-12", changes: "Added WireGuard protocol, improved speeds" },
            { version: "v10.44.0", date: "2023-12-28", changes: "Fixed connection drops, added new servers" }
        ]
    },
    {
        id: 5,
        name: "PUBG Mobile Hack",
        version: "v3.2.0",
        rating: 4.5,
        size: "1.8 GB",
        category: "gaming",
        icon: "fas fa-gamepad",
        color: "#F2A900",
        downloads: "45K",
        features: ["Aimbot", "ESP", "No Recoil", "Speed Hack"],
        description: "Dominate PUBG Mobile with advanced mod features. Undetected and safe.",
        screenshots: ["screen1", "screen2", "screen3"],
        changelog: [
            { version: "v3.2.0", date: "2024-01-05", changes: "Updated for season 25, improved anti-ban" },
            { version: "v3.1.0", date: "2023-12-10", changes: "Added new ESP features, fixed crashes" }
        ]
    },
    {
        id: 6,
        name: "Instagram Pro",
        version: "v312.0",
        rating: 4.4,
        size: "52.3 MB",
        category: "social",
        icon: "fab fa-instagram",
        color: "#E4405F",
        downloads: "156K",
        features: ["Download Media", "View Stories", "No Ads", "Analytics"],
        description: "Enhanced Instagram with download capabilities, story viewer, and analytics.",
        screenshots: ["screen1", "screen2", "screen3"],
        changelog: [
            { version: "v312.0", date: "2024-01-14", changes: "Added Reels download, improved story viewer" },
            { version: "v311.0", date: "2023-12-22", changes: "Fixed login, updated to latest base" }
        ]
    },
    {
        id: 7,
        name: "YouTube Vanced",
        version: "v18.45.43",
        rating: 4.9,
        size: "68.5 MB",
        category: "streaming",
        icon: "fab fa-youtube",
        color: "#FF0000",
        downloads: "320K",
        features: ["No Ads", "Background Play", "SponsorBlock", "Return Dislike"],
        description: "The ultimate YouTube experience with no ads, background playback, and sponsor skipping.",
        screenshots: ["screen1", "screen2", "screen3"],
        changelog: [
            { version: "v18.45.43", date: "2024-01-16", changes: "Updated to YouTube 18.45, fixed shorts" },
            { version: "v18.45.40", date: "2023-12-30", changes: "Improved SponsorBlock integration" }
        ]
    },
    {
        id: 8,
        name: "Nova Launcher Prime",
        version: "v8.0.5",
        rating: 4.7,
        size: "15.2 MB",
        category: "utility",
        icon: "fas fa-th",
        color: "#00A4E4",
        downloads: "78K",
        features: ["Prime Unlocked", "Gestures", "Custom Icons", "Backup"],
        description: "The most customizable Android launcher with all prime features unlocked.",
        screenshots: ["screen1", "screen2", "screen3"],
        changelog: [
            { version: "v8.0.5", date: "2024-01-09", changes: "Added new gesture options, improved performance" },
            { version: "v8.0.0", date: "2023-12-01", changes: "Major UI refresh, added smart folders" }
        ]
    }
];

const trendingApps = [appsData[6], appsData[2], appsData[0], appsData[3], appsData[5], appsData[1]];

// ===== DOM ELEMENTS =====
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const backToTop = document.getElementById('backToTop');
const searchInput = document.getElementById('searchInput');
const appsGrid = document.getElementById('appsGrid');
const carouselTrack = document.getElementById('carouselTrack');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const appModal = document.getElementById('appModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');
const toastContainer = document.getElementById('toastContainer');

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ===== SCROLL PROGRESS =====
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== THEME TOGGLE =====
let isDark = true;
themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    showToast(isDark ? 'Dark mode enabled' : 'Light mode enabled', 'info');
});

// ===== MOBILE MENU =====
mobileMenuBtn.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu') || createMobileMenu();
    const overlay = document.querySelector('.mobile-menu-overlay') || createMobileOverlay();
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

function createMobileMenu() {
    const menu = document.createElement('div');
    menu.className = 'mobile-menu';
    menu.innerHTML = `
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#popular">Popular</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#trending">Trending</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;
    document.body.appendChild(menu);

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            document.querySelector('.mobile-menu-overlay')?.classList.remove('active');
        });
    });

    return menu;
}

function createMobileOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.addEventListener('click', () => {
        document.querySelector('.mobile-menu')?.classList.remove('active');
        overlay.classList.remove('active');
    });
    document.body.appendChild(overlay);
    return overlay;
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== BACK TO TOP =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString() + '+';
            }
        };

        updateCounter();
    });
}

// Trigger counters when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(document.querySelector('.hero'));

// ===== RENDER APPS =====
function renderApps(apps) {
    if (apps.length === 0) {
        appsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1;">
                <i class="fas fa-search"></i>
                <h3>No apps found</h3>
                <p>Try different search terms or browse categories</p>
            </div>
        `;
        return;
    }

    appsGrid.innerHTML = apps.map(app => `
        <div class="app-card reveal" data-id="${app.id}">
            <div class="app-header">
                <div class="app-icon" style="background: ${app.color}">
                    <i class="${app.icon}"></i>
                </div>
                <div class="app-info">
                    <h3>${app.name}</h3>
                    <p>${app.version}</p>
                </div>
            </div>
            <div class="app-meta">
                <div class="app-rating">
                    ${generateStars(app.rating)}
                    <span>${app.rating}</span>
                </div>
                <span class="app-size">${app.size}</span>
            </div>
            <div class="app-features">
                ${app.features.slice(0, 3).map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
            <div class="app-actions">
                <button class="btn-download" onclick="downloadApp(${app.id})">
                    <i class="fas fa-download"></i>
                    Download
                </button>
                <button class="btn-details" onclick="openAppModal(${app.id})">
                    <i class="fas fa-info"></i>
                </button>
            </div>
        </div>
    `).join('');

    // Re-initialize reveal animation for new elements
    initRevealAnimation();
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// ===== SEARCH FUNCTION =====
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = appsData.filter(app => 
        app.name.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query) ||
        app.features.some(f => f.toLowerCase().includes(query))
    );
    renderApps(filtered);
});

// Search tags
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        searchInput.value = tag.textContent;
        searchInput.dispatchEvent(new Event('input'));
    });
});

// ===== RENDER TRENDING CAROUSEL =====
function renderCarousel() {
    carouselTrack.innerHTML = trendingApps.map(app => `
        <div class="carousel-item">
            <div class="trending-badge">
                <i class="fas fa-fire"></i>
                Trending
            </div>
            <div class="app-header">
                <div class="app-icon" style="background: ${app.color}">
                    <i class="${app.icon}"></i>
                </div>
                <div class="app-info">
                    <h3>${app.name}</h3>
                    <p>${app.version}</p>
                </div>
            </div>
            <div class="app-rating">
                ${generateStars(app.rating)}
                <span>${app.rating}</span>
            </div>
            <div class="download-count">
                <i class="fas fa-download"></i>
                ${app.downloads} downloads
            </div>
            <button class="btn-download" style="width: 100%; margin-top: 12px;" onclick="downloadApp(${app.id})">
                <i class="fas fa-download"></i>
                Download
            </button>
        </div>
    `).join('');
}

// ===== CAROUSEL NAVIGATION =====
let carouselPosition = 0;
const carouselItemWidth = 344; // 320px + 24px gap

function updateCarousel() {
    const maxPosition = -(carouselTrack.children.length - 3) * carouselItemWidth;
    carouselPosition = Math.max(maxPosition, Math.min(0, carouselPosition));
    carouselTrack.style.transform = `translateX(${carouselPosition}px)`;

    carouselPrev.disabled = carouselPosition >= 0;
    carouselNext.disabled = carouselPosition <= maxPosition;
}

carouselPrev.addEventListener('click', () => {
    carouselPosition += carouselItemWidth;
    updateCarousel();
});

carouselNext.addEventListener('click', () => {
    carouselPosition -= carouselItemWidth;
    updateCarousel();
});

// Auto-slide carousel
setInterval(() => {
    const maxPosition = -(carouselTrack.children.length - 3) * carouselItemWidth;
    if (carouselPosition > maxPosition) {
        carouselPosition -= carouselItemWidth;
    } else {
        carouselPosition = 0;
    }
    updateCarousel();
}, 5000);

// ===== APP MODAL =====
function openAppModal(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    modalBody.innerHTML = `
        <div class="modal-app-header">
            <div class="modal-app-icon" style="background: ${app.color}">
                <i class="${app.icon}"></i>
            </div>
            <div class="modal-app-info">
                <h2>${app.name}</h2>
                <div class="modal-app-meta">
                    <span class="meta-item"><i class="fas fa-code-branch"></i> ${app.version}</span>
                    <span class="meta-item"><i class="fas fa-star"></i> ${app.rating}</span>
                    <span class="meta-item"><i class="fas fa-hdd"></i> ${app.size}</span>
                    <span class="meta-item"><i class="fas fa-download"></i> ${app.downloads}</span>
                </div>
                <p style="color: var(--text-secondary);">${app.description}</p>
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-images"></i> Screenshots</h3>
            <div class="screenshots-gallery">
                ${app.screenshots.map((s, i) => `
                    <div class="screenshot">
                        <i class="fas fa-image"></i>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-list-check"></i> Features</h3>
            <div class="features-list">
                ${app.features.map(f => `
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        ${f}
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-clock-rotate-left"></i> Changelog</h3>
            <div class="changelog-list">
                ${app.changelog.map(c => `
                    <div class="changelog-item">
                        <div class="version">${c.version}</div>
                        <div class="date">${c.date}</div>
                        <div class="changes">${c.changes}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-book"></i> Installation Guide</h3>
            <p style="color: var(--text-secondary); line-height: 1.7;">
                1. Download the APK file using the button below<br>
                2. Enable "Unknown Sources" in Settings > Security<br>
                3. Open the downloaded file and tap Install<br>
                4. If using split APK, install via SAI app<br>
                5. Launch and enjoy premium features!
            </p>
        </div>

        <div class="modal-actions">
            <button class="btn btn-primary" style="flex: 1;" onclick="downloadApp(${app.id}); closeModal();">
                <i class="fas fa-download"></i>
                Download APK (${app.size})
            </button>
            <button class="btn btn-secondary" onclick="closeModal()">
                <i class="fas fa-times"></i>
                Close
            </button>
        </div>
    `;

    appModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    appModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
appModal.addEventListener('click', (e) => {
    if (e.target === appModal) closeModal();
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && appModal.classList.contains('active')) {
        closeModal();
    }
});

// ===== DOWNLOAD FUNCTION =====
function downloadApp(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    showToast(`Starting download: ${app.name}`, 'success');

    // Simulate download progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
            clearInterval(interval);
            showToast(`${app.name} downloaded successfully!`, 'success');
        }
    }, 200);
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };

    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');

        // Close all items
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== CONTACT FORM =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    showToast('Message sent successfully! We'll get back to you soon.', 'success');
    contactForm.reset();
});

// ===== SCROLL REVEAL ANIMATION =====
function initRevealAnimation() {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => revealObserver.observe(el));
}

// ===== CATEGORY FILTERING =====
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        const filtered = appsData.filter(app => app.category === category);
        renderApps(filtered);

        // Scroll to popular section
        document.getElementById('popular').scrollIntoView({ behavior: 'smooth' });
        showToast(`Showing ${category.replace('-', ' ')} apps`, 'info');
    });
});

// ===== SOCIAL LINKS HOVER =====
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        const platform = this.getAttribute('data-platform');
        const colors = {
            twitter: '#1DA1F2',
            discord: '#5865F2',
            reddit: '#FF4500',
            youtube: '#FF0000',
            github: '#333'
        };
        this.style.borderColor = colors[platform] || 'var(--primary)';
        this.style.color = colors[platform] || 'var(--primary)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.borderColor = '';
        this.style.color = '';
    });
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const orbs = document.querySelectorAll('.glow-orb');
    orbs.forEach((orb, index) => {
        const speed = 0.2 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    renderApps(appsData);
    renderCarousel();
    updateCarousel();
    initRevealAnimation();

    // Add reveal class to section headers and cards
    document.querySelectorAll('.section-header, .category-card, .review-card, .faq-item, .info-card').forEach(el => {
        el.classList.add('reveal');
    });
    initRevealAnimation();
});

// ===== DOWNLOAD COUNTER ANIMATION =====
function animateDownloadCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 30);
}

// ===== MAGNETIC BUTTON EFFECT =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// ===== TILT EFFECT FOR CARDS =====
document.querySelectorAll('.app-card, .category-card, .review-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===== GLITCH TEXT EFFECT =====
function glitchText(element) {
    const originalText = element.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
    let iterations = 0;

    const interval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) return originalText[index];
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');

        if (iterations >= originalText.length) {
            clearInterval(interval);
        }
        iterations += 1 / 3;
    }, 30);
}

// Apply glitch effect to hero title on load
window.addEventListener('load', () => {
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        setTimeout(() => {
            glitchText(line);
        }, index * 200);
    });
});

// ===== PARTICLE EFFECT ON HERO =====
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3}px;
            height: ${Math.random() * 3}px;
            background: var(--primary);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
        `;
        hero.appendChild(particle);
    }
}

createParticles();

// ===== TYPEWRITER EFFECT FOR SEARCH PLACEHOLDER =====
const searchPlaceholder = "Search for apps, mods, games...";
let placeholderIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = searchPlaceholder.substring(0, placeholderIndex);
    searchInput.setAttribute('placeholder', currentText + '|');

    if (!isDeleting && placeholderIndex < searchPlaceholder.length) {
        placeholderIndex++;
        setTimeout(typeWriter, 50);
    } else if (isDeleting && placeholderIndex > 0) {
        placeholderIndex--;
        setTimeout(typeWriter, 30);
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeWriter, 1000);
    }
}

// Start typewriter after loading
typeWriter();

// ===== CURSOR GLOW EFFECT =====
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-glow') || createCursorGlow();
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

function createCursorGlow() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: left 0.1s ease-out, top 0.1s ease-out;
    `;
    document.body.appendChild(cursor);
    return cursor;
}

// ===== CONFETTI ON DOWNLOAD =====
function showConfetti() {
    const colors = ['#00d4ff', '#7b2dff', '#ff2d7b', '#00ff88', '#ffaa00'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            z-index: 10002;
            animation: confettiFall ${2 + Math.random() * 3}s ease-in forwards;
        `;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

// Add confetti keyframes
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 720}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Override download function to include confetti
const originalDownloadApp = downloadApp;
downloadApp = function(appId) {
    originalDownloadApp(appId);
    showConfetti();
};

// ===== SOUND EFFECTS (Optional - using Web Audio API) =====
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playHoverSound() {
    if (audioContext.state === 'suspended') audioContext.resume();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function playClickSound() {
    if (audioContext.state === 'suspended') audioContext.resume();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 1200;
    oscillator.type = 'square';
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
}

// Add sound to buttons
document.querySelectorAll('.btn, .app-card, .category-card').forEach(el => {
    el.addEventListener('mouseenter', playHoverSound);
    el.addEventListener('click', playClickSound);
});

console.log('%c DHMod Store ', 'background: linear-gradient(135deg, #00d4ff, #7b2dff); color: white; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 10px;');
console.log('%c Premium Mod App Marketplace ', 'color: #00d4ff; font-size: 14px;');
