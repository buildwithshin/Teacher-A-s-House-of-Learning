// [SECTION] For smooth animations and transitions on the landing page and other sections

document.addEventListener("DOMContentLoaded", function () {
	// Smooth fade-in for landing page content (optional)
	const landingContent = document.querySelector(".landing-page .content");
	if (landingContent) {
		landingContent.style.opacity = 0;
		landingContent.style.transform = "translateY(30px)";
		setTimeout(() => {
			landingContent.style.transition = "opacity 1.2s ease, transform 1.2s ease";
			landingContent.style.opacity = 1;
			landingContent.style.transform = "translateY(0)";
		}, 200);
	}
	
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
	
	// Add 'branch-container' to observed elements
	document.querySelectorAll(
		".about-text, .profile-card, .flip-card, .card, .panel, .staff-member, .staff-member-image, .award-item, .help-card, .branch-container"
	).forEach(el => {
		el.classList.add("animate-hidden");
		observer.observe(el);
	});
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [SECTION] For Location Brances and Map Section

document.querySelectorAll('.branch-title').forEach(button => {
	button.addEventListener('click', () => {
		const content = document.getElementById(button.getAttribute('aria-controls'));
		const isExpanded = button.getAttribute('aria-expanded') === 'true';
		
		// Close all branch contents
		document.querySelectorAll('.branch-content').forEach(c => {
			c.classList.remove('show');
			c.setAttribute('hidden', '');
		});
		document.querySelectorAll('.branch-title').forEach(b => b.setAttribute('aria-expanded', 'false'));
		
		if (!isExpanded) {
			content.classList.add('show');
			content.removeAttribute('hidden');
			button.setAttribute('aria-expanded', 'true');
		} else {
			content.classList.remove('show');
			content.setAttribute('hidden', '');
			button.setAttribute('aria-expanded', 'false');
		}
	});
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [SECTION] For Contact Form Popup
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("contactPopup");
  
  // Existing button (if any)
  const openBtn = document.getElementById("openPopupBtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      popup.style.display = "block";
    });
  }

  // New button for Contact Us to Learn More
  const openContactBtn = document.getElementById("openContactPopup");
  if (openContactBtn) {
    openContactBtn.addEventListener("click", () => {
      popup.style.display = "block";
    });
  }

  const closeBtn = document.getElementById("closePopupBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});


// document.addEventListener("DOMContentLoaded", () => {
//   const popup = document.getElementById("contactPopup");
//   const openBtn = document.getElementById("openContactPopup");
//   const closeBtn = document.getElementById("closePopupBtn");

//   openBtn.addEventListener("click", () => {
//     popup.style.display = "block";
//   });

//   closeBtn.addEventListener("click", () => {
//     popup.style.display = "none";
//   });

//   window.addEventListener("click", (e) => {
//     if (e.target === popup) {
//       popup.style.display = "none";
//     }
//   });
// });
