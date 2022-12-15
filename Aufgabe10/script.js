var A10;
(function (A10) {
    document.querySelector("#liste").addEventListener('keydown', function (e) {
        if (e.key == 'Enter') {
            const wrapper = document.querySelector("#tasks");
            const newDiv = document.createElement("div");
            newDiv.classList.add("p");
            wrapper.appendChild(newDiv);
        }
    });
})(A10 || (A10 = {}));
//# sourceMappingURL=script.js.map