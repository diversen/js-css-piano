(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var keyboardTones = require('keyboard-tones')

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
        this.setEvents();
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
},{"keyboard-tones":2}],2:[function(require,module,exports){
var keyboardTones = {
      a: 'C', 
      w: 'C#',
      s: 'D',
      e: 'D#',
      d: 'E',
      f: 'F',
      t: 'F#',
      g: 'G',
      y: 'G#',
      h: 'A',
      u: 'A#',
      j: 'B'
};

module.exports = keyboardTones;
},{}],3:[function(require,module,exports){
var piano = require('./index');

$(document).ready(function () {

    var elemID = 'piano-container';
    var p = new piano(elemID);
    
    p.createPiano({
        octaves: 2,
        octaveBegin: 3
    });


    $('#piano-container > .piano li').click(function (e) {
        console.log(e.target.dataset)
    })
})
},{"./index":1}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9rZXlib2FyZC10b25lcy9pbmRleC5qcyIsInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIga2V5Ym9hcmRUb25lcyA9IHJlcXVpcmUoJ2tleWJvYXJkLXRvbmVzJylcblxuZnVuY3Rpb24gcGlhbm8oZWxlbUlELCBvcHRzKSB7XG5cbiAgICB0aGlzLmVsZW1JRCA9IGVsZW1JRFxuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1JRClcbiAgICBcbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICBvY3RhdmVzOiAyLFxuICAgICAgICBvY3RhdmVCZWdpbjogM1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IHt9XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGVmYXVsdHMsIG9wdHMpXG4gICAgXG4gICAgdGhpcy5jcmVhdGVQaWFubyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLmdldFBpYW5vSFRNTCgpXG4gICAgICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRQaWFub0hUTUwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgaHRtbCA9IGA8dWwgY2xhc3M9XCJwaWFub1wiPmBcbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSB0aGlzLm9wdGlvbnMub2N0YXZlczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudE9jdGF2ZSA9IHRoaXMub3B0aW9ucy5vY3RhdmVCZWdpbiAgICBcbiAgICAgICAgICAgIGh0bWwgKz0gdGhpcy5nZXRUb25lcyhjdXJyZW50T2N0YXZlKVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9jdGF2ZUJlZ2luKysgXG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSBgPC91bD5gXG4gICAgICAgIHJldHVybiBodG1sXG4gICAgfVxuXG4gICAgdGhpcy5nZXROb3RlQW5kT2N0YXZlID0gZnVuY3Rpb24gKG5vdGUsIG9jdGF2ZSkge1xuICAgICAgICByZXR1cm4gbm90ZSArIG9jdGF2ZVxuICAgIH1cblxuICAgIHRoaXMuZ2V0VG9uZXMgPSBmdW5jdGlvbiAob2N0YXZlKSB7XG4gICAgICAgIGxldCBvY3RhdmVIVE1MID0gXG4gICAgICAgIGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndoaXRlIGNcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnYycsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImJsYWNrIGNzXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2MjJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid2hpdGUgZFwiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdkJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmxhY2sgZHNcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZCMnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3aGl0ZSBlXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2UnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3aGl0ZSBmXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2YnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJibGFjayBmc1wiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdmIycsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndoaXRlIGdcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZycsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImJsYWNrIGdzXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2cjJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid2hpdGUgYVwiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdhJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmxhY2sgYXNcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnYSMnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3aGl0ZSBiXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2InLCBvY3RhdmUpfVwiPjwvbGk+YFxuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBvY3RhdmVIVE1MXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBpYW5vOyIsInZhciBrZXlib2FyZFRvbmVzID0ge1xuICAgICAgYTogJ0MnLCBcbiAgICAgIHc6ICdDIycsXG4gICAgICBzOiAnRCcsXG4gICAgICBlOiAnRCMnLFxuICAgICAgZDogJ0UnLFxuICAgICAgZjogJ0YnLFxuICAgICAgdDogJ0YjJyxcbiAgICAgIGc6ICdHJyxcbiAgICAgIHk6ICdHIycsXG4gICAgICBoOiAnQScsXG4gICAgICB1OiAnQSMnLFxuICAgICAgajogJ0InXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleWJvYXJkVG9uZXM7IiwidmFyIHBpYW5vID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZWxlbUlEID0gJ3BpYW5vLWNvbnRhaW5lcic7XG4gICAgdmFyIHAgPSBuZXcgcGlhbm8oZWxlbUlEKTtcbiAgICBcbiAgICBwLmNyZWF0ZVBpYW5vKHtcbiAgICAgICAgb2N0YXZlczogMixcbiAgICAgICAgb2N0YXZlQmVnaW46IDNcbiAgICB9KTtcblxuXG4gICAgJCgnI3BpYW5vLWNvbnRhaW5lciA+IC5waWFubyBsaScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQpXG4gICAgfSlcbn0pIl19
