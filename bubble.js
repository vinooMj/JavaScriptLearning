function bubbleSort() {

var inp = [64, 34, 25, 12, 22, 11, 90];
var out = [];


for(var i =0; i< inp.length-1; i++){
for (j=0; j< inp.length-1; j++){
if(inp[j] > inp[j+1]){
var temp = inp[j];
inp[j] = inp[j+1];
inp[j+1] = temp;
}
}
}

for(var k=0; k<inp.length-1; k++){
console.log(inp[k]);
}

}

bubbleSort();


