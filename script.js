function play(){
    let name = document.getElementById("name").value;
    if(!name){
        alert("Enter username bro");
        return;
    }

    document.getElementById("game").innerHTML =
    `<iframe src="https://eaglercraft.com/mc/1.8/" 
    width="100%" height="600" style="border:none;"></iframe>`;
}
