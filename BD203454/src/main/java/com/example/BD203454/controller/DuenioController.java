package com.example.BD203454.controller;

import com.example.BD203454.model.Duenio;
import com.example.BD203454.repository.DuenioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@RestController
public class DuenioController {

    @Autowired
    DuenioRepository duenioRepository;

    @GetMapping(value = "/listaDuenios")
    public List<Duenio> getListDuenio(){
        return duenioRepository.findAll();
    }

    @PostMapping(value ="/tipo/add")
    public Duenio addTipo(@RequestBody Duenio duenio){
        return duenioRepository.save(duenio);
    }

}
