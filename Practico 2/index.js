//ejercicio1
document.getElementById("myId").innerHTML = "Hello World!"

//ejercicio2
document.getElementsByClassName("test")[0].innerHTML = "Hello World!"

//ejercicio3
function insertRow() {

    //let tableTr = document.getElementsByClassName("myTable")[0]
    let tableTr = document.querySelector(".myTable>tbody")
    
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    td1.innerHTML = "Hello World 1"
    td2.innerHTML = "Hello World 2"
    tr.appendChild(td1)
    tr.appendChild(td2)
    tableTr.appendChild(tr)        
}
function deleteRow()
{
    let tableTr = document.getElementsByTagName("tr")
    if(tableTr.length > 1)
        tableTr[tableTr.length-1].remove()
    
    //let tableTr = document.querySelectorAll(".myTable>tr")
    //if(tableTr.length > 0)
    //    tableTr[tableTr.length-1].remove()
}

//ejercicio4
function highlight() {

    let array = document.getElementsByClassName("myClass")
    //let array = document.querySelectorAll(".myClass")

    for (let index = 0; index < array.length; index++) {
        array[index].style.color = "blue";
    }
}