
function getPatient() {
    fetch("http://localhost:8080/patient")
      .then(res => res.json())
      .then(data => {
        // Get the table body element
        const tableBody = document.querySelector('table tbody');
  
        // Clear the existing table rows
        tableBody.innerHTML = '';
  
        // Create the table header
        const tableHeader = document.querySelector('table thead');
        tableHeader.innerHTML = '';
        const headerRow = document.createElement('tr');
        headerRow.style.backgroundColor = '#e4893a'; // Set the header row background color
        headerRow.style.color = '#fff'; // Set the header row text color
        

        const idHeader = document.createElement('th');
        idHeader.textContent = 'ID';
        idHeader.style.padding = '10px'; // Add padding to the header cells
        idHeader.style.fontSize = '18px'; // Increase font size for the headers
        const nameHeader = document.createElement('th');
        nameHeader.textContent = 'Name';
        nameHeader.style.padding = '10px'; // Add padding to the header cells
        nameHeader.style.fontSize = '18px'; // Increase font size for the headers
        const ageHeader = document.createElement('th');
        ageHeader.textContent = 'Age';
        ageHeader.style.padding = '10px';
        ageHeader.style.fontSize = '18px';
        const symptomsHeader = document.createElement('th');
        symptomsHeader.textContent = 'Symptoms';
        symptomsHeader.style.padding = '10px';
        symptomsHeader.style.fontSize = '18px';
        const addressHeader = document.createElement('th');
        addressHeader.textContent = 'Address';
        addressHeader.style.padding = '10px';
        addressHeader.style.fontSize = '18px';
        const doctorHeader = document.createElement('th');
        doctorHeader.textContent = 'Doctor';
        doctorHeader.style.padding = '10px';
        doctorHeader.style.fontSize = '18px';
        const dateHeader = document.createElement('th');
        dateHeader.textContent = 'Date';
        dateHeader.style.padding = '10px';
        dateHeader.style.fontSize = '18px';
        const timeHeader = document.createElement('th');
        timeHeader.textContent = 'Time';
        timeHeader.style.padding = '10px';
        timeHeader.style.fontSize = '18px';
  
        headerRow.appendChild(idHeader);
        headerRow.appendChild(nameHeader);
        headerRow.appendChild(ageHeader);
        headerRow.appendChild(symptomsHeader);
        headerRow.appendChild(addressHeader);
        headerRow.appendChild(doctorHeader);
        headerRow.appendChild(dateHeader);
        headerRow.appendChild(timeHeader);
        tableHeader.appendChild(headerRow);
  
        // Loop through the patient data and add new rows to the table
        data.forEach(patient => {
          const newRow = document.createElement('tr');
          newRow.style.backgroundColor = '#e7f1f2'; // Add background color
          newRow.style.borderBottom = '1px solid #ddd'; // Add bottom border
  
          // Create table cells for name and age
          const idCell = document.createElement('td');
          idCell.textContent = patient.id;
          idCell.style.padding = '10px'; // Add padding to the cells
          idCell.style.fontSize = '16px'; // Increase font size
          const nameCell = document.createElement('td');
          nameCell.textContent = patient.name;
          nameCell.style.padding = '10px'; // Add padding to the cells
          nameCell.style.fontSize = '16px'; // Increase font size
          const ageCell = document.createElement('td');
          ageCell.textContent = patient.age;
          ageCell.style.padding = '10px';
          ageCell.style.fontSize = '16px';
          const symptomsCell = document.createElement('td');
          symptomsCell.textContent = patient.symptoms;
          symptomsCell.style.padding = '10px';
          symptomsCell.style.fontSize = '16px';
          const addressCell = document.createElement('td');
          addressCell.textContent = patient.address;
          addressCell.style.padding = '10px';
          addressCell.style.fontSize = '16px';
          const doctorCell = document.createElement('td');
          doctorCell.textContent = patient.doctor;
          doctorCell.style.padding = '10px';
          doctorCell.style.fontSize = '16px';
          const dateCell = document.createElement('td');
          dateCell.textContent = patient.date;
          dateCell.style.padding = '10px';
          dateCell.style.fontSize = '16px';
          const timeCell = document.createElement('td');
          timeCell.textContent = patient.time;
          timeCell.style.padding = '10px';
          timeCell.style.fontSize = '16px';
  
          // Append the cells to the new row
          newRow.appendChild(idCell);
          newRow.appendChild(nameCell);
          newRow.appendChild(ageCell);
          newRow.appendChild(symptomsCell);
          newRow.appendChild(addressCell);
          newRow.appendChild(doctorCell);
          newRow.appendChild(dateCell);
          newRow.appendChild(timeCell);
  
          // Append the new row to the table body
          tableBody.appendChild(newRow);
        });
      })
      .catch(error => {
        console.error('Error fetching patient data:', error);
      });
  }
  