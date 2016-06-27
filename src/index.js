/**
 * Created by minhtran on 6/27/16.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';


const API_KEY = 'AIzaSyB4JBQ-hEGyVNqdUu2RRxgFyHvfW4ewZiI';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({
                key: API_KEY,
                term: term
            },
            (videos) => {
                this.setState({
                    videos,
                    selectedVideo: videos[0]
                });
            });
    }

    render() {
        const videoSearch = _.debounce((term)=>this.videoSearch(term), 1000);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetails
                    video={this.state.selectedVideo}
                />
                <VideoList
                    onVideoSelect={selectedVideo =>this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>
    , document.querySelector('.container')
);