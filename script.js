function play(){
    let name = document.getElementById("name").value;
    if(!name){
        alert("Enter username bro");
        return;
    }

    // go to YOUR client page
    window.location.href = "client/index.html?user=" + encodeURIComponent(name);
}
