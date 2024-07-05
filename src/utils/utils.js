const getRandomTrack = (tracks) => {
    const randoIndex = Math.floor(Math.random() * tracks.length);
    return tracks[randoIndex].track;
  };
  
  const getTrackArtists = (track) => {
    return track.artists.map(artist => artist.name).join(', ');
  };
  
  export { getRandomTrack, getTrackArtists };
