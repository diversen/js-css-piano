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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9rZXlib2FyZC10b25lcy9pbmRleC5qcyIsInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGtleWJvYXJkVG9uZXMgPSByZXF1aXJlKCdrZXlib2FyZC10b25lcycpXG5cbmZ1bmN0aW9uIHBpYW5vKGVsZW1JRCwgb3B0cykge1xuXG4gICAgdGhpcy5lbGVtSUQgPSBlbGVtSURcbiAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtSUQpXG4gICAgXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgICAgb2N0YXZlczogMixcbiAgICAgICAgb2N0YXZlQmVnaW46IDNcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7fVxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRzKVxuICAgIFxuICAgIHRoaXMuY3JlYXRlUGlhbm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBodG1sID0gdGhpcy5nZXRQaWFub0hUTUwoKVxuICAgICAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gaHRtbFxuICAgIH1cblxuICAgIHRoaXMuZ2V0UGlhbm9IVE1MID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGh0bWwgPSBgPHVsIGNsYXNzPVwicGlhbm9cIj5gXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gdGhpcy5vcHRpb25zLm9jdGF2ZXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRPY3RhdmUgPSB0aGlzLm9wdGlvbnMub2N0YXZlQmVnaW4gICAgXG4gICAgICAgICAgICBodG1sICs9IHRoaXMuZ2V0VG9uZXMoY3VycmVudE9jdGF2ZSlcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vY3RhdmVCZWdpbisrIFxuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gYDwvdWw+YFxuICAgICAgICByZXR1cm4gaHRtbFxuICAgIH1cblxuICAgIHRoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSA9IGZ1bmN0aW9uIChub3RlLCBvY3RhdmUpIHtcbiAgICAgICAgcmV0dXJuIG5vdGUgKyBvY3RhdmVcbiAgICB9XG5cbiAgICB0aGlzLmdldFRvbmVzID0gZnVuY3Rpb24gKG9jdGF2ZSkge1xuICAgICAgICBsZXQgb2N0YXZlSFRNTCA9IFxuICAgICAgICBgXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3aGl0ZSBjXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2MnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJibGFjayBjc1wiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdjIycsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndoaXRlIGRcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZCcsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImJsYWNrIGRzXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2QjJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid2hpdGUgZVwiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdlJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid2hpdGUgZlwiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdmJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmxhY2sgZnNcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZiMnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3aGl0ZSBnXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2cnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJibGFjayBnc1wiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdnIycsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndoaXRlIGFcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnYScsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImJsYWNrIGFzXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2EjJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid2hpdGUgYlwiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdiJywgb2N0YXZlKX1cIj48L2xpPmBcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gb2N0YXZlSFRNTFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwaWFubzsiLCJ2YXIga2V5Ym9hcmRUb25lcyA9IHtcbiAgICAgIGE6ICdDJywgXG4gICAgICB3OiAnQyMnLFxuICAgICAgczogJ0QnLFxuICAgICAgZTogJ0QjJyxcbiAgICAgIGQ6ICdFJyxcbiAgICAgIGY6ICdGJyxcbiAgICAgIHQ6ICdGIycsXG4gICAgICBnOiAnRycsXG4gICAgICB5OiAnRyMnLFxuICAgICAgaDogJ0EnLFxuICAgICAgdTogJ0EjJyxcbiAgICAgIGo6ICdCJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlib2FyZFRvbmVzOyIsInZhciBwaWFubyA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGVsZW1JRCA9ICdwaWFuby1jb250YWluZXInO1xuICAgIHZhciBwID0gbmV3IHBpYW5vKGVsZW1JRCk7XG4gICAgXG4gICAgcC5jcmVhdGVQaWFubyh7XG4gICAgICAgIG9jdGF2ZXM6IDIsXG4gICAgICAgIG9jdGF2ZUJlZ2luOiAzXG4gICAgfSk7XG5cblxuICAgICQoJyNwaWFuby1jb250YWluZXIgPiAucGlhbm8gbGknKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0KVxuICAgIH0pXG59KSJdfQ==
