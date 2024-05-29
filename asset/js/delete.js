function deletePatient() {
    const patientId = document.getElementById('patientId').value;
  
    if (!patientId) {
      alert('Please enter a patient ID.');
      return;
    }
  
    fetch(`http://localhost:8080/patient?id=${patientId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        alert('Patient deleted successfully!');
        // You can add additional logic here, such as refreshing the table or navigating to a different page
      } else {
        return response.json();
      }
    })
    .then(data => {
      if (!response.ok) {
        alert(`Error deleting patient: ${data.message}`);
      }
    })
    .catch(error => {
      alert(`Error deleting patient: ${error.message}`);
    });
  }
  
  // Add an event listener to the delete button
  document.querySelector('.deleteButton').addEventListener('click', deletePatient);
  