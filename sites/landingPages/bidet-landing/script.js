// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
	// Smooth scrolling for anchor links
	const navLinks = document.querySelectorAll('a[href^="#"]')

	navLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault()

			const targetId = this.getAttribute('href')
			const targetSection = document.querySelector(targetId)

			if (targetSection) {
				const offsetTop = targetSection.offsetTop - 80 // Account for fixed navbar

				window.scrollTo({
					top: offsetTop,
					behavior: 'smooth',
				})
			}
		})
	})

	// Mobile navigation toggle
	const navToggle = document.querySelector('.nav-toggle')
	const navLinksContainer = document.querySelector('.nav-links')

	if (navToggle && navLinksContainer) {
		navToggle.addEventListener('click', function () {
			navLinksContainer.classList.toggle('active')
			navToggle.classList.toggle('active')
		})
	}

	// Navbar background change on scroll
	const navbar = document.querySelector('.navbar')

	window.addEventListener('scroll', function () {
		if (window.scrollY > 100) {
			navbar.style.background = 'rgba(255, 255, 255, 0.98)'
			navbar.style.boxShadow = '0 2px 20px rgba(30, 64, 175, 0.1)'
		} else {
			navbar.style.background = 'rgba(255, 255, 255, 0.95)'
			navbar.style.boxShadow = 'none'
		}
	})

	// Enhanced Intersection Observer for animations
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px',
	}

	const observer = new IntersectionObserver(function (entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1'
				entry.target.style.transform = 'translateY(0)'

				// Add staggered animation for child elements
				const children = entry.target.querySelectorAll('.animate-stagger')
				children.forEach((child, index) => {
					setTimeout(() => {
						child.style.opacity = '1'
						child.style.transform = 'translateY(0)'
					}, index * 100)
				})
			}
		})
	}, observerOptions)

	// Observe elements for animation
	const animateElements = document.querySelectorAll(
		'.product-card, .feature-card, .contact-item, .section-header'
	)

	animateElements.forEach(el => {
		el.style.opacity = '0'
		el.style.transform = 'translateY(30px)'
		el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
		observer.observe(el)
	})

	// Enhanced Product card hover effects
	const productCards = document.querySelectorAll('.product-card')

	productCards.forEach(card => {
		card.addEventListener('mouseenter', function () {
			this.style.transform = 'translateY(-15px) scale(1.02)'

			// Add floating particles effect
			createFloatingParticles(this)
		})

		card.addEventListener('mouseleave', function () {
			this.style.transform = 'translateY(0) scale(1)'
		})
	})

	// Floating particles effect
	function createFloatingParticles(element) {
		const particles = []
		const colors = ['#1e40af', '#3b82f6', '#60a5fa']

		for (let i = 0; i < 5; i++) {
			const particle = document.createElement('div')
			particle.style.position = 'absolute'
			particle.style.width = '4px'
			particle.style.height = '4px'
			particle.style.background =
				colors[Math.floor(Math.random() * colors.length)]
			particle.style.borderRadius = '50%'
			particle.style.pointerEvents = 'none'
			particle.style.zIndex = '1000'

			const rect = element.getBoundingClientRect()
			particle.style.left = rect.left + Math.random() * rect.width + 'px'
			particle.style.top = rect.top + Math.random() * rect.height + 'px'

			document.body.appendChild(particle)
			particles.push(particle)

			// Animate particle
			particle.animate(
				[
					{
						transform: 'translateY(0) scale(1)',
						opacity: 1,
					},
					{
						transform: `translateY(-${50 + Math.random() * 50}px) scale(0)`,
						opacity: 0,
					},
				],
				{
					duration: 1000 + Math.random() * 1000,
					easing: 'ease-out',
				}
			).onfinish = () => {
				particle.remove()
			}
		}
	}

	// WhatsApp button click tracking
	const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]')

	whatsappButtons.forEach(button => {
		button.addEventListener('click', function () {
			// Add click animation
			this.style.transform = 'scale(0.95)'
			setTimeout(() => {
				this.style.transform = 'scale(1)'
			}, 150)

			// You can add analytics tracking here
			console.log('WhatsApp button clicked:', this.href)
		})
	})

	// Enhanced Parallax effect for scroll animations
	window.addEventListener('scroll', function () {
		const scrolled = window.pageYOffset
		// Add any scroll-based animations here if needed
	})

	// Add loading animation with enhanced effects
	window.addEventListener('load', function () {
		document.body.style.opacity = '0'
		document.body.style.transition = 'opacity 0.8s ease'

		setTimeout(() => {
			document.body.style.opacity = '1'

			// Add entrance animation for hero elements
			const heroElements = document.querySelectorAll(
				'.hero-text h1, .hero-text p, .hero-buttons, .hero-image'
			)
			heroElements.forEach((el, index) => {
				el.style.animationDelay = `${index * 0.2}s`
			})
		}, 100)
	})

	// Enhanced Counter animation for prices
	function animateCounter(element, target, duration = 2000) {
		let start = 0
		const increment = target / (duration / 16)

		const timer = setInterval(() => {
			start += increment
			if (start >= target) {
				element.textContent = target.toLocaleString() + ' ₸'
				clearInterval(timer)
			} else {
				element.textContent = Math.floor(start).toLocaleString() + ' ₸'
			}
		}, 16)
	}

	// Optional: Animate price counters when they come into view
	const priceElements = document.querySelectorAll('.product-price')

	const priceObserver = new IntersectionObserver(
		function (entries) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const priceText = entry.target.textContent
					const price = parseInt(priceText.replace(/[^\d]/g, ''))

					if (price && !entry.target.classList.contains('animated')) {
						entry.target.classList.add('animated')
						// Uncomment the line below if you want price animation
						// animateCounter(entry.target, price);
					}
				}
			})
		},
		{ threshold: 0.5 }
	)

	priceElements.forEach(el => priceObserver.observe(el))

	// Enhanced ripple effect to buttons
	function createRipple(event) {
		const button = event.currentTarget
		const ripple = document.createElement('span')
		const rect = button.getBoundingClientRect()
		const size = Math.max(rect.width, rect.height)
		const x = event.clientX - rect.left - size / 2
		const y = event.clientY - rect.top - size / 2

		ripple.style.width = ripple.style.height = size + 'px'
		ripple.style.left = x + 'px'
		ripple.style.top = y + 'px'
		ripple.classList.add('ripple')

		button.appendChild(ripple)

		setTimeout(() => {
			ripple.remove()
		}, 600)
	}

	// Add ripple effect to all buttons
	const buttons = document.querySelectorAll('.btn')
	buttons.forEach(button => {
		button.addEventListener('click', createRipple)
	})

	// Add CSS for enhanced ripple effect
	const style = document.createElement('style')
	style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        /* Enhanced floating animation for cards */
        .floating-card {
            animation: enhancedFloat 8s ease-in-out infinite;
        }
        
        @keyframes enhancedFloat {
            0%, 100% {
                transform: translateY(0px) rotate(0deg) scale(1);
            }
            25% {
                transform: translateY(-20px) rotate(2deg) scale(1.02);
            }
            50% {
                transform: translateY(-30px) rotate(0deg) scale(1.05);
            }
            75% {
                transform: translateY(-20px) rotate(-2deg) scale(1.02);
            }
        }
        
        /* Glow effect for feature icons */
        .feature-icon {
            position: relative;
        }
        
        .feature-icon::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: inherit;
            border-radius: inherit;
            filter: blur(10px);
            opacity: 0.5;
            z-index: -1;
            animation: iconGlow 3s ease-in-out infinite alternate;
        }
        
        @keyframes iconGlow {
            0% { opacity: 0.3; transform: scale(1); }
            100% { opacity: 0.6; transform: scale(1.1); }
        }
        
        /* Scroll-triggered animations */
        .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Enhanced hover effects */
        .product-card:hover .product-image {
            transform: scale(1.05);
        }
        
        .feature-card:hover .feature-icon {
            animation: iconSpin 0.6s ease-in-out;
        }
        
        @keyframes iconSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1); }
        }
    `
	document.head.appendChild(style)

	// Add mobile menu styles
	const mobileStyle = document.createElement('style')
	mobileStyle.textContent = `
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 100%;
                left: 0;
                width: 100%;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                padding: 2rem;
                transform: translateY(-100%);
                opacity: 0;
                transition: all 0.3s ease;
                box-shadow: 0 10px 30px rgba(30, 64, 175, 0.1);
            }
            
            .nav-links.active {
                transform: translateY(0);
                opacity: 1;
            }
            
            .nav-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `
	document.head.appendChild(mobileStyle)

	// Add scroll-triggered animations
	const scrollObserver = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
				}
			})
		},
		{ threshold: 0.1 }
	)

	// Add fade-in-up class to elements
	const fadeElements = document.querySelectorAll(
		'.product-card, .feature-card, .contact-item'
	)
	fadeElements.forEach(el => {
		el.classList.add('fade-in-up')
		scrollObserver.observe(el)
	})

	// Add typing effect to hero title
	const heroTitle = document.querySelector('.hero-text h1')
	if (heroTitle) {
		const text = heroTitle.textContent
		heroTitle.textContent = ''
		heroTitle.style.borderRight = '2px solid white'

		let i = 0
		const typeWriter = () => {
			if (i < text.length) {
				heroTitle.textContent += text.charAt(i)
				i++
				setTimeout(typeWriter, 50)
			} else {
				heroTitle.style.borderRight = 'none'
			}
		}

		// Start typing effect after page load
		setTimeout(typeWriter, 1000)
	}

	// WhatsApp Modal Functionality
	const modal = document.getElementById('whatsappModal')
	const closeModal = document.getElementById('closeModal')
	const laterBtn = document.getElementById('laterBtn')
	let modalShown = false

	// Show modal after 5 seconds
	setTimeout(() => {
		if (!modalShown) {
			showModal()
		}
	}, 5000)

	// Show modal function
	function showModal() {
		modal.classList.add('active')
		modalShown = true
		document.body.style.overflow = 'hidden'

		// Add entrance animation for modal content
		const modalContent = modal.querySelector('.modal-content')
		modalContent.style.animation = 'modalContentSlideIn 0.6s ease-out 0.2s both'
	}

	// Hide modal function
	function hideModal() {
		modal.classList.remove('active')
		document.body.style.overflow = 'auto'

		// Reset animation
		const modalContent = modal.querySelector('.modal-content')
		modalContent.style.animation = ''
	}

	// Close modal events
	closeModal.addEventListener('click', hideModal)
	laterBtn.addEventListener('click', hideModal)

	// Close modal when clicking outside
	modal.addEventListener('click', e => {
		if (e.target === modal) {
			hideModal()
		}
	})

	// Close modal with Escape key
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape' && modal.classList.contains('active')) {
			hideModal()
		}
	})

	// Add CSS for modal content animation
	const modalStyle = document.createElement('style')
	modalStyle.textContent = `
		@keyframes modalContentSlideIn {
			from {
				opacity: 0;
				transform: translateY(30px) scale(0.95);
			}
			to {
				opacity: 1;
				transform: translateY(0) scale(1);
			}
		}
	`
	document.head.appendChild(modalStyle)
})

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
	let inThrottle
	return function () {
		const args = arguments
		const context = this
		if (!inThrottle) {
			func.apply(context, args)
			inThrottle = true
			setTimeout(() => (inThrottle = false), limit)
		}
	}
}

// Apply throttling to scroll events
window.addEventListener(
	'scroll',
	throttle(function () {
		// Scroll-based animations can go here
	}, 16)
) // ~60fps
