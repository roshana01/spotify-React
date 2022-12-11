import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import { BsSuitHeart, BsFillSuitHeartFill } from "react-icons/bs";
import './MusicPage.css'
import PlayList from '../../Components/PlayList/PlayList';
export default function MusicPage() {
    return (
        <div className='music'>
            <div className="musicWrapper">
                <div className="content">

                    <div className="musicCover shadow-lg">
                        <img src="/images/thumbnail (12).jpg" alt="Cover" />
                    </div>
                    <div className="musicInfo">
                        <h3 className="title">We dont talk anymore</h3>
                        <div className='musicDescription'>
                            <span>Selena Gomes</span>
                            <span>2019</span>
                            <span>3 min 28 sec</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="musicDetail ">
                <div className="musicIcon">
                    <span className="playBtn">
                        <PlayArrowRoundedIcon sx={{ fontSize: 45 }} />
                    </span>
                    <BsFillSuitHeartFill fontSize={35} color='#ccc' />
                    <MoreHorizRoundedIcon sx={{ fontSize: 35, color: "#ccc" }} />
                </div>
                <PlayList />
            </div>
        </div>
    )
}
