const b1El = document.querySelector("p");
b1El.textContent = (compPassGen());

const b2El = document.querySelector("p");
b2El.textContent = (simpPassGen());

const b3El = document.querySelector("p");
b3El.textContent = (justNumGen());


function compPassGen(length) {
    var result           = "";
    var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}|[]\<>./</>?+";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function simpPassGen(length) {
    var result           = "";
    var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function justNumGen(length) {
    var result           = "";
    var characters       = "0123456789012345678901234567890123456789";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

complex.addEventListener("click", function(){
    b1El.textContent = "Password: " + compPassGen(15);
});

simple.addEventListener("click", function(){
    b2El.textContent = "Password: " + simpPassGen(15);
});

num.addEventListener("click", function(){
    b3El.textContent = "Password: " + justNumGen(15);
});