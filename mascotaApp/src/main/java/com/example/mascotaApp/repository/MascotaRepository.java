package com.example.mascotaApp.repository;

import com.example.mascotaApp.model.Mascota;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MascotaRepository extends CrudRepository<Mascota,String> {




    public List<Mascota> findAll();

    public Mascota findByMascotaId(int mascotaId);

    List <Mascota> findAllByTipoId(int tipoId);

    List <Mascota> findAllByDuenioId(int duenioId);



    Mascota save(Mascota mascota);

    void delete(Mascota mascota);
}
