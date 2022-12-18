namespace A10 {
    let checkbox = document.getElementById('checkbox',) as HTMLInputElement | null;
    let meineListe = document.getElementsByTagName("LI");
    let j;
    for(j = 0; j < meineListe.length; j++){
        var schliessen = document.createElement("SPAN");
        var text = document.createTextNode("\u00D7");
        schliessen.className = "close";
        schliessen.appendChild(text);
        meineListe[j].appendChild(schliessen);
    }
    let close = document.getElementsByClassName("close");
    let k;
    for(k = 0; k < close.length; k++){
        close[k].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
    
    


document.querySelector("#liste").addEventListener('keydown',function(e:KeyboardEvent) {
    if(e.key=='Enter'){
        //const wrapper = document.querySelector("#tasks")
        //const newDiv = document.createElement("div");
        //newDiv.classList.add("p");
        //wrapper.appendChild(newDiv);
    }
})



}