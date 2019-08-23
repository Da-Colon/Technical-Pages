function displayNextSlide() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("slides").src = images[x];
}

function displayPrevSlide() {
    x = (x === images.length - 1) ? 0 : Math.abs(x - 1);
    document.getElementById("slides").src = images[x];
}

var images = [], x = -1;
images[0] = "images/0-vs-code.png";
images[1] = "images/html.png";
images[2] = "images/css.png";
images[3] = "images/javascript.png";
images[4] = "images/python.png";
images[5] = "images/react.png";



function changeinfo(displayNextSlide, displayPrevSlide){
    let infoTitle = document.getElementById("info-title");
    switch(document.getElementById("slides").src){
        case "images/0-vs-ConvolverNode.png":
            infoTitle.innerHTML = "VS Code";
            break;
    }
}