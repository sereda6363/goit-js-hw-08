
import Vimeo from "@vimeo/player";
import  throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCALTIMESTORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(event => {
  localStorage.setItem(LOCALTIMESTORAGE, event.seconds)
},1000));

player.setCurrentTime(localStorage.getItem(LOCALTIMESTORAGE) || 0)