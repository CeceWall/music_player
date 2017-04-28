/**
 * Created by weijian on 2017/4/28.
 */

import {Store} from "../reducers/index";
import {connect, Dispatch} from "react-redux";
import Volume = Store.Volume;
import MusicPlayer from "../components/MusicPlayer";
import {loadNextMusic} from "../actions/operateAudio";
const mapStateToProps = (state: Store.ALL) => {
    return {
        music: state.music,
    }
};
const mapDispatchToProps = (dispatch: Dispatch<Store.ALL>) => {
    return {
        onNextMusic: () => {
            dispatch(loadNextMusic())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);

