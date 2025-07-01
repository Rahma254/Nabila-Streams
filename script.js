const songs = [
  {
    title: "Janda Nakal",
    playbackId: "1QLzDAFFm01uW02VxAf2yZ004SlFtcOLTw3L7s5woOrl5Q",
  },
  {
    title: "Drunk Confessions",
    playbackId: "d802AEWpBCRJ9dPJVhQFinHhkH01hRb027NssU1FykBgYg",
  },
  {
    title: "Broken Home Anthem",
    playbackId: "kqp9FRoagl00tTEk5ZSdlIYAfpBWgbjvGLmf2sFl9bGY",
  },
  {
    title: "Pelukan Senja",
    playbackId: "y02TWzsfRTj717WZty00AY028A97xe01l501aAAJjiXAjL7A",
  },
];

let current = 0;
let likes = [0, 0, 0, 0];
let comments = [[], [], [], []];

function loadSong() {
  const song = songs[current];
  document.getElementById("mux-player").src = `https://stream.mux.com/${song.playbackId}.m3u8`;
  document.getElementById("song-info").innerText = `🎵 ${song.title}`;
  document.getElementById("like-count").innerText = likes[current];
  renderComments();
}

function nextSong() {
  current = (current + 1) % songs.length;
  loadSong();
}

function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong();
}

function likeSong() {
  likes[current]++;
  document.getElementById("like-count").innerText = likes[current];
}

function shareSong() {
  const song = songs[current];
  const url = `https://stream.mux.com/${song.playbackId}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link disalin ke clipboard!");
  });
}

function addComment() {
  const input = document.getElementById("comment-input");
  const text = input.value.trim();
  if (text) {
    comments[current].push(text);
    input.value = "";
    renderComments();
  }
}

function renderComments() {
  const ul = document.getElementById("comments");
  ul.innerHTML = "";
  comments[current].forEach((c) => {
    const li = document.createElement("li");
    li.textContent = c;
    ul.appendChild(li);
  });
}

window.onload = loadSong;
