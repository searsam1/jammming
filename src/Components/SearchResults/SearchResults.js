import "../Playlist/Playlist.css"

function SearchResults() {

    const songs = [
        "song 1",
        "song 2",
        "song 3"
    ]

    return (
        <>
            <h2>Search Results</h2>
            <ul>
                {songs.map((song) => <li>{song}</li>)}
            </ul>
        </>
    )
}
export default SearchResults