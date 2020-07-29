function generatePin(){
    let pin=Math.floor(Math.random()*(9999-1000+1))+1000;
    document.getElementById("display-pin").value=pin;
    document.getElementById("submit-btn").disabled=false;
    document.getElementById("display-number").value="";
    document.getElementById("try-left").innerText=3;
    document.getElementById("try-left-text").style.display="block"
    document.getElementById("pin-matched").style.display="none";
    document.getElementById("wrong-pin").style.display="none";

}
function setOrClearNumber(numberId)
{
    if(numberId=="clear-all"){
        document.getElementById("display-number").value="";
    }
    else if(numberId=="backspace"){
        let inputValue=document.getElementById("display-number").value;
        let newInputValue = inputValue.slice(0,-1);
        document.getElementById("display-number").value=newInputValue;
    }
    else{
    let numberValue=document.getElementById(numberId).innerText;
    let inputValue=document.getElementById("display-number").value;
    document.getElementById("display-number").value=inputValue+ numberValue; 
    }
}
function checkPinValidity(){
    let inputValue=document.getElementById("display-number").value;
    let pin=document.getElementById("display-pin").value;
    let tryLeft=document.getElementById("try-left").innerText;
    let tryLeftValue=parseInt(tryLeft);
    if(tryLeftValue>0 && pin!="")
    {   if(inputValue==pin){
            document.getElementById("wrong-pin").style.display="none"
            document.getElementById("pin-matched").style.display="block"
            document.getElementById("try-left").innerText=3;
            document.getElementById("try-left-text").style.display="none"    
        }
        else{
            
            document.getElementById("pin-matched").style.display="none";
            document.getElementById("wrong-pin").style.display="block"
            document.getElementById("try-left-text").style.display="block"
            document.getElementById("try-left").innerText=tryLeftValue-1;
        }
    }
    else if(tryLeftValue>0 && pin!=""){
        document.getElementById("submit-btn").disabled=true;
    }
}