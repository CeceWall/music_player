/**
 * Created by weijian on 2017/4/27.
 */
import {Action, CHANGE_VOLUME} from "../actions"
import {Store} from "./index";
export default function (state: Store.Volume = 0.5, action: Action): Store.Volume {
    if (action.type === CHANGE_VOLUME)
        return action.volume;
    else
        return state;
}
