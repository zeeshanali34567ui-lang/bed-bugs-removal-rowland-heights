const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const configRegex = /[ \t]*<!-- Tailwind CSS & Fonts -->[\s\S]*?<link rel="stylesheet" href="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\/6\.4\.0\/css\/all\.min\.css">/;
const match = indexHtml.match(configRegex);

if (!match) {
    console.error("Could not find config in index.html");
    process.exit(1);
}

const configContent = match[0];
console.log("Found config length:", configContent.length);

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (configRegex.test(content)) {
        content = content.replace(configRegex, configContent);
        fs.writeFileSync(file, content, 'utf8');
        console.log("Updated config in " + file);
    } else {
        console.log("Skipped " + file + " - no config found");
    }
}
