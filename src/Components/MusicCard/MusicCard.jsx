import { Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import './MusicCard.css'

export default function MusicCard() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000);
    }, [])

    return (
        <>
            {
                !isLoading ? (
                    <div className="musicCard">
                        <div className="musicCardImage">
                            <img src="./images/thumbnail (22).jpg" alt="" />
                        </div>
                        <div className="musicCardInfo">
                            <p className="musicCardName">We dont talk anymore</p>
                            <p className="musicCardTitle">Selena Gomes as das das d</p>
                        </div>
                        <span className="playBtn">
                            <PlayArrowRoundedIcon sx={{ fontSize: 35 }} />
                        </span>
                    </div>
                ) : (
                    <>
                        <div className="musicCard">
                            <Skeleton animation='wave' variant="rounded" width={140} height={140} sx={{ bgcolor: 'grey.800', margin: 'auto', marginBottom: 2 }} />
                            <Skeleton animation='wave' variant="text" sx={{ bgcolor: 'grey.800', fontSize: '1rem', marginBottom: 1 }} />
                            <Skeleton animation='wave' variant="text" sx={{ bgcolor: 'grey.800', fontSize: '.8rem', marginBottom: 2 }} />
                        </div>
                    </>

                )
            }
        </>
    )
}
