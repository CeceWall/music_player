/**
 * Created by weijian on 2017/4/27.
 */
import {Store} from "../reducers";
import * as Redux from 'redux';
import {connect} from "react-redux";
import ControlPanel from "../components/ControlPanel";
import {changeAudioVolume, loadNextMusic, operateAudio} from "../actions/operateAudio";

const mapStateToProps = (state: Store.ALL) => {
    return {
        paused: state.paused,
        volume: state.volume,
        duration: state.music.duration,
        now: state.now,
        music: state.music,
    };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<Store.ALL>) => {
    return {
        onChangeVolume: (volume: Store.Volume) => {
            dispatch(changeAudioVolume(volume));
        },
        onNextMusic: () => {
            dispatch(loadNextMusic())
        },
        onTogglePlay: () => {
            dispatch(operateAudio());
        },
        onUpdateProgress: () => {
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);