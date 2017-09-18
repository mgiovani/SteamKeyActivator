var a = document.getElementsByClassName('form-control ng-pristine');
var keys= [""];
keys.pop();
var i = 1;                     
function buscarKeys() {           
   setTimeout(function () {    
      if(a[i].value !="") {keys.push(a[i].value);console.log(a[i].value);}
      i=i+2;                     
      if (i < a.length) {            
         buscarKeys();             
      }                       
   }, 50)
}
buscarKeys();
localStorage.setItem("keys", keys);
