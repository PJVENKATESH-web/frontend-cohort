function calculatebmi(){
    let weight=document.getElementById("weight");
    let height=document.getElementById("height");
    let bmi=(weight.value/(height.value*height.value)).toFixed(1);
    let bmivalue=document.getElementById("bmivalue");
    if(bmi < 18.5){
        bmivalue.innerText="You are underweight😲";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        bmivalue.innerText="You are Normal weight😊";   
    }
    else if(bmi>=25 && bmi<=29.9){
        bmivalue.innerText="You are over weight🫠";   
    }
    else if(bmi>=30 && bmi<=35){
        bmivalue.innerText="You are having obesity😱";   
    }
    else if(bmi>=35){
        bmivalue.innerText="You are severe obesity😭";   
    }
}