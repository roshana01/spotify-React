import React from 'react'
import MusicCard from '../../Components/MusicCard/MusicCard'
import TopBar from '../../Components/TopBar/TopBar'
import './Home.css'
export default function Home() {
    return (
        <div className='home'>
            <h2 className="title ps-3  mb-3">Shows to try</h2>
            <div className="musicContainer">
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
            </div>
        </div>
    )
}
