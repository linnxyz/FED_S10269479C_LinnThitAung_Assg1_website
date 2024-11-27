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


