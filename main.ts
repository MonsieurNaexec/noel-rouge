const songs = {
    "We wish you a merry christmas": [
        { note: Note.C, length: 1 },
        { note: Note.F, length: 1 },
        { note: Note.F, length: .5 },
        { note: Note.G, length: .5 },
        { note: Note.F, length: .5 },
        { note: Note.E, length: .5 },
        { note: Note.D, length: 1 },
        { note: Note.D, length: 1 },
        { note: Note.D, length: 1 },
        { note: Note.G, length: 1 },
        { note: Note.G, length: .5 },
        { note: Note.A, length: .5 },
        { note: Note.G, length: .5 },
        { note: Note.F, length: .5 },
        { note: Note.E, length: 1 },
        { note: Note.E, length: 1 },
        { note: Note.C, length: 1 }, 
        { note: Note.A, length: 1 },
        { note: Note.A, length: .5 },
        { note: Note.Bb, length: .5 },
        { note: Note.A, length: .5 },
        { note: Note.G, length: .5 },
        { note: Note.F, length: 1 },
        { note: Note.D, length: 1 },
        { note: Note.C, length: .5 },
        { note: Note.C, length: .5 },
        { note: Note.D, length: 1 },
        { note: Note.G, length: 1 },
        { note: Note.E, length: 1 },
        { note: Note.F, length: 2 },
        { note: Note.C, length: 1 },
        { note: Note.F, length: 1 },
        { note: Note.F, length: 1 },
        { note: Note.F, length: 1 },
        { note: Note.E, length: 2 },
        { note: Note.E, length: .5 },
        { note: Note.E, length: .5 },
        { note: Note.F, length: 1 },
        { note: Note.E, length: 1 },
        { note: Note.D, length: 1 },
        { note: Note.C, length: 2 },
        { note: Note.G, length: 1 },
        { note: Note.A, length: 1 },
        { note: Note.G, length: 1 },
        { note: Note.F, length: .5 },
        { note: Note.F, length: .5 },
        { note: Note.C5, length: 1 },
        { note: Note.C, length: 1 },
        { note: Note.C, length: .5 },
        { note: Note.C, length: .5 },
        { note: Note.D, length: 1 },
        { note: Note.G, length: 1 },
        { note: Note.E, length: 1 },
        { note: Note.F, length: 2 },
    ]
}

input.onButtonPressed(Button.A, function () {
    const song = songs["We wish you a merry christmas"]
    const beatLength = 60000 / 120
    song.forEach(n => {
        if(n.note){
            music.ringTone(n.note)
            control.waitMicros(beatLength * n.length * 900)
            music.setVolume(127)
            control.waitMicros(beatLength * n.length * 100)
            music.setVolume(255)
        }else{
            music.rest(beatLength * n.length)
        }
    })
    music.stopAllSounds()    
})
