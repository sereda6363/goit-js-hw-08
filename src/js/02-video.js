
import Vimeo from "@vimeo/player";
import  throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCLTIMESTORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(event => {
  localStorage.setItem(LOCLTIMESTORAGE, event.seconds)
},1000));

player.setCurrentTime(localStorage.getItem(LOCLTIMESTORAGE) || 0)