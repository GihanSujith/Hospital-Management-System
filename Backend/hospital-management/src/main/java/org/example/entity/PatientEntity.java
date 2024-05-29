package org.example.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "patient")
public class PatientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;
    private int age;
    private String symptoms;
    private String doctor;
    private String date;
    private String time;
    private String address;
    private boolean isActivate;

}
