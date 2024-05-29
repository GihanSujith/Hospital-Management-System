package org.example.model;


import lombok.Data;

import java.util.Date;

@Data
public class Patient {


    private Integer id;
    private String name;
    private int age;
    private String symptoms;
    private String doctor;
    private String date;
    private String time;
    private String address;

}
