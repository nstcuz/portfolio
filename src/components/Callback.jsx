import React, { useEffect } from 'react';
import axios from 'axios';

const Callback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      const getAccessToken = async () => {
        try {
          const response = await axios.post('https://accounts.spotify.com/api/token', 
            {
              grant_type: 'authorization_code',
              code: code,
              redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
              client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
              client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
            }, 
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }
          );

          const accessToken = response.data.access_token;
          localStorage.setItem('spotify_access_token', accessToken);
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      };

      getAccessToken();
    }
  }, []);

  return <span className="loading loading-ring loading-lg"></span>

};

export default Callback;
