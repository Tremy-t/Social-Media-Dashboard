
// Menu items data
const menuData = {
  coffee: [
    {
      name: "Espresso",
      price: 3.50,
      description: "Single shot of our signature espresso blend"
    },
    {
      name: "Americano",
      price: 4.00,
      description: "Espresso with hot water"
    },
    {
      name: "Cappuccino",
      price: 4.50,
      description: "Espresso with steamed milk and foam"
    },
    {
      name: "Latte",
      price: 4.75,
      description: "Espresso with a larger amount of steamed milk and light foam"
    },
    {
      name: "Mocha",
      price: 5.25,
      description: "Espresso with chocolate, steamed milk, and whipped cream"
    },
    {
      name: "Cold Brew",
      price: 5.00,
      description: "Slowly steeped for 18 hours for a smooth, rich flavor"
    }
  ],
  tea: [
    {
      name: "Green Tea",
      price: 3.75,
      description: "Delicate and refreshing Japanese green tea"
    },
    {
      name: "English Breakfast",
      price: 3.75,
      description: "Full-bodied black tea blend"
    },
    {
      name: "Chai Latte",
      price: 4.75,
      description: "Spiced black tea with steamed milk"
    },
    {
      name: "Herbal Infusion",
      price: 4.00,
      description: "Caffeine-free blend of herbs and flowers"
    },
    {
      name: "Iced Tea",
      price: 4.25,
      description: "House-brewed black tea over ice with optional lemon"
    }
  ],
  pastries: [
    {
      name: "Croissant",
      price: 3.50,
      description: "Flaky, buttery classic French pastry"
    },
    {
      name: "Blueberry Muffin",
      price: 3.75,
      description: "Made with fresh blueberries and a streusel topping"
    },
    {
      name: "Cinnamon Roll",
      price: 4.25,
      description: "Warm, gooey cinnamon roll with cream cheese frosting"
    },
    {
      name: "Chocolate Chip Cookie",
      price: 2.75,
      description: "Baked fresh daily with premium chocolate chunks"
    },
    {
      name: "Almond Croissant",
      price: 4.00,
      description: "Flaky croissant filled with almond cream"
    }
  ],
  breakfast: [
    {
      name: "Avocado Toast",
      price: 8.50,
      description: "Whole grain toast with smashed avocado, microgreens and chili flakes"
    },
    {
      name: "Breakfast Sandwich",
      price: 7.75,
      description: "Egg, cheese, and choice of bacon or avocado on a house-baked bun"
    },
    {
      name: "Greek Yogurt Parfait",
      price: 6.25,
      description: "Layered with granola, honey, and seasonal berries"
    },
    {
      name: "Breakfast Burrito",
      price: 9.00,
      description: "Scrambled eggs, black beans, cheese, and pico de gallo in a flour tortilla"
    },
    {
      name: "Oatmeal Bowl",
      price: 6.00,
      description: "Steel-cut oats with your choice of toppings"
    }
  ]
};

// DOM Elements
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');
const menuCategories = document.querySelectorAll('.category');
const menuItemsContainer = document.getElementById('menu-items');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  mobileToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    
    // Transform hamburger into X
    this.classList.toggle('active');
    const spans = this.querySelectorAll('span');
    if (this.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close mobile menu when clicking a nav link
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      if (mobileToggle.classList.contains('active')) {
        mobileToggle.click();
      }
    });
  });

  // Initialize menu with coffee items by default
  loadMenuItems('coffee');

  // Menu category selection
  menuCategories.forEach(category => {
    category.addEventListener('click', function() {
      // Remove active class from all categories
      menuCategories.forEach(cat => cat.classList.remove('active'));
      
      // Add active class to clicked category
      this.classList.add('active');
      
      // Load menu items for selected category
      const categoryName = this.getAttribute('data-category');
      loadMenuItems(categoryName);
    });
  });

  // Form submissions
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const formValues = Object.fromEntries(formData.entries());
      
      // Simulate form submission
      console.log('Contact form submitted:', formValues);
      alert('Thanks for your message! We\'ll get back to you soon.');
      this.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      
      // Simulate newsletter subscription
      console.log('Newsletter subscription:', email);
      alert('Thanks for subscribing to our newsletter!');
      this.reset();
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(249, 243, 238, 0.98)';
      header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(249, 243, 238, 0.95)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
  });
});

// Function to load menu items
function loadMenuItems(category) {
  // Clear current menu items
  menuItemsContainer.innerHTML = '';
  
  // Check if category exists in our data
  if (!menuData[category]) return;
  
  // Create and append menu items
  menuData[category].forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    
    menuItem.innerHTML = `
      <div class="menu-item-content">
        <div class="menu-item-header">
          <h3>${item.name}</h3>
          <span class="menu-item-price">$${item.price.toFixed(2)}</span>
        </div>
        <p class="menu-item-description">${item.description}</p>
      </div>
    `;
    
    menuItemsContainer.appendChild(menuItem);
  });
}
