import React from 'react'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import './Player.css'
export default function Player() {
  return (
    <div className='player'>
      <div className="playerWrapper">
        <div className="playerMusicInfo">
          <img className='musicThumbnail' src="/images/thumbnail (25).jpg" alt="" />
          <div className="musicName">
            <span className='name'>We dont talk anymore</span>
            <span className='title'>Selena Gomes</span>
          </div>
        </div>
        <div className="playerControl">
          <div className="playerControlButtons">
            <button><SkipPreviousIcon sx={{ fontSize: 35 }} className='skipBtn' /></button>
            <button><PauseIcon sx={{ fontSize: 35 }} /></button>
            <button><SkipNextIcon sx={{ fontSize: 35 }} className='skipBtn' /></button>
          </div>
          <div className="playerBar">
            <span className='playerTime'>2:19</span>
            <div className="barContainer">
              <div className="bar"></div>
            </div>
            <span className='playerTime'>4:33</span>
          </div>
        </div>
        <div className="playerSoundControl">
          <div className="playerSoundBar">
            <VolumeUpRoundedIcon className='soundIcon' />
            <div className="barContainer">
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
