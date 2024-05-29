package org.example.controller;


import org.example.model.Patient;
import org.example.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PatientController {


    @Autowired
    PatientService patientService;

    @PostMapping("/patient")
    Patient addPatient(@RequestBody Patient patient){
        return patientService.addPatient(patient);

    }

    @GetMapping("/patient")
    List<Patient> retrive(){
        return patientService.retrive();

    }

    @DeleteMapping("/patient")
    void remove(@RequestParam(name = "id") Integer patientId){
        patientService.removePatient(patientId);

    }



}
