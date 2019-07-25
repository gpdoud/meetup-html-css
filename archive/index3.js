console.log("Ok");

var imgs = [];

for(var i=0; i<= 8; i++) {
    var img = new Image();
    img.src = "./images/GermanShepherd-"+i+".jpg";
    imgs.push(img);
}

var idx = 0;

function loaded() {
    load(0);
}

function load(pidx) {
    var imgCtrl = document.getElementById("gs");
    imgCtrl.src = imgs[pidx].src;
}

function next() { 
    if(idx == 8) {
        idx = 0;
    } else {
       idx = idx+1; 
    }
    load(idx);
}
var prev = () => { idx = (idx == 0) ? 8 : idx-1; load(idx); }