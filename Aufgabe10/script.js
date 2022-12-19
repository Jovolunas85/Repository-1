var A10;
(function (A10) {
    let number = document.getElementById("zahl");
    let counter = 0;
    window.addEventListener('load', () => {
        const form = document.querySelector("#new-task");
        const input = document.querySelector("#input");
        const list_el = document.querySelector("#tasks");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            counter++;
            console.log(counter);
            number.innerHTML = "" + counter;
            const task = input.value;
            if (!task) {
                alert("Please add a task");
                return;
            }
            const checkmark = document.createElement("div");
            const check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.classList.add("check");
            checkmark.appendChild(check);
            const task_el = document.createElement("div");
            task_el.classList.add("task");
            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");
            task_el.appendChild(checkmark);
            task_el.appendChild(task_content_el);
            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");
            task_content_el.appendChild(task_input_el);
            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");
            const task_delete_el = document.createElement("button");
            task_delete_el.classList.add("delete");
            task_delete_el.innerHTML = "Delete";
            task_el.appendChild(task_actions_el);
            task_actions_el.appendChild(task_delete_el);
            list_el.appendChild(task_el);
            input.value = "";
            task_delete_el.addEventListener('click', () => {
                list_el.removeChild(task_el);
                counter--;
                number.innerHTML = "" + counter;
            });
        });
    });
    //document.querySelector("#liste").addEventListener('keydown',function(e:KeyboardEvent) {
    //    if(e.key=='Enter'){
    //        const wrapper = document.querySelector("#tasks")
    //        const newDiv = document.createElement("li");
    //        newDiv.classList.add("li");
    //        wrapper.appendChild(newDiv);
    //    }
    //})
})(A10 || (A10 = {}));
//# sourceMappingURL=script.js.map