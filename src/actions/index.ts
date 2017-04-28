/**
 * Created by weijian on 2017/4/27.
 */

import {Store} from "../reducers";
import Music = Store.Music;
import Picture = Store.Picture;

type ActionNextMusic = {
    readonly type: "NEXT_MUSIC"
    readonly music: Music;
}
type ActionTogglePlay = {
    readonly type: "TOGGLE_PLAY"
    readonly paused: Store.PlayState;
}
type ActionChangeVolume = {
    readonly type: "CHANGE_VOLUME";
    readonly volume: Store.Volume;
}
type ActionUpdateProgress = {
    readonly type: "UPDATE_PROGRESS";
    readonly now: number;
}
type ActionFetchCover = {
    readonly type: "FETCH_COVER";
    readonly picture: Picture;
}
export type Action = ActionChangeVolume | ActionTogglePlay | ActionNextMusic | ActionUpdateProgress | ActionFetchCover;
export const NEXT_MUSIC = "NEXT_MUSIC";
export const CHANGE_VOLUME = "CHANGE_VOLUME";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const UPDATE_PROGRESS = "UPDATE_PROGRESS";
export const FETCH_COVER = "FETCH_COVER";
export function nextMusic(music: Music): Action {
    return {
        type: NEXT_MUSIC,
        music: music,
    }
}
export function changeVolume(volume: Store.Volume): Action {
    return {
        type: CHANGE_VOLUME,
        volume: volume,
    }
}
export function togglePlay(paused: Store.PlayState): Action {
    return {
        type: TOGGLE_PLAY,
        paused: paused,
    }
}
export function fetchCover(picture: Picture) {
    return {
        type: FETCH_COVER,
        picture: picture,
    }
}
export function updateProgress(now: number): Action {
    return {
        type: UPDATE_PROGRESS,
        now: now,
    }
}

