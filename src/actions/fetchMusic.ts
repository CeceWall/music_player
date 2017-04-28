/**
 * Created by weijian on 2017/4/27.
 */
import * as Redux from "redux";
import * as fetch from "isomorphic-fetch";
import {Store} from "../reducers";
import {fetchCover, nextMusic} from "./index";

const MusicServer = "192.168.199.127:8000";
export function fetchMusic() {
    return async function (dispatch: Redux.Dispatch<Store.ALL>) {
        let response = await fetch(`http://${MusicServer}/next`)
        let music: Store.Music = await response.json();
        dispatch(nextMusic(music));
        dispatch(fetchMusicCover(music.id))
    }
}
export function fetchMusicCover(id: string) {
    return async function (dispatch: Redux.Dispatch<Store.ALL>) {
        let url=`http://${MusicServer}/picture/${id}`;
        let response = await fetch(url);
        let picture: Store.Picture = await response.json();
        dispatch(fetchCover(picture))
    }
}