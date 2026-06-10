/**
 * Bed Bugs Removal Rowland Heights - Interactive Scripts
 * Created for Rank and Rent Conversion & Local SEO Optimization
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. STICKY HEADER ON SCROLL
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-slate-900/95', 'backdrop-blur-md', 'shadow-lg', 'py-3');
                header.classList.remove('bg-slate-900', 'py-5');
            } else {
                header.classList.add('bg-slate-900', 'py-5');
                header.classList.remove('bg-slate-900/95', 'backdrop-blur-md', 'shadow-lg', 'py-3');
            }
        });
    }

    // 2. MOBILE MENU TOGGLE
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIconOpen = document.getElementById('mobile-menu-icon-open');
    const mobileMenuIconClose = document.getElementById('mobile-menu-icon-close');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = mobileMenu.classList.contains('hidden');
            if (isExpanded) {
                mobileMenu.classList.remove('hidden');
                // Change icon to close
                if (mobileMenuIconOpen) mobileMenuIconOpen.classList.add('hidden');
                if (mobileMenuIconClose) mobileMenuIconClose.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                // Change icon to hamburger
                if (mobileMenuIconOpen) mobileMenuIconOpen.classList.remove('hidden');
                if (mobileMenuIconClose) mobileMenuIconClose.classList.add('hidden');
            }
        });
    }

    // 3. MOBILE SERVICES DROPDOWN TOGGLE
    const mobileDropdownBtn = document.getElementById('mobile-dropdown-btn');
    const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
    const mobileDropdownArrow = document.getElementById('mobile-dropdown-arrow');

    if (mobileDropdownBtn && mobileDropdownMenu) {
        mobileDropdownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = mobileDropdownMenu.classList.contains('hidden');
            if (isHidden) {
                mobileDropdownMenu.classList.remove('hidden');
                if (mobileDropdownArrow) mobileDropdownArrow.classList.add('rotate-180');
            } else {
                mobileDropdownMenu.classList.add('hidden');
                if (mobileDropdownArrow) mobileDropdownArrow.classList.remove('rotate-180');
            }
        });
    }

    // 4. DESKTOP SERVICES DROPDOWN (Hover is handled by CSS, but focus/click accessibility added here)
    const servicesDropdown = document.querySelector('.group');
    if (servicesDropdown) {
        servicesDropdown.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const menu = servicesDropdown.querySelector('div');
                if (menu) menu.classList.add('hidden');
            }
        });
    }

    // 5. FAQ ACCORDION
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        if (questionBtn && answer) {
            questionBtn.addEventListener('click', () => {
                const isOpen = !answer.classList.contains('hidden');
                
                // Close all other FAQs
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    if (otherAnswer && otherAnswer !== answer) {
                        otherAnswer.classList.add('hidden');
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    }
                });

                // Toggle current FAQ
                if (isOpen) {
                    answer.classList.add('hidden');
                    if (icon) icon.style.transform = 'rotate(0deg)';
                } else {
                    answer.classList.remove('hidden');
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
            });
        }
    });

    // 6. LEAD GENERATION FORM SUBMISSION
    const leadForms = document.querySelectorAll('.lead-gen-form');
    leadForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic Form Validation
            const nameInput = form.querySelector('input[name="name"]');
            const phoneInput = form.querySelector('input[name="phone"]');
            const emailInput = form.querySelector('input[name="email"]');
            const messageInput = form.querySelector('textarea[name="message"]') || form.querySelector('select[name="service"]');

            if (!nameInput.value.trim() || !phoneInput.value.trim()) {
                alert('Please fill out your Name and Phone Number so we can reach you immediately.');
                return;
            }

            // Simulate form submission sending state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> Sending Request...
            `;

            setTimeout(() => {
                // Mock saving to lead list
                const lead = {
                    name: nameInput.value.trim(),
                    phone: phoneInput.value.trim(),
                    email: emailInput ? emailInput.value.trim() : 'N/A',
                    service: messageInput ? messageInput.value : 'General Bed Bug Consultation',
                    timestamp: new Date().toISOString(),
                    status: 'New'
                };
                
                let leads = JSON.parse(localStorage.getItem('bed_bug_leads') || '[]');
                leads.push(lead);
                localStorage.setItem('bed_bug_leads', JSON.stringify(leads));

                // Show custom modal or message
                form.innerHTML = `
                    <div class="text-center py-8 px-4 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950">
                        <svg class="w-16 h-16 text-emerald-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 class="text-xl font-bold mb-2">Quote Request Received!</h3>
                        <p class="text-sm mb-4">Thank you, <span class="font-semibold">${lead.name}</span>. A local bed bug specialist will call you at <span class="font-semibold">${lead.phone}</span> within the next 15 minutes.</p>
                        <p class="text-xs text-emerald-800">For immediate assistance, dial <a href="tel:6265550198" class="font-bold underline text-red-600 hover:text-red-700">(626) 555-0198</a>.</p>
                    </div>
                `;
            }, 1500);
        });
    });

    // 7. CURRENT YEAR DYNAMIC FOOTER
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
