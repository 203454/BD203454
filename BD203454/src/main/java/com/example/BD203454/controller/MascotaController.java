package com.example.BD203454.controller;

import com.example.BD203454.model.Mascota;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import repository.MascotaRepository;

import java.util.List;
@RestController
public class MascotaController {


    @Autowired
    MascotaRepository mascotaRepository;

    @GetMapping(value = "/listMascotas")
    public List<Mascota> getCustomers(){
        List<Mascota> response = mascotaRepository.findAll();

        if(response!=null){
            return response;
        }else {
            return null;
        }
    }

    @PostMapping(value = "/customer/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mascota addCustomer(@RequestBody Mascota mascota){

        return  mascotaRepository.save(mascota);
    }
}
