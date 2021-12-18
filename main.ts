const songs = {
    "We wish you a merry christmas": [
        { note: Note.C, length: 1 },
        { note: Note.F, length: 0.75 },
        { note: 0, length: 0.25 },
        { note: Note.F, length: 0.5 },
        { note: Note.G, length: 0.5 },
    ]
}

input.onButtonPressed(Button.A, function () {
    const song = songs["We wish you a merry christmas"]
    music.setTempo(120)
    song.forEach(n => n.note ? music.playTone(262, music.beat(BeatFraction.Whole)) : music.rest(music.beat(BeatFraction.Whole)))
    
    
})
