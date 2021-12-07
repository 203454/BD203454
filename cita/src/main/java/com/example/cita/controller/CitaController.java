package com.example.cita.controller;

import com.example.cita.model.Cita;
import com.example.cita.repository.CitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class CitaController {

    @Autowired
    CitaRepository citaRepository;

    //obtener

    @GetMapping(value ="/listCitas")
    public List<Cita> getListUsuario(){
        return citaRepository.findAll();
    }

    //Agregar

    @PostMapping(value = "/cita/add")
    public Cita addTipo(@RequestBody Cita cita) {
        return citaRepository.save(cita);
    }

    //Actualizar
    @PutMapping(path = "/cita/update/{idCita}", consumes = {
            MediaType.APPLICATION_XML_VALUE,
            MediaType.APPLICATION_JSON_VALUE
    },
            produces = {
                    MediaType.APPLICATION_XML_VALUE,
                    MediaType.APPLICATION_JSON_VALUE
            })
    public boolean updateCita(@PathVariable int idCita, @RequestBody Cita cita){
        Cita c = citaRepository.findByIdCita(idCita);
        if(c != null){

            c.setFecha(cita.getFecha());
            c.setHora(cita.getHora());
            c.setIdMascota(cita.getIdMascota());

            citaRepository.save(c);
            return true;
        }else{
            return false;
        }
    }

    //Eliminar
    @PostMapping(value = "/cita/delete/{citaId}")
    public boolean deleteProducto(@PathVariable int citaId) {
        Cita c = citaRepository.findByIdCita(citaId);
        if (c != null) {
            citaRepository.delete(c);
            return true;
        } else {
            return false;
        }
    }



}
