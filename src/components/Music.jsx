import { useQuery } from '@tanstack/react-query';
import { useEffect, useState, useRef } from 'react';
import { getPlaylist } from '../utils/spotify';
import { getRandomTrack, getTrackArtists } from '../utils/utils';

const EMBEDDABLE_URL = 'https://open.spotify.com/embed/track/';

export default function Music({ playlistId }) {
  const iframeRef = useRef(null);

  const [randomTrack, setRandomTrack] = useState(null);
  const [artists, setArtists] = useState('');
  const [tracks, setTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistExternalUrls, setPlaylistExternalUrls] = useState({});

  const { isError, isLoading, isSuccess, data: playlistData, error } = useQuery({
    queryKey: ['playlist', playlistId],
    queryFn: () => getPlaylist(playlistId),
  });

  useEffect(() => {
    if (isSuccess) {
      const { name, external_urls, tracks: { items } } = playlistData;
      setPlaylistName(name);
      setPlaylistExternalUrls(external_urls);
      setTracks(items);
    }
  }, [playlistData, isSuccess]);

  useEffect(() => {
    if (tracks.length > 0) {
      const newRandomTrack = getRandomTrack(tracks);
      setRandomTrack(newRandomTrack);
      setArtists(getTrackArtists(newRandomTrack));
    }
  }, [tracks]);

  const handleChangeSongClick = () => {
    if (tracks.length > 0) {
      const newRandomTrack = getRandomTrack(tracks);
      setRandomTrack(newRandomTrack);
      setArtists(getTrackArtists(newRandomTrack));
    }
  };

  useEffect(() => {
    if (randomTrack && randomTrack.id) {
      iframeRef.current.src = EMBEDDABLE_URL + randomTrack.id;
    }
  }, [randomTrack]);

  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isSuccess) {
    return (
      <div className='p-4 mx-2 w-full text-center shadow-lg rounded-3xl'>
        <h2>listen with me:</h2>
        <div>
          <p>{randomTrack && randomTrack.name} by {artists}</p>
          {randomTrack && (
            <div className='flex justify-center flex-col items-center spt:flex-row'>
              <iframe
                ref={iframeRef}
                className="rounded-lg bg-transparent bg-base-100 max-w-[620px] w-full h-[240px]"
                allow="clipboard-write; encrypted-media;"
                loading="lazy"
                title={`Spotify Embed of ${randomTrack.name}`}
              ></iframe>
            <button className='btn btn-primary spt:h-[232px] mb-1 border-2 border-neutral-content border-opacity-50 click:animate-bounce spt:rounded-lg rounded-3xl' onClick={handleChangeSongClick}>next track</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <span className="loading loading-ring loading-lg"></span>
}