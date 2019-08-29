let images = [], x = -1;
images[0] = "images/0-vs-code.png";
images[1] = "images/html.png";
images[2] = "images/css.png";
images[3] = "images/javascript.png";
images[4] = "images/python.png";
images[5] = "images/react.png";
images[6] = "images/git.png";

function displayNextSlide() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("slides").src = images[x];
    changeInfo(images[x]);
    changeLink(images[x]);
}

function displayPrevSlide() {
    x = (x === 0) ? images.length -1  : x - 1;
    document.getElementById("slides").src = images[x];
    changeInfo(images[x]);
    changeLink(images[x]);
}




function changeInfo(x){
        let infoTitle = document.getElementById("info-title");
        switch(x){
            case images[0]:
            infoTitle.innerHTML = "Visual Studio Code ";
            break;
            case images[1]:
            infoTitle.innerHTML = "HTML";
            break;
            case images[2]:
            infoTitle.innerHTML = "CSS";
            break;
            case images[3]:
            infoTitle.innerHTML = "Javascript";
            break;
            case images[4]:
            infoTitle.innerHTML = "Python";
            break;
            case images[5]:
            infoTitle.innerHTML = "React.js";
            break;
            case images[6]:
            infoTitle.innerHTML = "GIT";
            break;
            default:
            infoTitle.innerHTML = "VS Code";
            break;
        }
}
function changeLink(x){
        let infoLinks = document.getElementById("infoLinks");
        switch(x){
            case images[0]:
            infoLinks.href = "techPages/vscode.html";
            break;
            case images[1]:
            infoLinks.href = "techPages/html.html";
            break;
            case images[2]:
            infoLinks.href = "techPages/css.html";
            break;
            case images[3]:
            infoLinks.href = "techPages/javasript.html";
            break;
            case images[4]:
            infoLinks.href = "techPages/python.html";
            break;
            case images[5]:
            infoLinks.href = "techPages/react.html";
            break;
            case images[6]:
            infoLinks.href = "techPages/git.html";
            break;
        }
}