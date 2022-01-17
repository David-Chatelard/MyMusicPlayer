// Number of songs
const SONGS_QUANTITY = 5;

// Audio handle
let music = document.getElementById("music");

// Buttons handles
let volume_button = document.getElementById("volume_button");
let random_button = document.getElementById("random_button");
let back_button = document.getElementById("back_button");
let play_pause_button = document.getElementById("play_pause_button");
let next_button = document.getElementById("next_button");
let repeat_button = document.getElementById("repeat_button");

// Current song in the left corner handles
let current_song_image = document.getElementById("current_song_image");
let current_song_album_photo = document.getElementById("current_song_album_photo");
let current_song_name = document.getElementById("current_song_name");
let current_artist_name = document.getElementById("current_artist_name");

// Song list and some status variables
let song_list = ["somebody_to_love", "bohemian_rhapsody", "otherside", "snow", "take_what_you_want"];
let current_song = 0;
let random_status = false;

// Song time handles
let current_time = document.getElementById("current_time");
let song_duration = document.getElementById("song_duration");

// Volume slider handle
let volume_level_slider = document.getElementById("volume_level_slider");

// Song time slider handle
let song_time_slider = document.getElementById("song_time_slider_id");
let timer;

// Song duration variables
let minutes = 0;
let seconds = 0;

// Adding event listeners
music.addEventListener("ended", song_ended);
volume_level_slider.addEventListener("input", volume_change);
song_time_slider.addEventListener("input", time_change);
music.addEventListener("playing", time_slider);

// When the pages first loads
    // Setting starting volume
let volume_level = parseInt(document.getElementById("volume_level_slider").value);
music.volume = (volume_level / 100) / 4;

    // Setting the song duration
music.onloadedmetadata = function() {
    minutes = parseInt(music.duration / 60);
    seconds = parseInt(music.duration % 60);
    if (minutes >= 10 && seconds >= 10) {
        song_duration.innerText = `${minutes}:${seconds}`;
    } else if (minutes >= 10 && seconds < 10){
        song_duration.innerText = `${minutes}:0${seconds}`;
    } else if (minutes < 10 && seconds >= 10){
        song_duration.innerText = `0${minutes}:${seconds}`;
    } else if (minutes < 10 && seconds < 10){
        song_duration.innerText = `0${minutes}:0${seconds}`;
    }
};
    // Starting the time slider
clearInterval(timer);
timer = setInterval(time_slider, 1000);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function time_change() {
    music.currentTime = music.duration * (song_time_slider.value / 100);
}
function time_slider() {
    song_time_slider.style = `--value:${parseInt((music.currentTime / music.duration) * 100)}; --min:0; --max:100;`;
    song_time_slider.value = parseInt((music.currentTime / music.duration) * 100);
    // song_time_slider.setAttribute('value', parseInt((music.currentTime / music.duration) * 100));
    // song_time_slider.stepUp();
    // song_time_slider.max = (music.currentTime / music.duration) * 100;
    // song_time_slider.style.width = `${(music.currentTime / music.duration) * 100}%`;
    minutes = parseInt(music.currentTime / 60);
    seconds = parseInt(music.currentTime % 60);
    if (minutes >= 10 && seconds >= 10) {
        current_time.innerText = `${minutes}:${seconds}`;
    } else if (minutes >= 10 && seconds < 10){
        current_time.innerText = `${minutes}:0${seconds}`;
    } else if (minutes < 10 && seconds >= 10){
        current_time.innerText = `0${minutes}:${seconds}`;
    } else if (minutes < 10 && seconds < 10){
        current_time.innerText = `0${minutes}:0${seconds}`;
    }
}

function mute() {
    if (music.muted) {
        volume_button.src = "./assets/icons/medium_volume.png";
        music.muted = false;
    } else {
        volume_button.src = "./assets/icons/muted.png";
        music.muted = true;
    }
}

function volume_change() {
    volume_level = parseInt(document.getElementById("volume_level_slider").value);
    music.volume = (volume_level / 100) / 4;

    if (volume_level == 0) {
        volume_button.src = "./assets/icons/muted.png";
    } else if (volume_level > 0 && volume_level <= 35){
        volume_button.src = "./assets/icons/low_volume.png";
    } else if (volume_level > 35 && volume_level <= 70){
        volume_button.src = "./assets/icons/medium_volume.png";
    } else if (volume_level > 70){
        volume_button.src = "./assets/icons/high_volume.png";
    }
}

function song_ended() {
    if (!music.loop) {
        next(true)
    }
}

function update_current_song(song, ended) {
    clearInterval(timer);
    let playing = false;
    if (ended) {
        playing = true;
    } else {
        playing = !(music.paused);
    }

    music.src = `./assets/music/${song}.mp3`;

    timer = setInterval(time_slider, 1000);

    if (playing) {
        music.play();
    }

    switch (song) {
        case "somebody_to_love":
            current_song_image.src = "./assets/images/queen.jpg";
            current_song_album_photo.src = "./assets/images/queen.jpg";
            current_song_name.innerText = "Somebody To Love";
            current_artist_name.innerText = "Queen";
            current_song = 0;
            break;

        case "bohemian_rhapsody":
            current_song_image.src = "./assets/images/queen.jpg";
            current_song_album_photo.src = "./assets/images/queen.jpg";
            current_song_name.innerText = "Bohemian Rhapsody";
            current_artist_name.innerText = "Queen";
            current_song = 1;
            break;

        case "otherside":
            current_song_image.src = "./assets/images/red_hot_californiacation.jpg";
            current_song_album_photo.src = "./assets/images/red_hot_californiacation.jpg";
            current_song_name.innerText = "Otherside";
            current_artist_name.innerText = "Red Hot Chili Peppers";
            current_song = 2;
            break;

        case "snow":
            current_song_image.src = "./assets/images/red_hot_stadium.jpg";
            current_song_album_photo.src = "./assets/images/red_hot_stadium.jpg";
            current_song_name.innerText = "Snow(Hey Oh)";
            current_artist_name.innerText = "Red Hot Chili Peppers";
            current_song = 3;
            break;

        case "take_what_you_want":
            current_song_image.src = "./assets/images/post_malone.jpg";
            current_song_album_photo.src = "./assets/images/post_malone.jpg";
            current_song_name.innerText = "Take What You Want";
            current_artist_name.innerText = "Post Malone";
            current_song = 4;
            break;
    
        default:
            break;
    }

}

function random() {
    if (random_status) {
        random_status = false;
        random_button.src = "./assets/icons/random2.png";
        random_button.style.bottom = "0px";
    } else {
        random_status = true;
        random_button.src = "./assets/icons/random2_active.png";
        random_button.style.position = "relative";
        random_button.style.bottom = "2px";
    }
}

function back() {
    // let playing = !(music.paused);

    if (current_song == 0) {
        current_song = SONGS_QUANTITY - 1;
    } else {
        current_song -= 1;
    }

    // music.src = `./assets/music/${song_list[current_song]}.mp3`;
    update_current_song(song_list[current_song], false);

    // if (playing) {
    //     music.play();
    // }
}

function play_pause() {
    if (music.paused) {
        music.play();
        play_pause_button.src = "./assets/icons/pause2.png";
    } else {
        music.pause();
        play_pause_button.src = "./assets/icons/play2.png";
    }
}

function next(ended) {
    // let playing = !(music.paused);

    if (random_status) {
        let aux = getRndInteger(0, SONGS_QUANTITY - 1);
        while (aux == current_song) {
            aux = getRndInteger(0, SONGS_QUANTITY - 1);
        }
        current_song = aux;
    } else {
        if (current_song == SONGS_QUANTITY - 1) {
            current_song = 0;
        } else {
            current_song += 1;
        }
    }

    // music.src = `./assets/music/${song_list[current_song]}.mp3`;
    if (ended) {
        update_current_song(song_list[current_song], true);
    } else {
        update_current_song(song_list[current_song], false);
    }

    // if (playing) {
        // music.play();
    // }
}

function repeat() {
    if (music.loop) {
        music.loop = false;
        repeat_button.src = "./assets/icons/repeat2.png";
    } else {
        music.loop = true;
        repeat_button.src = "./assets/icons/repeat2_active.png";
    }
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}