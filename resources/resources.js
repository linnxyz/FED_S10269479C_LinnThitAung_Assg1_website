async function loadContent(category) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <h1>${category.replace(/^\w/, (c) => c.toUpperCase())}</h1>
    <div class="search-container">
      <input type="text" id="searchInput" placeholder="Search with the keyword you need... (eg. content, coding)" class="search-input">
    </div>
    <div class="grid"></div>
  `;
  
  const gridDiv = contentDiv.querySelector('.grid');
  const searchInput = document.getElementById('searchInput');

  try {
    const response = await fetch('data.json');
    const data = await response.json();
    
    // Store the current category's data
    const currentData = data[category];
    
    // Function to render items
    const renderItems = (items) => {
      gridDiv.innerHTML = '';
      items.forEach(item => {
        gridDiv.innerHTML += `
          <div class="item">
            <img src="${item.image}" alt="${item.title}">
            <div class="details">
              <div class="item-title">
                <h3>${item.title}</h3>
                <a href="${item.url}"><img src="../images/arrow.png"></a>
              </div>
              <p>${item.description}</p>
              <div class="tags">
                ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
            </div>
          </div>
        `;
      });
    };

    // Initial render
    renderItems(currentData);

    // Add search functionality
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredItems = currentData.filter(item => {
        return (
          item.title.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      });
      renderItems(filteredItems);
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