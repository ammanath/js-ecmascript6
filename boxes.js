let div;
let box = document.getElementById("box");
for (let i = 0; i < 5; i++) {
    div = document.createElement("div");
    div.onclick = function () {
        alert("This is box # " + i);
    }
    box.appendChild(div);
}
