package com.example.tipoMascotaApp.repository;

import com.example.tipoMascotaApp.model.TipoMascota;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TipoMascotaRepository extends CrudRepository<TipoMascota,String> {


    public List<TipoMascota> findAll();

    public TipoMascota findByTipoId(int tipoId);


    TipoMascota save(TipoMascota tipoMascota);

    void delete(TipoMascota tipoMascota);

}
