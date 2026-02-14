function play(){
    let name=document.getElementById("name").value;
    if(!name){alert("Enter username");return;}

    document.getElementById("game").innerHTML=
    `<iframe src="CLIENT_LINK_HERE" width="100%" height="600"></iframe>`;
}
