const form = document.getElementById("abgForm");
        const patientID = document.getElementById("patientID");
        const patient = document.getElementById("patient");
        const DOB = document.getElementById("DOB");
        const temp = document.getElementById("temp");
        const fio2 = document.getElementById("fio2");
        const hypoxic = document.getElementById("hypoxic");
        const glucose = document.getElementById("glucose");
        const lactate = document.getElementById("lactate");
        const compensating = document.getElementById("compensating");
        const balance = document.getElementById("balance");
        const source = document.getElementById("source");
        const unit = document.getElementById("unit");
        const nbtn = document.getElementById("normal")
        const anbtn = document.getElementById("abnormal")
        
        nbtn.addEventListener("click", function(e) {
            e.preventDefault();
       
            const patientIDValue = patientID.value;
            const patientValue = patient.value;
            const DOBValue = DOB.value;
            const tempValue = temp.value;
            const fio2Value = fio2.value;
            const unitValue = unit.value;

            localStorage.setItem("patientID-name", patientIDValue);
            localStorage.setItem("patient-name", patientValue);
            localStorage.setItem("DOB-name", DOBValue);
            localStorage.setItem("fio2-name", fio2Value);
            localStorage.setItem("temp-name", tempValue);
            localStorage.setItem("unit-name", unitValue);

            if (unitValue == "kPa"){window.location.href = "ABG_kPa_normal.html";}
            else if (unitValue == "mmHg"){window.location.href = "ABG_mmHg_normal.html";}
            })

        anbtn.addEventListener("click", function(e) {
            e.preventDefault();
       
            const patientIDValue = patientID.value;
            const patientValue = patient.value;
            const DOBValue = DOB.value;
            const tempValue = temp.value;
            const fio2Value = fio2.value;
            const sourceValue = source.value;
            const balanceValue = balance.value;
            const compensatingValue = compensating.value;
            const hypoxicValue = hypoxic.value;
            const glucoseValue = glucose.value;
            const lactateValue = lactate.value;
            const unitValue = unit.value;

            localStorage.setItem("patientID-name", patientIDValue);
            localStorage.setItem("patient-name", patientValue);
            localStorage.setItem("DOB-name", DOBValue);
            localStorage.setItem("fio2-name", fio2Value);
            localStorage.setItem("temp-name", tempValue);
            localStorage.setItem("hypoxic-name", hypoxicValue);
            localStorage.setItem("glucose-name", glucoseValue);
            localStorage.setItem("lactate-name", lactateValue);
            localStorage.setItem("balance-name", balanceValue);
            localStorage.setItem("compensating-name", compensatingValue);
            localStorage.setItem("source-name", sourceValue);
            localStorage.setItem("unit-name", unitValue);

            if (unitValue == "kPa"){window.location.href = "ABG_kPa_abnormal.html";}
            else if (unitValue == "mmHg"){window.location.href = "ABG_mmHg_abnormal.html";}
            })