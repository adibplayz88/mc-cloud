function play(){
    let name = document.getElementById("name").value;
    if(!name){
        alert("Enter username bro");
        return;
    }

    // open browser Minecraft in new tab
    window.open("https://eaglercraft.com/mc/1.8/", "_blank");
}
