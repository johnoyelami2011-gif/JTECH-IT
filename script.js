 // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Slide-in animation on scroll
        const slideInElements = document.querySelectorAll('.slide-in');
        
        const checkSlide = () => {
            slideInElements.forEach(element => {
                // Get the position of the element relative to the viewport
                const slideInAt = window.scrollY + window.innerHeight - element.offsetHeight / 3;
                const elementBottom = element.offsetTop + element.offsetHeight;
                const isHalfShown = slideInAt > element.offsetTop;
                const isNotScrolledPast = window.scrollY < elementBottom;
                
                if (isHalfShown && isNotScrolledPast) {
                    element.classList.add('active');
                }
            });
        };
        
        // Initial check
        checkSlide();
        
        // Check on scroll
        window.addEventListener('scroll', checkSlide);
        
        // Header scroll effect
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.padding = '15px 0';
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
            } else {
                header.style.padding = '20px 0';
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        }
        
        // Course enrollment simulation
        document.querySelectorAll('.course-footer .btn').forEach(button => {
            button.addEventListener('click', function(e) {
                // In a real implementation, this would navigate to the course page
                // For this demo, we'll just show an alert
                if (!this.href || this.href === '#') {
                    e.preventDefault();
                    const courseName = this.closest('.course-card').querySelector('h3').textContent;
                    alert(`You're being redirected to the ${courseName} details page. In a real implementation, this would navigate to a separate course page.`);
                    
                    // Simulate page navigation for demo purposes
                    // In a real site, this would be an actual page navigation
                    const coursePages = document.getElementById('coursePages');
                    coursePages.style.display = 'block';
                    document.querySelector('main').style.display = 'none';
                    
                    // Show back button
                    const backBtn = document.createElement('button');
                    backBtn.className = 'btn';
                    backBtn.textContent = 'Back to Main Site';
                    backBtn.style.position = 'fixed';
                    backBtn.style.top = '20px';
                    backBtn.style.right = '20px';
                    backBtn.style.zIndex = '10000';
                    backBtn.addEventListener('click', () => {
                        coursePages.style.display = 'none';
                        document.querySelector('main').style.display = 'block';
                        backBtn.remove();
                    });
                    document.body.appendChild(backBtn);
                }
            });
        });