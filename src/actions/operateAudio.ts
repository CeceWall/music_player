/**
 * Created by weijian on 2017/4/28.
 */

import {Dispatch} from "react-redux";
import {Store} from "../reducers/index";
import {changeVolume, togglePlay, updateProgress} from "./index";
import get = Reflect.get;
import {fetchMusic} from "./fetchMusic";

const MUSIC_SERVER = "127.0.0.1:5000";
let timer: number;
export function checkProgress() {
    return function (dispatch: Dispatch<Store.ALL>, getState: () => Store.ALL, audio: HTMLAudioElement) {
        timer = setInterval(() => {
            let state = getState();
            let music = state.music;
            if (music && music.id && !audio.paused) {
                dispatch(updateProgress(audio.currentTime));
            }
        }, 500);
    }
}

export function loadNextMusic() {
    return async function (dispatch: Dispatch<Store.ALL>, getState: () => Store.ALL, audio: HTMLAudioElement) {
        await dispatch(fetchMusic());
        let state = getState();
        audio.src = `http://${MUSIC_SERVER}/${state.music.file}`;
        audio.load();
        dispatch(operateAudio());
        audio.onended = () => {
            dispatch(loadNextMusic());
        };
        clearInterval(timer);
        dispatch(checkProgress())
    }
}

export function operateAudio() {
    return async function (dispatch: Dispatch<Store.ALL>, getState: () => Store.ALL, audio: HTMLAudioElement) {
        if (audio.paused) {
            await audio.play();
        } else {
            await audio.pause();
        }
        dispatch(togglePlay(audio.paused))
    }
}

export function changeAudioVolume(volume: Store.Volume) {
    return function (dispatch: Dispatch<Store.ALL>, getState: () => Store.ALL, audio: HTMLAudioElement) {
        dispatch(changeVolume(volume));
        audio.volume = volume;
    }
}
