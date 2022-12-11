import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import { BsSuitHeart, BsFillSuitHeartFill } from "react-icons/bs";

import './PlayList.css'

export default function PlayList() {
    return (
        <div className="palyList">
            <div className="playListHeader ">
                <div>
                    <span className='me-3'>#</span>
                    <span>TITLE</span>
                </div>
                <QueryBuilderRoundedIcon />
            </div>
            <div className="playListItem">
                <div className='playListItemLeft'>
                    <PlayArrowRoundedIcon sx={{ color: '#fff' }} />
                    <div>
                        <p className='mb-0'>Kiss Me More (feat.SZA) </p>
                        <p className='mb-0'>Roshanak Roshani</p>
                    </div>
                </div>
                <div className='playListItemRight'>
                    <BsFillSuitHeartFill fontSize={20} color='#1dc75a' />
                    <span>3:28</span>
                </div>
            </div>
            <div className="playListItem">
                <div className='playListItemLeft d-flex align-items-center gap-3'>
                    <PlayArrowRoundedIcon sx={{ color: '#fff' }} />
                    <div>
                        <p className='mb-0'>Kiss Me More (feat.SZA) </p>
                        <p className='mb-0'>Roshanak Roshani</p>
                    </div>
                </div>
                <div className='playListItemRight d-flex align-items-center gap-4'>
                    <BsFillSuitHeartFill fontSize={20} color='#1dc75a' />
                    <span>3:28</span>
                </div>
            </div>
        </div>
    )
}
