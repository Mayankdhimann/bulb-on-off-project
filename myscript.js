const turnOn=()=> {
    let imgOb=document.getElementById('bulb');
    imgOb.setAttribute("src","ONbulb.jpg")
};
const turnOff=()=> {
    let imgOb=document.getElementById('bulb');
    imgOb.setAttribute("src","OFFbulb.jpg")
};

const togglebulb=()=> {
    let imgOb=document.getElementById('bulb');
    let srcValue=imgOb.getAttribute("src");
    
    let buttonOb =document.getElementById("onOffButton");
    let buttonText=buttonOb.innerHTML;
   
    if(srcValue=='OFFbulb.jpg'){
        turnOn();
        buttonOb.innerHTML="OFF"
    }
    else{ 
        turnOff();
        buttonOb.innerHTML="ON"
    }
};

 