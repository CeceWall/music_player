import {Store} from "./index";
import Music = Store.Music;
import {Action, FETCH_COVER, NEXT_MUSIC} from "../actions/index";
/**
 * Created by weijian on 2017/4/27.
 */
export function nextMusic(state: Music = {}, action: Action) {
    switch (action.type) {
        case NEXT_MUSIC:
            return action.music;
        case FETCH_COVER:
            return Object.assign({}, state, {picture: action.picture});
        default:
            return state;
    }
}
