import React from 'react'

function Playerdetails(props) {
    return (
        <div className="playerdet">
            <div className="detimg">
                <img src={props.song.img_src} />
            </div>
            <h3>{props.song.title}</h3>
            <h4>{props.song.artist}</h4>
        </div>
    )
}

export default Playerdetails
