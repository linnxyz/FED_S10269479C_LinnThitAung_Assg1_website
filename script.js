const statisticsData = {
    currentUsers: 234582,
    totalCourses: 250,
    availableQuizzes: 3250,
  };
  
  const statisticsElements = {
    currentUsers: document.querySelector('.current-users'),
    totalCourses: document.querySelector('.total-courses'),
    availableQuizzes: document.querySelector('.available-quizzes'),
  };
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function animateStatistic(element, target) {
    let currentValue = 0;
    const duration = 2000;
    const interval = 10;
    const increment = target / (duration / interval);
  
    const intervalId = setInterval(() => {
      currentValue += increment;
      element.textContent = Math.floor(currentValue).toLocaleString();
      if (currentValue >= target) {
        clearInterval(intervalId);
      }
    }, interval);
  }
  
  function displayStatistics() {
    const statisticsContainers = [
      statisticsElements.currentUsers,
      statisticsElements.totalCourses,
      statisticsElements.availableQuizzes,
    ];
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = statisticsContainers.indexOf(entry.target);
          animateStatistic(entry.target, Object.values(statisticsData)[index]);
          observer.unobserve(entry.target);
        }
      });
    });
  
    statisticsContainers.forEach((container) => {
      observer.observe(container);
    });
  }
  
  displayStatistics();