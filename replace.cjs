const fs = require('fs');
const files = [
  'src/pages/Services.jsx',
  'src/pages/Products.jsx',
  'src/data/services.js',
  'src/components/Footer.jsx',
  'src/data/products.js',
  'src/data/caseStudies.js'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/CCTV & Security Systems/g, 'Security Systems');
  content = content.replace(/CCTV & Security/g, 'Security Systems');
  content = content.replace(/CCTV & Surveillance/g, 'Security Systems');
  content = content.replace(/CCTV Surveillance/g, 'Security Systems');
  content = content.replace(/CCTV cameras/gi, 'security systems');
  content = content.replace(/CCTV/g, 'Security Systems');
  fs.writeFileSync(f, content);
});
console.log('Done');
