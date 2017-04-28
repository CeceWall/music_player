/**
 * Created by weijian on 2017/4/24.
 */
import * as React from 'react';
import "./MusicCover.scss";
import {Store} from "../reducers/index";

export interface MusicCoverProps {
    picture: Store.Picture;
    paused: boolean;
    className: string;
}
class MusicCover extends React.Component<MusicCoverProps, undefined> {
    render() {
        const picture = this.props.picture;
        const paused = this.props.paused ? "animation-paused" : "";
        if (picture && picture.format) {
            return (
                <div className={`${this.props.className}`}>
                    <div className={"cover animation-spinning " + paused}
                         style={{
                             background: `url('data:image/${picture.format};base64,${picture.data}') 0 0/cover`,
                         }}></div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
export default MusicCover;
