var piano = require('./index');

$(document).ready(function () {

    var elemID = 'piano-container';
    var p = new piano(elemID, {
        octaves: 2,
        octaveBegin: 3
    });
    
    p.createPiano();


    $('#piano-container > .piano li').click(function (e) {
        console.log(e.target.dataset)
    })
})