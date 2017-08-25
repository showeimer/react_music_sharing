import React, {Component} from 'react';

class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.addToList = this.addToList.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }

  handleNameChange(event) {
    this.setState({userName: event.target.value});
  };
  handleArtistChange(event) {
    this.setState({songArtist: event.target.value});
  };
  handleTitleChange(event) {
    this.setState({songTitle: event.target.value});
  };
  handleNotesChange(event) {
    this.setState({songNotes: event.target.value});
  };

  addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    .then(response => {
      console.log(response, "yay");
    })

    .catch(err => {
      console.log(err, "boo!");
    });

    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <form onSubmit={this.addToList}>
        <label>User Name</label>
        <input onChange={this.handleNameChange} name="userName" type="text" placeholder='Name or Username' value={this.state.userName} />

        <label>Artist/Band</label>
        <input onChange={this.handleArtistChange} name="songArtist" type="text" placeholder='Artist or Band Name' value={this.state.songArtist} />

        <label>Song Title</label>
        <input onChange={this.handleTitleChange} name="songTitle" type="text" placeholder='Song Title' value={this.state.songTitle} />

        <label>Notes About Song:</label>
        <textarea onChange={this.handleNotesChange} name="songNote" type="text" value={this.state.songNotes} />

        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
  }
}

export default PlayListForm;
