document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "This is the glorious text-content!";
    content.style.backgroundColor = "peach";

    const p = document.createElement("p");
    p.textContent = "this is red in colour";
    p.style.color = "red";
    content.appendChild(p);

    const h1 = document.createElement("h1");
    h1.textContent = "this is blue";
    h1.style.color = "blue";
    content.appendChild(h1);

    container.appendChild(content);

    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        document.body.style.backgroundColor = "black";
        content.style.color = "white";
    });
});