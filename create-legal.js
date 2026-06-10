const fs = require('fs');

const pages = [
  { file: 'privacy-policy.html', title: 'Privacy Policy' },
  { file: 'terms-conditions.html', title: 'Terms and Conditions' },
  { file: 'disclaimer.html', title: 'Disclaimer' }
];

let baseHTML = fs.readFileSync('about-us.html', 'utf8');

pages.forEach(p => {
    // Replace <title>
    let content = baseHTML.replace(/<title>.*?<\/title>/, `<title>${p.title} - Rowland Heights Bed Bug Killers</title>`);
    
    // Replace content
    let newMain = `
    <!-- Breadcrumb section -->
    <div class="bg-slate-100 py-3.5 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-semibold text-slate-500 flex items-center gap-2">
            <a href="index.html" class="hover:text-brand-600 transition-colors">Home</a>
            <i class="fa-solid fa-chevron-right text-[10px]"></i>
            <span class="text-slate-800">${p.title}</span>
        </div>
    </div>

    <!-- Page Content -->
    <section class="py-16 bg-white min-h-[50vh]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h1 class="font-display font-extrabold text-4xl text-slate-900 mb-8">${p.title}</h1>
            <div class="text-sm text-slate-650 space-y-4">
                <p>Welcome to our ${p.title} page. This document outlines important information regarding your use of our website and local pest control services in Rowland Heights, California.</p>
                <h2 class="font-bold text-lg text-slate-800 pt-4">1. General Information</h2>
                <p>The content provided on this website is for informational purposes only. We specialize in providing accurate details regarding bed bug extermination, thermal heat treatments, and chemical control options.</p>
                <h2 class="font-bold text-lg text-slate-800 pt-4">2. Local Services</h2>
                <p>We serve the Rowland Heights area and strictly adhere to local safety regulations. Any references to eradication timelines or guarantees are subject to a formal written agreement.</p>
                <h2 class="font-bold text-lg text-slate-800 pt-4">3. Contact Us</h2>
                <p>If you have any questions about these terms or our services, please call us directly at <strong>(626) 555-0198</strong>.</p>
            </div>
        </div>
    </section>
    `;

    // Regex to replace everything from Breadcrumb to right before FOOTER
    content = content.replace(/<!-- Breadcrumb section -->[\s\S]*?(?=<!-- 10\. FOOTER -->)/, newMain);

    fs.writeFileSync(p.file, content);
    console.log('Created ' + p.file);
});
