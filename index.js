// [SECTION] For smooth animations and transitions on the landing page and other sections

document.addEventListener("DOMContentLoaded", function () {
	// Smooth fade-in for landing page content
	const landingContent = document.querySelector(".landing-page .content");
	landingContent.style.opacity = 0;
	landingContent.style.transform = "translateY(30px)";
	setTimeout(() => {
		landingContent.style.transition = "opacity 1.2s ease, transform 1.2s ease";
		landingContent.style.opacity = 1;
		landingContent.style.transform = "translateY(0)";
	}, 200);
	
	// Animate elements on scroll using Intersection Observer
	const observerOptions = {
		threshold: 0.1
	};
	
	const scrollAnimate = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate-visible");
				observer.unobserve(entry.target);
			}
		});
	};
	
	const observer = new IntersectionObserver(scrollAnimate, observerOptions);
	
	// Apply to common sections
	document.querySelectorAll(".about-text, .profile-card, .flip-card, .card, .panel, .staff-member, .award-item, .help-card").forEach(el => {
		el.classList.add("animate-hidden");
		observer.observe(el);
	});
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [SECTION] For Location Brances and Map Section

document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const images = carousel.querySelectorAll('.carousel-image');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');

    let currentIndex = 0;

    function updateCarousel() {
      const width = images[0].clientWidth;
      track.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel(); // Initial position
  });
});