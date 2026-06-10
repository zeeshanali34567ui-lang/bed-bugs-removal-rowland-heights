const fs = require('fs');
const path = require('path');

const globalHeader = `    <!-- 1. TOP NAVBAR -->
    <div class="bg-dark-950 py-2 px-4 border-b border-brand-900/30">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <!-- Left Side -->
            <div class="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider">
                <span class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500"></span>
                </span>
                <span class="uppercase">Active Extermination Dispatch • Rowland Heights, CA 91748</span>
            </div>
            <!-- Right Side -->
            <div class="flex items-center gap-1.5 text-xs font-bold">
                <i class="fa-solid fa-phone text-red-500"></i>
                <span class="text-slate-300">Emergency Helpline:</span>
                <a href="tel:6265550198" class="text-red-500 hover:text-red-400 transition-colors">(626) 555-0198</a>
            </div>
        </div>
    </div>

    <!-- 2. HEADER / MAIN NAVIGATION -->
    <header id="main-header" class="sticky top-0 z-50 bg-slate-900 text-white transition-all duration-300 py-5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-2 group">
                <div class="bg-brand-600 p-2.5 rounded-xl text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                    <i class="fa-solid fa-shield-virus text-2xl"></i>
                </div>
                <div>
                    <span class="font-display font-extrabold text-xl tracking-tight block">RH <span class="text-brand-500">BED BUG</span></span>
                    <span class="text-[10px] tracking-widest text-slate-400 uppercase font-semibold block">EXERMINATORS</span>
                </div>
            </a>

            <!-- Desktop Nav -->
            <nav class="hidden lg:flex items-center gap-8 font-medium">
                <a href="index.html" class="text-white hover:text-brand-400 transition-colors">Home</a>
                
                <!-- Services Dropdown (CSS Hover, Accessibity Focus in JS) -->
                <div class="relative group py-2">
                    <button class="flex items-center gap-1.5 text-white hover:text-brand-400 transition-colors py-1 focus:outline-none">
                        <span>Services</span>
                        <i class="fa-solid fa-chevron-down text-xs group-hover:rotate-180 transition-transform"></i>
                    </button>
                    <!-- Dropdown Menu -->
                    <div class="absolute top-full left-0 mt-2 w-64 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50 overflow-hidden">
                        <a href="bed-bug-chemical-treatment.html" class="block px-5 py-3.5 hover:bg-brand-950/40 hover:text-brand-400 border-b border-slate-900/60 transition-colors">
                            <span class="block font-bold text-sm">Chemical Treatment</span>
                            <span class="text-xs text-slate-400">Targeted, safe residual protocols</span>
                        </a>
                        <a href="bed-bug-heat-treatment.html" class="block px-5 py-3.5 hover:bg-brand-950/40 hover:text-brand-400 border-b border-slate-900/60 transition-colors">
                            <span class="block font-bold text-sm">Thermal Heat Treatment</span>
                            <span class="text-xs text-slate-400">Eco-friendly single day eradication</span>
                        </a>
                        <a href="residential-bed-bug-control.html" class="block px-5 py-3.5 hover:bg-brand-950/40 hover:text-brand-400 border-b border-slate-900/60 transition-colors">
                            <span class="block font-bold text-sm">Residential Control</span>
                            <span class="text-xs text-slate-400">Family-safe home bug protection</span>
                        </a>
                        <a href="commercial-bed-bug-control.html" class="block px-5 py-3.5 hover:bg-brand-950/40 hover:text-brand-400 transition-colors">
                            <span class="block font-bold text-sm">Commercial Control</span>
                            <span class="text-xs text-slate-400">Discreet motel, hotel & office care</span>
                        </a>
                    </div>
                </div>

                <a href="about-us.html" class="text-white hover:text-brand-400 transition-colors">About Us</a>
                <a href="contact-us.html" class="text-white hover:text-brand-400 transition-colors">Contact Us</a>
                
            </nav>

            <!-- CTA Desktop Button -->
            <div class="hidden lg:flex items-center gap-4">
                <a href="tel:6265550198" class="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 px-6 py-2.5 rounded-xl font-bold text-white shadow-lg shadow-brand-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm">
                    <i class="fa-solid fa-phone"></i>
                    <span>(626) 555-0198</span>
                </a>
            </div>

            <!-- Hamburger Button (Mobile) -->
            <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-none" aria-label="Toggle navigation">
                <svg id="mobile-menu-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg id="mobile-menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu Navigation -->
        <div id="mobile-menu" class="hidden lg:hidden bg-slate-950 border-t border-slate-800 mt-4 px-4 py-4 space-y-3">
            <a href="index.html" class="block py-2 text-slate-300 font-medium hover:text-white">Home</a>
            
            <div class="border-t border-slate-900 my-1"></div>
            
            <!-- Mobile Services Dropdown Accordion -->
            <div>
                <button id="mobile-dropdown-btn" class="w-full flex justify-between items-center py-2 text-slate-300 font-medium hover:text-white">
                    <span>Our Services</span>
                    <i id="mobile-dropdown-arrow" class="fa-solid fa-chevron-down transition-transform duration-200"></i>
                </button>
                <div id="mobile-dropdown-menu" class="hidden pl-4 py-2 space-y-2.5">
                    <a href="bed-bug-chemical-treatment.html" class="block text-sm text-slate-400 hover:text-brand-400 transition-colors">Chemical Treatment</a>
                    <a href="bed-bug-heat-treatment.html" class="block text-sm text-slate-400 hover:text-brand-400 transition-colors">Thermal Heat Treatment</a>
                    <a href="residential-bed-bug-control.html" class="block text-sm text-slate-400 hover:text-brand-400 transition-colors">Residential Control</a>
                    <a href="commercial-bed-bug-control.html" class="block text-sm text-slate-400 hover:text-brand-400 transition-colors">Commercial Control</a>
                </div>
            </div>

            <div class="border-t border-slate-900 my-1"></div>
            
            <a href="about-us.html" class="block py-2 text-slate-300 font-medium hover:text-white">About Us</a>
            <a href="contact-us.html" class="block py-2 text-slate-300 font-medium hover:text-white">Contact Us</a>
            
            <a href="tel:6265550198" class="w-full text-center block bg-brand-600 hover:bg-brand-700 py-3 rounded-xl font-bold text-white transition-colors mt-4">
                <i class="fa-solid fa-phone mr-2"></i>Call Now: (626) 555-0198
            </a>
        </div>
    </header>`;

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<!-- 1\. TOP NAVBAR -->[\s\S]*?<\/header>/, globalHeader);
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
});
