
function printReceipt(inputs) {
  var allItems = loadAllItems();
  var same = findSame(inputs);
  var receips = createReceipt(same,allItems);
  var totalPrice = 0;
  var string = "";
  for(let m = 0 ; m < receips.length ; m++){
      string +=receips[m].name+"                       "+receips[m].price+"          "+receips[m].count+"\n";
         totalPrice +=  receips[m].price*receips[m].count;
   }
   console.log("Receipts"+"\n"+"------------------------------------------------------------"+"\n"+string+"\n"+"------------------------------------------------------------"+"\n"+"Price:"+" "+totalPrice);
}
function findSame(inputs){
    var same = new Array();
    for(var i=0;i<inputs.length;i++){
    var arrEmpty = true;

    for (let j=0;j<same.length;j++) {
    if(inputs[i]==same[j].key){
    same[j].count++;
    arrEmpty=false;
    break;
    }
    }
    if (arrEmpty){
    same.push({key:inputs[i], count:1})
    }
   }
    return same;
  }
function createReceipt(same,allItems){
   var receips =[];
   for(let k = 0;k < same.length ; k++){
      for(let l=0 ; l < allItems.length; l++){
         if(same[k].key == allItems[l].id){
              receips.push({
                   name: allItems[l].name,
                   price: allItems[l].price,
                   count: same[k].count
               })
          }
      }
   }
   return receips;
   }
   function loadAllItems() {
     return [
                {"id": "0001", "name" : "Coca Cola", "price": 3},
                {"id": "0002", "name" : "Diet Coke", "price": 4},
                {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
                {"id": "0004", "name" : "Mountain Dew", "price": 6},
                {"id": "0005", "name" : "Dr Pepper", "price": 7},
                {"id": "0006", "name" : "Sprite", "price": 8},
                {"id": "0007", "name" : "Diet Pepsi", "price": 9},
                {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
                {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
                {"id": "0010", "name" : "Fanta", "price": 12}
            ];
}
module.exports =printReceipt;