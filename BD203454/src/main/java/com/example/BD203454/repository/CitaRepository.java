package com.example.BD203454.repository;

import com.example.BD203454.model.Cita;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CitaRepository
        extends CrudRepository<Cita, String> {

        List<Cita> findAll();
        Cita save(Cita customer);
}
