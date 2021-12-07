package com.example.tipoMedicamentoApp.controller;

import com.example.tipoMedicamentoApp.model.Medicamento;
import com.example.tipoMedicamentoApp.model.TipoMedicamento;
import com.example.tipoMedicamentoApp.model.TipoMedicamentoMedicamento;
import com.example.tipoMedicamentoApp.repository.TipoMedicamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class TipoMedicamentoController {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    TipoMedicamentoRepository tipoMedicamentoRepository;

    @GetMapping(value = "/listTiposMedicamentos")
    public List<TipoMedicamento> getListTipoMedicamento(){
        return tipoMedicamentoRepository.findAll();
    }

    @GetMapping(value = "/TipoMedicamento/{tipoMedicamentoId}")
    public TipoMedicamento getTipoMedicamento(@PathVariable("tipoMedicamentoId") int tipoMedicantoId){
        TipoMedicamento tipoMedicamento = tipoMedicamentoRepository.findByTipoMedicamentoId(tipoMedicantoId);
        return tipoMedicamento;
    }

    @GetMapping(value = "/{tipoMedicamentoId}/medicamentos")
    public TipoMedicamento getTipoMedicamentoMedicamento(@PathVariable("tipoMedicamentoId") int tipoMedicamentoId){
        TipoMedicamentoMedicamento tipoMedicamentoMedicamento = restTemplate.getForObject(
                "http://localhost:18084/TipoMedicamento/"+tipoMedicamentoId,
                TipoMedicamentoMedicamento.class
        );
        Medicamento[] medicamentos = restTemplate.getForObject(
                "http://localhost:18083//FindMedicamentoByTipoId/"+tipoMedicamentoId,
                Medicamento[].class
        );
        tipoMedicamentoMedicamento.setMedicamentos(Arrays.asList(medicamentos));
        return tipoMedicamentoMedicamento;
    }

    //eliminar
    @PostMapping(value = "/TipoMedicamento/delete/{tipoMedicamentoId}")
    public boolean deleteTipoMedicamento(@PathVariable int tipoMedicamentoId){
        TipoMedicamento t = tipoMedicamentoRepository.findByTipoMedicamentoId(tipoMedicamentoId);

        if(t != null){
            tipoMedicamentoRepository.delete(t);
            return true;
        }else{
            return false;
        }
    }

    //Agregar
    @PostMapping(value = "/TipoMedicamento/add")
    public TipoMedicamento addTipoMedicamento(@RequestBody TipoMedicamento tipoMedicamento){
        return tipoMedicamentoRepository.save(tipoMedicamento);
    }

    //Actualizar
    @PutMapping(path = "/TipoMedicamento/update/{tipoMedicamentoId}", consumes = {
            MediaType.APPLICATION_XML_VALUE,
            MediaType.APPLICATION_JSON_VALUE
    },
            produces = {
                    MediaType.APPLICATION_XML_VALUE,
                    MediaType.APPLICATION_JSON_VALUE
            })
    public boolean updateTipoMedicamento(@PathVariable int tipoMedicamentoId, @RequestBody TipoMedicamento tipoMedicamento){
        TipoMedicamento t = tipoMedicamentoRepository.findByTipoMedicamentoId(tipoMedicamentoId);
        if(t != null){
            t.setNombre(tipoMedicamento.getNombre());
            t.setDescripcion(tipoMedicamento.getDescripcion());
            tipoMedicamentoRepository.save(t);
            return true;
        }else{
            return false;
        }
    }


}
