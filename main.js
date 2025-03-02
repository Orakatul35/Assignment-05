const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal","cyan"];

const button = document.getElementById("colorBtn");
button.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let selectedColor = colors[randomIndex];
    document.body.style.backgroundColor = selectedColor;
});


const assignSpan = document.getElementById("assignCount");
const taskSpan = document.getElementById("taskCount");
let messageBox1 = document.getElementById('Message1');
let messageBox2 = document.getElementById('Message2');
let messageBox3 = document.getElementById('Message3');
let messageBox4 = document.getElementById('Message4');
let messageBox5 = document.getElementById('Message5');
let messageBox6 = document.getElementById('Message6');
let completeButton1 = document.getElementById("completeBtn1");
let completeButton2 = document.getElementById("completeBtn2");
let completeButton3= document.getElementById("completeBtn3");
let completeButton4 = document.getElementById("completeBtn4");
let completeButton5 = document.getElementById("completeBtn5");
let completeButton6 = document.getElementById("completeBtn6");
let shop = document.getElementById("ShopEase")
completeButton1.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton1.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
        let currentTime = new Date().toLocaleTimeString();
        messageBox1.textContent = `You completed the task Fix Mobile Button Issue at ${currentTime}`;
    }
});
completeButton2.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton2.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
        let currentTime = new Date().toLocaleTimeString();
        messageBox2.textContent = `You completed the task Add Dark Mode at ${currentTime}`;
    }
});
completeButton3.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton3.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
        let currentTime = new Date().toLocaleTimeString();
        messageBox3.textContent = `You completed the task Optimize  Home page  at ${currentTime}`;
    }
});
completeButton4.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton4.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
        let currentTime = new Date().toLocaleTimeString();
        messageBox4.textContent = `You completed the task Add new emoji 🤲 at ${currentTime}`;
    }
});
completeButton5.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton5.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
        let currentTime = new Date().toLocaleTimeString();
        messageBox5.textContent = `You completed the task Integrate OpenAI API   at ${currentTime}`;
    }
});
completeButton6.addEventListener("click", function() {
    if (confirm("Are you sure you want to complete this task?")) {
        completeButton6.disabled = true;
        taskSpan.textContent = parseInt(taskSpan.textContent) - 1;
        assignSpan.textContent = parseInt(assignSpan.textContent) + 1;
        let currentTime = new Date().toLocaleTimeString();
        messageBox6.textContent = `You completed the task  at ${currentTime}`;
    }
});
function clearHistory() {
    document.getElementById('history').innerHTML = ''; 
}