


document.getElementById("btn-submit")
    .addEventListener("click", savePatient)


function savePatient() {

    let requestBody = mapRequest()

    fetch("http://localhost:8080/patient", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            clear();
        });


}

function mapRequest() {

    let requestBody = {
        name: undefined,
        age: undefined,
        symptoms: undefined,
        doctor: undefined
    }

    requestBody.name = document.getElementById("patientName").value;
    requestBody.age = document.getElementById("patientAge").value;
    requestBody.symptoms = document.getElementById("patientSymptoms").value;
    requestBody.doctor = document.getElementById("doctor").value;
    requestBody.date = document.getElementById("appointmentDate").value;
    requestBody.time = document.getElementById("appointmentTime").value;
    requestBody.address = document.getElementById("patientAddress").value;

    return requestBody;
}

function clear(){
    document.getElementById("patientName").value = "";
    document.getElementById("patientAge").value = "";
    document.getElementById("patientSymptoms").value = "";
    document.getElementById("doctor").value = "";
    document.getElementById("appointmentDate").value = "";
    document.getElementById("appointmentTime").value = "";
    document.getElementById("patientAddress").value = "";

}

