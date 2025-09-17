<script>
      
      const tabsContainer = document.querySelector('.tabs-container');
  if (tabsContainer) {
    tabsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('tab-button')) {
        // Remove active class from all buttons and content
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and its content
        event.target.classList.add('active');
        const targetTab = event.target.dataset.tab;
        document.getElementById(targetTab).classList.add('active');
      }
    });
  }
    function animateProgressBar(barId, labelId, targetValue) {
      const bar = document.getElementById(barId);
      const label = document.getElementById(labelId);
      bar.style.width = `${targetValue}%`;
      let currentValue = 0;
      const step = targetValue / 200;
      const interval = setInterval(() => {
        if (currentValue >= targetValue) {
          clearInterval(interval);
          currentValue = targetValue;
        }
        label.textContent = `${Math.round(currentValue)}%`;
        currentValue += step;
      }, 10);
    }
    
    // Animate cards on scroll with a more reliable event listener
    const cards = document.querySelectorAll('.animate-card');
    
    const animateCards = () => {
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Trigger animation when card is in view
        if (cardTop < windowHeight - 50 && cardBottom > 0) {
          card.classList.add('visible');
        }
      });
    };
    
    document.addEventListener('DOMContentLoaded', () => {
      // Animate progress bars
      animateProgressBar('trackingBar', 'trackingValue', 90);
      animateProgressBar('problemSolvingBar', 'problemSolvingValue', 95);
      animateProgressBar('emailMarketingBar', 'emailMarketingValue', 83);
      animateProgressBar('webDesignBar', 'webDesignValue', 85);
      animateProgressBar('contentCreationBar', 'contentCreationValue', 90);
      animateProgressBar('smmBar', 'smmValue', 75);
      animateProgressBar('adsBar', 'adsValue', 80);
      animateProgressBar('semBar', 'semValue', 78);

      // Animate cards on initial page load
      animateCards();
    });

    // Listen for scroll events to trigger card animations
    window.addEventListener('scroll', () => {
      animateCards();
      
      // Popup logic
      if (sessionStorage.getItem('popupShownThisSession') !== 'true') {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollDepth = scrollTop / docHeight;
        if (scrollDepth > 0.5) {
showPopupAndSetSession();
        }
      }
    });
    
    const popup = document.getElementById('popup');
    const leadForm = document.getElementById('leadForm');
    const message = document.getElementById('message');
    
    function showPopupAndSetSession() {
      popup.classList.add('visible');
      sessionStorage.setItem('popupShownThisSession', 'true');
    }
    
    function hidePopupAndSetSession() {
      popup.classList.remove('visible');
      sessionStorage.setItem('popupShownThisSession', 'true');
    }
    
    leadForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      
      message.textContent = '';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        message.textContent = 'Please enter a valid email address.';
        message.className = 'error';
        return;
      }
      
      try {
        const response = await fetch('/.netlify/functions/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email })
        });
        
        if (response.ok) {
          message.textContent = '🎉 Subscribed successfully!';
          message.className = 'success';
          leadForm.reset();
          hidePopupAndSetSession();
        } else {
          message.textContent = '❌ Error: something went wrong.';
          message.className = 'error';
        }
      } catch (error) {
        message.textContent = '⚠️ Network error: ' + error.message;
        message.className = 'error';
        console.error('Network error:', error);
      }
    });
  </script>
  <script>
  // Automated post list
  const posts = [
    { title: "My First Blog Post", slug: "first-post", excerpt: "A short description for SEO.", categories: ["SEO", "Technical Marketing"], image: "path/to/image.jpg" },
    // Add more posts as needed
  ];

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('main-nav');
    const blogMenu = document.getElementById('blog-menu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-sidebar');

    // Toggle main nav on hamburger click
    if (hamburger && nav) {
      hamburger.addEventListener('click', function() {
        nav.classList.toggle('open');
      });
    }

    // Toggle sidebar on Blog click

  if (blogMenu && sidebar) {
      blogMenu.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
      });
    }

    // Close sidebar
    if (overlay) {
      overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      });
    }

    // Generate post links in sidebar
    const postList = document.getElementById('post-list');
    if (postList) {
      posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
          <a href="/Blog/${post.slug}.html">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <small>Categories: ${post.categories.join(', ')}</small>
          </a>
        `;
        postList.appendChild(li);
      });
    }
  });
  </script>
  