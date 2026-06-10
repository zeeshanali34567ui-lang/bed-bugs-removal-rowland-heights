const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove index.html reviews
    content = content.replace(/<!-- 8\. REVIEWS \/ TESTIMONIALS SECTION -->[\s\S]*?<\/section>\s*/, '');
    
    // Remove Specific Reviews
    content = content.replace(/<!-- Specific Reviews -->[\s\S]*?<\/section>\s*/, '');
    
    // Remove Specific Testimonials
    content = content.replace(/<!-- Specific Testimonials -->[\s\S]*?<\/section>\s*/, '');

    fs.writeFileSync(file, content);
});
console.log('Removed reviews from all HTML files.');
