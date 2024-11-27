async function loadContent(category) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `<h1>${category.replace(/^\w/, (c) => c.toUpperCase())}</h1><div class="grid"></div>`;
  const gridDiv = contentDiv.querySelector('.grid');

  try {
    // Fetch data from JSON file
    const response = await fetch('data.json');
    const data = await response.json();

    data[category].forEach(item => {
      gridDiv.innerHTML += `
        <div class="item">
          <img src="${item.image}" alt="${item.title}">
          <div class="details">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    gridDiv.innerHTML = `<p>Error loading content. Please try again later.</p>`;
  }
}

// Automatically load the AI category when the page loads
window.addEventListener('DOMContentLoaded', () => {
  loadContent('ai');
});
