const inputbox = document.getElementById("todo-input");
const submitbtn = document.getElementById("submitbtn");
const resultList = document.getElementById("resultList");

submitbtn.addEventListener("click", function (event) {
    event.preventDefault();

    const inputval = inputbox.value;

    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" class="tick"> ${inputval} `;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    resultList.appendChild(li);

    inputbox.value = "";
});

const filterSelect = document.querySelector(".filter");

filterSelect.addEventListener("change", function () {
    const todos = document.querySelectorAll("#resultList li");

    todos.forEach(function (todo) {
        const checkbox = todo.querySelector(".tick");

        if (filterSelect.value === "All") {
            todo.style.display = "flex";
        } 
        else if (filterSelect.value === "Completed") {
            if (checkbox.checked) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
        } 
        else if (filterSelect.value === "Incompleted") {
            if (!checkbox.checked) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
        }
    });
});