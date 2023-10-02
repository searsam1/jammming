
function Track(trackDetails) {
    return (
        <>
            <div style={{ padding: 10, border: "1px solid black", maxWidth: "fit-content" }}>
                <h2>{trackDetails.trackName}</h2>
                By: {trackDetails.artist}<br />
                {trackDetails.trackLength} Minutes
                Released: {trackDetails.releaseDate}
                <br />
                <button>Save To Spotify</button>
            </div>
        </>
    )
}

export default Track