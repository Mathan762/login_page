function changeHeading()
{
    document.getElementById("heading").style.visibility="visible";
}

function changeSVG()
{
    document.querySelector("svg").style.visibility="visible";
}
var i = 0;

function changeBG() {

    if(i == 3) {
        i = 0;
    }
    let color_arr = ["rebeccapurple", "red", "#c7956d"];
    //
    document.body.style.backgroundColor=color_arr[i++];
    // document.body.style.animation="body1 2s";
    // document.body.style.backgroundColor="rebeccapurple";
    // document.body.style.animation="body2 2s";
    // document.body.style.backgroundColor="red";
    // document.body.style.animation="body3 2s";
    // document.body.style.backgroundColor="#c7956d";
}


    // document.getElementById("a9e06111-6f74-41cd-a7ac-d054423684ef").innerHTML="undraw_shared_workspace_hwky.svg";

setInterval(changeHeading, 2000);
setInterval(changeSVG, 2000);
setInterval(changeBG, 4000);
// changeBG();

let login = document.getElementById("#login");

if (login.onclick) {
    document.getElementById("container").style.visibility="visible";
    document.getElementById("container-reg").style.visibility="hidden";
}