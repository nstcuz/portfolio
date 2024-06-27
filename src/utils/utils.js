const getRandomTrack = (tracks) => {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    return tracks[randomIndex].track;
  };
  
  const getTrackArtists = (track) => {
    return track.artists.map(artist => artist.name).join(', ');
  };
  
  export { getRandomTrack, getTrackArtists };
  