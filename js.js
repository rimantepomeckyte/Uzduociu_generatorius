const ivestasMokSk = document.querySelector("#ivestasMokSk");
const ivestasUzdSk = document.querySelector("#ivestasUzdSk");
const suzinokBtn = document.querySelector("#suzinokBtn");
const tableBody = document.querySelector("#tableBody");
const form = document.querySelector("#form");
const table = document.querySelector("#table");
const konteineris = document.getElementById("konteineris");

suzinokBtn.addEventListener('click', pridekLentele);
console.log("pries f-ja");
suzinokBtn.addEventListener("click", function (e) {
    e.preventDefault();
    form.reset();
}, false);

function pridekLentele() {
    console.log("pradzia f-jos");
    const mokSk = ivestasMokSk.value;
    let uzdSk = ivestasUzdSk.value;

    if (mokSk < 1 || uzdSk < 1) {
        alert("Blogai suvesti duomenys!");
    } else {

        for (let i = 0; i < mokSk; i++) {
            const row = document.createElement("tr");
            tableBody.appendChild(row);

            const cell1 = document.createElement("td");
            const randomNumeris = Math.floor(Math.random() * uzdSk)+1;
            cell1.setAttribute("class", "text-center")
            cell1.innerHTML = randomNumeris;
            row.appendChild(cell1);

            const cell2 = document.createElement("td");
            cell2.innerHTML = '<input type="text" placeholder="Vardas" class="text-center">';
            row.appendChild(cell2);

        }
        console.log("pabaiga f-jos");
    }
}

//istrynimo mygtukas
const deleteTable = document.createElement("input");
deleteTable.setAttribute("type", "button");
deleteTable.setAttribute("value", "Ištrinti lentelę");
deleteTable.setAttribute("class", "bg-info text-light");
konteineris.appendChild(deleteTable);
deleteTable.addEventListener("click", deleteTBody);

function deleteTBody() {
    console.log("delete");
    tableBody.innerHTML = "";
}

/*        const masyvasRandom = [];
       for(let j=0; j<uzdSk; j++){
           const randomNumeris = Math.floor(Math.random() * uzdSk)+1;
           if(masyvasRandom.indexOf(randomNumeris) === -1){
               masyvasRandom.push(randomNumeris);
               cell1.innerHTML = masyvasRandom[j];
           }
           else {
               continue;
           }
       }*/


/*        let uzdNr = [];
        for(j=0; j<uzdSk; j++){
            let tinka = true;
            while (tinka){
                const randomNumeris = Math.floor(Math.random() * uzdSk)+1;
                if(uzdNr.indexOf(randomNumeris) === -1){
                    uzdNr.push(randomNumeris);
                    tinka=false;
                }
            }
            cell1.innerHTML=uzdNr[j];
            row.appendChild(cell1);
        }

 */