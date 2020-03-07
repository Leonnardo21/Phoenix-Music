window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    data: {
       title: "Boneless (Delirious)",
       artist: "Steve Aoki, Chris Lake, Tujamo & Kid Ink",
       cover: "files/feel-the-beat.jpg",
       file: "files/Boneless.mp3"
   },
   start() {
       this.cover.style.background = `url(${this.data.cover}) no-repeat center center / cover`;
       this.title.innerText = this.data.title;
       this.artist.innerText = this.data.artist;
       this.audio.src = this.data.file;
   }
}