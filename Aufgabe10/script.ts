namespace A10 {

document.querySelector("#liste").addEventListener('keydown',function(e:KeyboardEvent) {
    if(e.key=='Enter'){
        const wrapper = document.querySelector("#tasks")
        const newDiv = document.createElement("div");
        newDiv.classList.add("p");
        wrapper.appendChild(newDiv);
    }
})
}