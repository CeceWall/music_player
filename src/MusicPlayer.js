/**
 * Created by WJ on 2017/4/19.
 */
import React from 'react';
import ControlPanel from "./ControlPanel";
import ShareComponent from "./ShareComponent";
import "./MusicPlayer.css";
class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            music: {
                title: "Baby",
                artist: "Justin Bieber",
                length: 216000,
                type: 'mp3',
                now: 21054,
            },
            volume: 50,
        }
    }

    render() {
        const music = this.state.music;
        const volume = this.state.volume;
        return (
            <div>
                <audio style={{display: 'none'}}></audio>
                <div className="title-and-artist">
                    <h1 className="music-title">{music.title}</h1>
                    <h2 className="music-artist">{music.artist}</h2>
                </div>
                <ControlPanel volume={volume} length={music.length} now={music.now}/>
                <ShareComponent/>
            </div>
        )
    }
}
export default MusicPlayer;
