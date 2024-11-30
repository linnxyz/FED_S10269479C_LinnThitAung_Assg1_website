const lottieElement = document.getElementById('lottieAnimation');

// Function to handle animation when element is in the viewport
const playLottieAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Play the animation when it's in the viewport
            entry.target.play();
            observer.unobserve(entry.target); 
        }
    });
};


const observerL = new IntersectionObserver(playLottieAnimation, {
    threshold: 0.7
});

observerL.observe(lottieElement);

// Get the hero section and navigation elements
const heroSection = document.querySelector('.hero');
const nav = document.querySelector('nav');

// Create navigation links (initially hidden)
const createNavLinks = () => {
  const navLinksContainer = document.createElement('div');
  navLinksContainer.className = 'nav-links';
  
  const wishlistLink = document.createElement('a');
  wishlistLink.href = 'wishlist/wishlist.html';
  wishlistLink.textContent = 'Join Wishlist';
  wishlistLink.className = 'nav-link';
  
  const resourcesLink = document.createElement('a');
  resourcesLink.href = 'resources/resources.html';
  resourcesLink.textContent = 'Get Resources';
  resourcesLink.className = 'nav-link';
  
  navLinksContainer.appendChild(wishlistLink);
  navLinksContainer.appendChild(resourcesLink);
  
  // Find or create a nav container
  let navContainer = nav.querySelector('.nav');
  if (!navContainer) {
    navContainer = document.createElement('div');
    navContainer.className = 'nav';
    // Move the existing logo into the nav container
    const logo = nav.querySelector('.logo');
    navContainer.appendChild(logo.parentElement.cloneNode(true));
    nav.innerHTML = '';
    nav.appendChild(navContainer);
  }
  
  navContainer.appendChild(navLinksContainer);
  return navLinksContainer;
};

const navLinks = createNavLinks();

// Create an Intersection Observer to watch the hero section
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 // Trigger when 10% of the hero is visible/invisible
};

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    // When hero section is not visible, show the nav links
    navLinks.style.display = entry.isIntersecting ? 'none' : 'flex';
  });
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Start observing the hero section
observer.observe(heroSection);





