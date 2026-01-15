# Pressure Kings Website

Professional pressure washing services website for Pressure Kings.

## Website Overview

This is a static website built with HTML, CSS (Bootstrap 5), and vanilla JavaScript. It showcases Pressure Kings' pressure washing services and provides a contact form for customer inquiries.

## Structure

- `index.html` - Main website page
- `css/website.css` - Custom styles
- `js/main.js` - JavaScript functionality
- `images/` - Logo and service images
- `CNAME` - Custom domain configuration

## Recent Improvements

### SEO Enhancements
- Added Schema.org structured data (LocalBusiness markup)
- Added Twitter Card meta tags for better social media sharing
- Fixed malformed Open Graph meta tags
- Added preconnect and DNS prefetch hints for external resources

### Accessibility Improvements
- Added ARIA labels to navigation and form elements
- Improved semantic HTML structure (proper heading hierarchy)
- Enhanced alt text descriptions for images
- Added proper form accessibility attributes (aria-required)
- Used `<main>` tag for main content area
- Replaced `<b>` tags with semantic `<strong>` tags
- Added `rel="noopener noreferrer"` to external links

### Performance Optimizations
- Implemented lazy loading for service images
- Added width and height attributes to images to prevent layout shift
- Added preconnect hints for CDN resources
- Moved inline JavaScript to external file

### Code Quality
- Extracted inline JavaScript to `js/main.js`
- Replaced `<br>` tags with CSS classes for spacing
- Removed inline styles, replaced with CSS classes
- Increased container max-width from 900px to 1200px for better layout
- Added smooth scroll behavior in CSS

## Local Development

To run the website locally:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Browser Support

The website is compatible with all modern browsers that support:
- ES6 JavaScript
- CSS Grid and Flexbox
- HTML5 semantic elements
- Bootstrap 5

## Contact

- Phone: 937-533-5991
- Email: 937pressure.kings@gmail.com
- Instagram: @pressurekings937
- Website: https://pressurekings.org
