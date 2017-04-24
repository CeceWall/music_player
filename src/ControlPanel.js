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
                    <span id="timeDuration">-{secondsToMinutes(duration)}</span>
                    <i id="volume" className="fa fa-volume-up" aria-hidden="true">
                        <Slider value={volume} handle={() => <div></div>} className="volumeSlider"
                                onChange={this.handleChangeVolume} min={0} max={100}/>
                    </i>
                </div>
                <Line className="play-progress" strokeLinecap="square" strokeColor={"#6BBD7A"}
                      percent={Math.round(now / duration * 100)}/>
                <div className="buttons" style={{position: "relative"}}>
                    <i id="" className="fa fa-heart favourite" aria-hidden="true"></i>
                    <i id="" className="fa fa-trash trash" aria-hidden="true"></i>
                    <i className={"fa play " + (paused ? "fa-play" : "fa-pause")}
                       onClick={this.props.onPlayAndPause}
                       aria-hidden="true"></i>
                    <i className="fa fa-step-forward next" onClick={this.props.onNextMusic}
                       aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
export default ControlPanel;
