package com.example.tipoMascotaApp.controller;

import com.example.tipoMascotaApp.model.Mascota;
import com.example.tipoMascotaApp.model.TipoMascota;
import com.example.tipoMascotaApp.model.TipoMascotaMascota;
import com.example.tipoMascotaApp.repository.TipoMascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

@RestController
public class TipoMascotaController {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    TipoMascotaRepository tipoMascotaRepository;

    @GetMapping(value = "/listTiposMascotas")
    public List<TipoMascota> getListTipoMascota(){
        return tipoMascotaRepository.findAll();
    }

    @GetMapping(value = "/TipoMascota/{tipoId}")
    public TipoMascota getTipoMascota(@PathVariable("tipoId") int tipoId){
        TipoMascota tipoMascota = tipoMascotaRepository.findByTipoId(tipoId);
        return tipoMascota;
    }

    @GetMapping(value = "/{tipoId}/mascotas")
    public TipoMascota getTipoMascotaMascota(@PathVariable("tipoId") int tipoId){
        TipoMascotaMascota tipoMascotaMascota = restTemplate.getForObject(
                "http://localhost:18085/TipoMascota/"+tipoId,
                TipoMascotaMascota.class
        );
        Mascota[] mascotas = restTemplate.getForObject(
                "http://localhost:18081//FindMascotaByTipoId/"+tipoId,
                Mascota[].class
        );
        tipoMascotaMascota.setMascotas(Arrays.asList(mascotas));
        return tipoMascotaMascota;
    }

    //eliminar
    @PostMapping(value = "/TipoMascota/delete/{tipoId}")
    public boolean deleteTipoMascota(@PathVariable int tipoId){
        TipoMascota t = tipoMascotaRepository.findByTipoId(tipoId);

        if(t != null){
            tipoMascotaRepository.save(t);
            return true;
        }else{
            return false;
        }
    }

    //Agregar
    @PostMapping(value = "/TipoMascota/add")
    public TipoMascota addTipoMeascota(@RequestBody TipoMascota tipoMascota){
        return tipoMascotaRepository.save(tipoMascota);
    }

    //Actualizar
    @PutMapping(path = "/TipoMascota/update/{tipoId}", consumes = {
            MediaType.APPLICATION_XML_VALUE,
            MediaType.APPLICATION_JSON_VALUE
    },
            produces = {
                    MediaType.APPLICATION_XML_VALUE,
                    MediaType.APPLICATION_JSON_VALUE
            })
    public boolean updateTipoMedicamento(@PathVariable int tipoId, @RequestBody TipoMascota tipoMascota){
        TipoMascota t = tipoMascotaRepository.findByTipoId(tipoId);
        if(t != null){
            t.setNombre(tipoMascota.getNombre());
            t.setDescripcion(tipoMascota.getDescripcion());
            tipoMascotaRepository.save(t);
            return true;
        }else{
            return false;
        }
    }


}

