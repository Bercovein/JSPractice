class Item{
    constructor(name,price,quantity,image){
        
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.image = image;
    }
}

let list = new Array();

function insertItem(){
    
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;
    var image = document.getElementById("image");


    if(price == "" || quantity == ""){
        alert("Los campos precio y cantidad deben ser numericos o no estar vacios");
    }else{
        var item = new Item(name, price, quantity, image);
    
        list.push(item);
        
        createList();
    }
}

function createList(){

    var lenght = list.length-1;
    var string = "tr" + lenght;
    var trSearch = document.getElementById(string);
    
    while(trSearch === null){
        let tableTr = document.querySelector(".table>tBody");

        let tr = document.createElement("tr");
        tr.id = string;
        let tdName = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdQuantity = document.createElement("td");
        let tdImage = document.createElement("td");
        let tdImg = document.createElement("IMG");

        
        
        tdName.innerHTML =  list[lenght].name;
        tdPrice.innerHTML =  list[lenght].price;
        tdQuantity.innerHTML = list[lenght].quantity;
        tdImg.innerHTML = list[lenght].image;
        tdImage.appendChild(tdImg);

        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQuantity);
        tr.appendChild(tdImage);

        tableTr.appendChild(tr);

        lenght -=1;
        if(lenght<=0)
            break;

        string = "tr" + lenght;
        trSearch = document.getElementById(string);
        
    }
}
