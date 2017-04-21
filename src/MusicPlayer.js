/**
 * Created by WJ on 2017/4/19.
 */
import React from 'react';
import ControlPanel from "./ControlPanel";
import ShareComponent from "./ShareComponent";
class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            music: {
                title: "Baby",
                artist: "Justin Bieber",
                length: 216000,
                type: 'mp3',
                now: 0,
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
                <h1>{music.title}</h1>
                <h2>{music.artist}</h2>
                <ControlPanel volume={volume} length={music.length} now={music.now}/>
                <ShareComponent/>
            </div>
        )
    }
}
export default MusicPlayer;
