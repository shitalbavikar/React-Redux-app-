
import {combineReducers} from 'redux';
const songsReducers = () => {

    return [
        {title: 'No scrubs', duration: '4.05'},
        {title: 'Macrena', duration: '2.50'},
        {title: 'All stars', duration:'3.10'},
        {title: 'I want it that way', duration: '2.60'}
    ]
}

const selectedSongReducer = (selectedSong= null, action) => {
  if(action.type === 'SONG_SELECTED'){
     return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
})
