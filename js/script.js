let music = document.getElementById("music");

let random_button = document.getElementById("random_button");
let back_button = document.getElementById("back_button");
let play_pause_button = document.getElementById("play_pause_button");
let next_button = document.getElementById("next_button");
let repeat_button = document.getElementById("repeat_button");

let current_song_image = document.getElementById("current_song_image");
let current_song_album_photo = document.getElementById("current_song_album_photo");
let current_song_name = document.getElementById("current_song_name");
let current_artist_name = document.getElementById("current_artist_name");

function update_current_song(song) {
    switch (song) {
        case "somebody_to_love":
            current_song_image.src = "./assets/images/queen.jpg";
            current_song_album_photo.src = "./assets/images/queen.jpg";
            current_song_name.innerText = "Somebody To Love";
            current_artist_name.innerText = "Queen";
            break;

        case "bohemian_rhapsody":
            current_song_image.src = "./assets/images/queen.jpg";
            current_song_album_photo.src = "./assets/images/queen.jpg";
            current_song_name.innerText = "Bohemian Rhapsody";
            current_artist_name.innerText = "Queen";
            break;

        case "otherside":
            current_song_image.src = "./assets/images/red_hot_californiacation.jpg";
            current_song_album_photo.src = "./assets/images/red_hot_californiacation.jpg";
            current_song_name.innerText = "Otherside";
            current_artist_name.innerText = "Red Hot Chili Peppers";
            break;

        case "snow":
            current_song_image.src = "./assets/images/red_hot_stadium.jpg";
            current_song_album_photo.src = "./assets/images/red_hot_stadium.jpg";
            current_song_name.innerText = "Snow(Hey Oh)";
            current_artist_name.innerText = "Red Hot Chili Peppers";
            break;

        case "take_what_you_want":
            current_song_image.src = "./assets/images/post_malone.jpg";
            current_song_album_photo.src = "./assets/images/post_malone.jpg";
            current_song_name.innerText = "Take What You Want";
            current_artist_name.innerText = "Post Malone";
            break;
    
        default:
            break;
    }

}

function random() {

}

function back() {

}

function play_pause() {
    if (music.paused) {
        music.play();
        play_pause_button.src = "./assets/icons/pause2.png"
    } else {
        music.pause();
        play_pause_button.src = "./assets/icons/play2.png"
    }
}

function next() {

}

function repeat() {

}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }