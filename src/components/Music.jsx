import { useEffect, useState, useRef, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPlaylist } from '../utils/spotify';
import { getRandomTrack, getTrackArtists } from '../utils/utils';

const EMBED_URL = 'https://open.spotify.com/embed/track/';

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

  const handleChangeSongClick = useCallback(() => {
    const newRandomTrack = getRandomTrack(tracks);
    setRandomTrack(newRandomTrack);
    setArtists(getTrackArtists(newRandomTrack));
  }, [tracks, setRandomTrack, setArtists]);

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
      handleChangeSongClick(); 
    }
  }, [tracks, handleChangeSongClick]);


  useEffect(() => {
    if (randomTrack && randomTrack.id) {
      iframeRef.current.src = EMBED_URL + randomTrack.id;
    }
  }, [randomTrack]);

  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>
  }

  if (isError) {
    console.error(error.message)
    return <div>
            <p>Sorry, we are having trouble reaching the spotify API right now</p>
           </div>;
  }

  if (isSuccess) {
    return (
      <div className='p-2 mx-2 mt-8 mb-4 w-sptWidthForMargin max-w-[880px] text-center bg-base-100 border-2 border-neutral-content border-opacity-20 shadow-sm rounded-2xl  bg-paperBG bg-opacity-10 '> 
        <div className='mx-auto'>
          <h2>listen with me:</h2>
            <p>{randomTrack && randomTrack.name} by {artists}</p>
            {randomTrack && (
              <div className='mx-auto flex justify-around flex-col items-center gap-3 spt:flex-row'>
                <iframe
                  ref={iframeRef}
                  className="rounded-lg h-screen max-h-[240px] bg-transparent w-full max-w-[620px]"
                  allow="clipboard-write; encrypted-media;"
                  loading="lazy"
                  title={`Spotify Embed of ${randomTrack.name}`}
                ></iframe>
              <button className='btn btn-accent spt:h-[232px] w-full max-w-[180px] mb-4 border-2 border-neutral-content border-opacity-50 click:animate-bounce spt:rounded-lg rounded-3xl' onClick={handleChangeSongClick}>next track &#8634;</button>
              </div>
            )}
        </div>
      </div>
    );
  }

  return <span className="loading loading-ring loading-lg"></span>
}
