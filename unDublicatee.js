function removeDublicates() {
 var check = [1,3,4,4,6,5]; 
 var res = [];
   
   
     for(var i = 0; i<check.length; i++){
     console.log(check.length);
     if(check[i] !== check[i+1]){
     res.push(check[i]);
      
    }
    }
    
    for(var k=0; k<res.length-1; k++){
      console.log(res[k]);

    }
    
  
   }
   
   removeDublicates();
