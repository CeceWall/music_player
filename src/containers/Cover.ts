import {Store} from "../reducers/index";
import {connect, Dispatch} from "react-redux";
import MusicCover from "../components/MusicCover";
/**
 * Created by weijian on 2017/4/28.
 */
interface OwnProps {
    className: string;
}
const mapStateToProps = (state: Store.ALL, ownProps: OwnProps) => {
    return {
        picture: state.music.picture,
        className: ownProps.className,
        paused: state.paused,
    }
};
const mapDispatchToProps = (dispatch: Dispatch<Store.ALL>) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicCover);
