import React, { useState } from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import './SideBar.css'

export default function SideBar({ menuStatus }) {
  return (
    <div className={`sideBar ${menuStatus ? 'open' : ''}`}>

      <div className="sideBarWrapper">
        <div className="sidebarLogo">
          <img src="/logo.svg" alt="Logo" />
          Spotify
        </div>
        <div className="sideBarMenu">
          <ul className="sideBarList">
            <li className="sidebarItem">
              <HomeRoundedIcon className='sideBarIcon' sx={{ fontSize: 30 }} />
              Home
            </li>
            <li className="sidebarItem">
              <SearchRoundedIcon className='sideBarIcon' sx={{ fontSize: 30 }} />
              Search
            </li>
            <li className="sidebarItem">
              <LibraryMusicRoundedIcon className='sideBarIcon' sx={{ fontSize: 30 }} />
              Library
            </li>
            <div className="underline"></div>
          </ul>
          <ul className="sideBarList">
            <li className="sidebarItem">
              <AddBoxIcon className='sideBarIcon' sx={{ fontSize: 30 }} />
              Create playerList
            </li>
            <li className="sidebarItem">
              <FavoriteIcon className='sideBarIcon heart ' sx={{ fontSize: 30 }} />
              Like Songs
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
