/**
 * Portfolio Interactive Scripts
 * Author: Ojas Jeetendra Raundale
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initScrollSpy();
    initClipboard();
});

/* ========================================== */
/* THEME TOGGLE LOGIC                         */
/* ========================================== */
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    if (!themeToggleBtn) return;

    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    // Default to dark unless light is preferred or saved
    let activeTheme = 'dark';
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        activeTheme = 'light';
    }

    // Apply the active theme on start
    document.documentElement.setAttribute('data-theme', activeTheme);

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add subtle rotation animation to button
        themeToggleBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggleBtn.style.transform = '';
        }, 500);
    });
}

/* ========================================== */
/* MOBILE NAVIGATION MENU                     */
/* ========================================== */
function initMobileNav() {
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!mobileNavToggle || !navMenu) return;

    // Toggle nav menu
    mobileNavToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileNavToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileNavToggle.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        });
    });
}

/* ========================================== */
/* ACTIVE SCROLL NAVIGATION HIGHLIGHTING      */
/* ========================================== */
function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    if (!sections.length || !navLinks.length) return;

    // IntersectionObserver to watch which section is active
    const options = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the sweet spot of the viewport
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${activeId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}

/* ========================================== */
/* CLIPBOARD UTILITY                          */
/* ========================================== */
function initClipboard() {
    const copyButtons = document.querySelectorAll('.btn-clipboard');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (!textToCopy) return;

            try {
                // Clipboard API
                await navigator.clipboard.writeText(textToCopy);
                
                // Visual Feedback
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Copied! <i class="fa-solid fa-check" style="color: var(--secondary)"></i>';
                btn.style.borderColor = 'var(--secondary)';
                btn.style.background = 'var(--secondary-glow)';

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.borderColor = '';
                    btn.style.background = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });
}
