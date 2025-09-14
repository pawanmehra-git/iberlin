# Deployment Guide for iBerlin Website

## Quick Start

1. **Open the website locally:**
   - Simply double-click on `index.html` to open in your browser
   - Or use a local server for better performance

2. **Using a local server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

3. **Access the website:**
   - Open your browser and go to `http://localhost:8000`

## Production Deployment

### Option 1: GitHub Pages (Free)

1. **Create a GitHub repository:**
   ```bash
   git remote add origin https://github.com/yourusername/iberlin-website.git
   git push -u origin master
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "master" branch
   - Click "Save"

3. **Access your website:**
   - Your site will be available at `https://yourusername.github.io/iberlin-website`

### Option 2: Netlify (Free)

1. **Drag and drop deployment:**
   - Go to [netlify.com](https://netlify.com)
   - Drag your project folder to the deploy area
   - Your site will be live instantly

2. **Git-based deployment:**
   - Connect your GitHub repository
   - Netlify will automatically deploy on every push

### Option 3: Vercel (Free)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts and your site will be live**

### Option 4: Firebase Hosting (Free)

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```

3. **Deploy:**
   ```bash
   firebase deploy
   ```

## Custom Domain Setup

### For GitHub Pages:
1. Add a `CNAME` file with your domain name
2. Configure DNS records with your domain provider
3. Enable HTTPS in repository settings

### For Netlify/Vercel:
1. Add your domain in the dashboard
2. Configure DNS records
3. SSL certificate will be automatically provisioned

## Performance Optimization

### Before Deployment:
1. **Optimize images:**
   - Use tools like TinyPNG or ImageOptim
   - Consider using WebP format for better compression

2. **Minify files:**
   ```bash
   # Install minification tools
   npm install -g html-minifier cssnano-cli uglify-js
   
   # Minify files
   html-minifier --remove-comments --collapse-whitespace index.html -o index.min.html
   cssnano styles.css styles.min.css
   uglifyjs script.js -o script.min.js
   ```

3. **Enable compression:**
   - Most hosting platforms enable gzip compression automatically
   - For custom servers, configure gzip in your web server

## Monitoring and Analytics

### Google Analytics:
1. Create a Google Analytics account
2. Add the tracking code to `index.html` before closing `</head>` tag:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Performance Monitoring:
- Use Google PageSpeed Insights
- Monitor with tools like GTmetrix or WebPageTest
- Set up uptime monitoring with services like UptimeRobot

## Security Considerations

1. **HTTPS:**
   - Always use HTTPS in production
   - Most hosting platforms provide free SSL certificates

2. **Content Security Policy:**
   - Add CSP headers to prevent XSS attacks
   - Example CSP header:
     ```
     Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;
     ```

3. **Form Security:**
   - Implement server-side validation
   - Use CSRF tokens for forms
   - Rate limiting for form submissions

## Backup Strategy

1. **Version Control:**
   - Keep all code in Git
   - Regular commits and pushes
   - Tag releases for important updates

2. **Content Backup:**
   - Export customer reviews and contact form submissions
   - Regular database backups if using a backend

3. **File Backup:**
   - Regular backups of all website files
   - Store backups in multiple locations

## Troubleshooting

### Common Issues:

1. **Images not loading:**
   - Check image URLs and paths
   - Ensure images are accessible
   - Check CORS settings if loading from external sources

2. **CSS/JS not loading:**
   - Check file paths and names
   - Clear browser cache
   - Check for syntax errors

3. **Mobile issues:**
   - Test on actual devices
   - Use browser developer tools
   - Check viewport meta tag

4. **Performance issues:**
   - Optimize images
   - Minify CSS/JS
   - Enable compression
   - Use a CDN

### Support:
- Check browser console for errors
- Use online validators for HTML/CSS
- Test on multiple browsers and devices
- Monitor server logs for issues

## Maintenance

### Regular Tasks:
1. **Update dependencies:**
   - Check for updates to external libraries
   - Update CDN links if needed

2. **Content updates:**
   - Add new products
   - Update contact information
   - Refresh images and content

3. **Security updates:**
   - Keep hosting platform updated
   - Monitor for security vulnerabilities
   - Update SSL certificates

4. **Performance monitoring:**
   - Regular performance audits
   - Monitor loading times
   - Check mobile performance

---

**Need help?** Contact us at info@iberlin.in or check the README.md for more information.
