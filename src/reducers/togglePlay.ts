import {Action, TOGGLE_PLAY} from "../actions";
import {Store} from "./index";
/**
 * Created by weijian on 2017/4/27.
 */
export default function (paused: Store.PlayState = true, action: Action): Store.PlayState {
    if (action.type === TOGGLE_PLAY) {
        return action.paused;
    }
    return paused;
}
