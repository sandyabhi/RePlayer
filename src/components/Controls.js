import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import Button from '@material-ui/core/Button';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';

function Controls(props) {
    return (
        <div className="ctrl">
            <Button onClick={() => props.skipSong(false)} >
                <FastRewindIcon />
            </Button>

            <Button onClick={() => props.setisPlaying(!props.isPlaying)} >
                {props.isPlaying ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
            </Button>

            <Button onClick={() => props.skipSong()} >
                <FastForwardIcon />
            </Button>
        </div>
    )
}

export default Controls
