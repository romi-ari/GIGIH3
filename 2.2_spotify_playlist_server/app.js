const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 8081

app.use(bodyParser.json())

let spotify = [
  {
    id: 1,
    playlist: 'playlist 1',
    songs: [
      {
        id: 1,
        title: 'title 1',
        artist: 'artist 1',
        url: 'https://open.spotify.com/track/5rurggqwwudn9clMdcchxT?si=760e83522873416'
      },
      {
        id: 2,
        title: 'title 2',
        artist: 'artist 2',
        url: 'https://open.spotify.com/track/5rurggqwwudn9clMdcchxT?si=760e83522873416'
      }
    ]
  }
]
let idCounterPlaylist = 1
let idCounterSong = 1  

//Playlist
app.get('/playlist', (req, res) => {
  res.status(200).json({
    message: 'OK',
    spotify
  })
})

app.post('/playlist', (req, res) => {
  const playlist = req.body.playlist

  const song = {id: ++idCounterPlaylist, playlist, songs:[]}

  spotify.push(song)

  res.status(201).json({
    message: 'Add playlist'
  })
})

app.put('/playlist/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const playlist = req.body.playlist

  const index = spotify.findIndex((song) => song.id === id);
  
  if (index !== -1) {
    spotify[index].playlist = playlist
    res.status(200).json({
      message: 'Playlist updated',
    });
  } else {
    res.status(404).json({
      message: 'Playlist not found',
    });
  }
});

app.delete('/playlist/:id', (req, res) => {
  const id = parseInt(req.params.id)

  const index = spotify.findIndex((song) => song.id === id)
  
  if(index !== -1) {
    spotify.splice(index, 1)
    res.status(200).json({
      message: 'OK'
    })
  } else {
    res.status(404).json({
      message: 'Playlist not found'
    })
  }
})

//Song
app.get('/playlist/:id/songs', (req, res) => {
  const id = parseInt(req.params.id);

  const playlist = spotify.find((song) => song.id === id);

  if (playlist) {
    res.status(200).json({
      message: 'OK',
      songs: playlist.songs,
    });
  } else {
    res.status(404).json({
      message: 'Playlist not found',
    });
  }
});

app.post('/playlist/:id/songs', (req, res) => {
  const id = parseInt(req.params.id)
  const title = req.body.title
  const artist = req.body.artists
  const url = req.body.url

  const song = { id: ++idCounterSong, title, artist, url }

  const playlistIndex = spotify.findIndex((song) => song.id === id)

  if (playlistIndex !== -1) {
    spotify[playlistIndex].songs.push(song)
    res.status(201).json({
      message: 'Song added to playlist',
    })
  } else {
    res.status(404).json({
      message: 'Playlist not found',
    })
  }
})

app.delete('/playlist/:playlistId/songs/:songId', (req, res) => {
  const playlistId = parseInt(req.params.playlistId);
  const songId = parseInt(req.params.songId);

  const playlistIndex = spotify.findIndex((song) => song.id === playlistId);

  if (playlistIndex !== -1) {
    const playlist = spotify[playlistIndex];

    const songIndex = playlist.songs.findIndex((song) => song.id === songId);

    if (songIndex !== -1) {
      playlist.songs.splice(songIndex, 1);

      res.status(200).json({
        message: 'Song deleted from playlist',
      });
    } else {
      res.status(404).json({
        message: 'Song not found in the playlist',
      });
    }
  } else {
    res.status(404).json({
      message: 'Playlist not found',
    });
  }
});


app.listen(port, () => {
  console.log(` listening on port ${port}`)
})