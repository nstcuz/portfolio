import React from 'react';

const SpotifyAuth = () => {
  const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const scope = 'user-read-private user-read-email playlist-read-private';

  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const responseType = 'code';

  const handleLogin = () => {
    window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default SpotifyAuth;
