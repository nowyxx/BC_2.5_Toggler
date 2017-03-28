
function Toggler(sel) {

    var sel = document.querySelector(sel);

    return{
        getElem: function() {
            return sel
        },
        show: function(){
            sel.style.display = "";

        },
        hide: function(){
            sel.style.display = "none";
        }
    }

};


var elem = new Toggler("#section");
var button = document.querySelector("#button");





button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }
 
}, false);