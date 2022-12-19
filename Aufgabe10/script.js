var A10;
(function (A10) {
    let counter = 0;
    function create_todo() {
        const wrapper = document.querySelector(".wrapper");
        const newDiv = document.createElement("div");
        newDiv.className = "myClass";
        const newTrash = document.createElement("i");
        let text = document.querySelector("input");
        if (text.value != "") {
            const newP = document.createElement("p");
            newP.innerHTML = text.value;
            newDiv.appendChild(newP);
            newTrash.className = "fa fa-trash-alt";
            const newCheck = document.createElement("span");
            newCheck.innerHTML = '<input type="checkbox">';
            newP.appendChild(newCheck);
            newP.appendChild(newTrash);
            wrapper.appendChild(newDiv);
        }
        newTrash.addEventListener("click", function () {
            wrapper.removeChild(newDiv);
            counter--;
            document.querySelector('#total').innerHTML = String(counter);
        });
    }
    document.querySelector(".tasks").addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            create_todo();
            counter++;
            document.querySelector('#total').innerHTML = String(counter);
        }
    });
})(A10 || (A10 = {}));
//# sourceMappingURL=script.js.map