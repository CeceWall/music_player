/**
 * Created by WJ on 2017/4/19.
 */
import * as React from 'react';
import OperatePanel from '../containers/Panel'
import "./MusicPlayer.scss";
import "isomorphic-fetch";
import Cover from "../containers/Cover";
import {Store} from "../reducers/index";
import Music = Store.Music;

export interface MusicPlayerProps {
    music: Music;
    onNextMusic: () => void;
}
class MusicPlayer extends React.Component<MusicPlayerProps, undefined> {
    constructor(props: MusicPlayerProps) {
        super(props);
    }

    componentDidMount() {
        this.props.onNextMusic();
    }

    render() {
        const music = this.props.music;
        if (music && music.title) {
            return (
                <div className="music-player">
                    <div className="content">
                        <div className="title-and-artist">
                            <h1 className="music-title">{music.title}</h1>
                            <h2 className="music-artist">{music.artist}</h2>
                        </div>
                        <OperatePanel />
                        <Cover className="music-cover"/>
                    </div>
                </div>
            )
        } else {
            return <div>Coming soon.....</div>
        }
    }
}
export default MusicPlayer;
