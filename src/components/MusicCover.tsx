/**
 * Created by weijian on 2017/4/24.
 */
import * as React from 'react';
import "./MusicCover.css";
function encodeBase64Image(picture: any) {
    let prefix = `data:image/${picture.format};base64,`;
    let data = "";
    for (let i = 0; i < picture.data.data.length; i++) {
        data += String.fromCharCode(picture.data.data[i]);
    }
    return prefix + btoa(data);
}
export interface MusicCoverProps {
    picture: any;
    paused: boolean;
    className: string;
}
class MusicCover extends React.Component<MusicCoverProps, undefined> {
    render() {
        const picture = this.props.picture;
        const paused = this.props.paused ? "animation-paused" : "";
        if (picture) {
            return (
                <div className={`${this.props.className}`}>
                    <div className={"cover animation-spinning " + paused}
                         style={{
                             background: "url(" + encodeBase64Image(picture) + ") 0 0/cover",
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
