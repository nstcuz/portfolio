import axios from 'axios';

const getAccessToken = async () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', 
      {
        grant_type: 'client_credentials'
      }, 
      {
        headers: {
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
};

const getPlaylist = async (playlistId) => {
  try {
    const token = await getAccessToken();
    const playlistResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const totalTracks = playlistResponse.data.tracks.total;
    const randomOffset = Math.floor(Math.random() * Math.max(totalTracks - 100, 1));

    const tracksResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 100,
        offset: randomOffset
      }
    });

    return { ...playlistResponse.data, tracks: { items: tracksResponse.data.items } };
  } catch (error) {
    console.error('Error fetching playlist:', error);
    throw error;
  }
};

export { getPlaylist };
