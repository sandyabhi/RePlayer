import React, { useEffect, useState, useRef } from 'react'
import Playerdetails from "./Playerdetails"
import Controls from "./Controls"

function Player(props) {
    const audioEle = useRef(null)
    const [isPlaying, setisPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) {
            audioEle.current.play()
        } else {
            audioEle.current.pause()
        }
    })

    const skipSong = (forwards = true) => {
        if (forwards) {
            props.setcurrentIndex(() => {
                let temp = props.currentIndex
                temp++

                if (temp > props.songs.length - 1) {
                    temp = 0
                }
                return temp
            })
        } else {
            props.setcurrentIndex(() => {
                let temp = props.currentIndex
                temp--

                if (temp < 0) {
                    temp = props.currentIndex - 1
                }
                return temp
            })
        }
    }
    return (
        <div className="player">
            <audio ref={audioEle} src={props.songs[props.currentIndex].src}></audio>
            <h3>PLAYING NOW</h3>
            <Playerdetails song={props.songs[props.currentIndex]} />
            <Controls
                isPlaying={isPlaying}
                setisPlaying={setisPlaying}
                skipSong={skipSong}
            />
            <p><strong>Next up:</strong>{props.songs[props.nxtsongIndex].title}
            by, {props.songs[props.nxtsongIndex].artist}</p>
        </div>
    )
}

export default Player
