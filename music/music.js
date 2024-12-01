// Replace these with your Spotify API credentials
const CLIENT_ID = '';
const CLIENT_SECRET = '';

let accessToken = '';

async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        body: 'grant_type=client_credentials'
    });
    
    if (!response.ok) {
        console.error('Failed to get access token');
        return;
    }
    
    const data = await response.json();
    return data.access_token;
}

async function fetchPlaylists(mood = 'All') {
    const loading = document.getElementById('loading');
    const container = document.getElementById('playlistsContainer');
    
    loading.style.display = 'block';
    container.innerHTML = ''; // Clear previous playlists

    try {
        if (!accessToken) {
            accessToken = await getAccessToken();
        }

        const searchTerm = mood === 'All' ? 'study' : `${mood} study`;
        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=playlist&limit=50`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        if (!response.ok) {
            console.error('Failed to fetch playlists');
            return;
        }

        const data = await response.json();
        displayPlaylists(data.playlists.items);
    } catch (error) {
        console.error('Error loading playlists:', error);
    } finally {
        loading.style.display = 'none';
    }
}

function displayPlaylists(playlists) {
    const container = document.getElementById('playlistsContainer');
    
    playlists.forEach(playlist => {
        const card = document.createElement('div');
        card.className = 'playlist-card';
        
        const imageUrl = playlist.images[0]?.url || '/api/placeholder/300/300';
        
        card.innerHTML = `
            <img src="${imageUrl}" alt="${playlist.name}" class="playlist-image">
            <div class="playlist-info">
                <h3 class="playlist-title">${playlist.name}</h3>
                <p class="playlist-description">${playlist.description || 'Perfect for focused study sessions'}</p>
                <div class="playlist-meta">
                    <span>${playlist.tracks.total} tracks</span>
                    <span>By ${playlist.owner.display_name}</span>
                </div>
                <a href="${playlist.external_urls.spotify}" target="_blank" class="play-btn">
                    Listen on Spotify
                </a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Handle mood filter clicks
document.querySelector('.mood-filters').addEventListener('click', (e) => {
    if (e.target.classList.contains('mood-btn')) {
        // Update active button
        document.querySelectorAll('.mood-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // Fetch new playlists
        fetchPlaylists(e.target.textContent);
    }
});

// Initial load
fetchPlaylists();