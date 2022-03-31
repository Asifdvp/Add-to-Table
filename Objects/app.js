const names = document.getElementById("name");
const surnames = document.getElementById("surname");
const ages = document.getElementById("age");
const table = document.getElementById("table");
const objets = [];
let a = 0;
document.getElementById("btn").addEventListener("click", getValue);

function getValue() {
    let n = names.value;
    let s = surnames.value;
    let age = ages.value;
    let id = function() {
        a++;
        return a;
    }
    const obj = { id: id(), name: n, surname: s, age: age };
    objets.push(obj);
    alert(`${obj.name } ${obj.surname}-in ${obj.age} yasi var `);
    names.value = "";
    console.log(objets)
    ages.value = "";
    surnames.value = "";


    table.innerHTML += `
    <tr>
    <th scope=" col " >${obj.id}</th>
    <td scope=" col " >${obj.name}</td>
    <td scope=" col " >${obj.surname}</td>
    <td scope=" col " >${obj.age}</td> 
    </tr>
`;
}