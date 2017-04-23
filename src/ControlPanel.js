/**
 * Created by WJ on 2017/4/19.
 */
import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import {Line} from 'rc-progress';
import "../node_modules/rc-slider/assets/index.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./ControlPanel.css";


/**
 * @return {string}
 */
function secondsToMinutes(seconds) {
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(14, 5)
}
class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeVolume = this.handleChangeVolume.bind(this);
    }

    handleChangeVolume(volume) {
        this.props.onChangeVolume(volume);
    }

    render() {
        const volume = this.props.volume;
        const duration = this.props.duration;
        const now = this.props.now;
        const paused = this.props.paused;
        return (
            <div>
                <div id="time-and-volume">
                    <span id="timeLength">-{secondsToMinutes(duration)}</span>
                    <i id="volume" className="fa fa-volume-up" aria-hidden="true">
                        <Slider value={volume} handle={() => <div></div>} className="volumeSlider"
                                onChange={this.handleChangeVolume} min={0} max={100}/>
                    </i>
                </div>
                <Line className="play-progress" strokeLinecap="square" strokeColor={"#6BBD7A"}
                      percent={Math.round(now / duration * 100)}/>
                <div>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    <i className={"fa " + (paused ? "fa-play" : "fa-pause")} onClick={this.props.onPlayAndPause}
                       aria-hidden="true"></i>
                    <i onClick={this.props.onNextMusic} className="fa fa-step-forward" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
export default ControlPanel;
