let label = document.createElement("p");
label.setAttribute("id", "counter");
label.style.color = "#000000";
label.style.fontSize = "12px";
label.textContent = "0";
label.style.display = "Block"

let btn = document.createElement("button");
btn.setAttribute("id", "incrementBtn");
btn.textContent = "Increment";

document.body.append(label);
document.body.append(btn);

let count = 0
function increment() {
    alert(count)
    count++
    label.textContent = count
}

btn.addEventListener("click", increment)