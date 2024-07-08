document.addEventListener("DOMContentLoaded" , function(){
    const display = document.getElementById("cal-display");
    const buttons = document.getElementsByClassName("btn");


   
        let currentValue = "";

        function evaluateResult(){
       
         const convertedvalue = currentValue
         .replace("×" , "*")
         .replace("÷" , "/")
         .replace("%" , "*0.01")
         .replace("Sin" , "Math.sin")
         .replace("Cos" , "Math.cos")
         .replace("π" , "Math.PI")
         .replace("ln" , "Math.log")
         .replace("Tan" , "Math.tan")
         .replace("log" , "Math.log10")
         .replace("e" , "Math.E")
         .replace("√" , "Math.sqrt");

         const result = eval(convertedvalue);
         currentValue = result.toString();
         display.value=currentValue;
        }

        
        for(let i=0; i<buttons.length; i++){
         let button=buttons[i];
         button.addEventListener('click', function(){
           const value = button.innerText;

           try{

          
           if(value=="AC"){
             currentValue = "";
             display.value= currentValue;
           }else if(value=="="){
             evaluateResult();


           }else{
             currentValue += value; 
             display.value=currentValue;
           }
          
           }catch(error){
            console.error(error);
            currentValue = "ERROR"
            display.value = currentValue

           }
           
          
         
         });
        
        }

      

       });