
    this.setEvents = function () {
        var elems = document.querySelectorAll('#'+ this.elemID + ' li ');
        
        elems.forEach(function(elem) {
            elem.addEventListener("mousedown mouseup", function() {
                console.log('clicked')
            });
        });

        /*
        $('div').on('mousedown mouseup', function mouseState(e) {
            if (e.type == "mousedown") {
                //code triggers on hold
                console.log("hold");
            }
        });*/


    }