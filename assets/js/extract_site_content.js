const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const directoryPath = __dirname;
let markdownContent = '# Website Content and SEO Implementation\n\n';

function processFile(filePath) {
    const fileName = path.basename(filePath);
    const html = fs.readFileSync(filePath, 'utf8');
    const $ = cheerio.load(html);

    markdownContent += `## File: ${fileName}\n\n`;

    // 1. SEO Implementation
    markdownContent += `### SEO Implementation\n\n`;
    
    const title = $('title').text().trim();
    markdownContent += `- **Title Tag:** \`${title}\`\n`;

    const metaDescription = $('meta[name="description"]').attr('content') || 'Not found';
    markdownContent += `- **Meta Description:** \`${metaDescription}\`\n`;

    const metaKeywords = $('meta[name="keywords"]').attr('content') || 'Not found';
    markdownContent += `- **Meta Keywords:** \`${metaKeywords}\`\n`;
    
    // Canonical tag
    const canonical = $('link[rel="canonical"]').attr('href') || 'Not found';
    markdownContent += `- **Canonical Link:** \`${canonical}\`\n\n`;

    // Open Graph Tags
    markdownContent += `#### Open Graph Tags\n`;
    const ogTitle = $('meta[property="og:title"]').attr('content') || 'Not found';
    const ogDescription = $('meta[property="og:description"]').attr('content') || 'Not found';
    const ogUrl = $('meta[property="og:url"]').attr('content') || 'Not found';
    markdownContent += `- **og:title:** \`${ogTitle}\`\n`;
    markdownContent += `- **og:description:** \`${ogDescription}\`\n`;
    markdownContent += `- **og:url:** \`${ogUrl}\`\n\n`;

    // Heading Structure
    markdownContent += `#### Heading Structure\n`;
    const h1s = $('h1').map((i, el) => $(el).text().replace(/\s+/g, ' ').trim()).get();
    markdownContent += `- **H1 Tags (${h1s.length}):**\n`;
    h1s.forEach(h1 => markdownContent += `  - \`${h1}\`\n`);
    
    const h2s = $('h2').map((i, el) => $(el).text().replace(/\s+/g, ' ').trim()).get();
    markdownContent += `- **H2 Tags (${h2s.length}):**\n`;
    h2s.forEach(h2 => markdownContent += `  - \`${h2}\`\n`);

    markdownContent += '\n';

    // 2. Feature Flow Sections
    markdownContent += `### Feature Flow Sections\n\n`;
    markdownContent += `The main structural sections of the page:\n\n`;
    
    // Check for standard semantic tags or sections with IDs
    const sections = $('section, header, footer, main');
    if (sections.length > 0) {
        sections.each((i, el) => {
            const tagName = el.tagName;
            const id = $(el).attr('id') ? ` id="${$(el).attr('id')}"` : '';
            const className = $(el).attr('class') ? ` class="${$(el).attr('class')}"` : '';
            markdownContent += `- \`<${tagName}${id}${className}>\`\n`;
        });
    } else {
        markdownContent += `- No standard structural sections (\`<section>\`, \`<header>\`, \`<footer>\`, \`<main>\`) found.\n`;
    }
    markdownContent += '\n';

    // 3. Extracted Text Content
    markdownContent += `### Extracted Text Content\n\n`;
    
    // Removing scripts, styles, and empty elements before extracting text
    $('script').remove();
    $('style').remove();
    $('noscript').remove();
    
    // Get text content with structure
    let textContent = '';
    $('body').find('h1, h2, h3, h4, h5, h6, p, li').each((i, el) => {
        let tagName = el.tagName.toLowerCase();
        let text = $(el).text().replace(/\s+/g, ' ').trim();
        if (text.length === 0) return;
        
        if (tagName === 'h1') textContent += `\n# [H1] ${text}\n`;
        else if (tagName === 'h2') textContent += `\n## [H2] ${text}\n`;
        else if (tagName === 'h3') textContent += `\n### [H3] ${text}\n`;
        else if (tagName === 'h4') textContent += `\n#### [H4] ${text}\n`;
        else if (tagName === 'h5') textContent += `\n##### [H5] ${text}\n`;
        else if (tagName === 'h6') textContent += `\n###### [H6] ${text}\n`;
        else if (tagName === 'p') textContent += `\n[Paragraph] ${text}\n`;
        else if (tagName === 'li') textContent += `\n- [List Item] ${text}\n`;
    });
    
    // If the content is too long, we might just want to summarize or output it wrapped
    markdownContent += `${textContent}\n\n`;
    
    markdownContent += `---\n\n`;
}

// Get all HTML files in the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    const htmlFiles = files.filter(file => file.endsWith('.html'));
    
    htmlFiles.forEach(file => {
        const filePath = path.join(directoryPath, file);
        processFile(filePath);
    });

    // Write to markdown file
    const outputFilePath = path.join(directoryPath, 'site-documentation.md');
    fs.writeFileSync(outputFilePath, markdownContent, 'utf8');
    console.log(`Documentation successfully written to ${outputFilePath}`);
});
