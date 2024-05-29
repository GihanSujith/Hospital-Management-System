document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var patientId = new URLSearchParams(window.location.search).get('id');
    var patient = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        symptoms: document.getElementById('symptoms').value,
        address: document.getElementById('address').value,
        doctor: document.getElementById('doctor').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
    };

    fetch('/patient/' + patientId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
    .then(function(response) {
        if (response.ok) {
            // Redirect the user to the patient list or display a success message
            window.location.href = '/patients';
        } else {
            // Handle the error case
            console.error('Error updating patient:', response.status);
        }
    })
    .catch(function(error) {
        console.error('Error updating patient:', error);
    });
});
