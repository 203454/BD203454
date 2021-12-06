package com.example.mascotaApp.controller;

import com.example.mascotaApp.model.Mascota;
import com.example.mascotaApp.repository.MascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MascotaController {


    @Autowired
    MascotaRepository mascotaRepository;


    @GetMapping(value = "/listMascotas")
    public List<Mascota> getListMascota(){
        return mascotaRepository.findAll();
    }

    @GetMapping(value = "/FindMascotaByDuenioId/{duenioId}")
    public List<Mascota> getMascotas(@PathVariable("duenioId") int duenioId){
        return mascotaRepository.findAllByDuenioId(duenioId);
    }

    @GetMapping(value = "/FindMascotaById/{mascotaId}")
    public Mascota getMascota(@PathVariable("mascotaId") int mascotaId){
        return mascotaRepository.findByMascotaId(mascotaId);
    }
    @GetMapping(value = "/FindMascotaByTipoId/{tipoId}")
    public List<Mascota> getMascotaByTipo (@PathVariable("tipoId") int tipoId){
        return mascotaRepository.findAllByTipoId(tipoId);
    }

    //eliminar
    @PostMapping(value = "/Mascota/delete/{mascotaId}")
    public boolean deleteMascota (@PathVariable int mascotaId){
        Mascota m = mascotaRepository.findByMascotaId(mascotaId);

        if(m != null){
            mascotaRepository.delete(m);
            return true;
        }else{
            return false;
        }
    }

    //Agregar
    @PostMapping(value = "/Mascota/add")
    public Mascota addMascota(@RequestBody Mascota mascota){
        return mascotaRepository.save(mascota);
    }

    //Actualizar
    @PutMapping(path = "/Mascota/update/{mascotaId}", consumes = {
            MediaType.APPLICATION_XML_VALUE,
            MediaType.APPLICATION_JSON_VALUE
    },
            produces = {
                    MediaType.APPLICATION_XML_VALUE,
                    MediaType.APPLICATION_JSON_VALUE
            })
    public boolean updateDuenio(@PathVariable int mascotaId, @RequestBody Mascota mascota){
        Mascota m = mascotaRepository.findByMascotaId(mascotaId);
        if(m != null){

            m.setNombre(mascota.getNombre());
            m.setDuenioId(mascota.getDuenioId());
            m.setFechaIngreso(mascota.getFechaIngreso());
            m.setMotivoIngreso(mascota.getMotivoIngreso());
            mascotaRepository.save(m);
            return true;
        }else{
            return false;
        }
    }

}