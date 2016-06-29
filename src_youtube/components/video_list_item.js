import React, {Component} from 'react';


/*
 class VideoListItem extends Component {

 constructor(props) {
 super(props);

 }

 render() {
 return (
 <li className="list-group-item">
 <div className="video-list media">
 <div className="media-left">
 <div className="media-object">

 </div>
 </div>
 <div className="media-body">
 <div className="media-heading">

 </div>
 </div>
 </div>
 </li>
 );
 }

 }
 */

const VideoListItem = ({onVideoSelect, video})=> {
    const imgUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={()=>onVideoSelect(video)}
            className="list-group-item">
            <div className="video-item media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading"> {video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;