// Global variables
let products = [];
let reviews = [];

// Sample products data
const sampleProducts = [
    {
        id: 1,
        name: "Premium Ramen Noodles",
        description: "Authentic Japanese-style ramen noodles made with premium wheat flour and traditional techniques. Perfect for creating restaurant-quality ramen at home.",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        features: ["Made with premium wheat flour", "No artificial preservatives", "Quick cooking time", "Authentic texture"],
        category: "Noodles",
        inStock: true
    },
    {
        id: 2,
        name: "Spring Roll Wrappers",
        description: "Delicate and thin spring roll wrappers perfect for making crispy spring rolls. Made with rice flour for authentic Asian taste.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        features: ["Rice flour based", "Thin and delicate", "Easy to work with", "Crispy when fried"],
        category: "Wrappers",
        inStock: true
    },
    {
        id: 3,
        name: "Dumpling Wrappers",
        description: "Soft and pliable dumpling wrappers ideal for making potstickers, gyoza, and other Asian dumplings. Perfect thickness for easy folding.",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        features: ["Perfect thickness", "Easy to fold", "Soft texture", "Freezer friendly"],
        category: "Wrappers",
        inStock: true
    },
    {
        id: 4,
        name: "Rice Noodles",
        description: "Traditional rice noodles made from 100% rice flour. Gluten-free and perfect for stir-fries, soups, and salads.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        features: ["100% rice flour", "Gluten-free", "Quick cooking", "Versatile usage"],
        category: "Noodles",
        inStock: true
    },
    {
        id: 5,
        name: "Udon Noodles",
        description: "Thick and chewy udon noodles perfect for Japanese hot pots and stir-fries. Made with traditional methods for authentic texture.",
        price: "₹329",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        features: ["Thick and chewy", "Traditional method", "Perfect for hot pots", "Authentic texture"],
        category: "Noodles",
        inStock: true
    },
    {
        id: 6,
        name: "Wonton Wrappers",
        description: "Square wonton wrappers perfect for making wontons and other Chinese dumplings. Thin and delicate for perfect wrapping.",
        price: "₹219",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        features: ["Square shape", "Thin and delicate", "Perfect for wontons", "Easy to seal"],
        category: "Wrappers",
        inStock: true
    }
];

// Sample reviews data
const sampleReviews = [
    {
        id: 1,
        name: "Priya Sharma",
        email: "priya@example.com",
        product: "Premium Ramen Noodles",
        rating: 5,
        review: "Absolutely amazing! The texture is perfect and the taste is authentic. My family loves it!",
        date: "2024-01-15"
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        email: "rajesh@example.com",
        product: "Spring Roll Wrappers",
        rating: 4,
        review: "Great quality wrappers. Easy to work with and they turn out crispy every time.",
        date: "2024-01-10"
    },
    {
        id: 3,
        name: "Anita Patel",
        email: "anita@example.com",
        product: "Dumpling Wrappers",
        rating: 5,
        review: "Perfect thickness and texture. Made the best dumplings I've ever had at home!",
        date: "2024-01-08"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    setupNavigation();
    loadProducts();
    loadReviews();
    setupForms();
    setupModal();
}

// Navigation setup
function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load products
function loadProducts() {
    products = [...sampleProducts];
    displayProducts();
    populateProductSelect();
}

// Display products
function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<p class="text-center">No products available at the moment.</p>';
        return;
    }

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <ul class="product-features">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="product-category">Category: ${product.category}</div>
            </div>
        </div>
    `).join('');
}

// Populate product select for reviews
function populateProductSelect() {
    const productSelect = document.getElementById('product-review');
    productSelect.innerHTML = '<option value="">Select a product</option>' +
        products.map(product => `<option value="${product.name}">${product.name}</option>`).join('');
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <div class="product-detail-price">${product.price}</div>
                <p class="product-detail-description">${product.description}</p>
                <div class="product-detail-features">
                    <h3>Features:</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-detail-category">
                    <strong>Category:</strong> ${product.category}
                </div>
                <div class="product-detail-stock">
                    <strong>Availability:</strong> ${product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup modal
function setupModal() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeProductModal);
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProductModal();
        }
    });
}

// Load reviews
function loadReviews() {
    reviews = [...sampleReviews];
    displayReviews();
}

// Display reviews
function displayReviews() {
    const reviewsDisplay = document.getElementById('reviews-display');
    
    if (reviews.length === 0) {
        reviewsDisplay.innerHTML = '<p class="text-center">No reviews yet. Be the first to review!</p>';
        return;
    }

    reviewsDisplay.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="reviewer-name">${review.name}</div>
                <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            </div>
            <div class="review-product">${review.product}</div>
            <div class="review-text">${review.review}</div>
            <div class="review-date">${new Date(review.date).toLocaleDateString()}</div>
        </div>
    `).join('');
}

// Setup forms
function setupForms() {
    setupReviewForm();
    setupContactForm();
}

// Setup review form
function setupReviewForm() {
    const reviewForm = document.getElementById('review-form');
    
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const reviewData = {
            id: Date.now(),
            name: formData.get('name'),
            email: formData.get('email'),
            product: formData.get('product'),
            rating: parseInt(formData.get('rating')),
            review: formData.get('review'),
            date: new Date().toISOString().split('T')[0]
        };
        
        // Validate form
        if (!reviewData.name || !reviewData.email || !reviewData.rating || !reviewData.review) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Add review
        reviews.unshift(reviewData);
        displayReviews();
        
        // Reset form
        this.reset();
        
        // Show success message
        showMessage('Thank you for your review!', 'success');
        
        // Scroll to reviews
        document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
    });
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };
        
        // Validate form
        if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Simulate form submission
        showMessage('Thank you for your message! We will get back to you soon.', 'success');
        
        // Reset form
        this.reset();
        
        // In a real application, you would send this data to a server
        console.log('Contact form data:', contactData);
    });
}

// Show message
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert message at the top of the form
    const form = document.querySelector(`#${type === 'success' ? 'review' : 'contact'}-form`);
    form.parentNode.insertBefore(messageDiv, form);
    
    // Auto remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Search functionality
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    displayFilteredProducts(filteredProducts);
}

// Display filtered products
function displayFilteredProducts(filteredProducts) {
    const productsGrid = document.getElementById('products-grid');
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="text-center">No products found matching your search.</p>';
        return;
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <ul class="product-features">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="product-category">Category: ${product.category}</div>
            </div>
        </div>
    `).join('');
}

// Filter products by category
function filterProductsByCategory(category) {
    if (category === 'all') {
        displayProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
    );
    
    displayFilteredProducts(filteredProducts);
}

// Add to cart functionality (placeholder)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showMessage(`${product.name} added to cart!`, 'success');
        // In a real application, you would update the cart state
    }
}

// Wishlist functionality (placeholder)
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showMessage(`${product.name} added to wishlist!`, 'success');
        // In a real application, you would update the wishlist state
    }
}

// Newsletter subscription (placeholder)
function subscribeNewsletter(email) {
    if (email) {
        showMessage('Thank you for subscribing to our newsletter!', 'success');
        // In a real application, you would send this to a server
    }
}

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
setupLazyLoading();

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (scrollToTopBtn) {
        if (scrollTop > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
});

// Add scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
`;

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.body.appendChild(scrollToTopBtn);

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.background = '#c0392b';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.background = '#e74c3c';
});

// Add loading states for better UX
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element, content) {
    element.innerHTML = content;
}

// Add error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('product-modal');
        if (modal.style.display === 'block') {
            closeProductModal();
        }
    }
});

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left
            console.log('Swipe left detected');
        } else {
            // Swipe right
            console.log('Swipe right detected');
        }
    }
}

// Add performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});

// Add service worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
