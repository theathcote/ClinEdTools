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

//Script to make normal acid base balance/pH

function balKey(){
   
    let pH;
    let pCo2;
    let biCarb;
    let y;
    let BE;

        
    pH = getRndInteger(7350,7450); 
    pCo2 = getRndInteger(4500,6000);
    biCarb = getRndInteger(22000,26000);
              
    document.getElementById("pH").innerHTML = pH.toFixed(3);
    document.getElementById("pCo2").innerHTML = pCo2.toFixed(2);
    x = document.getElementById("biCarb").innerHTML = biCarb.toFixed(1);
    
    BE = (x-24)*getRndInteger(800,1200);
    BE = BE.toFixed(1);
    document.getElementById("BE").innerHTML = BE;
}

//Script to generate semi random pO2 reading based on user input

function getRndInteger(min, max) {
    return (Math.floor(Math.random() * ((max - min)) + min)/1000); 
    }

function o2Res() {            
    let o2Res;
    
    o2Res = getRndInteger(10500,13500);
    
    document.getElementById("o2Res").innerHTML = o2Res.toFixed(1);
    }

//Script to generate semi random normal glucose reading

function gluRes() {            
    let gluRes;
    
    gluRes = getRndInteger(4000,7900);      
    
    document.getElementById("gluRes").innerHTML = gluRes.toFixed(1);
    }
     
//Script to generate semi random normal lactate reading

function lacRes() {            
    let lacRes;
    
    lacRes = getRndInteger(600,2000);
    
    document.getElementById("lacRes").innerHTML = lacRes.toFixed(1);
    }

    const downloadPDF = document.querySelector(".downloadPDF");
    downloadPDF.addEventListener("click", () => {print();});
            
        
    
               
    
            
    
