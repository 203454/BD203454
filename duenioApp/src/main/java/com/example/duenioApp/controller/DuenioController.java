package com.example.duenioApp.controller;

import com.example.duenioApp.model.Duenio;
import com.example.duenioApp.model.DuenioMascota;
import com.example.duenioApp.model.Mascota;
import com.example.duenioApp.repository.DuenioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

@RestController
public class DuenioController {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    DuenioRepository duenioRepository;

    @GetMapping(value = "/listDuenios")
    public List<Duenio> getListDuenio(){
        return duenioRepository.findAll();
    }

    @GetMapping(value = "/duenio/{duenioId}")
    public Duenio getDuenio(@PathVariable("duenioId") int duenioId){
        Duenio duenio = duenioRepository.findByDuenioId(duenioId);
        return duenio;
    }

    @GetMapping(value = "/{duenioId}/mascotas")
    public Duenio getDuenioMascota(@PathVariable("duenioId") int duenioId){
        DuenioMascota duenioMascota = restTemplate.getForObject(
                "http://localhost:18082/duenio/"+duenioId,
                DuenioMascota.class
        );
        Mascota[] mascotas = restTemplate.getForObject(
                "http://localhost:18081//FindMascotaByDuenioId/"+duenioId,
                Mascota[].class
        );
        duenioMascota.setMascotas(Arrays.asList(mascotas));
        return duenioMascota;
    }

    //eliminar
    @PostMapping(value = "/Duenio/delete/{duenioId}")
    public boolean deleteDuenio (@PathVariable int duenioId){
        Duenio d = duenioRepository.findByDuenioId(duenioId);

        if(d != null){
            duenioRepository.delete(d);
            return true;
        }else{
            return false;
        }
    }

    //Agregar
    @PostMapping(value = "/Duenio/add")
    public Duenio addDuenio(@RequestBody Duenio duenio){
        return duenioRepository.save(duenio);
    }

    //Actualizar
    @PutMapping(path = "/Duenio/update/{duenioId}", consumes = {
            MediaType.APPLICATION_XML_VALUE,
            MediaType.APPLICATION_JSON_VALUE
    },
            produces = {
                    MediaType.APPLICATION_XML_VALUE,
                    MediaType.APPLICATION_JSON_VALUE
            })
    public boolean updateDuenio(@PathVariable int duenioId, @RequestBody Duenio duenio){
        Duenio d = duenioRepository.findByDuenioId(duenioId);
        if(d != null){

            d.setNombre(duenio.getNombre());
            d.setTelefono(duenio.getTelefono());
            d.setDireccion(duenio.getDireccion());
            duenioRepository.save(d);
            return true;
        }else{
            return false;
        }
    }


}
