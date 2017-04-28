/**
 * Created by WJ on 2017/4/19.
 */
import * as React from 'react';
// import Slider from 'rc-slider/lib/Slider';
const Slider: any = require('rc-slider');
// import {Line} from 'rc-progress';
const Progress: any = require('rc-progress');
const Line: any = Progress.Line;
import "./ControlPanel.scss";
import "../../node_modules/rc-slider/assets/index.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import {Store} from "../reducers/index";
import Music = Store.Music;


/**
 * @return {string}
 */
function secondsToMinutes(seconds: number): string {
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(14, 5)
}
export interface ControlPanelProps {
    music: Music;
    onChangeVolume: (volume: Store.Volume) => void;
    onUpdateProgress: () => void;
    onNextMusic: () => void;
    onTogglePlay: () => void;
    volume: Store.Volume;
    duration: number;
    now: number;
    paused: Store.PlayState;
}

class ControlPanel extends React.Component <ControlPanelProps, undefined> {
    constructor(props: ControlPanelProps) {
        super(props);
        this.handleChangeVolume = this.handleChangeVolume.bind(this);
    }

    componentDidMount() {
    }

    handleChangeVolume(volume: number) {
        this.props.onChangeVolume(volume / 100.0);
    }

    render() {
        const volume = this.props.volume;
        const duration = this.props.duration;
        const now = this.props.now;
        const paused = this.props.paused;

        return (
            <div>
                <div id="time-and-volume">
                    <span id="timeDuration">-{secondsToMinutes(duration)}</span>
                    <i id="volume" className="fa fa-volume-up" aria-hidden="true">
                        <Slider value={volume * 100} handle={() => <div></div>} className="volumeSlider"
                                onChange={this.handleChangeVolume} min={0} max={100}/>
                    </i>
                </div>
                <Line className="play-progress" strokeLinecap="square" strokeColor={"#6BBD7A"}
                      percent={Math.round(now / duration * 100)}/>
                <div className="buttons" style={{position: "relative"}}>
                    <i id="" className="fa fa-heart favourite" aria-hidden="true"></i>
                    <i id="" className="fa fa-trash trash" aria-hidden="true"></i>
                    <i className={"fa play " + (paused ? "fa-play" : "fa-pause")}
                       onClick={this.props.onTogglePlay} aria-hidden="true"></i>
                    <i className="fa fa-step-forward next" onClick={this.props.onNextMusic}
                       aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
export default ControlPanel;
