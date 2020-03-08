import {
    secondsToMinutes
} from "./utils.js";

export default {
    get() {
        this.cover = document.querySelector(".card-image");
        this.title = document.querySelector(".card-content h5");
        this.artist = document.querySelector(".artist");
        this.playPause = document.querySelector("#play-pause");
        this.mute = document.querySelector("#mute");
        this.volControl = document.querySelector("#vol-control");
        this.seekBarControl = document.querySelector("#seekbar");
        this.currentDuration = document.querySelector("#current-duration");
        this.totalDuration = document.querySelector("#total-duration");
    },
    createAudioElement(audio) {
        this.audio = new Audio(audio);
    },
    actions() {
        this.audio.onended = () => this.next();
        this.audio.ontimeupdate = () => this.timeUpdate();
        this.playPause.onclick = () => this.togglePlayPause();
        this.mute.onclick = () => this.toggleMute();
        this.volControl.oninput = () => this.setVolume(this.volControl.value);
        this.volControl.onchange = () => this.setVolume(this.volControl.value);
        this.seekBarControl.oninput = () => this.setSeekBar(this.seekBarControl.value);
        this.seekBarControl.onchange = () => this.setSeekBar(this.seekBarControl.value);
        this.seekBarControl.max = this.audio.duration;
        this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
    }
}