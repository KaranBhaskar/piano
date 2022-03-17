const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626 },
  { note: "Db", key: "S", frequency: 277.183 },
  { note: "D", key: "X", frequency: 293.626 },
  { note: "Eb", key: "D", frequency: 311.626 },
  { note: "E", key: "C", frequency: 329.626 },
  { note: "F", key: "V", frequency: 349.626 },
  { note: "Gb", key: "G", frequency: 369.626 },
  { note: "G", key: "B", frequency: 391.626 },
  { note: "Ab", key: "H", frequency: 415.626 },
  { note: "A", key: "N", frequency: 440.626 },
  { note: "Bb", key: "J", frequency: 466.626 },
  { note: "B", key: "M", frequency: 493.626 },
];

// 1. addEventlistenr for key down in order to start playing music
document.addEventListener("keydown", (event) => {
  if (event.repeat == true) return;
  const keyboardKey = event.code;
  let noteDetail = getNoteDetail(keyboardKey);

  if (noteDetail == null) return;
  noteDetail.active = true;
  playMusic();
});

// 2. addEventListener for key up in order to stop playimg music
document.addEventListener("keyup", (event) => {
  if (event.repeat == true) return;
  const keyboardKey = event.code;
  let noteDetail = getNoteDetail(keyboardKey);

  if (noteDetail == null) return;
  noteDetail.active = false;
  playMusic();
});

function getNoteDetail(KeyboardKey) {
  return NOTE_DETAILS.find((element) => `Key${element.key}` == KeyboardKey);
}

function playMusic() {
  NOTE_DETAILS.forEach((n) => {
    const keyElement = document.querySelector(`[data-note="${n.note}"]`);
    console.log(keyElement);
    keyElement.classList.toggle("active", n.active || false);
  });
}
