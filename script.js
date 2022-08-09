const audios = {
    emole: './src/audio/emole.wav',
    belezita: './src/audio/belezita.wav'
}

function initAudios() {
    const soms = Object.keys(audios)
    debugger
    soms.map((som) => {
        let audio = new Audio(audios[som]);
        audio.volume = 0;
        audio.load();
        console.log(som);
    })
}

function playAudio(varAudio) {   
    let audio = new Audio(audios[varAudio]);
    audio.play();
}

initAudios()