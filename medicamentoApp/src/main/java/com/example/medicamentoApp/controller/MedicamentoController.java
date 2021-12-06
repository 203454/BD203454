package com.example.medicamentoApp.controller;

import com.example.medicamentoApp.model.Medicamento;
import com.example.medicamentoApp.repository.MedicamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MedicamentoController {


    @Autowired
    MedicamentoRepository medicamentoRepository;


    @GetMapping(value = "/listMedicamentos")
    public List<Medicamento> getListMedicamento(){
        return medicamentoRepository.findAll();
    }

    @GetMapping(value = "/FindMedicamentoByTipoId/{tipoMedicamentoId}")
    public List<Medicamento> getMascotas(@PathVariable("tipoMedicamentoId") int tipoMedicamentoId){
        return medicamentoRepository.findAllByTipoMedicamentoId(tipoMedicamentoId);
    }

    @GetMapping(value = "/FindMedicamentoById/{medicamentoId}")
    public Medicamento getMedicamento(@PathVariable("medicamentoId") int medicamentoId){
        return medicamentoRepository.findByMedicamentoId(medicamentoId);
    }



    //eliminar
    @PostMapping(value = "/Medicamento/delete/{medicamentoId}")
    public boolean deleteMedicamento (@PathVariable int medicamentoId){
        Medicamento m = medicamentoRepository.findByMedicamentoId(medicamentoId);

        if(m != null){
            medicamentoRepository.delete(m);
            return true;
        }else{
            return false;
        }
    }

    //Agregar
    @PostMapping(value = "/Mascota/add")
    public Medicamento addMascota(@RequestBody Medicamento medicamento){
        return medicamentoRepository.save(medicamento);
    }

    //Actualizar
    @PutMapping(path = "/Medicamento/update/{medicamentoId}", consumes = {
            MediaType.APPLICATION_XML_VALUE,
            MediaType.APPLICATION_JSON_VALUE
    },
            produces = {
                    MediaType.APPLICATION_XML_VALUE,
                    MediaType.APPLICATION_JSON_VALUE
            })
    public boolean updateDuenio(@PathVariable int medicamentoId, @RequestBody Medicamento medicamento){
        Medicamento m = medicamentoRepository.findByMedicamentoId(medicamentoId);
        if(m != null){

            m.setNombre(medicamento.getNombre());
            m.setFechaCaducidad(medicamento.getFechaCaducidad());
            m.setSustanciaActiva(medicamento.getSustanciaActiva());
            m.setTipoMedicamentoId(medicamento.getTipoMedicamentoId());
            medicamentoRepository.save(m);
            return true;
        }else{
            return false;
        }
    }

}
