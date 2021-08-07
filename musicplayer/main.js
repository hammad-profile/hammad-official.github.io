
var music = document.querySelector('audio');
var play = document.getElementById('play');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var im = document.getElementById('im');

var songs = [{
    name: 'chainsmoker',
    title: 'This Feeling',
    artist: 'The Chainsmokers'
},
{
    name: 'dua lipa',
    title: 'New Rules',
    artist: 'Dua Lipa'
},
{
    name: 'ellie goulding',
    title: 'Love Me ',
    artist: 'Ellie Goulding'
}]

var playing = false

 function playmusic() {
    playing = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
}

 function pausemusic() {
    playing = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
}

play.addEventListener('click', function aplay() {
    if (playing) {
        pausemusic();
    }
    else {
        playmusic()
    }
})



function psongs(songs) {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = './audio/' + songs.name + '.mp3'
    im.src = './images/' + songs.name + '.jpg'
}


songsIndex = 0;

function nextsong() {
    songsIndex++
    psongs(songs[songsIndex]);
}

function prevsong() {
    songsIndex--
    psongs(songs[songsIndex]);
}
next.addEventListener('click', nextsong)
prev.addEventListener('click', prevsong)

