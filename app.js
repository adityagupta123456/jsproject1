let string="";
let arr=Array.from(button);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        button.style.backgroundColor="red";
        setTimeout(()=>{
        button.style.background="linear-gradient(45deg,#0a0a0a,#3a4452)";
        },500)
        if(e.target.innerHTML=="="){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string +=e.target.innerHTML;
             input.value=string;
        }
       });
    });
