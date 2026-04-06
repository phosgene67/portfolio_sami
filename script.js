/* ==================== PORTFOLIO JAVASCRIPT ==================== */
/* Vanilla JS - No frameworks or external libraries required */

// ==================== DARK/LIGHT MODE TOGGLE ====================
/**
 * Manages dark/light mode theme switching
 * Stores user preference in localStorage for persistence
 */
const ThemeManager = (() => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const THEME_KEY = 'portfolio-theme';
    const LIGHT_MODE_CLASS = 'light-mode';

    /**
     * Initialize theme from localStorage or system preference
     */
    function init() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        
        if (savedTheme) {
            // Use saved preference
            applyTheme(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            // Use system preference
            applyTheme('light');
        } else {
            // Default to dark
            applyTheme('dark');
        }

        // Add click listener to toggle button
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    }

    /**
     * Apply theme by adding/removing class
     * @param {string} theme - 'light' or 'dark'
     */
    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add(LIGHT_MODE_CLASS);
            localStorage.setItem(THEME_KEY, 'light');
        } else {
            body.classList.remove(LIGHT_MODE_CLASS);
            localStorage.setItem(THEME_KEY, 'dark');
        }
    }

    /**
     * Toggle between light and dark modes
     */
    function toggleTheme() {
        const isLightMode = body.classList.contains(LIGHT_MODE_CLASS);
        applyTheme(isLightMode ? 'dark' : 'light');
    }

    return { init, toggleTheme, applyTheme };
})();

// ==================== MOBILE MENU TOGGLE ====================
/**
 * Manages mobile hamburger menu functionality
 */
const MobileMenu = (() => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLink = document.querySelectorAll('.nav-link');

    /**
     * Initialize mobile menu listeners
     */
    function init() {
        if (hamburger) {
            hamburger.addEventListener('click', toggleMenu);
        }

        // Close menu when a link is clicked
        navLink.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu when clicking outside
        document.addEventListener('click', handleOutsideClick);
    }

    /**
     * Toggle hamburger menu visibility
     */
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    }

    /**
     * Close the mobile menu
     */
    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }

    /**
     * Close menu when clicking outside of it
     */
    function handleOutsideClick(event) {
        const isClickInsideNav = navLinks?.contains(event.target);
        const isClickOnHamburger = hamburger?.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navLinks?.classList.contains('active')) {
            closeMenu();
        }
    }

    return { init, toggleMenu, closeMenu };
})();

// ==================== SMOOTH SCROLLING ====================
/**
 * Handles smooth scrolling for anchor links
 */
const SmoothScroll = (() => {
    /**
     * Initialize smooth scroll listeners
     */
    function init() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });
    }

    /**
     * Handle anchor link clicks with smooth scroll
     */
    function handleLinkClick(event) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') {
            return;
        }

        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            event.preventDefault();
            
            // Smooth scroll to target
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update active nav link
            updateActiveNavLink(href);
        }
    }

    /**
     * Update active navigation link styling
     */
    function updateActiveNavLink(targetHref) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetHref) {
                link.classList.add('active');
            }
        });
    }

    return { init, updateActiveNavLink };
})();

// ==================== SCROLL ANIMATIONS ====================
/**
 * Manages scroll-triggered animations for sections and elements
 * Uses Intersection Observer API for performance
 */
const ScrollAnimations = (() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    /**
     * Initialize scroll animation observers
     */
    function init() {
        observeElements('section', animateSection);
        observeElements('.project-card', animateProjectCard);
        observeElements('.skill-category', animateSkillCategory);
        observeElements('.education-item', animateEducationItem);
        updateNavbarOnScroll();
    }

    /**
     * Create intersection observer for elements
     */
    function observeElements(selector, callback) {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.forEach(element => observer.observe(element));
    }

    /**
     * Animate sections with fade-in-up effect
     */
    function animateSection(element) {
        element.style.animation = 'fadeInUp 0.8s ease forwards';
    }

    /**
     * Animate project cards with scale and lift effect
     */
    function animateProjectCard(card) {
        card.style.animation = 'fadeIn 0.6s ease forwards';
        card.style.animationDelay = getRandomDelay(0, 0.3);
    }

    /**
     * Animate skill categories
     */
    function animateSkillCategory(category) {
        category.style.animation = 'fadeIn 0.6s ease forwards';
        category.style.animationDelay = getRandomDelay(0, 0.2);
    }

    /**
     * Animate education items
     */
    function animateEducationItem(item) {
        item.style.animation = 'fadeInUp 0.8s ease forwards';
    }

    /**
     * Update navbar styles on scroll
     */
    function updateNavbarOnScroll() {
        const navbar = document.getElementById('navbar');
        let lastScrollY = 0;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                if (!navbar.classList.contains('scrolled')) {
                    navbar.classList.add('scrolled');
                }
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    /**
     * Generate random delay for staggered animations
     */
    function getRandomDelay(min, max) {
        return (Math.random() * (max - min) + min) + 's';
    }

    return { init };
})();

// ==================== NAVBAR SCROLL DETECTION ====================
/**
 * Updates navbar appearance based on scroll position
 * Adds shadow effect when scrolled
 */
const NavbarScroll = (() => {
    const navbar = document.getElementById('navbar');
    let ticking = false;

    /**
     * Initialize navbar scroll detection
     */
    function init() {
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /**
     * Handle scroll event with throttling for performance
     */
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateNavbarShadow();
                ticking = false;
            });
            ticking = true;
        }
    }

    /**
     * Update navbar shadow based on scroll position
     */
    function updateNavbarShadow() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    return { init };
})();

// ==================== ACTIVE SECTION DETECTION ====================
/**
 * Detects which section is currently in view and updates nav highlight
 */
const ActiveSectionDetector = (() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    /**
     * Initialize active section detection
     */
    function init() {
        window.addEventListener('scroll', updateActiveSection, { passive: true });
    }

    /**
     * Update which nav link should be highlighted
     */
    function updateActiveSection() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    return { init };
})();

// ==================== FORM VALIDATION & SUBMISSION ====================
/**
 * Handles contact form submission
 */
const ContactForm = (() => {
    const form = document.getElementById('contactForm');

    /**
     * Initialize contact form listeners
     */
    function init() {
        if (form) {
            form.addEventListener('submit', handleSubmit);
        }
    }

    /**
     * Handle form submission
     */
    function handleSubmit(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!validateForm(data)) {
            console.error('Form validation failed');
            return;
        }

        // Log form data (replace with actual submission logic)
        console.log('Form submitted:', data);
        
        // Show success message
        showFormSuccess();

        // Reset form
        form.reset();
    }

    /**
     * Validate form data
     */
    function validateForm(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.name || data.name.trim().length === 0) {
            alert('Please enter your name');
            return false;
        }

        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return false;
        }

        if (!data.subject || data.subject.trim().length === 0) {
            alert('Please enter a subject');
            return false;
        }

        if (!data.message || data.message.trim().length === 0) {
            alert('Please enter a message');
            return false;
        }

        return true;
    }

    /**
     * Show success message after form submission
     */
    function showFormSuccess() {
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        successMessage.style.cssText = `
            background: #00ff99;
            color: #000;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            animation: fadeInUp 0.5s ease;
            text-align: center;
            font-weight: 600;
        `;

        form.parentElement.insertBefore(successMessage, form);

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => successMessage.remove(), 500);
        }, 5000);
    }

    return { init };
})();

// ==================== KEYBOARD NAVIGATION ====================
/**
 * Enhances keyboard accessibility for the portfolio
 */
const KeyboardNavigation = (() => {
    /**
     * Initialize keyboard event listeners
     */
    function init() {
        document.addEventListener('keydown', handleKeyDown);
    }

    /**
     * Handle keyboard shortcuts
     */
    function handleKeyDown(event) {
        // Keyboard shortcut: Alt + Home = scroll to home
        if (event.altKey && event.key === 'Home') {
            event.preventDefault();
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        }

        // Keyboard shortcut: Escape = close mobile menu
        if (event.key === 'Escape') {
            MobileMenu.closeMenu();
        }
    }

    return { init };
})();

// ==================== WINDOW RESIZE HANDLER ====================
/**
 * Handles responsive behavior on window resize
 */
const ResponsiveHandler = (() => {
    let resizeTimeout;

    /**
     * Initialize resize listeners
     */
    function init() {
        window.addEventListener('resize', handleResize);
    }

    /**
     * Handle window resize with debouncing
     */
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Close mobile menu on larger screens
            if (window.innerWidth > 768) {
                MobileMenu.closeMenu();
            }
        }, 250);
    }

    return { init };
})();

// ==================== INITIALIZATION ====================
/**
 * Main initialization function - runs when DOM is ready
 */
function initializePortfolio() {
    console.log('🚀 Initializing Portfolio...');

    // Initialize all modules
    ThemeManager.init();
    MobileMenu.init();
    SmoothScroll.init();
    ScrollAnimations.init();
    NavbarScroll.init();
    ActiveSectionDetector.init();
    ContactForm.init();
    KeyboardNavigation.init();
    ResponsiveHandler.init();

    console.log('✅ Portfolio initialized successfully!');
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    // DOM is already loaded
    initializePortfolio();
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for scroll/resize events
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
