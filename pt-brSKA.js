var a = prompt("Insira as chaves separadas por um espaço").split(" ");
var i = 0;                     
function ativarKeys() {           
   setTimeout(function () {    
      console.log("Testando a chave " + a[i]); 
      document.getElementById('accept_ssa').checked = 1;
      document.getElementById('product_key').value = a[i]; 
      RegisterProductKey();
      console.log(document.getElementById('error_display').innerHTML);
      i++;                     
      if (i < a.length) {            
         ativarKeys();             
      }                       
      }, 3500)
}
ativarKeys();
