let inpKey = document.getElementById("inpKey");
const btnInsert = document.getElementById("btnInsert");
let lsOutput = document.createElement("div");
let button = document.createElement("button");

btnInsert.onclick = function () {
    const key = inpKey.value;
    if (key) {
        localStorage.setItem(key, "");
        const lsKey = localStorage.key(key);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    lsOutput.innerHTML += key;
    button.textContent = "Radera namn";
    button.id = key;
    lsOutput.appendChild(button);
    lsOutput.innerHTML += "<br/>";
    document.body.appendChild(lsOutput);
    document.getElementById(`${button.id}`).addEventListener("click", function () {
        name = button.id;
        localStorage.removeItem(`${button.id}`);
        location.reload();
    });
}
