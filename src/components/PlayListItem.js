import React from 'react';

const PlayListItem = (props) => {

  const song = props.song;

  return (
    <div>
      <ul>
        <li>User: {song.userName}</li>
        <li>Artist/Band: {song.songArtist}</li>
        <li>Title: {song.songTitle}</li>
        <li>Notes: {song.songNotes}</li>
      </ul>
    </div>
  )
}

export default PlayListItem;
