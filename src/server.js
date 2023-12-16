const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Environment variables for OAuth credentials
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

// Google OAuth Token Exchange
app.post('/api/oauth/google', (req, res) => {
    let code = req.body.code;
    request({
        url: 'https://oauth2.googleapis.com/token',
        method: 'POST',
        json: true,
        body: {
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: googleClientSecret,
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: process.env.GOOGLE_REDIRECT_URI
        }
    }, (error, response, body) => {
        if (error) {
            res.status(500).send('Error');
        } else {
            res.send(body);
        }
    });
});

// GitHub OAuth Token Exchange
app.post('/api/oauth/github', (req, res) => {
    let code = req.body.code;
    request({
        url: 'https://github.com/login/oauth/access_token',
        method: 'POST',
        json: true,
        headers: {
            'Accept': 'application/json'
        },
        body: {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: githubClientSecret,
            code: code
        }
    }, (error, response, body) => {
        if (error) {
            res.status(500).send('Error');
        } else {
            res.send(body);
        }
    });
});

// Endpoint to get the OAuth URL
app.get('/api/oauth/:provider/url', (req, res) => {
    const provider = req.params.provider;
    if (provider === 'google') {
        const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=email`;
        res.json({ url: url });
    } else if (provider === 'github') {
        const url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}`;
        res.json({ url: url });
    } else {
        res.status(400).send('Unknown provider');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
