/**
 * Created by WJ on 2017/4/19.
 */
import * as React from 'react';
import ControlPanel from "./ControlPanel";
import "./MusicPlayer.css";
import "isomorphic-fetch";
import MusicCover from "./MusicCover";

export interface MusicPlayerState {
    paused?: boolean;
    now?: number;
    volume?: number;
    music?: any;
}
class MusicPlayer extends React.Component<undefined, MusicPlayerState> {
    timeInterval: number | undefined;
    audio: HTMLAudioElement | undefined;

    constructor() {
        super();
        this.timeInterval = 0;
        this.state = {
            paused: false,
            now: 0,
            volume: 50,
        };
        this.handleNextMusic = this.handleNextMusic.bind(this);
        this.handleChangeVolume = this.handleChangeVolume.bind(this);
        this.handlePlayAndPause = this.handlePlayAndPause.bind(this);
        this.updateProgress = this.updateProgress.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    async componentDidMount() {
        this.timeInterval = setInterval(() => {
            this.updateProgress();
        }, 1000);
        let music = await this.getMusic();
        this.setState({
            music: music,
        });
        this.audio.load();
    }

    async fakeGetMusic() {
        // if (!this.musics) {
        //     this.index = 0;
        // this.musics = musics;
        // }
        // if (this.index >= this.musics.length) {
        //     this.index = 0;
        // }
        // return this.musics[this.index++];
    }

    async getMusic() {
        let response = await fetch('http://127.0.0.1:8000/next');
        return await response.json();
    }


    updateProgress() {
        if (this.audio && !this.audio.paused) {
            this.setState({
                now: this.audio.currentTime,
            })
        }
    }

    handleChangeVolume(volume: number) {
        this.setState({volume: volume});
        this.audio.volume = volume / 100.0;
    }

    handlePlayAndPause() {
        this.audio.paused ? this.audio.play() : this.audio.pause();
        this.setState({paused: this.audio.paused});
    }

    async handleNextMusic() {
        let music = await this.getMusic();
        this.setState({
            music: music,
            now: 0,
            paused: false,
        });
        this.audio.load();
    }

    render() {
        const music = this.state.music;
        const paused = this.state.paused;
        const volume = this.state.volume;
        const now = this.state.now;
        if (music) {
            return (
                <div className="music-player">
                    <div className="content">
                        <audio key="audio" ref={(audio) => this.audio = audio} style={{display: 'none'}} autoPlay={true}
                               onEnded={this.handleNextMusic}>
                            <source src={`http://127.0.0.1:5000/${music.file}`}/>
                        </audio>
                        <div className="title-and-artist">
                            <h1 className="music-title">{music.title}</h1>
                            <h2 className="music-artist">{music.artist}</h2>
                        </div>
                        <ControlPanel paused={paused} onChangeVolume={this.handleChangeVolume}
                                      onNextMusic={this.handleNextMusic}
                                      volume={volume} duration={music.duration}
                                      now={now} onPlayAndPause={this.handlePlayAndPause}/>
                        {music.picture &&
                        <MusicCover className="music-cover" picture={music.picture[0]} paused={paused}/>}

                    </div>
                </div>
            )
        } else {
            return <div>Coming soon.....</div>
        }
    }
}
export default MusicPlayer;