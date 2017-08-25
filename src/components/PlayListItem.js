import React from 'react';

const PlayListItem = (props) => {

  const song = props.song;

  return (
    <div className="card bg-info text-white p-3 listItem">
      <div className="card-header bg-info">
        <h5 className="userName">{song.userName}</h5>
      </div>

      <ul className="list-group list-group-flush bg-info text-white">
        <li className="list-group-item bg-info text-white">Artist/Band: <br />{song.songArtist}</li>
        <li className="list-group-item bg-info text-white">Title: <br />{song.songTitle}</li>
        <li className="list-group-item bg-info text-white">Notes: <br />{song.songNotes}</li>
      </ul>
    </div>
  )
}

export default PlayListItem;
