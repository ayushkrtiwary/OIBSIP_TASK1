
let screen=document.getElementById("screen")

function display(value){
    document.getElementById("screen").value += value;
}


function calculate(){
    try{
        document.getElementById("screen").value= eval(screen.value);
    }
    catch(Exception)
    {
        alert("Not Valid Values")
    }
}

function Clear(){
    document.getElementById("screen").value= null;
}
 