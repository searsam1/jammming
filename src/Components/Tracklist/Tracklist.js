import "../Playlist/Playlist.css"

function TrackList() {

    const tracks = [
        "track 1",
        "track 2",
        "track 3"
    ]

    return (
        <>
            <h2>Tracks</h2>
            <ul>
                {tracks.map((track) => <li>{track}</li>)}
            </ul>
        </>
    )
}
export default TrackList