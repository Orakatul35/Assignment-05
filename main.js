const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal","cyan"];

const button = document.getElementById("colorBtn");
button.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let selectedColor = colors[randomIndex];
    document.body.style.backgroundColor = selectedColor;
});


const assignSpan = document.getElementById("assignCount");
const taskSpan = document.getElementById("taskCount");
let completeButton1 = document.getElementById("completeBtn1");
let completeButton2 = document.getElementById("completeBtn2");
let completeButton3= document.getElementById("completeBtn3");
let completeButton4 = document.getElementById("completeBtn4");
let completeButton5 = document.getElementById("completeBtn5");
let completeButton6 = document.getElementById("completeBtn6");

completeButton1.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton1.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
    }
});
completeButton2.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton2.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
    }
});
completeButton3.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton3.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
    }
});
completeButton4.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton4.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
    }
});
completeButton5.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton5.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
    }
});
completeButton6.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton6.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
    }
});