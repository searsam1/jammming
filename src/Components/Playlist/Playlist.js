import './Playlist.css';

function Playlist() {

    const songs = [
        "song 1",
        "song 2",
        "song 3"
    ]

    return (
        <>
            <h2>Playlist</h2>
            <ul>
                {songs.map((song) => <li>{song}</li>)}
            </ul>
        </>
    )
}

export default Playlist