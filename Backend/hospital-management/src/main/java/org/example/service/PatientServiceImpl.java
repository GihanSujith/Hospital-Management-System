package org.example.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.entity.PatientEntity;
import org.example.model.Patient;
import org.example.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PatientServiceImpl implements PatientService{


    @Autowired
    PatientRepository repository;

    @Autowired
    ObjectMapper mapper;

    public Patient addPatient(Patient patient){

        PatientEntity savedPatient = repository.save(
                mapper.convertValue(
                        patient, PatientEntity.class));

       return mapper.convertValue(savedPatient,Patient.class);

    }

    public List<Patient> retrive(){

        Iterable<PatientEntity> patientList = repository.findAll();
        List<Patient> patientModels = new ArrayList<>();

        patientList.forEach(patientEntity -> {
            patientModels.add(
                    mapper.convertValue(patientEntity,Patient.class));
        });

        return patientModels;
    }

    public void removePatient(Integer patientId){
        Optional<PatientEntity> byId = repository.findById(patientId);
        repository.delete(byId.get());

    }

}
