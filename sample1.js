const temp = [{productName : "iphone", price:5000},
{productName: "hg", price:4500},{productName: "tr", price:5500},
]

let newPricelist = temp.filter(function(item){
    return item.price<=5000;
});
console.log(newPricelist);