//Script to pull all patient information data inputted by user onto the final ABG printout

const patientIDName = localStorage.getItem('patientID-name');
const patientName = localStorage.getItem('patient-name');
const DOBName = localStorage.getItem('DOB-name');
const tempName = localStorage.getItem('temp-name');
const fio2Name = localStorage.getItem('fio2-name');
const balanceName = localStorage.getItem('balance-name');
const sourceName = localStorage.getItem('source-name');
const compensatingName = localStorage.getItem('compensating-name');

document.getElementById('patientID-name').textContent = patientIDName;
document.getElementById('patient-name').textContent = patientName;
document.getElementById('DOB-name').textContent = DOBName;
document.getElementById('temp-name').textContent = tempName;
document.getElementById('fio2-name').textContent = fio2Name; 

//Script to make acid base balance/pH key

function balKey(){

    let s;
    let sourceName = localStorage.getItem("source-name");
    if (sourceName == "respiratory"){s = "R";}
    else if (sourceName == "metabolic"){s = "M";}
    
    let b;
    
    let balanceName = localStorage.getItem("balance-name");
    if (balanceName == "acidotic"){b = "Ac";}
    else if (balanceName == "alkalotic"){b = "Al";}

    let c;
    let compensatingName = localStorage.getItem("compensating-name");
    if (compensatingName == "yes"){c = "Y";}
    else if (compensatingName == "no"){c = "N";}
    else if (compensatingName == "part"){c = "P";}
    
    let key = s.concat(b, c);
    
    //Script to generate a key for each source, balance, compensation combination, to support latter pH, pCO2, Bicarb semi random generation
   
    let pH;
    let pCo2;
    let biCarb;
    let y;
    let BE;

        
    if (key == "MAcY") {pH = getRndInteger(7350,7380), pCo2 = getRndInteger(2700,4700), biCarb = getRndInteger(16000,21000);}
    else if (key == "MAcN") {pH = getRndInteger(7080,7300), pCo2 = getRndInteger(4700,6000), biCarb = getRndInteger(16000,21000);}
    else if (key == "MAcP") {pH = getRndInteger(7300,7349), pCo2 = getRndInteger(3200,4700), biCarb = getRndInteger(16000,21000);}
    else if (key == "MAlY") {pH = getRndInteger(7420,7450), pCo2 = getRndInteger(5500,8000), biCarb = getRndInteger(26500,30000);}
    else if (key == "MAlN") {pH = getRndInteger(7500,7650), pCo2 = getRndInteger(4700,6000), biCarb = getRndInteger(26500,30000);}
    else if (key == "MAlP") {pH = getRndInteger (7451,7500), pCo2 = getRndInteger(5500,7000), biCarb = getRndInteger(26500,30000);}
    else if (key == "RAcY") {pH = getRndInteger(7350,7380), pCo2 = getRndInteger(6100,8500), biCarb = getRndInteger(24500,30000);}
    else if (key == "RAcN") {pH = getRndInteger(7080,7300), pCo2 = getRndInteger(6100,8500), biCarb = getRndInteger(22000,26000);}
    else if (key == "RAcP") {pH = getRndInteger(7300,7349), pCo2 = getRndInteger(6100,8500), biCarb = getRndInteger(24500,28000);}
    else if (key == "RAlY") {pH = getRndInteger(7420,7450), pCo2 = getRndInteger(2200,4400), biCarb = getRndInteger(15000,21500);}
    else if (key == "RAlN") {pH = getRndInteger(7500,7650), pCo2 = getRndInteger(2200,4400), biCarb = getRndInteger(22000,26000);}
    else if (key == "RAlP") {pH = getRndInteger(7451,7500), pCo2 = getRndInteger(2200,4400), biCarb = getRndInteger(18000,21500);}          
    
    

    document.getElementById("pH").innerHTML = pH.toFixed(3);
    document.getElementById("pCo2").innerHTML = pCo2.toFixed(2);
    x = document.getElementById("biCarb").innerHTML = biCarb.toFixed(1);
    
    BE = (x-24)*getRndInteger(800,1200);
    BE = BE.toFixed(1);
    document.getElementById("BE").innerHTML = BE;

}


    

//Script to generate semi random pO2 reading based on user input

let hypoxicName = localStorage.getItem("hypoxic-name");

function getRndInteger(min, max) {
    return (Math.floor(Math.random() * ((max - min)) + min)/1000); 
    }

function o2Res() {            
    let o2Res;
    
    if (hypoxicName == "no") {o2Res = getRndInteger(10500,13500);}
    else if (hypoxicName == "moderate") {o2Res = getRndInteger(8500,10499);}
    else if  (hypoxicName == "severe") {o2Res = getRndInteger(5500,8499);}
    
    document.getElementById("o2Res").innerHTML = o2Res.toFixed(1);
    }

//Script to generate semi random glucose reading based on user input
    
let glucoseName = localStorage.getItem("glucose-name");

function gluRes() {            
    let gluRes;
    
    if (glucoseName == "normal") {gluRes = getRndInteger(4000,7000);}
    else if (glucoseName == "moderate low") {gluRes = getRndInteger(3200,3999);}
    else if (glucoseName == "severe low") {gluRes = getRndInteger(1200,3199);}
    else if (glucoseName == "moderate high") {gluRes = getRndInteger(7001,10000);}
    else if (glucoseName == "severe high") {gluRes = getRndInteger(10000,16000);}          
    
    document.getElementById("gluRes").innerHTML = gluRes.toFixed(1);
    }
     
//Script to generate semi random lactate reading based on user input

let lactateName = localStorage.getItem("lactate-name");

function lacRes() {            
    let lacRes;
    
    if (lactateName == "normal") {lacRes = getRndInteger(600,2000);}
    else if (lactateName == "moderate") {lacRes = getRndInteger(2001,3999);}
    else if  (lactateName == "high") {lacRes = getRndInteger(4000,8000);}
    
    document.getElementById("lacRes").innerHTML = lacRes.toFixed(1);
    }
            
        
    
               
    
            
    
