
let changeDimensionBtn = document.getElementById("changeBtn");
let container = document.getElementById("container");

container.style.display = "flex";
container.style.flexWrap = "wrap";
for (let i = 0; i < (16 * 16); i++) {
    let div1 = document.createElement("div");
    div1.classList.add("myDiv1");
    
    div1.style.width = `${480/16}px`;
    div1.style.height = `${480/16}px`;
    div1.style.border = "1px solid black";
    div1.style.boxSizing = "border-box";
    
    container.appendChild(div1);
    
}


changeDimensionBtn.addEventListener("click", () => {
    let dimension = prompt("Enter new dimension (maximum 100)", "16");
    container.textContent = "";
    if (dimension > 100) {
        dimension = 100;
    }
    for (let i = 0; i < (dimension * dimension); i++) {
        let div1 = document.createElement("div");
        div1.classList.add("myDiv1");
        
        div1.style.width = `${480/dimension}px`;
        div1.style.height = `${480/dimension}px`;
        div1.style.border = "1px solid black";
        div1.style.boxSizing = "border-box";
        
        container.appendChild(div1);
        
    }
    let hoverEffect = document.querySelectorAll(".myDiv1");
    hoverEffect.forEach((div) => {
        div.addEventListener("mouseover", (event) => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    });
});
let hoverEffect = document.querySelectorAll(".myDiv1");
hoverEffect.forEach((div) => {
    div.addEventListener("mouseover", (event) => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
});