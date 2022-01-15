const SONGS_QUANTITY = 5;

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

let song_list = ["somebody_to_love", "bohemian_rhapsody", "otherside", "snow", "take_what_you_want"];
let current_song = 0;
let random_status = false;
let repeat_status = false;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function update_current_song(song) {
    let playing = !(music.paused);

    music.src = `./assets/music/${song}.mp3`;

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
    update_current_song(song_list[current_song]);

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

function next() {
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
    update_current_song(song_list[current_song]);

    // if (playing) {
        // music.play();
    // }
}

function repeat() {
    if (repeat_status) {
        repeat_status = false;
        repeat_button.src = "./assets/icons/repeat2.png";
    } else {
        repeat_status = true;
        repeat_button.src = "./assets/icons/repeat2_active.png";
    }
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}