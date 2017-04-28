import {combineReducers, createStore} from "redux";
import togglePlay from "./togglePlay";
import changeVolume from "./changeVolume"
import {nextMusic} from "./nextMusic";
import {Action, UPDATE_PROGRESS} from "../actions/index";
/**
 * Created by weijian on 2017/4/27.
 */

export namespace Store {
    export type Volume = number;
    export type PlayState = boolean;
    export type Picture = { format: string, data: string }
    export type Music = {
        id?: string;
        title?: string;
        duration?: number;
        artist?: string[];
        file?: string;
        picture?: any;
    };
    export type ALL = {
        picture: Picture,
        music: Music,
        volume: Volume,
        paused: PlayState,
        now: number,
    }
}
function updateProgress(state: number = 0, action: Action) {
    if (action.type === UPDATE_PROGRESS) {
        return action.now;
    }
    return state;
}
export const musicPlayerApp = combineReducers({
    now: updateProgress,
    music: nextMusic,
    paused: togglePlay,
    volume: changeVolume,
});
