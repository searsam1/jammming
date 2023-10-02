import { useState } from 'react';
import './App.css';
import Playlist from './Components/Playlist/Playlist';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Track from './Components/Track/Track';
import TrackList from './Components/Tracklist/Tracklist';

function App() {
  const testTracks = [{
    trackName: "Blue Moon",
    artist: "Frank Sinatra",
    trackLength: "2",
    releaseDate: "Dec. 2nd"
  },
  {
    trackName: "Fly Me to the moon",
    artist: "Frank Sinatra",
    trackLength: "4",
    releaseDate: "Dec. 1st"
  },
  {
    trackName: "Ain't that a kick in the head",
    artist: "Dean Martin",
    trackLength: "3",
    releaseDate: "Mar. 4th"
  }
  ]
  const [tracks, setTracks] = useState(testTracks)
  return (
    <div className="App">
      <br />
      <SearchBar />
      <Playlist />
      <SearchResults />
      {tracks.map((track) =>
        <Track
          key={track.trackName}
          trackName={track.trackName}
          artist={track.artist}
          trackLength={track.trackLength}
          releaseDate={track.releaseDate}
        />)}
      <TrackList />

    </div>
  );
}

export default App;
