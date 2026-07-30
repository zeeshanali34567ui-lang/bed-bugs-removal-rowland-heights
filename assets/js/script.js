const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Replace colors
content = content.replace(/bg-brand-50\b/g, 'bg-slate-50'); // Keep light backgrounds slate
content = content.replace(/bg-brand-100\b/g, 'bg-slate-100');
content = content.replace(/bg-brand-500\b/g, 'bg-orange');
content = content.replace(/bg-brand-600\b/g, 'bg-orange');
content = content.replace(/bg-brand-700\b/g, 'bg-orange-dark');
content = content.replace(/bg-brand-800\b/g, 'bg-navy-light');
content = content.replace(/bg-brand-900\b/g, 'bg-navy');
content = content.replace(/bg-brand-950\b/g, 'bg-navy-dark');

content = content.replace(/text-brand-500\b/g, 'text-orange');
content = content.replace(/text-brand-600\b/g, 'text-orange');
content = content.replace(/text-brand-700\b/g, 'text-orange-dark');
content = content.replace(/text-brand-900\b/g, 'text-navy-dark');

content = content.replace(/border-brand-500\b/g, 'border-orange');
content = content.replace(/border-brand-600\b/g, 'border-orange');
content = content.replace(/border-brand-700\b/g, 'border-orange-dark');
content = content.replace(/border-brand-900\b/g, 'border-navy');

content = content.replace(/ring-brand-500\b/g, 'ring-orange');

// Replace rounded corners
content = content.replace(/rounded-full/g, 'rounded-none');
content = content.replace(/rounded-3xl/g, 'rounded-none');
content = content.replace(/rounded-2xl/g, 'rounded-none');
content = content.replace(/rounded-xl/g, 'rounded-none');
content = content.replace(/rounded-lg/g, 'rounded-none');
content = content.replace(/rounded-md/g, 'rounded-none');
content = content.replace(/rounded-sm/g, 'rounded-none');
content = content.replace(/rounded-\[.*?\]/g, 'rounded-none');

// Fonts
content = content.replace(/font-display/g, 'font-heading');
content = content.replace(/font-sans/g, 'font-body');

// Links
content = content.replace(/href=\"index\.html\"/g, 'href=\"/\"');
content = content.replace(/href=\"([a-zA-Z0-9-]+)\.html\"/g, 'href=\"/$1\"');

fs.writeFileSync('index.html', content);
console.log('Bulk replacements done');
