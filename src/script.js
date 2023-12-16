document.getElementById('search-button').addEventListener('click', () => {
    let query = document.getElementById('search-input').value;
    let customEndpoint = document.getElementById('custom-endpoint').value || '/api/search';
    fetchResults(query, customEndpoint);
});

function fetchResults(query, customEndpoint) {
    fetch(customEndpoint + '?q=' + encodeURIComponent(query), {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
        }
    })
    .then(response => response.json())
    .then(data => {
        displayResults(data);
    })
    .catch(error => console.error('Error:', error));
}

function displayResults(results) {
    let resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        let div = document.createElement('div');
        div.innerHTML = result.title;
        resultsContainer.appendChild(div);
    });
}

// Google OAuth login
document.getElementById('google-login').addEventListener('click', () => {
    initiateOAuth('google');
});

// GitHub OAuth login
document.getElementById('github-login').addEventListener('click', () => {
    initiateOAuth('github');
});

function initiateOAuth(provider) {
    fetch('/api/oauth/' + provider + '/url')
    .then(response => response.json())
    .then(data => {
        window.location.href = data.url;
    })
    .catch(error => console.error('Error fetching OAuth URL:', error));
}

// Handle OAuth callback
function handleOAuthCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const provider = urlParams.get('provider'); // Assuming 'provider' is included in the callback URL

    if (code && provider) {
        fetch('/api/oauth/' + provider, {
            method: 'POST',
            body: JSON.stringify({ code: code }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem('access_token', data.access_token);
            // Redirect or display a message after successful login
        })
        .catch(error => console.error('Error:', error));
    }
}

handleOAuthCallback();

