const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  let i = 0;
  const body = document.getElementsByTagName('body')[0];
  
  body.addEventListener('keydown', function(e) {
    console.log(e.which);
    
    if (e.which === code[i]) {
      
    
        i++;
        console.log('Talk to me nice');
        
      if(i === code.length){
 
        window.alert("Hurray!");
        
          i=0;
          
        }
      }
   
      else {
          i=0; 
    }
  });
}


