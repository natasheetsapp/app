const audios = {
    emole: './src/audio/emole.wav',
    belezita: './src/audio/belezita.wav'
}

function playAudio(varAudio) {   
    let audio = new Audio(audios[varAudio]);
    audio.play();
}

