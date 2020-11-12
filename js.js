const ivestasMokSk = document.querySelector("#ivestasMokSk");
const ivestasUzdSk = document.querySelector("#ivestasUzdSk");
const suzinokBtn = document.querySelector("#suzinokBtn");
const tableBody = document.querySelector("#tableBody");

suzinokBtn.addEventListener('click', pridekLentele);
console.log("pries f-ja");

function pridekLentele() {
    console.log("pradzia f-jos");
    const mokSk = ivestasMokSk.value;
    const uzdSk = ivestasUzdSk.value;

    for (let i = 0; i < mokSk; i++) {
        const row = document.createElement("tr");
        tableBody.appendChild(row);

        const cell1 = document.createElement("td");
        const randomNumeris = Math.floor(Math.random() * uzdSk)+1;
        cell1.innerHTML = randomNumeris;
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        cell2.innerHTML = '<input type="text" placeholder="Vardas">';
        row.appendChild(cell2);
    }

    console.log("pabaiga f-jos");
}