const fs = require('fs');
const files = [...fs.readdirSync('.').filter(f => f.endsWith('.html')), 'fix-header.js', 'fix-footer.js'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    content = content.replace(/24\/7 Active/g, 'Active');
    content = content.replace(/ communities 24\/7\./g, ' communities.');
    content = content.replace(/Fast 24\/7 Response/g, 'Fast Response');
    content = content.replace(/ emergency cases 24\/7\./g, ' emergency cases.');
    content = content.replace(/ available 24\/7\./g, ' available.');
    content = content.replace(/Call 24\/7:/g, 'Call:');
    content = content.replace(/24\/7 rapid response/g, 'rapid response');
    content = content.replace(/Available 24\/7/g, 'Available');
    content = content.replace(/24\/7 Night/g, 'Night');
    content = content.replace(/24\/7/g, ''); // Catch all
    
    // In case they meant the footer too:
    content = content.replace(/24 Hours \/ 7 Days/g, 'Standard Hours');

    fs.writeFileSync(file, content);
});
console.log('Removed 24/7 globally');
