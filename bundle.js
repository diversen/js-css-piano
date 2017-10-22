(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        
        let octaveBegin = this.options.octaveBegin
        let html = `<ul class="piano">`
        for (i = 1; i <= this.options.octaves; i++) {  
            html += this.getTones(octaveBegin)
            octaveBegin++ 
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
            <li class="black cs" data-note="${this.getNoteAndOctave('cs', octave)}"></li>
            <li class="white d" data-note="${this.getNoteAndOctave('d', octave)}"></li>
            <li class="black ds" data-note="${this.getNoteAndOctave('ds', octave)}"></li>
            <li class="white e" data-note="${this.getNoteAndOctave('e', octave)}"></li>
            <li class="white f" data-note="${this.getNoteAndOctave('f', octave)}"></li>
            <li class="black fs" data-note="${this.getNoteAndOctave('fs', octave)}"></li>
            <li class="white g" data-note="${this.getNoteAndOctave('g', octave)}"></li>
            <li class="black gs" data-note="${this.getNoteAndOctave('gs', octave)}"></li>
            <li class="white a" data-note="${this.getNoteAndOctave('a', octave)}"></li>
            <li class="black as" data-note="${this.getNoteAndOctave('as', octave)}"></li>
            <li class="white b" data-note="${this.getNoteAndOctave('b', octave)}"></li>`
            
        return octaveHTML
    }
}

module.exports = piano;

},{}],2:[function(require,module,exports){
var piano = require('./index');

$(document).ready(function () {

    var elemID = 'piano-container';
    var p = new piano(elemID, {
        octaves: 1,
        octaveBegin: 3
    });
    
    p.createPiano();


    $('#piano-container > .piano li').click(function (e) {
        console.log(e.target.dataset)
    })
})
},{"./index":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHBpYW5vKGVsZW1JRCwgb3B0cykge1xuXG4gICAgdGhpcy5lbGVtSUQgPSBlbGVtSURcbiAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtSUQpXG4gICAgXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgICAgb2N0YXZlczogMixcbiAgICAgICAgb2N0YXZlQmVnaW46IDNcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7fVxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRzKVxuICAgIFxuICAgIHRoaXMuY3JlYXRlUGlhbm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBodG1sID0gdGhpcy5nZXRQaWFub0hUTUwoKVxuICAgICAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gaHRtbFxuICAgIH1cblxuICAgIHRoaXMuZ2V0UGlhbm9IVE1MID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IG9jdGF2ZUJlZ2luID0gdGhpcy5vcHRpb25zLm9jdGF2ZUJlZ2luXG4gICAgICAgIGxldCBodG1sID0gYDx1bCBjbGFzcz1cInBpYW5vXCI+YFxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHRoaXMub3B0aW9ucy5vY3RhdmVzOyBpKyspIHsgIFxuICAgICAgICAgICAgaHRtbCArPSB0aGlzLmdldFRvbmVzKG9jdGF2ZUJlZ2luKVxuICAgICAgICAgICAgb2N0YXZlQmVnaW4rKyBcbiAgICAgICAgfVxuICAgICAgICBodG1sICs9IGA8L3VsPmBcbiAgICAgICAgcmV0dXJuIGh0bWxcbiAgICB9XG5cbiAgICB0aGlzLmdldE5vdGVBbmRPY3RhdmUgPSBmdW5jdGlvbiAobm90ZSwgb2N0YXZlKSB7XG4gICAgICAgIHJldHVybiBub3RlICsgb2N0YXZlXG4gICAgfVxuXG4gICAgdGhpcy5nZXRUb25lcyA9IGZ1bmN0aW9uIChvY3RhdmUpIHtcbiAgICAgICAgbGV0IG9jdGF2ZUhUTUwgPSBcbiAgICAgICAgYFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid2hpdGUgY1wiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdjJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmxhY2sgY3NcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnY3MnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3aGl0ZSBkXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2QnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJibGFjayBkc1wiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdkcycsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndoaXRlIGVcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZScsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndoaXRlIGZcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZicsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImJsYWNrIGZzXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2ZzJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid2hpdGUgZ1wiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdnJywgb2N0YXZlKX1cIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmxhY2sgZ3NcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZ3MnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3aGl0ZSBhXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2EnLCBvY3RhdmUpfVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJibGFjayBhc1wiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdhcycsIG9jdGF2ZSl9XCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndoaXRlIGJcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnYicsIG9jdGF2ZSl9XCI+PC9saT5gXG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIG9jdGF2ZUhUTUxcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGlhbm87XG4iLCJ2YXIgcGlhbm8gPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBlbGVtSUQgPSAncGlhbm8tY29udGFpbmVyJztcbiAgICB2YXIgcCA9IG5ldyBwaWFubyhlbGVtSUQsIHtcbiAgICAgICAgb2N0YXZlczogMSxcbiAgICAgICAgb2N0YXZlQmVnaW46IDNcbiAgICB9KTtcbiAgICBcbiAgICBwLmNyZWF0ZVBpYW5vKCk7XG5cblxuICAgICQoJyNwaWFuby1jb250YWluZXIgPiAucGlhbm8gbGknKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0KVxuICAgIH0pXG59KSJdfQ==
