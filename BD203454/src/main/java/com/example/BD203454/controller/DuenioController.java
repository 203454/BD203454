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
    public Duenio addTipo(@RequestBody Duenio tipo){
        return duenioRepository.save(tipo);
    }


    /*@PostMapping(value = "/tipo/update")
    public Duenio updateTipo(@RequestBody Duenio tipo){
        Duenio t = duenioRepository.findByTipoId(tipo.getId_duenio());
        if(t != null){
            t.setDireccion(tipo.getDireccion());
            return duenioRepository.save(t);
        }else {
            return null;
        }
    }

    @PostMapping(value = "/tipo/delete")
    public Boolean deleteTipo(@RequestBody Tipo tipo) {
        Tipo t = tipoRepository.findByTipoId(tipo.getTipoId());
        if (t != null) {
            tipoRepository.delete(t);
            return true;
        } else {
            return false;
        }
    }*/
}
