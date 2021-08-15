let output=document.getElementById('output');
let buttons=document.querySelectorAll('button');
let expression='';
for(item of buttons){
    item.addEventListener('click',(b)=>{
        buttonText=b.target.innerText;
        if(buttonText==="X"){
            buttonText="*";
            expression+=buttonText;
            output.value=expression;
        }
        else if(buttonText==="C"){
            expression="";
            output.value=expression;
        }
        else if(buttonText==="="){
            output.value=eval(expression);
        }
        else{
            expression+=buttonText;
            output.value=expression;
        }
    })
}