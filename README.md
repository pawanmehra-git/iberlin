# iBerlin - Premium Asian Noodles & Wrappers Website

A modern, mobile-friendly website for iBerlin, showcasing premium Asian noodles and wrappers with customer review and contact functionality.

## Features

### 🏠 Homepage
- Modern, responsive design
- Hero section with compelling messaging
- Smooth scrolling navigation
- Mobile-first approach

### 🛍️ Products
- Comprehensive product catalog
- Detailed product information
- High-quality product images
- Product categories (Noodles & Wrappers)
- Interactive product modals
- Search and filter functionality

### ⭐ Reviews System
- Customer review display
- Star rating system
- Review submission form
- Product-specific reviews
- Real-time review updates

### 📞 Contact & Client Information
- Contact form with validation
- Client information capture
- Multiple contact methods
- Responsive contact layout

### 📱 Mobile-Friendly Features
- Responsive design for all screen sizes
- Touch-friendly navigation
- Optimized images and loading
- Mobile menu with hamburger toggle
- Swipe gestures support

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins)

## Project Structure

```
iberlin-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── .gitignore          # Git ignore file
└── README.md           # Project documentation
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iberlin-website
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

3. **Access the website**
   - Open your browser and go to `http://localhost:8000`

## Features Overview

### Product Catalog
- **Premium Ramen Noodles** - Authentic Japanese-style noodles
- **Spring Roll Wrappers** - Delicate rice flour wrappers
- **Dumpling Wrappers** - Perfect for potstickers and gyoza
- **Rice Noodles** - Gluten-free traditional noodles
- **Udon Noodles** - Thick and chewy Japanese noodles
- **Wonton Wrappers** - Square wrappers for Chinese dumplings

### Review System
- Customers can rate products (1-5 stars)
- Write detailed reviews
- Select specific products for review
- View all customer reviews
- Real-time form validation

### Contact Features
- Contact form with validation
- Multiple contact methods (email, phone, address)
- Client information capture
- Responsive design

## Mobile Responsiveness

The website is fully responsive and optimized for:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktop computers (1024px and up)
- Large screens (1200px and up)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Lazy loading for images
- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading times
- Smooth animations and transitions

## Customization

### Adding New Products
Edit the `sampleProducts` array in `script.js`:

```javascript
const sampleProducts = [
    {
        id: 7,
        name: "New Product Name",
        description: "Product description",
        price: "₹299",
        image: "path/to/image.jpg",
        features: ["Feature 1", "Feature 2"],
        category: "Noodles", // or "Wrappers"
        inStock: true
    }
];
```

### Modifying Styles
Edit `styles.css` to customize:
- Colors and themes
- Typography
- Layout and spacing
- Animations and transitions

### Adding New Features
Extend `script.js` to add:
- New functionality
- Additional forms
- Enhanced interactions
- API integrations

## Deployment

### Static Hosting
The website can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

### Steps for Deployment
1. Upload all files to your hosting service
2. Ensure `index.html` is in the root directory
3. Configure your domain (if needed)
4. Test all functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please contact:
- Email: info@iberlin.in
- Phone: +91 98765 43210

## Future Enhancements

- [ ] E-commerce functionality
- [ ] User authentication
- [ ] Shopping cart
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Database integration
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] PWA capabilities

---

**iBerlin** - Premium Asian Noodles & Wrappers for authentic culinary experiences.
