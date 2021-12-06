package com.example.cita.repository;


import com.example.cita.model.Cita;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CitaRepository extends
        CrudRepository<Cita, Integer> {

    List<Cita> findAll();
    Cita save(Cita usuario);

    Cita findByIdCita(int idCita);

    void delete(Cita cita);


}
