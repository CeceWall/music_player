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
function MillisToMinutes(milliSeconds) {
    let date = new Date(0);
    date.setMilliseconds(milliSeconds);
    return date.toISOString().substr(14, 5)
}
class ControlPanel extends React.Component {

    render() {
        const volume = this.props.volume;
        const length = this.props.length;
        const now = this.props.now;
        return (
            <div>
                <div id="time-and-volume">
                    <span id="timeLength">-{MillisToMinutes(length)}</span>
                    <i id="volume" className="fa fa-volume-up" aria-hidden="true">
                        <Slider handle={() => <div></div>} className="volumeSlider" min={0} max={100}/>
                    </i>
                </div>
                <Line className="play-progress" strokeLinecap="square" strokeColor={"#6BBD7A"}
                      percent={Math.round(now / length * 100)}/>
                <div>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    <i className="fa fa-play" aria-hidden="true"></i>
                    <i className="fa fa-step-forward" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
export default ControlPanel;
