const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const regex = /\s*<!-- Left Side -->\s*<div class="flex items-start sm:items-center gap-2 text-\[10px\] sm:text-xs font-bold text-slate-400 tracking-wider max-w-full">\s*<span class="relative flex h-1\.5 w-1\.5 shrink-0 mt-1 sm:mt-0">\s*<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"><\/span>\s*<span class="relative inline-flex rounded-full h-1\.5 w-1\.5 bg-brand-500"><\/span>\s*<\/span>\s*<span class="uppercase text-left leading-tight">Active Extermination Dispatch <br class="sm:hidden"> Rowland Heights, CA 91748<\/span>\s*<\/div>/g;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (regex.test(content)) {
        content = content.replace(regex, '');
        fs.writeFileSync(file, content);
        console.log('Removed from ' + file);
    }
});
