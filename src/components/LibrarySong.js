const LibrarySong = ({
  audioRef,
  song,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    // Add active state
    const newSongs = songs.map((state) => {
      if (state.id === song.id) {
        return {
          ...song,
          active: true
        };
      }
      return {
        ...state,
        active: false
      };
    });
    setSongs(newSongs);
    // Playing song
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
