class Item{
    constructor(name,price,image){
        
    this.name = name;
    this.price = price;
    this.image = image;
    }

}

var list = new Array();

function insertItem(){
    
    var name = document.getElementById("name");
    var price = document.getElementById("price");
    var image = document.getElementById("image");

    var item = new Item(name.value, price.value, image);

    list.push(item);
    
    createList();
}

function createList(){

    var lenght = list.length-1;
    var string = "tr" + lenght;
    let trSearch = document.getElementById(string);

    while(trSearch == null){

        let tableTr = document.querySelector(".table>tBody");

        let tr = document.createElement("tr");
        tr.id = string;
        let tdName = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdImage = document.createElement("td");
        let tdImg = document.createElement("IMG");

        tdName.innerHTML =  list[lenght].name;
        tdPrice.innerHTML =  list[lenght].price;
        tdImg.innerHTML = list[lenght].image;
        tdImage.appendChild(tdImg);

        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdImage);

        tableTr.appendChild(tr);

        lenght -=1;
        if(lenght==0)
            break;

        string = "tr" + lenght;
        trSearch = document.getElementById(string);
    }
}
