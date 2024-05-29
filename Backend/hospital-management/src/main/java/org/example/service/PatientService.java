package org.example.service;

import org.example.model.Patient;

import java.util.List;

public interface PatientService {

     Patient addPatient(Patient patient);

    List<Patient> retrive();

     void removePatient(Integer patientId);



}
