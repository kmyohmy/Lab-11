/*eslint-env browser*/

function init() {
    "use strict";
    var btnLogin = window.document.getElementById("login");
    btnLogin.addEventListener("click", function () {
        window.open("login.html", "login", "width=400,height=400");
        
        
    });
    /*function showValue(id, value) {
        var newValue = window.document.getElementById(id).value = value;
    }*/
    
}

window.addEventListener("load", init);