import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Player from "./components/Player"
function App() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    }
  ])

  const [currentIndex, setcurrentIndex] = useState(0)
  const [nxtsongIndex, setnxtsongIndex] = useState(currentIndex + 1)

  useEffect(() => {
    setnxtsongIndex(() => {
      if (currentIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentIndex + 1
      }
    })
  }, [currentIndex])
  return (
    <>
    <Header />
    <div className="App">
      <Player
        currentIndex={currentIndex}
        setcurrentIndex={setcurrentIndex}
        nxtsongIndex={nxtsongIndex}
        songs={songs}
      />
    </div>
    </>
  );
}

export default App;
