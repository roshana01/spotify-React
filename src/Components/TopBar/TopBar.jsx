import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Tooltip } from '@mui/material';
import './TopBar.css'

export default function TopBar({ openSideMenuFunc, menuStatus }) {



  return (
    <div className='tobBar'>
      <div className="tobBarWrapper px-4">
        <div className="topBarLeft">
          <span className={`sideMenuIcon ${menuStatus ? 'opened' : ''}`} onClick={openSideMenuFunc}>
            <svg width="30" height="30" viewBox="0 0 100 100">
              <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path class="line line2" d="M 20,50 H 80" />
              <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </span>
          <Tooltip title='Go Back'>
            <button className="goBack">
              <ArrowBackIosOutlinedIcon sx={{ fontSize: 20 }} />
            </button>
          </Tooltip>
          <Tooltip title='Go Forward'>
            <button className="goForward">
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 20 }} />
            </button>
          </Tooltip>
        </div>
        <div className="topBarRight">
          <Tooltip title="Rshnk">
            <div className="userProfile">
              <PersonOutlineOutlinedIcon sx={{ fontSize: 20 }} className='profileIcon' />
              Rshnk
              <ArrowDropDownIcon />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
