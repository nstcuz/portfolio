import { useQuery } from '@tanstack/react-query';
import { FiRefreshCw } from 'react-icons/fi';
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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isSuccess) {
    return (
      <div className='p-4 mx-2 text-center border-2 border-neutral-content shadow-lg rounded-3xl'>
        <h2>listen with me:</h2>
        <div>
          <p>{randomTrack && randomTrack.name} by {artists}</p>
          <button className='btn btn-primary border-2 border-neutral-content click:animate-bounce' onClick={handleChangeSongClick}>random song <FiRefreshCw className='inline-block'/></button>
          {randomTrack && (
            <div>
              <iframe
                ref={iframeRef}
                className="rounded-lg bg-transparent w-full"
                style={{ height: '280px' }}
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify Embed of ${randomTrack.name}`}
              ></iframe>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}