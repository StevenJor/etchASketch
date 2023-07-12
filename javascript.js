

let container = document.getElementById("container");

container.style.display = "flex";
container.style.flexWrap = "wrap";

for (let i = 0; i < (16 * 16); i++) {
    let div1 = document.createElement("div");
    div1.style.width = `${480/16}px`;
    div1.style.height = `${480/16}px`;
    div1.style.border = "1px solid black";
    div1.style.boxSizing = "border-box";
    container.appendChild(div1);
}