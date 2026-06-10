const fs = require('fs');
const path = require('path');

const globalFooter = `    <!-- 10. FOOTER -->
    <footer class="bg-slate-950 text-slate-400 pt-16 pb-24 lg:pb-12 border-t border-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                <!-- Business Info -->
                <div class="space-y-4">
                    <a href="index.html" class="flex items-center gap-2">
                        <div class="bg-brand-600 p-2 rounded-lg text-white">
                            <i class="fa-solid fa-shield-virus"></i>
                        </div>
                        <span class="font-display font-extrabold text-lg tracking-tight text-white">RH <span class="text-brand-500">BED BUG</span></span>
                    </a>
                    <p class="text-xs leading-relaxed text-slate-400">
                        Rowland Heights' leading choice for professional, safe, and guaranteed bed bug extermination. Providing thermal heat treatments and target chemical solutions.
                    </p>
                    <div class="text-xs space-y-1">
                        <p><strong>License #:</strong> SPCB-629471 (Structural Pest)</p>
                        <p><strong>EPA Registration #:</strong> 8261-2947-CA</p>
                    </div>
                </div>

                <!-- Services Links -->
                <div class="space-y-4">
                    <h4 class="font-bold text-white text-sm uppercase tracking-wider">Treatments</h4>
                    <ul class="space-y-2.5 text-xs">
                        <li><a href="bed-bug-chemical-treatment.html" class="hover:text-white transition-colors">Chemical Bed Bug Treatment</a></li>
                        <li><a href="bed-bug-heat-treatment.html" class="hover:text-white transition-colors">Thermal Heat Treatment</a></li>
                        <li><a href="residential-bed-bug-control.html" class="hover:text-white transition-colors">Residential Control Protocols</a></li>
                        <li><a href="commercial-bed-bug-control.html" class="hover:text-white transition-colors">Commercial Service Agreements</a></li>
                    </ul>
                </div>

                <!-- Navigation Links -->
                <div class="space-y-4">
                    <h4 class="font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
                    <ul class="space-y-2.5 text-xs">
                        <li><a href="index.html" class="hover:text-white transition-colors">Home</a></li>
                        <li><a href="about-us.html" class="hover:text-white transition-colors">About Our Agency</a></li>
                        <li><a href="contact-us.html" class="hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="privacy-policy.html" class="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="terms-conditions.html" class="hover:text-white transition-colors">Terms and Conditions</a></li>
                        <li><a href="disclaimer.html" class="hover:text-white transition-colors">Disclaimer</a></li>
                    </ul>
                </div>

                <!-- NAP Contact Info -->
                <div class="space-y-4">
                    <h4 class="font-bold text-white text-sm uppercase tracking-wider">Rowland Heights Location</h4>
                    <ul class="space-y-3 text-xs">
                        <li class="flex items-start gap-2.5">
                            <i class="fa-solid fa-location-dot text-brand-500 mt-0.5"></i>
                            <span>Rowland Heights, CA 91748</span>
                        </li>
                        <li class="flex items-center gap-2.5">
                            <i class="fa-solid fa-phone text-brand-500"></i>
                            <a href="tel:6265550198" class="hover:text-white transition-colors font-semibold">(626) 555-0198</a>
                        </li>
                        <li class="flex items-center gap-2.5">
                            <i class="fa-solid fa-clock text-brand-500"></i>
                            <span>Dispatcher Desk: Standard Hours</span>
                        </li>
                    </ul>
                </div>

            </div>

            <!-- Footer Bottom -->
            <div class="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-center">
                <p>&copy; <span id="current-year"></span> Rowland Heights Bed Bug Killers. All rights reserved. This is a local service directory website.</p>
            </div>
        </div>
    </footer>`;

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<!-- 10\. FOOTER -->[\s\S]*?<\/footer>/, globalFooter);
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
});
