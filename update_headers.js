const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const headerRegex = /[ \t]*<!-- 1\. TOP NAVBAR -->[\s\S]*?<\/header>/;
const match = indexHtml.match(headerRegex);

if (!match) {
    console.error("Could not find header in index.html");
    process.exit(1);
}

const headerContent = match[0];
console.log("Found header length:", headerContent.length);

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (headerRegex.test(content)) {
        content = content.replace(headerRegex, headerContent);
        fs.writeFileSync(file, content, 'utf8');
        console.log("Updated header in " + file);
    } else {
        console.log("Skipped " + file + " - no header found");
    }
}
