import React from 'react';

const PlayListItem = (props) => {

  const song = props.song;

  return (
    <div className="card listItem bg-info">
        <h5 className="songTitle">{song.songTitle}</h5>
        <h4 className="songArtist">{song.songArtist}</h4>
        <h3 className="h3 songNotes">"{song.songNotes}"</h3>
        <h3 className="h3 userName">- {song.userName}</h3>
    </div>
  )
}

export default PlayListItem;
