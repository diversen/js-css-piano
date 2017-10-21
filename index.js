function piano(elemID, opts) {

    this.elemID = elemID
    this.elem = document.getElementById(elemID)
    
    this.defaults = {
        octaves: 2,
        octaveBegin: 3
    }

    this.options = {}
    Object.assign(this.options, this.defaults, opts)
    
    this.createPiano = function () {
        let html = this.getPianoHTML()
        this.elem.innerHTML = html
    }

    this.getPianoHTML = function () {
        
        let html = `<ul class="piano">`
        for (i = 1; i <= this.options.octaves; i++) {
            let currentOctave = this.options.octaveBegin    
            html += this.getTones(currentOctave)
            this.options.octaveBegin++ 
        }
        html += `</ul>`
        return html
    }

    this.getNoteAndOctave = function (note, octave) {
        return note + octave
    }

    this.getTones = function (octave) {
        let octaveHTML = 
        `
            <li class="white c" data-note="${this.getNoteAndOctave('c', octave)}"></li>
            <li class="black cs" data-note="${this.getNoteAndOctave('c#', octave)}"></li>
            <li class="white d" data-note="${this.getNoteAndOctave('d', octave)}"></li>
            <li class="black ds" data-note="${this.getNoteAndOctave('d#', octave)}"></li>
            <li class="white e" data-note="${this.getNoteAndOctave('e', octave)}"></li>
            <li class="white f" data-note="${this.getNoteAndOctave('f', octave)}"></li>
            <li class="black fs" data-note="${this.getNoteAndOctave('f#', octave)}"></li>
            <li class="white g" data-note="${this.getNoteAndOctave('g', octave)}"></li>
            <li class="black gs" data-note="${this.getNoteAndOctave('g#', octave)}"></li>
            <li class="white a" data-note="${this.getNoteAndOctave('a', octave)}"></li>
            <li class="black as" data-note="${this.getNoteAndOctave('a#', octave)}"></li>
            <li class="white b" data-note="${this.getNoteAndOctave('b', octave)}"></li>`
            
        return octaveHTML
    }
}

module.exports = piano;